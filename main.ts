// Vending-machine pickup line, written for the make.fun bounty
// u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.
// The program writes exactly one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line: the machine speaks in the first person, in its own world
// (shaking, buttons, coils, snacks), with the punch landing on the
// last words. Kept short and speakable: one breath, no filler.
const line =
  "Don't shake me — press D3 and my coil will drop the last Snickers for the human it's been stuck on all day.";

// Mirror the bounty gate: 1-200 characters, exactly one line, not blank.
// Fail loudly instead of handing the judge an invalid entry.
const chars = [...line].length;
if (chars < 1 || chars > 200 || line.includes("\n") || line.trim().length === 0) {
  throw new Error(`Invalid pickup line: ${chars} characters`);
}

const outPath = "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line + "\n", "utf8");

console.log(`Wrote ${line.length} characters to ${outPath}`);
console.log(line);
