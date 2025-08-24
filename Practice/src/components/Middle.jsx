import React from 'react'
import Child from './Child'

function Middle() {
  return (
    <>
    <h2>I'm Middle comp</h2>
    <p>Below is a child comp.</p>

    <Child />
    </>
  )
}

export default Middle
