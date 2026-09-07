import test from 'node:test';
import assert from 'node:assert/strict';
import { U1MoonrakerClient } from '../src/u1-moonraker.js';

test('U1 Moonraker client uses the documented local default', () => {
  const client = new U1MoonrakerClient();
  assert.equal(client.normalizeHost(''), 'http://U1.local:7125');
  assert.equal(client.normalizeHost('U1.local'), 'http://U1.local:7125');
  assert.equal(client.normalizeHost('http://192.168.1.9:7125/'), 'http://192.168.1.9:7125');
});

test('U1 Moonraker inspection is limited to GET status endpoints', async () => {
  const calls = [];
  const client = new U1MoonrakerClient(async (url, init) => {
    calls.push({ url, method: init.method });
    return { ok: true, json: async () => ({ result: { status: {} } }) };
  });
  await client.inspect('U1.local');
  assert.equal(calls.length, 3);
  assert.ok(calls.every(call => call.method === 'GET'));
  assert.ok(calls.some(call => call.url.endsWith('/server/info')));
  assert.ok(calls.some(call => call.url.endsWith('/printer/info')));
});
