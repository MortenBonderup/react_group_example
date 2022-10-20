import { useEffect, useState } from "react";
import PostCard from "../components/Postcard";
import { useNavigate, useParams } from "react-router-dom";

export default function HomePage() {

  const [posts, setPosts] = useState([]);
  const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
  const params = useParams();
  const navigate = useNavigate();
  const currentUser = JSON.parse(params.currentUser);
      
  useEffect(() => {
    async function getPosts() {
      const url =  "https://groupexample-fcc00-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";
      const response = await fetch(url);
      const data = await response.json();
      const postsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      const personalTasks = postsArray.filter(usertask => usertask.gid === currentUser.gid)
      if (personalTasks.length > 0) {
        setPosts(personalTasks); // Update "posts" object array list. Set posts equal to postsArray
      } else {
        setIsPosts(false); // If no data is found, set isPosts to "false". "Noting to show" message is shown.
      }
    }
    getPosts();
  }, [currentUser]);

  function handleClick() {
    navigate(`/homepage/${params.currentUser}`);
  }


  return (
    <article className="page">
      <h1>Group tasks</h1>
      <p style={{color: "white", backgroundColor: "blue", textAlign:"center", width: "250px" , cursor: "pointer"}} onClick={handleClick}>Show personal tasks</p>
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
