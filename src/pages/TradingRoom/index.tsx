import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import websocketService from '@/services/websocketService';
import {
  decrementSessionTimer,
  decrementTurnTimer,
  nextTurn,
} from '@/features/tradingSession';
import { startTimer } from '@/utils/timerUtils';
import styles from './styles.module.scss';
import { FaExchangeAlt } from 'react-icons/fa';
import { Button } from '@/ui';
import { Table } from '@/components';

/**
 * TradingRoom component.
 * Displays a live bidding environment with session and turn timers,
 * and a list of participants with their bids and statuses.
 *
 * @component
 * @returns {JSX.Element} The rendered TradingRoom component.
 */

const TradingRoom: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { participants } = useSelector(
    (state: RootState) => state.participants
  );
  const { sessionTimer, turnTimer, currentTurn, isActive } = useSelector(
    (state: RootState) => state.tradingSession
  );

  useEffect(() => {
    if (isActive) {
      websocketService.startMocking(dispatch);
    } else {
      websocketService.stopMocking();
    }
  }, [dispatch, isActive]);

  useEffect(() => {
    if (isActive) {
      const stopSessionTimer = startTimer(
        sessionTimer,
        () => dispatch(decrementSessionTimer()),
        () => dispatch({ type: 'END_SESSION' })
      );
      return stopSessionTimer;
    }
  }, [isActive, dispatch, sessionTimer]);

  useEffect(() => {
    if (isActive) {
      const stopTurnTimer = startTimer(
        turnTimer,
        () => dispatch(decrementTurnTimer()),
        () => dispatch(nextTurn())
      );
      return stopTurnTimer;
    }
  }, [isActive, currentTurn, dispatch, turnTimer]);

  const formattedSessionTimer: string = `${Math.floor(sessionTimer / 60)}:${
    sessionTimer % 60
  }`;

  const headers = ['Participant', 'Bid', 'Status'];
  const rowKey = 'id';
  const renderCell = (
    participant: (typeof participants)[0],
    columnIndex: number
  ) => {
    switch (columnIndex) {
      case 0:
        return participant.name;
      case 1:
        return `${participant.bid.toLocaleString()} руб.`;
      case 2:
        return currentTurn === participant.id ? (
          <span className={styles.active}>Active</span>
        ) : (
          <span className={styles.waiting}>Waiting</span>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <FaExchangeAlt className={styles.icon} />
          Trading Room
          <div className={styles.subtext}>Live bidding and updates</div>
        </div>

        <div className={styles.tableTimer}>
          <div
            className={`${styles.timerCard} ${
              isActive ? styles.active : styles.inactive
            }`}
          >
            <div className={styles.label}>Session Timer</div>
            <div className={styles.value}>{formattedSessionTimer}</div>
          </div>
          <div
            className={`${styles.timerCard} ${
              turnTimer > 0 ? styles.active : styles.inactive
            }`}
          >
            <div className={styles.label}>Turn Timer</div>
            <div className={styles.value}>{turnTimer}</div>
          </div>
        </div>
        <Table
          headers={headers}
          data={participants}
          rowKey={rowKey}
          renderCell={renderCell}
        />
        <div className={styles.btnWrapper}>
          <Button to="/" variant="primary" className={styles.backLink}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradingRoom;
