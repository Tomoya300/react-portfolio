import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Toaster } from "react-hot-toast"

const ContactLayout = () => {
  return (
    <div className="">
      <Toaster />
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default ContactLayout