import { Dispatch } from '@reduxjs/toolkit';
import { updateBid } from '@/features/participants';
import { nextTurn } from '@/features/tradingSession';

class MockWebSocketService {
  intervalId: NodeJS.Timeout | null = null;

  simulateBidUpdate(dispatch: Dispatch) {
    const participantId = Math.floor(Math.random() * 4) + 1;
    const newBid = Math.floor(Math.random() * 1000000) + 2500000;

    dispatch(updateBid({ id: participantId, newBid }));
  }

  simulateTurnChange(dispatch: Dispatch) {
    dispatch(nextTurn());
  }

  startMocking(dispatch: Dispatch) {
    setInterval(() => this.simulateBidUpdate(dispatch), 5000);

    this.intervalId = setInterval(
      () => this.simulateTurnChange(dispatch),
      30000
    );
  }

  stopMocking() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}

const mockWebSocketService = new MockWebSocketService();

export default mockWebSocketService;
