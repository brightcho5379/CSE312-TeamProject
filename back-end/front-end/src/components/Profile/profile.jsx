import React, {useEffect, useState, Component} from 'react';
import axios from 'axios';
const axiosInstance = axios.create({
  withCredentials: true
});

const Profile = () => {

  const[account, setAccount] = useState([]);

  useEffect(() => {
    // Fetch the data from the back-end
    axiosInstance.get('http://localhost:8080/user/profile')
      .then(res => {
        setAccount(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log(account)
  
    return (
      <div>
        <div>
        <h1>Profile Information:</h1>
        <p>Username: {account.username}</p>
        <p>Email: {account.email}</p>
        <p>University: {account.university}</p>
        </div>

      </div>
    );
  
}
export default Profile;
// ReactDOM.render(<UserProfile />, document.getElementById('root'));