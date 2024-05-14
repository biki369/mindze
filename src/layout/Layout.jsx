
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/back-to-top/BackToTop';
import { ScrollTop } from '../components/scroll-top/ScrollTop';
import { useEffect, useState } from 'react';
import { getConsultant } from '../api';
const Layout = () => {
  const [psychologicalData, setPsychologicalData] = useState(null);
  const [spiritualData, setSpiritualData] = useState(null);

  useEffect(() => {
    // psychological
    getConsultant("api/consultant/psychological").then((data) =>
      setPsychologicalData(data),
    ).catch((err) => {
      console.log(err)
    })
  }, []);

  useEffect(() => {
    getConsultant("api/consultant/spiritual").then((data) =>
      setSpiritualData(data),
    ).catch((err) => {
      console.log(err)
    })
  }, []);


  return (
    <>
      <Navbar />
      <ScrollTop />
      <Outlet context={[spiritualData, psychologicalData]} />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Layout;
