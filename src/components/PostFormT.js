
import { useState } from "react";

export default function PostForm({ savePost, post }){
    const [tid, setTid] = useState(0); 
    const [uid, setUid] = useState(0); // uid=userid
    const [gid, setGid] = useState(0); // gid=group id
    const [taskheadline, setTaskheadline] = useState("")
    const [taskdescription, setTaskDescription] = useState("")
    const [errorMessage, setErrorMessage] = useState("");

async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
        taskheadline : taskheadline,
        taskdescription : taskdescription,
        gid: parseInt(gid),
        uid: parseInt(uid),
        tid: parseInt(tid)
    }

   const validForm = true; 
   if (validForm) {
    savePost(formData);
   } else {
    setErrorMessage("Fill out all the input fields.");
   }
}

return (
    <form onSubmit={handleSubmit}>
        <h3>Create new task</h3>
        <label>
        Task id<input type="number" name="tid" value={tid} placeholder="Type in task id" onChange={e => setTid(e.target.value)} />
        </label>
        <label>
        Group id (0 = personal task)<input type="number" name="gid" value={gid} placeholder="Type in group id" onChange={e => setGid(e.target.value)} />
        </label>
       <label>
        User id<input type="number" name="uid" value={uid} placeholder="Type in unique user id number" onChange={e => setUid(e.target.value)} />
        </label>

        <label>
        Task headline<input type="text" name="taskheadline" value={taskheadline} placeholder="Type in username" onChange={e => setTaskheadline(e.target.value)} />
        </label>   
       
        <label>
        Description<textarea name="taskdescription" value={taskdescription} placeholder="Type in description" onChange={e => setTaskDescription(e.target.value)} style={{display : "block", width: "90%" , height: "100px", margin: "10px 10px"}}/>
     </label>
    
     <p className="text-error">{errorMessage}</p>
     <button type="submit">Save</button>
     </form>
 );

}
