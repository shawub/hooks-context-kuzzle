
import React, { useState, useEffect } from "react"


const RealTimeContext = React.createContext()

function useRealTime() {
  const client = React.useContext(RealTimeContext)
  return client;
}

const RealTimeProvider = ( {client, children} ) => {
  const [connected, setConnected] = useState({connected:client.connected})
  useEffect( () => {
    if (!connected) {
      let connect = async () => {
        await client.connect()      
        setConnected(true);
        console.log("---",client);
      };
      connect();
      return () => {
        setConnected(false);
        client.disconnect();
      }
    }
  }, [])
  return ( 
    <RealTimeContext.Provider value={client}>
      {children}
    </RealTimeContext.Provider>
  )
}

export {RealTimeProvider, useRealTime}