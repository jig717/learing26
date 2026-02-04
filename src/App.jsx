import { Headercomponents } from './Components/Headercomponents';
import { Footercomponents } from './Components/Footercomponents'; 
import { Contentcomponents } from './Components/Contentcomponents';
import { SkillsComponent } from './Components/SkillsComponent';
import { AchievementsComponent } from './Components/AchievementsComponent';
import { TimelineComponent } from './Components/TimelineComponent';
import { ContactComponent } from './Components/ContactComponent';
import { MapDemo1 } from './Components/MapDemo1';
import { MapDemo2 } from './Components/MapDemo2';
import { MapDemo3 } from './Components/MapDemo3';
import { MapDemo4 } from './Components/MapDemo4';
import { MapDemo5 } from './Components/MapDemo5';
import { MapDemo6 } from './Components/MapDemo6';
import { MapDemo7 } from './Components/MapDemo7';
import { MapDemo8 } from './Components/MapDemo8';
import { MapDemo9 } from './Components/MapDemo9';
import { MapDemo10 } from './Components/MapDemo10';
import { NetflixHomes } from './Components/NetflixHomes';
import { NetflixMovies } from './Components/NetflixMovies';
import { NetflixShows } from './Components/NetflixShows';
import { NetflixSpark } from './Components/NetflixSpark';
import { NetflixBrowse } from './Components/NetflixBrowse';
import { NetflixSport } from './Components/NetflixSport';
import { Watch } from './Components/Watch';
import { EeeoeNotFound } from './Components/EeeoeNotFound';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Teams } from './Components/Teams';


//import './App.css'

function App() { 

  return ( 
      <div>
     {/* <MapDemo1></MapDemo1>
      <MapDemo2></MapDemo2>
      <MapDemo3></MapDemo3>
      <MapDemo4></MapDemo4>
      <MapDemo5></MapDemo5>
      <MapDemo6></MapDemo6>
      <MapDemo7></MapDemo7>
      <MapDemo8></MapDemo8>
      <MapDemo9></MapDemo9>
      <MapDemo10></MapDemo10>
       */}
       <NavBar>
       </NavBar>
         <Routes>
        <Route path='/spark' element={<NetflixSpark></NetflixSpark>}></Route>
        <Route path='/browse' element={<NetflixBrowse></NetflixBrowse>}></Route>
        <Route path='/sport' element={<NetflixSport></NetflixSport>}></Route>
        <Route path='/' element={<NetflixHomes></NetflixHomes>}></Route>
        <Route path='/movies' element={<NetflixMovies></NetflixMovies>}></Route>
        <Route path='/shows' element={<NetflixShows></NetflixShows>}></Route>
        <Route path='/watch/:name' element={<Watch></Watch>}></Route>
        <Route path='/Teams' element={<Teams></Teams>}></Route>
        <Route path='/*' element={<EeeoeNotFound></EeeoeNotFound>}></Route>
         </Routes>

      
     
 
      </div>
    
  )
}

export default App