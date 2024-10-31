import { participants, tradingSession } from '@/features';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tradingSession: tradingSession,
    participants: participants,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
