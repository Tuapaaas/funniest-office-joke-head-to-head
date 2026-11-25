// The Funniest Office Joke, Judged Head to Head
// One line about office life: a real joke with a setup and a turn.
// The setup is the most passive-aggressive sentence in office English;
// the turn is HR reading it the way it actually sounds.

const LINE =
  "I wrote 'per my last email' so often HR asked if I was threatening someone.";

function main(): void {
  // Gate: UTF-8 text, 1 to 200 characters, a single line, not only whitespace.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, gate needs 1-200`);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n")) {
    throw new Error("entry must be one non-blank line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  const fs = require("node:fs");
  const path = require("node:path");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n", "utf8");
  console.log(`wrote entry.txt (${chars} chars): ${LINE}`);
}

main();
