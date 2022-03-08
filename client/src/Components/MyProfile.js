import React, { useState, useEffect } from "react";

function MyProfile() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
      }, []);

      if(user){
          return <div>{user.username}</div>
      }
      else{
          return <div>Loading...</div>
      }

}

export default MyProfile;