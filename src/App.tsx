import Layout from "./pages/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"
import ContactLayout from "./pages/ContactLayout"

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App