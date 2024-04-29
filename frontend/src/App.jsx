import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import LoggedOutUser from "./PrivateRoute/LoggedOutUser";
import Login from "./pages/Login";
import LoggedInUser from "./PrivateRoute/LoggedInUser";
import Registration from "./pages/Registration";
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedOutUser />}>
          <Route path="/signup" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
        <Route element={<LoggedInUser />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
