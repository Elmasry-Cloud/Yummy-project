import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
// https://www.themealdb.com/api/json/v1/1/list.php?a=list

export default function Area() {
  const [allData, setAllData] = useState();

  async function getAllArea() {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => {
        console.log(res?.data?.meals);
        setAllData(res?.data?.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAllArea();
  }, []);

  return (
    <>
      {allData ? (
        <>
          <h1 className="head mb-4">Area :</h1>
          <div className="row row-gap-5">
            {allData?.map((data) => (
              <Link
                to={`/filterarea/${data.strArea}`}
                key={data.idMeal}
                className="mealname col-md-4 col-md-3 col-sm-6 pointer overflow-hidden rounded-4 text-decoration-none text-white text-center"
              >
                <div className="box p-4">
                  <i className="fa-solid fa-house-laptop fs-70"></i>
                  <h3 className="mt-3">{data.strArea}</h3>
                </div>
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
