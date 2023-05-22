import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useEffect ,useState} from "react";
import './style.css';

export default function Counter(){
    const [counter,setConter] = useState(0);
    useEffect(()=>{
        document.title ="شمارنده" + " " + counter
    },[counter])
    function increase(){
        setConter(counter+1);
    }
    function decrease(){
        setConter(counter-1);
    }
    return(
        <Fragment>
            <div className="header">
                <Link to="/"> go to home</Link>
            </div>
            <div className="container">
                <div className="holder">
                    <div className="buttonBox">
                        <button onClick={increase}>Counter-increase</button>
                        <button onClick={decrease}>Counter-decrease</button>
                    </div>
                    <div className="textHolder">
                        <p>counter = {counter}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}