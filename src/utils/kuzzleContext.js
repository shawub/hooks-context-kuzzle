
import React, { useState, useEffect } from "react"


const RealTimeContext = React.createContext()

function useRealTime() {
  const rt = React.useContext(RealTimeContext)
  return rt;
}

const RealTimeProvider = ( {client, children} ) => {
  const [rtp, setRtp] = useState({client:client, connected:false})
  useEffect( () => {
    let connect = async () => {
      await client.connect()      
      setRtp({client:client, connected:true});
    };
    connect();
    return () => {
      setRtp({client:client, connected:false});
      client.disconnect();
    }
  }, [])
  return ( 
    <RealTimeContext.Provider value={rtp}>
      {children}
    </RealTimeContext.Provider>
  )
}

export {RealTimeProvider, useRealTime}