import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App;
