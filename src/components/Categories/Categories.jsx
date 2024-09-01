import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function Categories() {
  const [allData, setAllData] = useState();

  async function getAllCat() {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log(res?.data?.categories);
        setAllData(res?.data?.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllCat();
  }, []);

  return (
    <>
      {allData ? (
        <>
          <h1 className="head mb-4">All Categories :</h1>
          <div className="row row-gap-5">
            {allData?.map((data) => (
              <Link
                to={`/filtercategories/${data.strCategory}`}
                key={data.idCategory}
                className="mealname col-md-4 col-lg-3 col-sm-6 pointer overflow-hidden position-relative rounded-4"
              >
                <img
                  src={data.strCategoryThumb}
                  alt={data.strCategory}
                  className="w-100 rounded-4"
                />
                <div className="tran text-center position-absolute p-1 top-100 start-0 full bg-opacity-50 bg-white text-black p-3">
                  <h3>{data.strCategory}</h3>
                  <span className="">{data.strCategoryDescription}</span>
                </div>
              </Link>
            ))}
            {/* <div className="col-md-3 col-sm-6">
          <img src={imge} alt="" />
          <div>hello</div>
        </div> */}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
