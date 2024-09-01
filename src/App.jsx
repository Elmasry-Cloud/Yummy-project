import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Area from "./components/Area/Area";
import Ingredients from "./components/Ingredients/Ingredients";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Details from "./components/Details/Details";
import FilterCategories from "./components/FilterCategories/FilterCategories";
import FilterArea from "./components/FilterArea/FilterArea";
import FilterIngredients from "./components/FilterIngredients/FilterIngredients";

function App() {
  const [count, setCount] = useState(0);

  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "categories", element: <Categories /> },
        { path: "filtercategories/:cat", element: <FilterCategories /> },
        { path: "area", element: <Area /> },
        { path: "filterarea/:area", element: <FilterArea /> },
        { path: "ingredents", element: <Ingredients /> },
        { path: "filteringredents/:ing", element: <FilterIngredients /> },
        { path: "contact", element: <Contact /> },
        { path: "details/:id", element: <Details /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
