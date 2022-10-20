import { useNavigate, useParams } from "react-router-dom";
import PostForm from '../components/PostFormT';

export default function CreatePage() {
    const params = useParams();
    const navigate = useNavigate();

    async function createPost(newPost) {
        const url = "https://groupexample-fcc00-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";
        
        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(newPost) 
        });
        const data = await response.json();
        console.log(data);
        navigate(`/homepage/${params.currentUser}`);
    }

    return (
       <section className="page">
        <h1>Create New Task</h1>
            <PostForm savePost={createPost} />
       </section>
    );
}
