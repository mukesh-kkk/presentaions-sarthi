
import React from 'react'

export default function Count({text,count}) {
console.log(text +count);
  return (
    <h1>{text} {count}</h1>
  )
}
