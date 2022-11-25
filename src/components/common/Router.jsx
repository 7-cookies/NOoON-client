import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Container} from "../../styles/globalStyle";

import Error404 from '../../pages/Error404';
import StaticGrid from "../../pages/dongsan/StaticGrid";
import {Login, SignUp, Landing} from '../login';
import DongSanStep from '../../pages/DongSanStep';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';


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
            </Routes>
          </Container>  
        </RecoilRoot>      
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default Router;
