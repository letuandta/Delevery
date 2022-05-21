import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Api, { endpoints } from '../configs/Api'
import "../static/Profile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons"

const Profile = () => {

    const user = useSelector(state => state.user.user) 
    const [comment, setComment] = useState([])

    useEffect(() => {
        let loadComment = async () => {
            const res = await Api.get(endpoints["comment"](user.id))
            setComment(res.data)
        }

        loadComment()
    }, [])

    return (
        <>
        <div className='profile'>
            <div className='profile-info'>
                <div className='profile-info-image'>

                    {user.avatar != null
                    ? <img src={user.avatar}></img>
                    : <img src='/avt.png'></img>}
                
                </div>
                <div className='profile-info-detail'>
                    <span className='profile-info-detail-name'>{user.first_name} {user.last_name}</span>
                </div>
            </div>
            <div className='profile-comment'>
                <span style={{fontSize: "30px", fontWeight: "bold", color: "red"}}>comment</span>
                {comment.map(c => {
                return <div className='comment-root'>
                    <div style={{display: "flex", marginRight: "10px"}}>
                            {user.avatar != null
                            ? <img src={c.customer.avatar}></img>
                            : <img src='/avt.png'></img>}
                        <div style={{display: "flex", marginRight: "10px", flexDirection: "column"}}>
                            <div>
                                    <span className='comment-customer-name'><Link to="#"
                                        style={{textDecoration: "none", color: "black"}}
                                    >{c.customer.first_name} {c.customer.last_name}</Link></span>
                            </div>
                            <div className='comment-star-time'>
                                    <span>star</span>
                                    <span style={{float: "right"}}>
                                    <FontAwesomeIcon icon={faClock}/> : 
                                    <em>  {c.updated_date.slice(0, 10)}</em></span>
                            </div>
                            <div className='comment-content'>
                                {c.comment}
                             </div>
                        </div>
                    </div>
                </div>
                })
            }
             </div>
            </div>
        </>
    )
}

export default Profile