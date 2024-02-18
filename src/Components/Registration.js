import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
let Registration = () => {
    let [input, setInput] = useState({})
    let myNav = useNavigate()
    function inputsubmit(e) {
        let name = e.target.name
        let value = e.target.value
        setInput({ ...input, [name]: value })
    }
    let submitButton = () => {

        console.log(input.name)
        console.log(input.email)
        console.log(input.password)
        if (input.name === undefined) {
            alert("Name can not be Empty")
        }
        else {
            if (input.email === undefined) {
                alert("Email can not be Empty")
            }
            else {
                if (input.password === undefined) {
                    alert("Passowrd can not be Empty")
                }
                else {
                   
                    axios.post('http://localhost:8000/api/user/users/', input).then(
                        (res)=> {
                            alert("Data Save")
                            myNav("/")

                        } )
                }
            }
        }
    }

    return (
        <>
            <div className=" register w-[400px] m-auto p-5 bg-[#97b1db] rounded-lg " >
                <div className="text-center" >
                    <h1 className=" text-[22px] " > Registration </h1>
                </div>
                <div>
                    <label> Name </label>
                    <input type="text" name="name" value={input.name} onChange={inputsubmit} />
                </div>

                <div>
                    <label> Email </label>
                    <input type="email" name="email" value={input.email} onChange={inputsubmit} />
                </div>

                <div>
                    <label> Password </label>
                    <input type="password" name="password" value={input.password} onChange={inputsubmit} />
                </div>

                <div className="text-center" >
                    <button onClick={submitButton} > Submit </button>
                </div>
            </div>
        </>
    )
}
export default Registration