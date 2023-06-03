import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Stats from './pages/Stats'
import Blog from './pages/Blog'
import EnterGym from './pages/EnterGym';
import Login from './pages/Login'
import Register from './pages/Register'
import HomeAdmin from './pages/HomeAdmin'
import CreateClass from './pages/CreateClass'
import AllClasses from './pages/AllClasses'
import ScheduleClasses from './pages/ScheduleClasses'
import Leaderboard from './pages/Leaderboard'
import AllClassesUser from './pages/AllClassesUser'
import Playlist from './pages/Playlist'
import BusyMeter from './pages/BusyMeter'
import Wrapped from './pages/Wrapped'
import BookClass from './pages/BookClass'
import AddFriend from './pages/AddFriend'
import RemoveFriend from './pages/RemoveFriend'
import AddPlaylist from './pages/AddPlaylist'
import RemovePlaylist from './pages/RemovePlaylist'


function App() {


  return (
   <>
    <div className='phone'>

      <Router>
      <Routes>
      
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Stats />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/enter" element={<EnterGym />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/create" element={<CreateClass />} />
        <Route path="/allclasses" element={<AllClasses />} />
        <Route path="/scheduleclasses" element={<ScheduleClasses />} />
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/allclassesuser" element={<AllClassesUser/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/busyMeter" element={<BusyMeter/>}/>
        <Route path="/wrapped" element={<Wrapped/>}/>
        <Route path="/bookClass" element={<BookClass/>}/>
        <Route path="/addFriend" element={<AddFriend/>}/>
        <Route path="/removeFriend" element={<RemoveFriend/>}/>
        <Route path="/addPlaylist" element={<AddPlaylist/>}/>
        <Route path="/removePlaylist" element={<RemovePlaylist/>}/>
      </Routes>
      </Router>
    </div>
    </>
  )
}
export default App