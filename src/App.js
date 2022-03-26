import logo from './logo.svg';
import './App.css';

import {Routes,Route} from "react-router-dom"
import {MainPage} from './components/MainPage'
import {SearchPage} from './components/SearchPage'

import {SinglePage} from './components/SinglePage'

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element ={<MainPage/>}/>
        <Route path="/search" element ={<SearchPage/>}/>
        <Route path="/page/:id" element ={<SinglePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
