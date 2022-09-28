import React from 'react'

export default function Dashboardbtn({value, handleClick}) {

  return (
    <button onClick={handleClick} className="mgboardbtn">{value}</button>
  )
}
