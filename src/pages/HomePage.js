import { useEffect, useState } from "react";
import PostCard from "../components/Postcard";
import { useNavigate, useParams } from "react-router-dom";

export default function HomePage() {

  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const params = useParams();
  const currentUser = JSON.parse(params.currentUser);
  const navigate = useNavigate();
      
  useEffect(() => {
    async function getPosts() {
      const url =  "https://groupexample-fcc00-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";
      const response = await fetch(url);
      const data = await response.json();
      const postsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      const personalTasks = postsArray.filter(usertask => usertask.uid === currentUser.uid && usertask.gid === 0)
      if (personalTasks.length > 0) {
        setPosts(personalTasks); 
      } else {
        setIsPosts(false); 
      }
    }
    getPosts();
  }, [currentUser]);

  function handleClick() {
    navigate(`/showgrouptasks/${params.currentUser}`);
  }

  function handleCreateTask() {
    navigate(`/createtask/${params.currentUser}`);
  }

  function handleCreateUser() {
    navigate(`/createuser/${params.currentUser}`);
  }

  return (
    <article className="page">
      <h1>Personal tasks</h1>
      <p style={{color: "white", backgroundColor: "blue", textAlign:"center", width: "250px", cursor: "pointer"}} onClick={handleClick}>Show group tasks</p>
      <p style={{color: "white", backgroundColor: "blue", textAlign:"center", width: "250px", cursor: "pointer"}} onClick={handleCreateTask}>Create task</p>
      <p style={{color: "white", backgroundColor: "blue", textAlign:"center", width: "250px", cursor: "pointer"}} onClick={handleCreateUser}>Create user</p>
      {isPosts ? (
        <div className="flexbox">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </article>
  );
}
