import { useState } from 'preact/hooks'
import './app.css'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './layout';
import NoPage from './pages/NoPage/NoPage';
import About from './pages/About/About';
import OurPlatform from './pages/OurPlatform/OurPlatform';
import Investor from './pages/Investor/Investor';
import Career from './pages/Career/Career';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Meeting from './pages/Meeting/Meeting';
import NotMeeting from './pages/Meeting/NotMeeting';

export function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/platforms' element={<OurPlatform />} />
        <Route path='/investor' element={<Investor />} />
        <Route path='/career' element={<Career />} />
        <Route path='/connect' element={<Contact />} />
        <Route path='/conference/:id' element={<Meeting />} />
        <Route path='/noschedule' element={<NotMeeting />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
    </>
  );
}
