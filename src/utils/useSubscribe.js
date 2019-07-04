import { useState, useEffect, useRef } from "react"
import { useRealTime } from "../utils/kuzzleContext"

function useSubscribe(provider, path, id) {
  const [response, setResponse] = useState({ data: null, loading: true, error: undefined });
  const rtp = useRealTime()
  const roomId = useRef(null);
  useEffect( () => {
    // subscribe only if we have a client
    if (rtp.connected) {    
      const subscribe = async () => {      
        console.log("subscribe");
        try {
          const filter = { equal: {_id : id } };
          roomId.current = await rtp.client.realtime.subscribe(provider, path, filter, (n) => {
            setResponse({
              data: n.result._source,
              loading: false,
              error: undefined
            });
          })
          
        } catch (e) {
          console.log(e);
          setResponse({
            data: null, 
            loading: false, 
            error: e
          });
        }
      }
      subscribe();
      return () => {
        console.log(roomId);
        rtp.client.realtime.unsubscribe(roomId.current)
      }
    }
  }, [rtp])
  return response;
}

export { useSubscribe }