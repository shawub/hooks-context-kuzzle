import React from 'react';
import { useSubscribe } from '../utils/useSubscribe'

function Game(UUID) {
  const response = useSubscribe("gcs", "games", UUID)
  console.log(response);
  if (response.loading) {    
    return <div>Loading ...</div>
  } else if (response.error) {
    return <div>{response.error.toString()}</div>
  }
  return <div>{response.data.toString()}</div>
}

export { Counter }