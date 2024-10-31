import { createSlice } from '@reduxjs/toolkit';

import { SLICE_NAME } from './constants';
import { ITradingSessionState } from './types';
import { INITIAL_TURN, SESSION_TIMER, TURN_TIMER } from '@/constants/time';

const initialState: ITradingSessionState = {
  isActive: false,
  sessionTimer: SESSION_TIMER, // 15 minutes in seconds
  turnTimer: TURN_TIMER, // 30 seconds per turn
  currentTurn: INITIAL_TURN,
};

const tradingSessionSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    startSession(state) {
      state.isActive = true;
    },
    endSession(state) {
      state.isActive = false;
      state.sessionTimer = SESSION_TIMER;
      state.turnTimer = TURN_TIMER;
    },
    decrementSessionTimer(state) {
      if (state.sessionTimer > INITIAL_TURN) state.sessionTimer -= 1;
      else state.isActive = false;
    },
    decrementTurnTimer(state) {
      if (state.turnTimer > INITIAL_TURN) state.turnTimer -= 1;
      else state.turnTimer = TURN_TIMER;
    },
    nextTurn(state) {
      state.currentTurn = (state.currentTurn + 1) % 4; // Cycle to the next participant
      state.turnTimer = TURN_TIMER; // Reset turn timer
    },
  },
});

export const {
  startSession,
  endSession,
  decrementSessionTimer,
  decrementTurnTimer,
  nextTurn,
} = tradingSessionSlice.actions;
export const tradingSession = tradingSessionSlice.reducer;
