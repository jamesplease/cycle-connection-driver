import {Observable} from 'rx';
import cycleConnectionDriver from '../../src/cycle-connection-driver';

describe('cycleConnectionDriver', () => {
  beforeEach(() => {
    // Reset the value of `onLine`
    window.navigator.onLine = undefined;
  });

  it('should be a function', () => {
    expect(cycleConnectionDriver).to.be.a('function');
  });

  it('should return an Observable', () => {
    const connectionStatus$ = cycleConnectionDriver();
    expect(connectionStatus$).to.be.an.instanceof(Observable);
  });

  describe('when the user starts out as online', () => {
    it('should emit an initial value of `online`', done => {
      window.navigator.onLine = true;
      const connectionStatus$ = cycleConnectionDriver();

      connectionStatus$
        .take(1)
        .toArray()
        .subscribe(
            statuses => {
              expect(statuses).to.have.length(1);
              expect(statuses[0]).to.equal('online');
            }, null, () => {
              done();
            });
    });
  });

  describe('when the user starts out as offline', () => {
    it('should emit an initial value of `offline`', done => {
      window.navigator.onLine = false;
      const connectionStatus$ = cycleConnectionDriver();

      connectionStatus$
        .take(1)
        .toArray()
        .subscribe(
            statuses => {
              expect(statuses).to.have.length(1);
              expect(statuses[0]).to.equal('offline');
            }, null, () => {
              done();
            });
    });
  });

  describe('when the user goes online and offline', () => {
    it('should emit an initial value of `offline`', done => {
      window.navigator.onLine = false;
      const connectionStatus$ = cycleConnectionDriver();

      connectionStatus$
        .take(4)
        .toArray()
        .subscribe(statuses => {
          expect(statuses).to.have.length(4);
          expect(statuses[0]).to.equal('offline');
          expect(statuses[1]).to.equal('online');
          expect(statuses[2]).to.equal('offline');
          expect(statuses[3]).to.equal('online');
        }, null, () => {
          done();
        });

      window.dispatchEvent(new window.Event('online'));
      window.dispatchEvent(new window.Event('offline'));
      window.dispatchEvent(new window.Event('online'));
    });
  });
});
