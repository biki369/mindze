
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Layout from './components/layout/Layout';
import Navbar from './components/navbar/Navbar';
import Login from './pages/auth/login-out/Login';
import { routes } from './components/routes';
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
import Blogs from './pages/Blogs/blogs/Blogs';
import SpiritualCounslr from './pages/counselors/spiritual/SpiritualCounslr';
import BlogsMain from './pages/Blogs/BlogsMain';
import PsychologicalCounslr from './pages/counselors/psychological/PsychologicalCounslr';


function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <Navbar />


        <Routes>
          {/* <Route path="/" element={<Layout />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/techniques/:id" element={<Techniques />} />
          <Route path="/mentaltest/:id" element={<Test />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/philosophers/:id" element={<PhilosopherDetails />} />
          <Route path="/philosophers/:id" element={<PhilosopherDetails />} />
          <Route path="/booksummery/:id" element={<BookDetails />} />
          <Route path="/counselor/:id" element={<CounselorDetails />} />


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
            routes.map((e, i) => (
              <Route path={e.path} element={e.component} key={i} />
            ))
          } */}
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>



        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
