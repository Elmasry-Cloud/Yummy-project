import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

export default function FilterCategories() {
  const [catData, setCatData] = useState();
  let { cat } = useParams();

  async function getFilterCat() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => {
        console.log(res?.data?.meals);
        setCatData(res?.data?.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getFilterCat();
  }, []);

  return (
    <>
      {catData ? (
        <>
          <h1 className="head mb-4">All Meals :</h1>
          <div className="row row-gap-5">
            {catData?.map((data) => (
              <Link
                to={`/details/${data.idMeal}`}
                key={data.idMeal}
                className="mealname col-md-4 col-md-3 col-sm-6 pointer overflow-hidden position-relative rounded-4"
              >
                <img
                  src={data.strMealThumb}
                  alt={data.strMeal}
                  className="w-100 rounded-4"
                />
                <h3 className="tran fw-bold position-absolute p-1 top-100 start-0 full d-flex align-items-center justify-content-center bg-opacity-50 bg-white text-black">
                  {data.strMeal}
                </h3>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
