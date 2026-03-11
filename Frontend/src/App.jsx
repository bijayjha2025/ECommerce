import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Collection from './Pages/Collection'
import Cart from './Pages/Cart'
import Products from './Pages/Products'
import Navbar from './Components/Navbar'
import Orders from './Pages/Orders'
import './index.css'
import Footer from './Components/Footer'
import Favorites from './Pages/Favorites'
import MyAccount from './Pages/MyAccount'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence, motion } from 'framer-motion'

const PageTransition = ({ children }) => {
  return(
   <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}>{children}</motion.div>
  );
}

const App = () => {
  const location = useLocation();

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gradient-to-tr
   from-[#c4a462] via-[#fcedbb] to-[#faae16] min-h-screen'>

      <ToastContainer position="bottom-right" />
      <Navbar />
      
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path='/' element={<PageTransition><Home /> </PageTransition>} />
        <Route path='/about' element={<PageTransition><About /> </PageTransition>} />
        <Route path='/contact' element={<PageTransition><Contact /> </PageTransition>} />
        <Route path='/login' element={<PageTransition><Login /> </PageTransition>} />
        <Route path='/collection' element={<PageTransition><Collection /> </PageTransition>} />

        <Route path='/cart' element={<PageTransition><Cart /> </PageTransition>} />
        <Route path='/products' element={<PageTransition><Products /> </PageTransition>} />
        <Route path='/orders' element={<PageTransition><Orders /> </PageTransition>} />
        <Route path='/favorites' element={<PageTransition><Favorites /> </PageTransition>} />

        <Route path='/myaccount' element={<PageTransition><MyAccount /> </PageTransition>} />
      </Routes>
      </AnimatePresence>

      <Footer />




    </div>
  )
}

export default App