import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DestinationPage } from "./pages/destination/DestinationPage";
import { CrewPage } from "./pages/crew/CrewPage";
import { TechnologyPage } from "./pages/technology/TechnologyPage";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";

function App() {

    return (
        <Router>
            <div className="main-container">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/destination" element={<DestinationPage />} />
                    <Route path="/crew" element={<CrewPage />} />
                    <Route path="/technology" element={<TechnologyPage />} />
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
