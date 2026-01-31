#!/usr/bin/env node
// Minimal ingestion example: parse Markdown files, chunk by paragraph, mock embeddings, and output JSON

const fs = require('fs');
const path = require('path');

function readMarkdownFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...readMarkdownFiles(p));
    else if (e.isFile() && p.endsWith('.md')) files.push(p);
  }
  return files;
}

function chunkText(text, maxChars = 2000) {
  const paragraphs = text.split(/\n\n+/).map(p=>p.trim()).filter(Boolean);
  const chunks = [];
  let cur = '';
  for (const p of paragraphs) {
    if ((cur + '\n\n' + p).length > maxChars) {
      if (cur) chunks.push(cur);
      cur = p;
    } else {
      cur = cur ? cur + '\n\n' + p : p;
    }
  }
  if (cur) chunks.push(cur);
  return chunks;
}

function mockEmbed(text) {
  // deterministic mock: length + hash
  const len = text.length;
  const sum = text.split('').reduce((s,c)=>s + c.charCodeAt(0), 0);
  // produce small vector
  const vec = [];
  for (let i=0;i<8;i++) vec.push(((sum + i*len) % 1000)/1000);
  return vec;
}

async function main() {
  const target = process.argv[2] || './samples/sample-repo';
  const mdFiles = readMarkdownFiles(target);
  const output = { files: mdFiles.length, chunks: 0, items: [] };
  for (const f of mdFiles) {
    const text = fs.readFileSync(f,'utf8');
    const chunks = chunkText(text, 2000);
    for (const c of chunks) {
      const emb = mockEmbed(c);
      output.items.push({ file: path.relative(target, f), text: c.slice(0,500), embedding: emb });
    }
    output.chunks += chunks.length;
  }
  const outPath = path.join(process.cwd(),'./tmp/ingest_output.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log('Ingest complete:', outPath);
}

main().catch(e=>{ console.error(e); process.exit(1); });
