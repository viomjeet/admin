import React, { useState } from 'react'
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import MovieOne from './components/MovieOne';
import MovieTwo from './components/MovieTwo';
import MovieTre from './components/MovieTre';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Pagenotfound from './components/Pagenotfound';
import { Navbar, Nav, Container } from 'react-bootstrap';



function App() {
  const state = useSelector(state => state)
  const movieone = state.movie_one.initialState;
  const [date] = useState(new Date())
  console.log(movieone)
  return (
    <div className="app">
      <div className="app_inner">

      <Router>

        <Navbar bg="dark" variant="dark" className="movieBar mb-4">
          <Container>
            <Link className="navbar-brand" to="/">Movies</Link>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">One</Link>
                <Link className="nav-link" to="/2">Two</Link>
                <Link className="nav-link" to="/3">Three</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>



       { 
         <Switch>
          <Route exact path="/"><MovieOne data={movieone} /></Route>
          <Route path="/2"><MovieTwo data={movieone} /></Route>
          <Route path="/3"><MovieTre data={movieone} /></Route>
          <Route path="/*"><Pagenotfound /></Route>
        </Switch>
      }
      </Router>


      </div>
      <footer>
        <div className="container">
          <div className="ecart-footer">
            <a className="footer_link" href="https://www.viomjeet.net/" target="_blank">&copy; viomjeet
					<span id="date">&nbsp; {date.getFullYear()}</span></a>
            <span>Made with <i className="text-danger fad fa-heart"></i> in india</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
export default App;