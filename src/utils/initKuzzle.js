
import { Kuzzle, WebSocket } from "kuzzle-sdk"

const config = {
  rtddp: "localhost",
  index: "test"
}

const koptions = {
  sslConnection: false //true
}

const initKuzzle = () => {
  const websocketProtocol = new WebSocket(config.rtddp, koptions);
  let kuzzle = new Kuzzle(websocketProtocol);
  kuzzle.on('networkError', error => {
    console.error('Network Error: ', error);
  });
  kuzzle.addListener('connected', () => {
    console.log('Successfully connected to Kuzzle');
  });
  kuzzle.addListener('disconnected', () => {
    console.log('Disconnected from Kuzzle');
  });
  kuzzle.addListener('reconnected', () => {
    console.log('Reconnected to Kuzzle');
  });
  return kuzzle;
}

export {initKuzzle}


