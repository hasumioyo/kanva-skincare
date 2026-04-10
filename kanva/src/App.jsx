// import { useState } from 'react'
import Navbar from './navbar'
import Home from './pages/home';
import './App.css'
import { BrowserRouter, useLocation, Routes, Route} from 'react-router-dom';


function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/auth", "/profile"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

   return (
    <>
      {!hideNavbar && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );

}

export default App;
