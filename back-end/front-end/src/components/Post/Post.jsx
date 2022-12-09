import React, {useState} from 'react'
import './Post.css'
import axios from 'axios'
import File from'react'

const axiosInstance = axios.create({
    withCredentials: true
});

const Post = () => {
    const [user, setUser] = useState({
        item: '', price: '', description: '', images: File
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const onChangeFile = (e) => {
        // Update the user.images state with the selected files
        setUser({...user, images: e.target.files[0]});
    };

    const postSubmit = async (e) => {
        e.preventDefault();
    
        // Create a new FormData object
        let formData = new FormData();
        // Append the other form fields to the form data object
        formData.append("item", user.item);
        formData.append("price", user.price);
        formData.append("description", user.description);
        // Append the file to the form data object
        formData.append("images", user.images);
        if (formData.keys().length === 0) {
            return;
        }
        try {
          // Send the form data object to the back-end with the appropriate request headers
        await axiosInstance.post("http://localhost:8080/api/post", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            });
            localStorage.setItem("firstPost", true);
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg);
        }
    };

    return (
        <div className="Post-page">
        <form onSubmit={postSubmit}>
        <h2>Post</h2>
        <input
            type="item"
            name="item"
            placeholder="Item"
            value={user.item}
            onChange={onChangeInput}
        />
        <input
            type="price"
            name="price"
            placeholder="Price"
            value={user.price}
            onChange={onChangeInput}
        />
        <br />
        <input
            type="description"
            name="description"
            placeholder="Description"
            value={user.description}
            onChange={onChangeInput}
        />
        <input
            id="form-file"
            type="file"
            name="images"
            accept=".jpg, .png"
            onChange={onChangeFile}
        ></input>

        <div className="Post-Button">
            <button type="submit">Post item</button>
        </div>
        </form>
    </div>    
    )
}

export default Post;