import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Container} from "../../styles/globalStyle";

import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';
import DressUp from '../../pages/dressUp/DressUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/dressUp" element={<DressUp />} />
        </Routes>
      </Container>        
    </BrowserRouter>
  );
};

export default Router;
