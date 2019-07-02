import React from 'react';
import { useSubscribe } from '../utils/useSubscribe'

const docId = "testdoc";
function Counter() {
  const data = useSubscribe("gcs", "games", docId)
  console.log(data);
  if (data.loading) {    
    return <div>Loading ...</div>
  }
  return <div>Loaded</div>
}

export { Counter }