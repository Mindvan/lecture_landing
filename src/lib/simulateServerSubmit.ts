/** Доля «неуспешных» ответов сервера при имитации (0…1). */
export const SIMULATED_SERVER_FAIL_CHANCE = 0.35

export function rollSimulatedServerFailure(): boolean {
  return Math.random() < SIMULATED_SERVER_FAIL_CHANCE
}
