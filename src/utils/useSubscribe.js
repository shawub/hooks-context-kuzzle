import { useState, useEffect, useRef } from "react"
import { useRealTime } from "../utils/kuzzleContext"

function useSubscribe(provider, path, id) {
  const client = useRealTime()
  if (client.connected) {
    const [data, setData] = useState({ loading: true });
    let roomId = useRef();
    useEffect( () => {
      const subscribe = async () => {
        const filter = { equal: {_id : id } };

        roomId = await client.realtime.subscribe(provider, path, filter, (n) => {
          console.log(n);
          setData({
            data: n.result._source,
            error: undefined,
            loading: false,
          });

        })
        subscribe();
      }

      return () => {
        client.realtime.unsubscribe(roomId.current)
      }
    })
  }
  return {loading: true};
}

export { useSubscribe }