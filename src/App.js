import React from 'react'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import ViewBlog from './Pages/ViewBlog/ViewBlog'
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/viewblog/:uid' component={ViewBlog} />
      </Switch>
    </div>
  )
}

export default App
