
import { useState } from "react";

export default function PostForm({ savePost, post }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");   
    const [uid, setUid] = useState(0); // uid=userid
    const [gid, setGid] = useState(0); // gid=group id
    const [errorMessage, setErrorMessage] = useState("");

async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        username : username,
        password : password,
        gid: parseInt(gid),
        uid: parseInt(uid)
    }

   const validForm = formData.username && formData.password && formData.uid && formData.gid;
   if (validForm) {
    savePost(formData);
   } else {
    setErrorMessage("Fill out all the input fields.");
   }
}

return (
    <form onSubmit={handleSubmit}>
        <h3>Create new user</h3>
        <label>
        Group id<input type="number" value={gid} name="gid" placeholder="Type in family id" onChange={e => setGid(e.target.value)} />
        </label>
       <label>
        User id<input type="number" value={uid} name="uid" placeholder="Type in unique user id number" onChange={e => setUid(e.target.value)} />
        </label>

        <label>
        Username<input type="text" value={username} name="username" placeholder="Type in username" onChange={e => setUsername(e.target.value)} />
        </label>   
       
        <label>
        Password<input type="text" value={password} name="password" placeholder="Type in password" onChange={e => setPassword(e.target.value)} />
     </label>
    
     <p className="text-error">{errorMessage}</p>
     <button type="submit">Save</button>
     </form>
 );

}
