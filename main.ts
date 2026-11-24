import * as fs from "node:fs";

// Fake meeting status, real consequences: lunch break becomes homework.
const SETUP = "I set my Slack status to 'in a meeting' so I could eat lunch, ";
const PUNCH = "and now HR wants me to present my meeting notes.";
const entry = (SETUP + PUNCH).trim();

if (entry.length < 1 || entry.length > 200) {
  throw new Error("entry must be 1-200 characters, got " + entry.length);
}
if (entry.split("\n").length !== 1) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
