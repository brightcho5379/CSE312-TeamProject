import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Post.css'
import axios from 'axios'

const Post = () => {
    const [user, setUser] = useState({
        item: '', price: '', item_desc: '', image: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const postSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:8080/api/post', {...user})
            localStorage.setItem('firstPost', true)      
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="Post-page">
            <form onSubmit={postSubmit}>
                <h2>Post</h2>
                <input type="item" name="item" 
                placeholder="Item" value={user.item} onChange={onChangeInput} />
                <input type="price" name="price" 
                placeholder="Price" value={user.price} onChange={onChangeInput} />
                <br/>
                <input type="item_desc" name="item_desc"
                placeholder="Description" value={user.item_desc} onChange={onChangeInput} />
                <input type="file" name="file" accept="image/png, image/jpeg, image/jpg" value={user.image} onChange={onChangeInput}/>
                <div className="Post-Button">
                <Link to = '/'><button type="submit">Post item</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Post;