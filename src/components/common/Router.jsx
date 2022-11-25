import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RecoilRoot} from 'recoil'

import {Container} from "../../styles/globalStyle";

import Error404 from '../../pages/Error404';
import Main from '../../pages/Main';
import DressUp from '../../pages/dressUp/DressUp';
import StaticGrid from "../../pages/dongsan/StaticGrid";
import Login from "../login/Login";
import SignUp from "../login/SignUp";
import DongsanName from '../login/DongsanName';
import DongSanSelect from '../login/DongSanSelect';


const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/dressUp" element={<DressUp />} />
          <Route path='/grid' element={<StaticGrid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dongsanname" element={<DongsanName />} />
          <Route path="/dongsanselect" element={<DongSanSelect />} />
        </Routes>
        </RecoilRoot>
      </Container>        
    </BrowserRouter>
  );
};

export default Router;
