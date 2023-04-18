
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Anime from "./Components/Animedetails";
import Search from "./Components/Search";

function App() {
  return ( <BrowserRouter>
    <>
    <Nav/>
    <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route  path="/details:id">
        <Anime/>
        </Route>
        <Route path="/search:searchKey">
  <Search></Search>
</Route>
    </Switch>

    
    </></BrowserRouter> );
}

export default App;
