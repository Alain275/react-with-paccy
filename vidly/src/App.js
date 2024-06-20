
import './App.css';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rental';
import notFound from './components/notfound';
import{Route,Switch,Redirect} from "react-router-dom"
import Navbar from './components/navbar';
import MovieForm from './components/movieform';
import LoginForm from './components/loginForm';


function App() {
  return (<div>
    < Navbar />
    <main className='container'>
      <Switch>
      <Route path="/movies/:id" component={MovieForm}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/movies" component={Movies}/>
      <Route path="/customers" component={Customers}/>
      <Route path="/rental" component={Rentals}/>
      <Redirect from="/"exact to="movies" />
      <Route path ="/notfound" component={notFound}/>
      <Redirect to ="/notfound" />
      </Switch>
    </main> 
    </div>
  );
}

export default App;
