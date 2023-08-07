import AsideBar from "../pages/AsideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Tag() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    title: "",
   
  });

  const submitForm = (e) => {
    e.preventDefault();
    const userData = {
      title: user.title,
     
    };

    console.log(user);
    console.log(userData);

    axios
      .post("http://localhost:3007/tag", userData)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      });

      if(setUser){
        alert("Tag Created")
        setUser( {
            title: "",
        
        });
       }
  };

  useEffect(() => {
    fetch("http://localhost:3007/tag")
    .then((resp) => resp.json())
    .then((data) => {
        setTags(data);
        setLoading(false)
      

    });
   
  //   alert("Tag Created");
  //   setUser({
  //     title: "",
  
  // });

    
},[]);

const onDelete = (_id) => {
  axios.delete("http://localhost:300/tag/" + _id)
}

const setData = (data) => {
  console.log(data)

}


  return (
    <div>
      <AsideBar />
      <form className="form-content" onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="first_name">Tag</label>
          <input type="text" value={user.title} onChange={(e) => setUser({ ...user, title: e.target.value })}/>
        </div>

        
        
        <div className="form-btn">
          <button>Submit</button>
        </div>
      </form>

      <div className="admin-users">Tags</div>
            <div className="users-list">
                <table>
                    <th>Tag ID</th>
                    <th>Tag Title</th>
                    <th>Options</th>
                    
                </table>
                {loading === true ? (
                    <div>Loading please wait...</div>
                ) : (

                    tags.map((tag) => (
                <table >
                    <tr key={tag._id}>
                        
                       <td>{tag._id}</td>
                        <td>{tag.title}</td>
                        
                        <td key={user._id}>
                            <Link to={`/updateUsers/${tag._id}`}><button onClick={() => setData()}>Edit</button></Link>
                            <button onClick={() => onDelete(tag._id)}>Delete</button>
                        </td>
                    </tr>
                </table>
                    ))

                )}

            </div>
    </div>
  );
}

export default Tag;
