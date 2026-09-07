import test from 'node:test';
import assert from 'node:assert/strict';
import { FIRMWARE } from '../src/firmware.js';
import { PaTuner } from '../src/pa-tuner.js';

test('U1 profile uses an explicit Klipper-safe pause boundary', () => {
  const u1 = FIRMWARE.u1;
  assert.equal(u1.name, 'Snapmaker U1 (Klipper-safe)');
  assert.equal(u1.pause[0].value, 'PAUSE');
  assert.equal(u1.pauseGcode.PAUSE, 'PAUSE ; U1 user-confirmed pause');
  assert.equal(u1.hasAMS, false);
});

test('U1 pressure advance output uses Klipper syntax', () => {
  const tuner = new PaTuner();
  tuner.setBaseK(0.025);
  const result = tuner.compile({ 0: [{ extrude: true, type: 'WALL-OUTER' }] }, 'u1');
  assert.match(result[0].gcode, /SET_PRESSURE_ADVANCE ADVANCE=0.025/);
});
