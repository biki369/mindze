
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
import Navbar from './components/navbar/Navbar';

function App() {





  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
