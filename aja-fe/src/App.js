import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar
            bg="dark"
            varient="dark"
            color="white"
          >
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="text-white">Aja</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/product/:slug"
                element={<ProductPage />}
              />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserve</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
