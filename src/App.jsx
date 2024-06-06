import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './pages/main';
import HackathonInfo from './pages/HackathonInfo';
import Hackathon from './pages/Hackathons';
import Teams from './pages/Teams';

//start
function App() {
 
  return (
  <>
<BrowserRouter>
<Routes>
<Route index path='/' element={<Main/>}></Route>
<Route index path='/Home' element={<Main/>}></Route>
<Route path='/Hackathon' element={<Hackathon/>}></Route>
<Route path='/HackathonInfo' element={<HackathonInfo/>}></Route>
<Route path='/Teams' element={<Teams/>}></Route>
</Routes>
</BrowserRouter>
  </>
  )
}

export default App