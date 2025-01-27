import React, { useState } from 'react'

const Feedback = () => {
    const [feedback,setFeedback] = useState("");

    const handleSubmitFeedback = () =>{
        alert("feedback submitted")
        setFeedback('')
    }

  return (
    <div className='feedback'>
        <h2>feedback</h2>
        <textarea 
        value={feedback}
        onChange={(e)=> setFeedback(e.target.value)}
        placeholder='share your thoughts...'
        />
        <button onClick={handleSubmitFeedback}>Submit Feedback</button>
    </div>
  )
}

export default Feedback