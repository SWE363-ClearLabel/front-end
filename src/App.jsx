import { useState } from 'react'
import './App.css'
import UserHeader from './components/UserHeader'
import UserHome from './components/UserHome'
import { UserResult } from './components/UserResult'
import MainPanelCorporate from './components/MainPanelCorporate' 
import CurrentPanel from './CurrentPanel' 
function App() {
  return (
    <div>
	  <CurrentPanel />
	  </div>
  )
}

export default App
