import './App.scss';
import { Button } from '@mui/material';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Catagories from './components/storefront/catagories';
import Products from './components/storefront/products';
export default function App() {
  return (
    <div className='container'>
      <Header />
      <Catagories />
      <Products />
      <Footer />
      {/* <Button variant='contained'>Hello World</Button> */}
    </div>
  );
}
