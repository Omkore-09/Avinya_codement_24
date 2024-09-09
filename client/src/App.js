
import './App.css';

import { Box } from '@mui/material';

//components
import Header from "./componenets/header/Header";
import Home from './componenets/home/Home';
import DetailView from './componenets/details/DetailView';
// import { Route } from '@mui/icons-material';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DataProvider from './componenets/context/DataProvider';
import Cart from './componenets/cart/Cart';

import Chat from './componenets/Chat';
import MedicalStore from './componenets/Medical';
import GamingSection from './componenets/Games';
import { ImportExport } from '@mui/icons-material';
import ProductDetail from './componenets/details/ProductDetail';
import ProductListPage from './componenets/viewall/ProductListPage';
import Chatbot from './componenets/Chatbot';



function App() {

  return (
    <DataProvider>

      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart'  element={<Cart />} />
            <Route path='/games'  element={<GamingSection />} />
            <Route path='/medical'  element={<MedicalStore />} />
            <Route path='/whatsapp'  element={<Chat />} />
            <Route path='/Chatbot'  element={<Chatbot />} />
          </Routes>
          {/* < Chat />
          <MedicalStore/>
          <GamingSection/>
          <ProductListPage/>
          <Chatbot/> */}
        </Box>

      </BrowserRouter>

    </DataProvider>
  );
}

export default App;
