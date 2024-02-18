import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

let Login = () => {
    let [input, setInput] = useState({})
    let [admin, setAdmin] = useState([])
    let [user, setUser] = useState([])
    let myNav = useNavigate()
    let inputHandle = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput({ ...input, [name]: value })
    }


    useEffect(() => {
        axios.get('http://localhost:8000/api/admin/adminlogin/').then((res) => {
            setAdmin(res.data)

        })
        axios.get('http://localhost:8000/api/user/users/').then((res) => {
            setUser(res.data)
        })
    }, [])



    function submitform() {
        if (input.check === "admin") {

            if (input.username === admin[0].email) {
                if (input.password === admin[0].password) {
                    myNav("home")
                }
                else {
                    alert("Password not match !!")
                }


            }
            else {
                alert("Email not match !!")
            }
        }
        else if (input.check === "user") {
            for (var i = 0; i < user.length; i++) {
                if (input.username === user[i].email) {
                    if (input.password === user[i].password) {
                        window.localStorage.setItem("userid", user[i].id)
                        myNav("user")
                    }
                    else {
                        alert("Password not match !!")

                    }
                }
            }

        }

    }

    return (
        <>
            <section>
                <div className=" register w-[400px] m-auto p-5 bg-[#97b1db] rounded-lg " >
                    <h1 className=" text-[22px] " > Login </h1>

                    <label> username </label>
                    <input type="text" name="username" value={input.username} onChange={inputHandle} />
                    <br />
                    <label> Password </label>
                    <input type="password" name="password" value={input.password} onChange={inputHandle} />
                    <br />
                    <label> Please </label>
                    <input style={{ "width": "20px" }} type="radio" name="check" value="admin" onChange={inputHandle} /> Admin
                    <input style={{ "width": "20px" }} type="radio" name="check" value="user" onChange={inputHandle} /> User
                    <br />
                    <div className="text-center" >
                        <button onClick={submitform}> Submit </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login