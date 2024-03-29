import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
function App() {
  return (
    <div className='main-container'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App;
