import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Teacher from "../pages/Teacher";
import Question from "../pages/Question";
import Layout from '../layouts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function ReactRoutes() {
  // return <RouterProvider router={router}/>;
  return (
    <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/teacher" element={<Teacher/>} />
            <Route path="/question" element={<Question/>} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default ReactRoutes;
