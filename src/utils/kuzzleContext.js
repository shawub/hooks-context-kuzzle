
import React, { useState, useEffect } from "react"


const RealTimeContext = React.createContext()

function useRealTime() {
  const client = React.useContext(RealTimeContext)
  return client;
}

const RealTimeProvider = ( {client, children} ) => {
  //const [connected, setConnected] = useState(false)
  useEffect( () => {
    let connect = async () => {
      await client.connect()
      //setConnected(true);
    };
    connect();

    return () => {
      //setConnected(false);
      client.disconnect();
    }
  })
  return ( 
    <RealTimeContext.Provider value={client}>
      {children}
    </RealTimeContext.Provider>
  )
}

export {RealTimeProvider, useRealTime}