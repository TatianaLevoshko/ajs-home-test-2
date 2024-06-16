import checkHealthStatus from '../healthStatus';

test.each([
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 90 }, 'healthy'],
  [{ name: 'лучник', health: 40 }, 'wounded'],
])('check health status for object %s', (name, status) => {
  const result = checkHealthStatus(name);
  expect(status).toBe(result);
});