# ProofPrint U1 — competition evidence draft

> **Status: DRAFT — DO NOT SUBMIT.**
>
> This document deliberately contains no claimed U1 hardware outcomes. Complete every bracketed field during the live test, attach the referenced captures, then review it with the team before any submission.

## Project identity

- Project: ProofPrint U1
- Team: [team name]
- Test operator: [name]
- Test date and local time: [date/time]
- U1 serial or non-sensitive identifier: [identifier]
- Firmware version: [version]
- Material / nozzle / slicer profile: [details]

## What ProofPrint U1 does

ProofPrint U1 is a local, browser-based preflight workbench for U1 G-code. It makes the slicer output inspectable before printing by surfacing motion, structural, thermal, retraction, cooling, and volumetric-flow findings. Its U1 Print Passport expresses those findings as an advisory score with visible critical and warning counts.

The optional U1 Link is intentionally read-only: it requests printer information, state, and configured extruder objects through the local Moonraker-compatible service. It never uploads files, starts or stops a print, moves an axis, heats the printer, changes configuration, or executes G-code.

## Live acceptance evidence

| Check | Expected result | Actual result / capture | Pass |
| --- | --- | --- | --- |
| Local connection | U1 Link discovers server information through `U1.local:7125` or approved LAN address | [screenshot/file] | [yes/no] |
| Status accuracy — idle | UI state matches printer’s physical idle state | [screenshot/file] | [yes/no] |
| Toolhead detection | UI lists only toolhead/extruder objects returned by the printer | [screenshot/file] | [yes/no] |
| No-control boundary | Compare printer before/after inspection: no movement, heat change, job change, or upload | [operator observation] | [yes/no] |
| G-code preflight | A representative U1 file loads and produces a Print Passport | [screenshot/file] | [yes/no] |
| Safe pause preview | Added pause appears in exported preview as `PAUSE`; operator reviews it before any print | [screenshot/file] | [yes/no] |
| Print outcome | Printed file outcome, material use, elapsed time, and any intervention recorded | [photo/log] | [yes/no] |

## Print-case records

Create one copy of this section for each representative case. Do not claim a prevented failure unless an appropriate baseline or repeatable comparison exists.

### Case [1]: [thermal / warp risk]

- Input G-code: [file name and checksum]
- Print Passport: [score; critical/warning/info counts]
- Risk finding selected for review: [finding and affected layer]
- Operator decision: [no change / review settings / add safe pause]
- Outcome: [completed / failed / stopped; factual description]
- Time: [estimated and actual]
- Material: [estimated and actual if available]
- Evidence: [before/after images, Passport capture, printed result]

### Case [2]: [flow / pressure-advance risk]

- Input G-code: [file name and checksum]
- Print Passport: [score; critical/warning/info counts]
- Risk finding selected for review: [finding and affected layer]
- Operator decision: [no change / review settings / add safe pause]
- Outcome: [completed / failed / stopped; factual description]
- Time: [estimated and actual]
- Material: [estimated and actual if available]
- Evidence: [before/after images, Passport capture, printed result]

### Case [3]: [manual material intervention]

- Input G-code: [file name and checksum]
- Print Passport: [score; critical/warning/info counts]
- Risk finding selected for review: [finding and affected layer]
- Operator decision: [no change / review settings / add safe pause]
- Outcome: [completed / failed / stopped; factual description]
- Time: [estimated and actual]
- Material: [estimated and actual if available]
- Evidence: [before/after images, Passport capture, printed result]

## Demo narration (60–90 seconds)

1. “Long and multi-material prints fail expensively when G-code risks stay hidden.”
2. “ProofPrint U1 loads the sliced file locally, keeps it on the maker’s computer, and maps risks back to the actual toolpath.”
3. “Here is the U1 Print Passport: an advisory score with transparent critical and warning counts—not an opaque claim that a print is guaranteed.”
4. “At this layer, we inspect a concrete [thermal/flow/retraction] finding and decide what to check before consuming material.”
5. “If a human intervention is appropriate, ProofPrint inserts only a reviewable Klipper `PAUSE`, not an assumed proprietary U1 command.”
6. “U1 Link then shows the printer status and available toolheads over the local network. It is read-only: no movement, upload, or print command is available.”
7. “Our live evidence shows [completed acceptance results].”

## Submission gate

- [ ] All rows in the live acceptance table are complete and supported by captures.
- [ ] Every performance statement is factual, dated, and traceable to an actual test.
- [ ] The README, safety notice, and demo agree about the read-only/no-guarantee boundaries.
- [ ] Team has reviewed the final package.
- [ ] Team has explicitly authorized submission.

**Until every item above is checked, this project must not be submitted.**
