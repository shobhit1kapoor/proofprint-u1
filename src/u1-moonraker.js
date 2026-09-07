// Read-only local Moonraker client for Snapmaker U1.
// It intentionally never uploads, starts, pauses, resumes, or cancels a print.
export class U1MoonrakerClient {
  constructor(fetchImpl = fetch) {
    this.fetchImpl = fetchImpl;
  }

  normalizeHost(host) {
    const value = String(host || '').trim().replace(/\/+$/, '');
    if (!value) return 'http://U1.local:7125';
    if (/^https?:\/\//i.test(value)) return value;
    return `http://${value}${/:[0-9]+$/.test(value) ? '' : ':7125'}`;
  }

  async request(baseUrl, path) {
    const response = await this.fetchImpl(`${baseUrl}${path}`, { method: 'GET' });
    if (!response.ok) throw new Error(`Moonraker returned HTTP ${response.status}`);
    return response.json();
  }

  async inspect(host) {
    const baseUrl = this.normalizeHost(host);
    const [server, printer, objects] = await Promise.all([
      this.request(baseUrl, '/server/info'),
      this.request(baseUrl, '/printer/info'),
      this.request(baseUrl, '/printer/objects/query?print_stats&toolhead&extruder&extruder1&extruder2&extruder3'),
    ]);
    return { baseUrl, server: server.result || server, printer: printer.result || printer, objects: objects.result?.status || objects.status || {} };
  }
}
