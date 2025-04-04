import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
<h1>Welcome to Keri Bookstore</h1>
<p>Your one-stop shop for all things books!</p>     
<button onClick={() => navigate("/about")}>Go to About Page</button>
    </div>
  );
}

export default Home;
