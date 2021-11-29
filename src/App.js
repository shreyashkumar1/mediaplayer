import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/Pages/Home/Home.js';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Movie from './components/Pages/Movies/Movie';
import Series from './components/Pages/Series/Series';
import Watch from './components/Pages/watch/Watch';
import Favourite from './Favourite';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
      <Route exact path="/series" component={Series}/>
       <Route exact path="/movies" component={Movie}/> 
      <Route exact path="/watch" component={Watch}/>
      <Route exact path="/Favourite" component={Favourite}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
