import {Observable} from 'rx';

function cycleConnectionDriver() {
  // Map our online events to the string "online"
  const online$ = Observable.fromEvent(window, 'online').map(() => 'online');
  // Map our offline events to the string "offline"
  const offline$ = Observable.fromEvent(window, 'offline').map(() => 'offline');

  const currentStatus = window.navigator.onLine ? 'online' : 'offline';

  // Merge the two streams, and start with the current connection status
  const connectionStatus$ = Observable
    .merge(online$, offline$)
    .startWith(currentStatus);

  return connectionStatus$;
}

export default cycleConnectionDriver;
