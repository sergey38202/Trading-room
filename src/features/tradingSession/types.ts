export interface ITradingSessionState {
  isActive: boolean;
  sessionTimer: number; // Session timer in seconds
  turnTimer: number; // Turn timer in seconds
  currentTurn: number;
}
