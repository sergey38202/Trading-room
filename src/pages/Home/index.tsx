import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { endSession, startSession } from '@/features/tradingSession';

import { Button } from '@/ui';

import styles from './styles.module.scss';

const Home: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isActive = useSelector(
    (state: RootState) => state.tradingSession.isActive
  );

  const handleStart = () => {
    if (!isActive) {
      dispatch(startSession());
    }
  };

  const handleEnd = () => {
    if (isActive) {
      dispatch(endSession());
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Organizer Controls</h2>
        <div className={styles.buttonGroup}>
          <Button
            onClick={handleStart}
            disabled={isActive}
            className={`${styles.button} ${styles.startButton}`}
          >
            Start Trading Session
          </Button>
          <Button
            onClick={handleEnd}
            disabled={!isActive}
            className={`${styles.button} ${styles.endButton}`}
          >
            End Trading Session
          </Button>
        </div>
        <Button to="/participant/567" className={styles.link}>
          Go to the table
        </Button>
      </div>
    </main>
  );
};

export default Home;
