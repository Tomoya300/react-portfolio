import Layout from "./pages/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"
import ContactLayout from "./pages/ContactLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App