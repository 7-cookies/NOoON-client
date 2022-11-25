import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Container} from "../../styles/globalStyle";

import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';
import StaticGrid from "../../pages/dongsan/StaticGrid";


const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error404 />} />
          <Route path='/grid' element={<StaticGrid />} />
        </Routes>
      </Container>        
    </BrowserRouter>
  );
};

export default Router;
