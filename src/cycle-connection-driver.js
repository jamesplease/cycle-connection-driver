import {Observable} from 'rx';

function cycleConnectionDriver() {
  const online$ = Observable.fromEvent(window, 'online').map(() => 'online');
  const offline$ = Observable.fromEvent(window, 'offline').map(() => 'offline');

  const currentStatus = window.navigator.onLine ? 'online' : 'offline';

  const connectionStatus$ = Observable
    .merge(online$, offline$)
    .startWith(currentStatus);

  return connectionStatus$;
}

export default cycleConnectionDriver;
