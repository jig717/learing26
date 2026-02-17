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
import { FunctionDemo1 } from './Components/FunctionDemo1';
import { UseStateDemo1 } from './Components/UseStateDemo1';
import { UseStateDemo2 } from './Components/UseStateDemo2';
import { UseStateDemo3 } from './Components/UseStateDemo3';
import { Employees } from './Components/Employees'; 
import { FormDemo1 } from './Components/Form/FormDemo1';
import { FormDemo2 } from './Components/Form/FormDemo2';
import { FormDemo3 } from './Components/Form/FormDemo3';
import { FormDemo4 } from './Components/Form/FormDemo4';
import { FormValidation1 } from './Components/Form/FormValidation1';
import { Dropdown } from './Components/Form/dropdown';
import { FormValidation2 } from './Components/Form/FormValidation2';
import { FormDemo5 } from './Components/Form/FormDemo5';
import { FormDemo6 } from './Components/Form/FormDemo6';
import { ApiDemo1 } from "./Components/api/ApiDemo1";
import { ApiDemo2 } from "./Components/api/ApiDemo2";
import { ApiDemo3 } from "./Components/api/ApiDemo3";
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
        <Route path='/FormValidation1' element={<FormValidation1></FormValidation1>}></Route>
        <Route path='/FormValidation2' element={<FormValidation2></FormValidation2>}></Route>
        <Route path='/sport' element={<NetflixSport></NetflixSport>}></Route>
        <Route path='/' element={<NetflixHomes></NetflixHomes>}></Route>
        <Route path='/movies' element={<NetflixMovies></NetflixMovies>}></Route>
        <Route path='/shows' element={<NetflixShows></NetflixShows>}></Route>
        <Route path='/FormDemo3' element={<FormDemo3></FormDemo3>}></Route>
        <Route path='/FormDemo4' element={<FormDemo4></FormDemo4>}></Route>
        <Route path='/watch/:name' element={<Watch></Watch>}></Route>
        <Route path='/Teams' element={<Teams></Teams>}></Route>
        <Route path='/FunctionDemo1' element={<FunctionDemo1></FunctionDemo1>}></Route>
          <Route path='/UseStateDemo1' element={<UseStateDemo1></UseStateDemo1>}></Route>
          <Route path='/UseStateDemo2' element={<UseStateDemo2></UseStateDemo2>}></Route>
          <Route path='/UseStateDemo3' element={<UseStateDemo3></UseStateDemo3>}></Route>
          <Route path='/Employees' element={<Employees></Employees>}></Route>
          <Route path='/FormDemo1' element={<FormDemo1></FormDemo1>}></Route>
            <Route path='/FormDemo2' element={<FormDemo2></FormDemo2>}></Route>
          <Route path='/FormDemo5' element={<FormDemo5></FormDemo5>}></Route>
          <Route path='/FormDemo6' element={<FormDemo6></FormDemo6>}></Route>
          <Route path='/Dropdown' element={<Dropdown></Dropdown>}></Route>
          <Route path='/ApiDemo1' element={<ApiDemo1></ApiDemo1>}></Route>
        <Route path='/ApiDemo2' element={<ApiDemo2></ApiDemo2>}></Route>
        <Route path='/ApiDemo3' element={<ApiDemo3></ApiDemo3>}></Route>
          <Route path='/*' element={<EeeoeNotFound></EeeoeNotFound>}></Route>
         </Routes>
        
      </div>
    
  )
}

export default App