# ProofPrint U1 architecture

## Principles

1. **Local first:** parsing, analysis, visualisation, and modification occur in the browser.
2. **Explain before modifying:** findings expose context before a maker makes a change.
3. **Human-in-the-loop:** output is reviewable G-code, never printer control.
4. **Narrow integration:** U1 Link exposes status only through read-only Moonraker calls.
5. **Portable delivery:** independently testable source modules are bundled into one HTML release.

## Components

| Area | Modules | Responsibility |
| --- | --- | --- |
| Application | `src/index.html`, `src/app.js`, `src/ui.js` | State, user interaction, import/export, and presentation. |
| Parsing | `parser.js`, `bgcode.js`, `gcode-dictionary.js` | Decode G-code/BGCode into command, move, layer, and metadata data. |
| Visualisation | `viewer3d.js`, `measure.js`, `comparison.js`, `stats-overlay.js` | Toolpath rendering and inspection. |
| Analysis | `analysis-manager.js` plus motion, structural, thermal, retraction, and flow analyzers | Create risk findings and visual overlays. |
| Modification | `modifier.js`, `insert-manager.js`, `e-repair.js`, `fan-profile.js`, `pa-tuner.js` | Create reviewable edits and preserve extrusion integrity where applicable. |
| U1 profile | `firmware.js` | Conservative Klipper-safe command behavior. |
| U1 Link | `u1-moonraker.js` | Normalize host and perform only GET status requests. |
| Delivery | `build.js`, `serve.mjs` | Produce `gcode-modifier.html` and serve it locally. |

## Data flow

1. A maker imports G-code or BGCode.
2. The parser creates line, move, layer, command, and metadata structures.
3. Viewer and analyzers consume parsed data independently.
4. The UI presents findings and computes the advisory U1 Print Passport.
5. If the maker chooses a change, modification modules produce an inspectable output file.
6. The maker reviews and exports the result using their normal printer workflow.

U1 Link is an information side-channel: it can enrich review with local printer state but never enters a command path.

## Safety boundary

The U1 profile inserts a visible standard `PAUSE` rather than assuming a universal material-change, motion, or camera command. U1 Link calls only `GET /server/info`, `GET /printer/info`, and `GET /printer/objects/query`. It cannot upload, heat, move, configure, or command the printer.

## Verification

Tests in `test/` exercise module behavior directly. U1-specific tests assert Klipper-safe pause and pressure-advance syntax, default local address handling, and GET-only inspection requests. Hardware validation remains a separate live test with a real U1 and a representative sliced file.
