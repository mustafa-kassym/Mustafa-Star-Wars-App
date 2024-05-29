import "./styles/App.css"
import Header from "./comps/Header";
import {useState} from "react";
import {useLocation} from "react-router";

function App() {

    let [isHomePage, setIsHomePage] = useState(true);
    let location = useLocation();


    return (
        <div className={location.pathname === "/" ? "AppHome" : "App"}>
            <Header setIsHomePage={setIsHomePage}/>
        </div>
    );
}

export default App;
