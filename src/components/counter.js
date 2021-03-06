import React from 'react';
import { useSubscribe } from '../utils/useSubscribe'

const docId = "testdoc";
function Counter() {
  const response = useSubscribe("gcs", "games", docId)
  console.log(response);
  if (response.loading) {    
    return <div>Loading ...</div>
  } else if (response.error) {
    return <div>{response.error.toString()}</div>
  }
  return <div>{response.data}</div>
}

export { Counter }