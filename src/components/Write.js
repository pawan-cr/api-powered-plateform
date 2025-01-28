import React, { useState } from 'react'

const Write = () => {
    const [write,setWrite] = useState("")

    const handleWrite = () =>{
        setWrite("here is write successfully")
    }
  return (
    <div className="speech-to-text">
    <h2>Write something here</h2>
    <button onClick={handleWrite}>Write something</button>
    <p className="transcription-output">{write}</p>
  </div>
  )
}

export default Write