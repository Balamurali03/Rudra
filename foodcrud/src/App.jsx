//import logo from './logo.svg';
import './App.css';
import Addfood from './Components/Addfood';
import Updatefood from './Components/Updatefood';
import Fooddetails from './Components/Fooddetails';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Search from './Components/Search';
import Orders from './Components/Orders';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Inhome from './Components/Inhome';
import Signup from './Components/Signup';
function App()
{
  
  return(
    <Router>
   <div className="App">

  

 <Nav> 
</Nav>
<Switch>
  {/* <Route exact path="/">
<Home/>
</Route>
<Route path="/addfood">
<Addfood/>
</Route>
<Route path="/fooddetails:id">
  <Fooddetails/>
</Route>
<Route path="/update:id">
  <Updatefood></Updatefood>
</Route>
<Route path="/search:searchKey">
  <Search></Search>
</Route>
<Route path="/order">
  <Orders></Orders>
</Route> */}
<Route exact path="/">
<Signup/>
</Route>
</Switch> 
   </div>
   </Router>
  )
}
export default App;
