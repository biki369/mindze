
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
import Navbar from './components/navbar/Navbar';
import Login from './pages/auth/login-out/Login';
import { routes } from './components/routes';
import Techniques from './pages/quickExc/quick-meditation/Techniques';
import Test from './pages/mental-test/Test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/techniques/:id" element={<Techniques />} />
          <Route path="/mentaltest/:id" element={<Test/>} />
          {/* {
            routes.map((e, i) => (
              <Route path={e.path} element={e.component} key={i} />
            ))
          } */}
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
