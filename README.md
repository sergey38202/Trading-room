### 1. Project Overview

Real-Time Trading Room

A real-time trading platform built with React, TypeScript, and Redux Toolkit. Designed for live bidding environments, it enables participants to engage in competitive trading sessions with features like session timers, turn-based control, and real-time updates via WebSockets.

### 2. Table of Contents

- [Project Overview](#1-project-overview)
- [Features](#3-features)
- [Technologies Used](#4-technologies-used)
- [Project Structure](#5-project-structure)
- [Installation](#6-installation)
- [Usage](#7-usage)
- [Components](#8-components)
  - [TradingRoom](#tradingroom)
  - [Table](#table)
  - [Button](#button)
  - [Loader](#loader)
- [State Management](#9-state-management)
- [WebSocket Integration](#10-websocket-integration)

### 3. Features

- Real-Time Bidding: Participants can place bids in a live, dynamic environment with real-time updates.
- Session and Turn Timers: Timed sessions with automated control transitions between participants.
- Modular Components: Reusable components for tables, buttons, and loaders to maintain consistency.
- WebSocket Integration: Real-time data updates powered by WebSocket.

### 4. Technologies Used

- React and TypeScript: For building scalable, type-safe front-end components.
- Redux Toolkit: For managing application state, with slices for participants and session timers.
- WebSocket: For real-time data transmission between participants and the server.
- SCSS: For modular and reusable styling across components.

### 5. Project Structure

src
  - app/
    - store.ts
  - components/
    - Table/
    - index.ts
  - constants/  
    - time.ts
  - features/
    - participants/
    - tradingSession/
  - pages/  
    - Home/
    - TradingRoom/
  - services/  
    - websocketService.ts
  - styles/
    - _variables.scss  
  - ui/
    - Button/
    - Loader/  
  - utils/
    - timerUtils.ts  

### 6. Installation

1. Clone the repository:

git clone https://github.com/sergey38202/Trading-room.git
cd real-time-trading-room

2. Install dependencies:

npm install

3. Start the development server:

npm start

### 7. Usage

After starting the server, open http://localhost:3000 in your browser to access the trading room. The app supports real-time bidding sessions, where participants can place bids, and timers control the flow.

### 8. Components

TradingRoom
The main component displaying the trading room interface. It includes:

- Header with an icon and title.
- Session and Turn Timers for session management.
- Table to display participants, their bids, and their current statuses.
- Button for navigation.

Table:
A reusable table component that displays participant data, configured with customizable headers and cell rendering functions.

Button:
A reusable button component with support for navigation (to prop), variant styles, and custom class names.

Loader:
A reusable loading spinner with options for custom messages, sizes, and inline or centered display.

### 9. State Management:

The project uses Redux Toolkit to manage the application state, organized in the following slices:

Participants Slice (participants.ts):
- Manages the list of participants and their bids
- Actions: updateBid, toggleActiveStatus.

Trading Session Slice (tradingSession.ts):
- Manages session and turn timers, and active session status.
- Actions: startSession, endSession, decrementSessionTimer, decrementTurnTimer.

### 10. WebSocket Integration

The app uses a mock WebSocket service to simulate real-time updates. The service can be extended to connect to an actual WebSocket server.

- File: websocketService.ts
- Usage: Handles starting and stopping WebSocket connections, dispatching updates to the Redux store.

### 11. Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch with your feature or bug fix:
git checkout -b feature-name
3. Commit your changes:
git commit -m "Description of changes"
4. Push to your branch:
git push origin feature-name
5. Open a pull request.