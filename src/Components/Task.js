import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

let Tast = () => {
    let iddd = window.localStorage.getItem('idd')

    let [input, setInput] = useState({})
    let [apidata, setApiData] = useState({})
    let myNav =  useNavigate()


    let inputHandle = (e) => {
        let name = e.target.name
        let value = e.target.value
        setInput({ ...input, [name]: value })
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/users/${iddd}/`).then((res) => {
            setApiData(res.data)
        })
    }, [])

    // console.log(input)

    function submitData() {
        axios.post(`http://localhost:8000/api/task/studenttask/`, input
        ).then((res) => {
            alert("Task Assign")
            myNav("/home")

        })
    }
    return (
        <>
            <div className=" register w-[400px] m-auto p-5 bg-[#97b1db] rounded-lg " >
                <h1 className=" text-[22px] " > Tast Section {iddd} </h1>

                <label> Task Id </label>
                <input type="text" name="taskid" value={input.taskid} onChange={inputHandle} />

                <label> Task Name </label>
                <input type="text" name="tast_name" value={input.tast_name} onChange={inputHandle} />

                <label> Task Des </label>
                <input type="text" name="tast_des" value={input.tast_des} onChange={inputHandle} />

                <label> User id </label>
                <input type="text" name="use_id" value={input.use_id} onChange={inputHandle} />

                <label> User Name </label>
                <input type="text" name="user_name" value={input.user_name} onChange={inputHandle} />

                <label> Start Date </label>
                <input type="date" name="start_date" value={input.start_date} onChange={inputHandle} />

                <label> End Date </label>
                <input type="date" name="end_date" value={input.end_date} onChange={inputHandle} />

                <label> Submit Date </label>
                <input type="date" name="submit_date" value={input.submit_date} onChange={inputHandle} />

                <div className="text-center" >
                    <button onClick={submitData} > Submit </button>
                </div>
            </div>




        </>
    )
}
export default Tast