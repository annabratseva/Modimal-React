import { Provider } from "react-redux"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import "./MainLayout.css"
import { store } from "../BLL/store"
import { Outlet } from "react-router"


const MainLayout = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Outlet/>
            </main>

            <Footer />
        </>
    )
}

export default MainLayout