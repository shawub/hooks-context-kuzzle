import React from "react"
import {Counter} from "../components/counter"
import {initKuzzle} from "../utils/initKuzzle"
import {RealTimeProvider} from "../utils/kuzzleContext"
export default () => {
  return (
    <RealTimeProvider client={initKuzzle()}>
      <div>Hello world!</div>
      <Counter/>      
    </RealTimeProvider>
  )
}
