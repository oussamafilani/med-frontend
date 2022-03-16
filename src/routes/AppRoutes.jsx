
import { Routes, Route} from "react-router-dom";
import routes from "./routes";
import AppLayout from "../Components/AppLayout";
import Login from "../Views/Login";

const AppRoutes = ()=>{

    return(
        <>
         <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/" element={<AppLayout />}>
            {
              routes
                .map(({ path, element }) => <Route path={path} element={element} key={path} />) // nested routes
            }

         </Route>
      </Routes>
        </>
    )

}


export default AppRoutes;