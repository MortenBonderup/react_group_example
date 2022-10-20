import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import CreateUser from "./pages/CreateUser";
import CreateTask from "./pages/CreateTask";
import LoginPage from "./pages/Login";
import ShowGroupTasks from "./pages/ShowGroupTasks"

function App() {
    // Nav is the visible navigation.
    // Routes defines different routes the app
    // can take - some might not be directly 
    // accessible by users and used by useNavigate.
    // See PostCard.js for an example.
    return (
        <main>
           <Nav />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/homepage/:currentUser" element={<HomePage />} />
                <Route path="/createuser/:currentUser" element={<CreateUser />} />
                <Route path="/createtask/:currentUser" element={<CreateTask />} />
                <Route path="/showgrouptasks/:currentUser" element={<ShowGroupTasks />} />
                <Route path="/about" element={<AboutPage />} />
                
            </Routes>
        </main>
    );
}

export default App;

/*<Route path="*" element={<Navigate to="/" />} /> */