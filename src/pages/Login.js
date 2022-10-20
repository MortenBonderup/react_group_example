import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 📁 pages/HomePage.js
export default function HomePage() {
  // Defines initial states of data values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  async function getUsers() {
    const url = "https://groupexample-fcc00-default-rtdb.europe-west1.firebasedatabase.app/users.json";
      const response = await fetch(url);
      const data = await response.json();
         const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUsers(postsArray); // Update "posts" object array list. Set posts equal to postsArray
  };

  useEffect(() => {
    getUsers();
  }, []);

  // When the form is submitted, an object is created (formData)...
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
    };

    // Check to see if all fields were filled. If not, show an
    // error message. If everything is good, loop though the
    // list of users to find a match. If match, navigate to wash
    // overview and transfer user information as props.
    const validForm = formData.username && formData.password;
    if (validForm) {
      for (const user of users) {
        if (formData.username === user.username && formData.password === user.password) {
            console.log("bingo");
            const currentuser = {
              uid: user.uid,
              username: user.username,
              gid: user.gid
            }
            navigate(`/homepage/${JSON.stringify(currentuser)}`);
        }
      }
    } else {
      setErrorMessage("Please, fill in all fields.");
    }
  }

  return (
    <article className="page" style={{textAlign : "center"}}>
      <form onSubmit={handleSubmit} style={{display : "flex", justifyContent: "center"}}>
        <fieldset style={{ width: "250px" }}>
          <legend>Log in</legend>
          <label>
            Username{" "}
            <input
              type="text"
              name="username"
              placeholder="Type in username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </label>
          <label>
            Password&nbsp;{" "}
            <input
              type="password"
              name="password"
              placeholder="Type in password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p>{errorMessage}</p>
            <button style={{ float: "right" }}>Login</button>
            <button type="reset" style={{ float: "right" }}>
              Reset
            </button>
          </label>
        </fieldset>
      </form>
      <p>Morten, password</p>
      <p>Morten2, password2</p>
      </article>

  );
}