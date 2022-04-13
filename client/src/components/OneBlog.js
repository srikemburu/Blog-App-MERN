// Get one blog from database
import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneBlog, deleteBlog } from '../services/blogs-api'
import '../custom.css'

export default function OneBlog() {
    // Object destructuring
    const { id } = useParams()
    const nav = useNavigate()

    const [oneBlog, setOneBlog] = useState({})

    console.log("id: ", id)
    // console.log("one blog: ", OneBlog)

    useEffect(() => {
        getOneBlog(id)
        .then(res => res.json())
        .then(res => setOneBlog(res))
    },[])
    console.log("res : ", oneBlog)

    const deleteTheBlog = () => {
        deleteBlog(id)
        nav('/')
    }

    return(
        <div> 
            <h3>Title: {oneBlog.title}</h3>
            <h4> {oneBlog.body}</h4>
            {/* <h4> {oneBlog.comments.cName}</h4> */}

            {/* {oneBlog.comments.map((comment,index) => {
                return (
                    <div className='commentGrid'>
                    <h4>User Name: {comment.cName}  || comments: {comment.cMessage} </h4>
                    </div>
                )
            })} */}
            
            <br/>
            <button onClick={() => {nav("/")}}>Blogs Lists</button>
            <br/><br/>
            {/* <button onClick={() => {nav(`/${id}/update`)}}>Edit</button> */}
            <button onClick={deleteTheBlog}>Delete</button>

        </div>
    )
}