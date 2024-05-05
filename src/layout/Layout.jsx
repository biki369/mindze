
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/back-to-top/BackToTop'
import { ScrollTop } from '../components/scroll-top/ScrollTop'
const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollTop />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Layout;
