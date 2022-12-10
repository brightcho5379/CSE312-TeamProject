import React, {useEffect, useState, Component} from 'react';
import axios from 'axios';

const Profile = () => {

  const[account, setAccount] = useState([]);

  useEffect(() => {
    // Fetch the data from the back-end
    axios.get('http://localhost:8080/user/profile')
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
        <h1>Profile Information:</h1>

      </div>
    );
  
}
export default Profile;
// ReactDOM.render(<UserProfile />, document.getElementById('root'));