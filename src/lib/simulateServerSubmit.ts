export const SIMULATED_SERVER_FAIL_CHANCE = 0.35

export function rollSimulatedServerFailure(): boolean {
  return Math.random() < SIMULATED_SERVER_FAIL_CHANCE
}
