# ProofPrint U1

## Print with evidence, not guesswork

ProofPrint U1 is a local, explainable G-code readiness workbench for the Snapmaker U1. It turns the sliced file—the instructions that will actually drive the machine—into a visual preflight experience that helps makers identify risk before committing hours of machine time and valuable material.

The U1 makes ambitious, multi-material work approachable. That same capability raises the cost of an unnoticed issue: a thermal hotspot, an aggressive flow segment, fragile geometry, repeated retraction, insufficient cooling time, or a manual intervention placed at the wrong moment. Existing slicer previews show a path; ProofPrint U1 helps a maker reason about whether that path is ready to print.

## A preflight layer for real G-code

ProofPrint U1 builds on the original G-Code Modifier rather than replacing the existing maker workflow. A file is loaded and processed locally in the browser. The application visualizes the 3D toolpath, provides per-layer playback, cross-sections, measurements, comparison tools, and heatmaps, then analyzes the actual commands for motion, structural, thermal, retraction, cooling, and volumetric-flow risks.

The central outcome is the **U1 Print Passport**: an advisory readiness score accompanied by explicit critical, warning, and informational findings. The Passport is intentionally explainable. It is not a black-box promise that a print will succeed; it gives the maker a focused starting point for checking settings, material, orientation, and the relevant layer before printing.

## Designed around a safe U1 workflow

ProofPrint U1 defaults to a Snapmaker U1 profile designed for the U1’s Klipper-based environment. Its intervention workflow is conservative by design. When a human action needs to be inserted, it emits a standard, visible `PAUSE` command for the operator to review, rather than guessing proprietary tool-change, camera, motion, or material-handling commands. The G-code remains visible before export so the maker retains control over every change.

The pressure-advance tools use Klipper syntax, while all machine-specific recommendations remain advisory. This approach makes the project useful immediately without pretending to know a particular printer’s active firmware configuration, material, nozzle, or slicer profile.

## Local printer awareness without printer control

ProofPrint U1 also includes **U1 Link**, an optional local-network status view based on the U1’s Moonraker-compatible service. U1 Link reads only server information, printer state, and available extruder objects. It does not upload files, execute G-code, start or stop prints, move axes, change temperatures, or modify configuration.

This boundary is a feature, not a limitation. It gives a maker practical confirmation that the intended U1 is reachable and exposes its current state, while preserving the printer’s safety controls and the maker’s final decision over every print.

## Why it matters

ProofPrint U1 addresses a gap between slicing and fabrication: the moment when makers need confidence, context, and accountability—not another opaque automation layer. By making G-code risks visible, keeping files local, and treating machine commands as reviewable decisions, it helps U1 owners spend less time discovering avoidable problems after a print has begun.

The project is built to be extended by the community. Its source structure separates the parser, visualisation, analyzers, firmware profiles, user interface, and local U1 integration. New risk models, material knowledge, printer profiles, and evidence from real prints can therefore improve the workbench without sacrificing the conservative safety boundary that defines it.

## Project highlights

- Local browser-based G-code and BGCode analysis; loaded files are not uploaded by the application.
- 3D toolpath inspection, layer playback, cross-sections, measurements, comparisons, and visual heatmaps.
- Explainable analysis for motion, structural, thermal, retraction, cooling, and volumetric-flow risks.
- U1 Print Passport with an advisory score and visible severity counts.
- Klipper-safe pause insertion and pressure-advance support with reviewable output.
- Optional read-only U1 Link for local status and detected toolhead visibility.
- A portable single-file build and automated tests covering parser, modification, visualisation, and analysis behavior.

## Responsible use

ProofPrint U1 is a planning and review tool, not printer firmware or an autonomous print controller. Findings are heuristic and generated G-code must be reviewed against the active U1 firmware, machine configuration, material, nozzle, and slicer profile. The project does not bypass safety interlocks and does not claim a guaranteed print outcome.

---

**Project:** ProofPrint U1

**Category:** Snapmaker U1 Innovation Fund

**Repository build:** `gcode-modifier.html`

**Status:** Submission copy prepared; held for final hardware validation and team approval.
