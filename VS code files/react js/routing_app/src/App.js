import { Routes, Route } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';
import './components/index.css';

function App() {
  return (
    <Layout>
      <Routes>
        {/* path attribute is web adress since the current domain */}
        <Route path="/" element={<AllMeetups />}></Route>
        <Route path="/new-meetups" element={<NewMeetups />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
  