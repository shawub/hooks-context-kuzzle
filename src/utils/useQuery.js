import { useState, useEffect, useRef } from "react"
import { useRealTime } from "../utils/kuzzleContext"

function useQuery(provider, path, id) {
  const [response, setResponse] = useState({ data: null, loading: true });
  const client = useRealTime()
  // const roomId = useRef();
  
  useEffect( () => {
    const guery = async () => {      
      try {
        // const filter = { equal: {_id : id } };
        // roomId = await client.realtime.subscribe(provider, path, filter, (n) => {
        //   console.log(n);
        //   setResponse({
        //     data: n.result._source,
        //     error: undefined,
        //     loading: false,
        //   });
        // })
        // console.log(roomId);
      } catch (e) {
        // console.log(e);
      }
    }
    query();
    return () => {
      // console.log(roomId);
      // client.realtime.unsubscribe(roomId.current)
    }
  }, [])
  console.log(">>>", response);
  return response;
}

export { useSubscribe }