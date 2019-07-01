import React from 'react';
import { useSubscribe } from '../utils/useSubscribe'

const docId = "testdoc";
function Counter() {
  const [data, loading] = useSubscribe("gcs", "games", docId)
  if (loading) return <div>Loading ...</div>
  return <div>Loaded</div>
}

export { Counter }