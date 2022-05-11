import React from 'react'

export default function Settime() {
  return (
    <>
    <div>
      <div className="container">
        <h1>8 : 38 : 9 AM</h1>
      </div>
        <button type="button" class="btn btn-outline-primary">get time</button>
    </div>

    <style>
      {
        `
        .container{
          height:30vh;
          width:40vw;
          display:flex;
          justify-content:center;
          background:blue;
          color:white;
        }
        .container h1{
          display:flex;
          justify-content:center;
          align-items:center;
        }
        `
      }
    </style>
    </>
  )
}
