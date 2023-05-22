import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function HomePage(){
    return(
        <Fragment>
            <div className="header">
                <Link to="/counter">go to counter </Link>
            </div>
        </Fragment>
    )
}