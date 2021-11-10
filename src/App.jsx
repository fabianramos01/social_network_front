import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/home";
import PostDetail from "./pages/PostDetail/postDetail";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <div className="App">
            <div className="content">
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:id" element={<PostDetail />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </div>
    );
}

export default App;
