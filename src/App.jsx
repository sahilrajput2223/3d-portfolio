import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Routes>
            <Route index path="" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Experience />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/contact" element={
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>} />
          </Routes>

          {/*}
            <Works />
          <Feedbacks />{*/}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App