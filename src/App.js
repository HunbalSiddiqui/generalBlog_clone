import React from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Home} exact/>
      </Switch>
    </div>
  )
}

export default App
