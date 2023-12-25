import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import { useSelector } from "react-redux";
import Browse from './Browse'
 
const Body = () => {
  const user = useSelector((store) => store.user);

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: !user ? <Login /> : <Browse />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="h-full">
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
