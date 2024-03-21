
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Login from './pages/auth/login-out/Login';
import Techniques from './pages/quickExc/quick-meditation/Techniques';
import Test from './pages/mental-test/Test';
import BlogDetails from './pages/Blogs/blog-details/BlogDetails';
import PhilosopherDetails from './pages/philosophical-pers/philosopher-details/PhilosopherDetails';
import BookDetails from './pages/bookSummery/BookDetails';
import CounselorDetails from './pages/counselors/counselor-details/CounselorDetails';
import QuickExercises from './pages/quickExc/QuickExercises';
import Home from './pages/home/Home';
import { MentalTest } from './pages/mental-test/MentalTest';
import YogaMeditations from './pages/yoga-meditations/YogaMeditations';
import BookSummery from './pages/bookSummery/BookSummery';
import PhilosophicalPerspective from './pages/philosophical-pers/PhilosophicalPerspective';
import SpiritualCounslr from './pages/counselors/spiritual/SpiritualCounslr';
import BlogsMain from './pages/Blogs/BlogsMain';
import PsychologicalCounslr from './pages/counselors/psychological/PsychologicalCounslr';
import { routes } from './routes';
import LoginUser from './pages/auth/login-user/LoginUser';


function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/techniques/:id" element={<Techniques />} />
          <Route path="/mentaltest/:id" element={<Test />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/philosophers/:id" element={<PhilosopherDetails />} />
          <Route path="/philosophers/:id" element={<PhilosopherDetails />} />
          <Route path="/booksummery/:id" element={<BookDetails />} />
          <Route path="/counselor/:id" element={<CounselorDetails />} />
          <Route path="/login-user" element={<LoginUser/>} />


          <Route path="/" element={<Home />} />
          <Route path="/quickExercises" element={<QuickExercises />} />
          <Route path="/mentalTest" element={<MentalTest />} />
          <Route path="/yogaMeditations" element={<YogaMeditations />} />
          <Route path="/bookSummery" element={<BookSummery />} />
          <Route path="/philosophers" element={<PhilosophicalPerspective />} />
          <Route path="/blogs" element={<BlogsMain />} />
          <Route path="/spiritualCounselors" element={<SpiritualCounslr />} />
          <Route path="/philosophicalCounselors" element={<PsychologicalCounslr />} />
          {/* {
            routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))
          } */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
