# cycle-connection-driver

A Cycle.js driver for connection status

[![Travis build status](http://img.shields.io/travis/jmeas/cycle-connection-driver.svg?style=flat)](https://travis-ci.org/jmeas/cycle-connection-driver)
[![Code Climate](https://codeclimate.com/github/jmeas/cycle-connection-driver/badges/gpa.svg)](https://codeclimate.com/github/jmeas/cycle-connection-driver)
[![Test Coverage](https://codeclimate.com/github/jmeas/cycle-connection-driver/badges/coverage.svg)](https://codeclimate.com/github/jmeas/cycle-connection-driver)
[![Dependency Status](https://david-dm.org/jmeas/cycle-connection-driver.svg)](https://david-dm.org/jmeas/cycle-connection-driver)
[![devDependency Status](https://david-dm.org/jmeas/cycle-connection-driver/dev-status.svg)](https://david-dm.org/jmeas/cycle-connection-driver#info=devDependencies)

### Motivation

Many web apps respond to when a user goes online or offline. For example, Slack
displays a warning message and prevents you from typing a new message when you
go offline.

This driver helps you respond to changes to a user's connection status within Cycle.js.

### Installation

The recommended installation method is through [npm](https://www.npmjs.com/):

```sh
npm install cycle-connection-driver
```

### Getting Started

The output of this driver is a single Observable. This Observable emits one of
two values: `"online"` and `"offline"`, corresponding to whether the user has
become connected or disconnected. The initial value of the stream is the user's
connection status at the time that your app's main function is passed to `run`.

This driver accepts no sinks.

```js
import {run} from '@cycle/core';
import {makeDOMDriver, div} from '@cycle/dom';
import cycleConnectionDriver from 'cycle-connection-driver';

function main({Connection}) {
  return {
    DOM: Connection.map(connectionStatus =>
      div('.connection-status', `Connection - Currently ${connectionStatus}`)
    )
  };
}

run(main, {
  DOM: makeDOMDriver('.app'),
  Connection: cycleConnectionDriver
});
```

### When Not To Use This Library

This is a small module. You're free to download it from npm – it's not going
anywhere – but you could also copy and paste it into your own application.
