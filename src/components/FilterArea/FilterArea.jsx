import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

// https://www.themealdb.com/api/json/v1/1/filter.php?a=American

export default function FilterArea() {
  const [areaData, setAreaData] = useState();
  let { area } = useParams();

  async function getFilterArea() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((res) => {
        console.log(res?.data?.meals);
        setAreaData(res?.data?.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getFilterArea();
  }, []);

  return (
    <>
      {areaData ? (
        <>
          <h1 className="head mb-4">All Meals :</h1>
          <div className="row row-gap-5">
            {areaData?.map((data) => (
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
