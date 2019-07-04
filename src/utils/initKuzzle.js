
import { Kuzzle, WebSocket } from "kuzzle-sdk"
import GSS from "./gssAuthController.js"
import token from '../../gss.json'
const config = {
  rtddp: "localhost",
  index: "test",
  token: token.token
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
  kuzzle.useController(GSS, 'gss');
  kuzzle.addListener('connected', () => {
    // send GSS token
    console.log(config.token);
    kuzzle.gss.login(config.token)
    //{"controller": "jwtauth/customer", "action": "verify", "token": gss.token}
    console.log('Successfully connected to Kuzzle');
  });
  kuzzle.addListener('disconnected', () => {
    console.log('Disconnected from Kuzzle');
  });
  kuzzle.addListener('reconnected', () => {
    console.log('Reconnected to Kuzzle');
  });
  console.log("kuzzle: ", kuzzle);
  return kuzzle;
}

export {initKuzzle}


