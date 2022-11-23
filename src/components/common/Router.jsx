import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RecoilRoot} from 'recoil'

import {Container} from "../../styles/globalStyle";

import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';
import DressUp from '../../pages/dressUp/DressUp';
import {Message} from '../../pages/dressUp/Message';

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/dressUp" element={<DressUp />} />
          <Route path="/dressUp/message" element={<Message />} />
        </Routes>
        </RecoilRoot>
      </Container>        
    </BrowserRouter>
  );
};

export default Router;
