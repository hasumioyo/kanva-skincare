// import { useState } from 'react'
import Navbar from './navbar'
import Header from './home/header';
import Section1 from './home/section1';
import Section2 from './home/section2';
import Section3 from './home/section3';
import Section4 from './home/section4';
import Footer from './home/footer';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  );
}

export default App;
