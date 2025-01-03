import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import Champions from './pages/Champions';
import Home from './pages/Home';
import Patch from './pages/Patch';
import Player from './pages/Player';
import Ranking from './pages/Ranking';
import Stats from './pages/Stats';
import UserProvider from './providers/userProvider';
function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [server, setServer] = useState<string>('');
  localStorage.setItem('server', server);
  console.log('valor desde app', inputValue);

  return (
    <UserProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home inputValue={inputValue} setInputValue={setInputValue} server={server} setServer={setServer} />} />
          <Route path="/Champions" element={<Champions />} />
          <Route path="/Player" element={<Player />} />
          <Route path="/Patch" element={<Patch />} />
          <Route path='/Ranking' element={<Ranking />} />
          <Route path='/Stats' element={<Stats />} />
        </Routes>
      </Layout>
    </Router>
    </UserProvider>
  );
}

export default App;
