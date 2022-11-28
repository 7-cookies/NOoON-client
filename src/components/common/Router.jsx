import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RecoilRoot} from 'recoil'

import {Container} from "../../styles/globalStyle";

import Error404 from '../../pages/Error404';
import DressUp from '../../pages/dressUp/DressUp';
import StaticGrid from "../../pages/dongsan/StaticGrid";
import {Login, SignUp, Landing} from '../login';
import DongSanStep from '../../pages/DongSanStep';
import { CookiesProvider } from 'react-cookie';

import MessageModal from "../message/MessageModal";
import GridFix from '../../pages/dongsan/GridFix';
import Grid2 from '../../pages/dongsan/Grid2';
import Grid3 from '../../pages/dongsan/Grid3';

const Router = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <RecoilRoot>
          <Container>
            <Routes>
              <Route path="/makedongsan" element={<DongSanStep />} />
              <Route path="*" element={<Error404 />} />
              <Route path='/grid' element={<StaticGrid />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Landing />} />
              <Route path="/dressUp" element={<DressUp />} />
              <Route path="/message/:id" element={<MessageModal />} />
              <Route path="/fix" element={<GridFix/>}/>
            </Routes>
          </Container>  
        </RecoilRoot>      
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default Router;
