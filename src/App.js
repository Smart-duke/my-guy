
import Home from "./routes/Home";
import ABoutUs from "./routes/AboutUs";
import Testimonial from "./routes/Testimonial";
import BecomeASeller from "./routes/BecomeASeller";
import Join from "./routes/Join";


import { Route, Routes} from "react-router-dom"
function App() {
  return <>
 
  <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/testimonials" element={< Testimonial />} />
      <Route path="/about" element={< ABoutUs />} />
      <Route path="/becomeaseller" element={< BecomeASeller />} />
      <Route path="/join" element={< Join />} />
  </Routes>

  </>
}

export default App;
