# U1 local integration notes

ProofPrint U1 uses the U1's Moonraker-compatible local API only for inspection. It does not attempt to use undocumented cloud APIs or vendor-specific motion commands.

## Connection contract

- Default address: `http://U1.local:7125`
- Input can also be a LAN hostname or IP address; the UI adds `http://` and port `7125` when omitted.
- Browser and printer must be on the same LAN.
- Serve the app from `http://localhost` with `npm start` rather than opening the HTML directly when using U1 Link.

## Read-only requests

| Request | Purpose |
| --- | --- |
| `GET /server/info` | Identify the available Moonraker server/version. |
| `GET /printer/info` | Read the printer state. |
| `GET /printer/objects/query?print_stats&toolhead&extruder&extruder1&extruder2&extruder3` | Read print, homing, and available extruder-object state. |

There are intentionally no endpoints for uploads, g-code execution, heating, tool changes, homing, movement, configuration, or print start/stop.

## Public basis

Snapmaker publishes U1-specific Moonraker source and identifies the U1 firmware stack as forks of Klipper, Moonraker, and Fluidd. The public U1 Moonraker configuration sets port 7125 and mDNS name `U1`, which informs the default address above. These sources establish API compatibility, not a guarantee that every firmware revision exposes the same objects; the UI therefore tolerates missing toolheads and reports an inspection failure instead of issuing a fallback command.

## Acceptance test on a real U1

1. Update the U1 to the intended firmware version and connect the computer to the same LAN.
2. Run `npm start` in this project directory.
3. Load `http://localhost:4173/gcode-modifier.html`, select **U1 Link**, and choose **Inspect U1**.
4. Capture the status output alongside the printer's visible idle/printing state.
5. Repeat while printing a representative file. Confirm that the status changes correctly and that no machine state changes were caused by the inspection.
6. Archive the screenshots and firmware version with the competition demo evidence.
