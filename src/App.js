import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import NewWallet from './components/pages/NewWallet'
import Wallet from './components/pages/Wallet'

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/wallet' element={<Wallet />} />
        <Route exact path='/new_wallet' element={<NewWallet />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>

    </Router>

  )
}

export default App;
