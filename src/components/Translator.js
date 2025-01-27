import React, {useState } from 'react'

const Translator = () => {
    const [input,setInput] = useState('');
    const [translation,setTranslation] = useState('');

    const handleTranslate = () =>{
        setTranslation('it is successfully translate')
    }
  return (
    <div className="translator">
      <h2>English to Hindi Translator</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something in English..."
      />
      <button onClick={handleTranslate}>Translate</button>
      <p className="translation-output">{translation}</p>
    </div>
    
  )
}

export default Translator