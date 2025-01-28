import './App.css';
import Translator from './components/Translator';
import SpeechToText from './components/SpeechToText';
import Chat from './components/Chat';
import Feedback from './components/Feedback';
import Signup from './components/Signup';
// import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Write from './components/Write';
import Login from './components/Login';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/translator' element={<Translator/>} />
          <Route path='/speech-to-text' element={<SpeechToText/>} />
          <Route path='/chat' element={<Chat/>} />
          <Route path='/feedback' element={<Feedback/>} />
          <Route path= '/write' element={<Write/>} />
          <Route path= '/register' element={<Signup/>} />
          <Route path= '/login' element = {<Login/>} />
          
    
     </Routes>
     </BrowserRouter>  );
}

export default App;
