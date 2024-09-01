import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function Details() {
  const [getDetails, setGetDetails] = useState([]);
  const [getingredient, setGetIngredient] = useState([]);
  // const [getmeasure, setGetMeasure] = useState([]);
  const [getTags, setGetTags] = useState([]);
  let { id } = useParams();
  console.log(getDetails[0]?.strMeasure1);
  // console.log(getDetails[0].strTags.split(", "));
  // let x = [];
  // let y = x.push(getDetails[0]?.strTags.split(", "));
  // console.log(y);

  // function measure(meal) {
  //   // let measures = [];
  //   // for (let i = 1; i <= 20; i++) {
  //   //   console.log(meal[`strMeasure${i}`]);
  //   //   if (meal[`strMeasure${i}`] !== " ") {
  //   //     measures.push(meal[`strMeasure${i}`]);
  //   //   }
  //   // }
  //   // console.log(meal);
  //   // console.log(ingredents);
  //   // setGetMeasure(measures);
  //   // console.log(getingredient);
  // }

  function ingredents(meal) {
    let ingredents = [];
    for (let i = 1; i <= 20; i++) {
      console.log(meal[`strIngredient${i}`]);
      if (meal[`strIngredient${i}`] !== "" && meal[`strMeasure${i}`] !== " ") {
        // ingredents.push(meal[`strMeasure${i}`], meal[`strIngredient${i}`]);
        ingredents.push(
          `${meal[`strMeasure${i}`]}${meal[`strIngredient${i}`]}`
        );
      }
    }
    // console.log(meal);
    console.log(ingredents);
    setGetIngredient(ingredents);
    // console.log(getingredient);
    console.log(getingredient);
  }

  async function getDataDetails() {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        console.log(res?.data.meals);
        setGetDetails(res?.data?.meals);
        // measure(res?.data?.meals[0]);
        ingredents(res?.data?.meals[0]);
        setGetTags(res?.data?.meals[0].strTags.split(", "));
        console.log(getTags);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getDataDetails();
  }, []);

  return (
    <>
      {getDetails[0] ? (
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img
              src={getDetails[0]?.strMealThumb}
              className="w-100 rounded-3"
              alt="image"
            />
            <h2 className="text-white">{getDetails[0]?.strMeal}</h2>
          </div>
          <div className="col-md-8 col-sm-12 text-white">
            <h2>Instructions</h2>
            <p>{getDetails[0]?.strInstructions}</p>
            <h3>Area: {getDetails[0]?.strArea}</h3>
            <h3 className="my-3">Category: {getDetails[0]?.strCategory}</h3>
            <h3>Recipes:</h3>
            <ul className="mt-3 d-flex flex-wrap align-items-center list-unstyled">
              {getingredient.map((ing, index) => (
                <li
                  key={index}
                  className="bg-info bg-opacity-50 m-1 py-2 px-3 rounded-3"
                >
                  {ing}
                </li>
              ))}
            </ul>
            <h3>Tags:</h3>
            <ul className="mt-3 list-unstyled d-flex flex-wrap align-items-center gap-2">
              {getTags.map((tag, index) => (
                <li
                  key={index}
                  className=" bg-primary bg-opacity-50 py-2 px-3 rounded-3"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              target="_blank"
              href={getDetails[0]?.strSource}
              className="btn btn-success m-1"
            >
              Source
            </a>
            <a
              target="_blank"
              href={getDetails[0]?.strYoutube}
              className="btn btn-danger m-1"
            >
              Youtube
            </a>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
