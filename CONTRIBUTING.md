# Contributing to ProofPrint U1

Contributions that make U1 print preparation safer, clearer, and more evidence-based are welcome.

1. Keep every G-code modification reviewable in the preview.
2. Do not add printer-control behavior to U1 Link. Read-only status fields are welcome; upload, motion, heating, command execution, and print control are out of scope.
3. Add or update tests for parser, analyzer, profile, or modification changes.
4. Run `npm test` and `npm run build` before opening a change.
5. Document risk-model assumptions and distinguish verified observations from hypotheses.

When reporting an issue, include relevant firmware version, slicer, material, nozzle, and a minimal sanitized G-code excerpt. Never share private network details, access tokens, or files you cannot publish.
