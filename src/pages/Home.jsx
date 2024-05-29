import React from 'react';
import "../styles/App.css";

const Home = () => {

    return (
        <div className="Wrapper" style={{zIndex: "-20"}}>
            <div className="ScrollText d-flex flex-column">
                <h1 className="HomeTitle">MUSTAFA'S STAR WARS APP</h1>
                <p>Welcome to my web application devoted to Star Wars</p>
                <p>This is the Home Page</p>
                <p>Use Navigation Bar above to move across pages</p>
                <p>Moreover, you can search for anything related to Star Wars with search feature</p>
            </div>
        </div>

    );
};

export default Home;