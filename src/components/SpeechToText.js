import React, { useState } from 'react'

const SpeechToText = () => {
    const [speech,setSpeech] = useState('');

    const handleSpeechToText = () =>{
        setSpeech('speech convert to text succesfully')
    }
  return (
    <div className="speech-to-text">
    <h2>Speech to Text</h2>
    <button onClick={handleSpeechToText}>Record Speech</button>
    <p className="transcription-output">{speech}</p>
  </div>
  )
}

export default SpeechToText