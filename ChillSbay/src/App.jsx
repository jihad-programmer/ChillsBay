import './App.css'
import Carousel from './components/Carousel'
import Chillsbay from './components/Chillsbay'
import GALARY from './components/GALARY'
import HeroArea from './components/HeroArea'
import ImgSection from './components/ImgSection'
import MyNavbar from './components/Navbar'
import ThingsToDo from './components/ThingsToDo'
import Footer from './components/Footer'

function App() {
   return (
    <>
      <MyNavbar/>
      <HeroArea/>
      <ImgSection/>
      <ThingsToDo/>
      <Chillsbay/>
      <Carousel/>
      <GALARY/>
      <Footer/>
      
    </>
  )
}

export default App
