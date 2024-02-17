
import { Link } from "react-router-dom"

let Head = () => {
    return (
        <>
            <section>
                <div className="w-[100vw] bg-gray-700 text-white p-5 " >
                    <nav className=" w-[90%] m-auto flex justify-between flex-wrap " >
                        <div> CODELAB </div>
                        <div>
                            <ul className="flex gap-5 flex-wrap " >
                                <li> <Link to="home" > Home </Link>  </li>
                                <li> <Link to="about" >  About  </Link> </li>
                                <li> <Link to="service" > Service </Link>  </li>
                                <li> <Link to="contact" >  Contact </Link> </li>
                            </ul>
                        </div>
                        <div>
                            <button> <Link to="regis" > Registration </Link>  </button>
                        </div>
                    </nav>

                </div>

            </section>

        </>
    )
}
export default Head