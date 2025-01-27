import './App.css';
import Translator from './components/Translator';
import SpeechToText from './components/SpeechToText';
import Chat from './components/Chat';
import Feedback from './components/Feedback';
import { useState } from 'react';


function App() {
  const [activeTab,setActiveTab] = useState('translator')
  return (
    <div className="App">
      <h1 className='heading'>AI-POWERED-PLATEFORM</h1>
      <div className='button'>
      <button onClick={()=>setActiveTab('translator')}>Translator</button>
      <button onClick={()=>setActiveTab('speedToText')}>SpeechToText</button>
      <button onClick={()=>setActiveTab('Chat')}>Chat</button>
      <button onClick={()=>setActiveTab('Feedback')}>Feedback</button>
      </div>
      {activeTab === 'translator' && <Translator/>}
      {activeTab === 'speedToText' && <SpeechToText/>}
      {activeTab === 'Chat' && <Chat/>}
      {activeTab === 'Feedback' && <Feedback/>}
     
    </div>
  );
}

export default App;
