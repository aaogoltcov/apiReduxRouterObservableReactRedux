import './App.css';
import Container from './components/Container';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Product from './components/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
