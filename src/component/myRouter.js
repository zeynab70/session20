import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./homePage";
import Counter from "./counter";

const router=createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/counter",
        element:<Counter/>
    },
])
export default function MyRouter(){
    return(
        <RouterProvider router={router}/>
    )
}