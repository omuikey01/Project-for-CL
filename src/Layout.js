import Footer from "./Components/Footer"
import Head from "./Components/Head"
import { Outlet } from 'react-router-dom'


let Layout = () => {
    return (
        <>
            <section>
                <Head />
            </section>


            <section className="main-section" >
                <Outlet />
            </section>


            <section>
                <Footer />
            </section>
        </>
    )
}

export default Layout