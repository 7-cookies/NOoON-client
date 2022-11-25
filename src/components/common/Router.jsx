import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Container} from "../../styles/globalStyle";

import Error404 from '../../pages/Error404';
import StaticGrid from "../../pages/dongsan/StaticGrid";
import {Login, SignUp, Landing} from '../login';
import DongSanStart from '../../pages/DongSanStart';

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<DongSanStart />} />
          <Route path="*" element={<Error404 />} />
          <Route path='/grid' element={<StaticGrid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </Container>        
    </BrowserRouter>
  );
};

export default Router;
