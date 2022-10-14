import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Read } from './components/read';
import { Create } from './components/create';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return ( //classname just calls the app.css file
      <Router>
        <div className="App">
      {/*Creates a container where we can create routing between the different pages
      We can then set up Routes between the 
      pages*/}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>

              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Content></Content>}></Route>
            <Route path='/read' element={<Read></Read>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
          </Routes>
          {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
