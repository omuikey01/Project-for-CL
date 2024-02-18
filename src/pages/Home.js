import { useEffect, useState } from 'react'
import Img1 from '../images/d1.jpg'
import Img2 from '../images/d2.jpg'
import Img3 from '../images/d3.jpg'
import Img4 from '../images/d4.jpg'
import Img5 from '../images/d5.jpg'
import Img6 from '../images/d6.png'
import Img7 from '../images/d7.png'
import S1 from '../images/s1.jpg'
import S2 from '../images/s2.jpg'
import S3 from '../images/s3.jpg'
import S4 from '../images/s4.jpg'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'




let Home = () => {
    let myNav = useNavigate()
    let [database, setDatabase] = useState([])
    let images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]
    let content = ['A camera is an instrument used to capture and store images and videos, either digitally via an electronic image sensor, or chemically via a light-sensitive', 'A mobile phone (or cellphone) is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within', 'The 5 most popular cars are Mahindra Scorpio N, Hyundai Creta, Maruti Suzuki Fronx, Mahindra Thar and Maruti Suzuki Brezza. Explore the complete list of cars ', 'Technology is the application of conceptual knowledge for achieving practical goals, especially in a reproducible way. The word technology can also mean', 'Trust us for unparalleled expertise in tech software. We prioritize security, innovation, and seamless integration, ensuring your success', 'Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.', "Practice means doing something regularly in order to be able to do it better. A practice is one of these periods of doing something."]


    let slide = [S1, S2, S3, S4]
    let [imgcnt, setImgCnt] = useState(0)
    let [mage, setMage] = useState(slide[imgcnt])


    let [userdata, setUserData] = useState([])

    function loadDatauser() {
        axios.get(`http://127.0.0.1:8000/api/task/studenttask/`).then((res) => {
            setUserData(res.data)
        })
    }


    let i = 0
    let imageswithcontent = content.map((key) => {
        return (
            <>
                <div className="card ">
                    <img src={images[i++]} alt='Picture' />
                    <p> {key} </p>
                </div>
            </>
        )
    })


    let loadData = () => {
        axios.get('http://localhost:8000/api/user/users/').then((res) => {
            setDatabase(res.data)
        })
    }
    useEffect(() => {
        loadData()
        loadDatauser()
    }, [])






    let userData = database.map((key) => {
        return (
            <>
                <tr>
                    <td> {key.id} </td>

                    <td onClick={() => {
                        window.localStorage.setItem("idd", key.id)
                        myNav("/task")
                    }} >  {key.name} </td>

                    {/* <td  > <Link to='/task' > {key.name} </Link> </td> */}
                    <td> {key.email} </td>
                </tr>
            </>
        )
    })

    function slideincre() {
        setImgCnt(imgcnt + 1)
        if (imgcnt === 3) {
            setImgCnt(0)
        }
        setMage(slide[imgcnt])
    }

    function slidedecre() {
        setImgCnt(imgcnt - 1)
        if (imgcnt === 0) {
            setImgCnt(3)
        }
        setMage(slide[imgcnt])
    }


    let alltast = userdata.map((key) => {
        return (
            <>
                <tr>
                    <td> {key.user_name} </td>
                    <td> {key.taskid} </td>
                    <td> {key.tast_name} </td>
                    <td> {key.tast_des} </td>
                    <td> {key.start_date} </td>
                    <td> {key.end_date} </td>
                    <td> {key.submit_date} </td>
                </tr>
            </>
        )

    })


    return (
        <>
            <main className=" w-[90vw] m-auto " >

                <section>
                    <div className=" w-[70vw] h-[450px] m-auto bg-[#e7e7e7] " >
                        <h1 className='text-[30px] text-center ' > Image Slider  </h1>
                        <div className='w-[95%] h-[80%] m-auto rounded-lg '>
                            <img src={mage} className=" w-[100%] h-[100%] " />
                        </div>

                        <div className='flex justify-between ' >
                            <div className='slide-btn' onClick={slidedecre}  > &#8592; </div>
                            <div className='slide-btn' onClick={slideincre} > &#8594; </div>
                        </div>
                    </div>
                </section>



                <section className='bg-[#f2f2f2]' >
                    <h1 className='text-[30px] text-center ' > Cards Section  </h1>

                    <div className="cards flex justify-around items-center p-5  flex-wrap " >
                        {imageswithcontent}
                    </div>
                </section>


                <section className='bg-[#f0f0f0]' >
                    <div className=' table w-[400px] m-auto'>
                        <h1 className='text-[22px] m-[10px] '> User Data from  Database </h1>
                        <table>
                            <tr>
                                <th> Name </th>
                                <th> Email </th>
                            </tr>
                            {userData}
                        </table>
                    </div>
                </section>



                <section>
                    <h1> Show All Task </h1>


                    <table>
                        <tr>
                            <th> Name </th>
                            <th> Task Id </th>
                            <th> Task Name </th>
                            <th> Task Des </th>
                            <th> Task Start </th>
                            <th> Task End </th>
                            <th> Task Submit </th>
                        </tr>
                        {alltast}
                    </table>


                </section>

            </main>
        </>
    )
}
export default Home