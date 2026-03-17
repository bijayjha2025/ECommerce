import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
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

const isLoggedIn = () => localStorage.getItem('isLoggedIn') === 'true';

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" replace />;
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

        <Route path='/' element={isLoggedIn() ? <Navigate to="/home" replace /> : <Navigate to="/login" replace /> } />

        <Route path='/login' element={<PageTransition><Login /></PageTransition>} />

        <Route path='/about' element={<PageTransition><About /> </PageTransition>} />
        <Route path='/contact' element={<PageTransition><Contact /> </PageTransition>} />
        <Route path='/collection' element={<PageTransition><Collection /> </PageTransition>} />

        <Route path='/home' element={<ProtectedRoute><PageTransition><Home /> </PageTransition></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute><PageTransition><Cart /> </PageTransition></ProtectedRoute>} />
        <Route path='/products' element={<ProtectedRoute><PageTransition><Products /> </PageTransition></ProtectedRoute>} />
        <Route path='/orders' element={<ProtectedRoute><PageTransition><Orders /> </PageTransition></ProtectedRoute>} />
        <Route path='/favorites' element={<ProtectedRoute><PageTransition><Favorites /> </PageTransition></ProtectedRoute>} />

        <Route path='/myaccount' element={<ProtectedRoute><PageTransition><MyAccount /> </PageTransition></ProtectedRoute>} />

      </Routes>
      </AnimatePresence>

      <Footer />




    </div>
  )
}

export default App