import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

// https://www.themealdb.com/api/json/v1/1/list.php?i=list

export default function Ingredients() {
  const [allData, setAllData] = useState();

  async function getAllIng() {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((res) => {
        // if (res?.data?.meals.map((meal) => meal.strDescription !== null)) {
        //   setAllData(res.data.meals);
        // }
        console.log(res);
        setAllData(res?.data?.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAllIng();
  }, []);

  return (
    <>
      {allData ? (
        <>
          <h1 className="head mb-4">Ingredients :</h1>
          <div className="row row-gap-5">
            {allData?.map((data) =>
              data.strDescription ? (
                <Link
                  to={`/filteringredents/${data.strIngredient}`}
                  key={data.idMeal}
                  className="mealname col-md-4 col-md-3 col-sm-6 pointer overflow-hidden rounded-4 text-decoration-none text-white text-center"
                >
                  <div className="box p-4 overflow-hidden h-250">
                    <i className="fa-solid fa-drumstick-bite fs-70"></i>
                    <h3 className="mt-3">{data.strIngredient}</h3>
                    <p>{data.strDescription}</p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
