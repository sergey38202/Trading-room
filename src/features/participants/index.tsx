import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PARTICIPANTS_DATA, PARTICIPANTS_NAME } from './constants';
import { IParticipantsState } from './types';

const initialState: IParticipantsState = {
  participants: PARTICIPANTS_DATA,
};

const participantsSlice = createSlice({
  name: PARTICIPANTS_NAME,
  initialState,
  reducers: {
    updateBid(state, action: PayloadAction<{ id: number; newBid: number }>) {
      const participant = state.participants.find(
        p => p.id === action.payload.id
      );
      if (participant) participant.bid = action.payload.newBid;
    },
    toggleActiveStatus(state, action: PayloadAction<number>) {
      state.participants.forEach(p => (p.isActive = p.id === action.payload));
    },
  },
});

export const { updateBid, toggleActiveStatus } = participantsSlice.actions;
export const participants = participantsSlice.reducer;
