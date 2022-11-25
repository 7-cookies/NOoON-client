import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Container} from "../../styles/globalStyle";

import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';
import StaticGrid from "../../pages/dongsan/StaticGrid";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/login/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error404 />} />
          <Route path='/grid' element={<StaticGrid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>        
    </BrowserRouter>
  );
};

export default Router;
