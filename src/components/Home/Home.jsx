import axios from "axios";
import React, { useEffect, useState } from "react";
import imge from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function Home() {
  const [allData, setAllData] = useState();

  async function getAllData() {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        // console.log(res?.data?.meals);
        setAllData(res?.data?.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {allData ? (
        <>
          <h1 className="head mb-4">All Meals :</h1>
          <div className="row row-gap-5">
            {allData?.map((data) => (
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
