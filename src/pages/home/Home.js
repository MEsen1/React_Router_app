import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { useEffect } from "react";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyle";
import homeSvg from "../../assets/home.svg";
import RecipieCardComp from "./RecipieCardComp";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const API_ID = {your_id};
const API_KEY = {your_key};

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipies, setRecipies] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const res = await axios.get(url);
      console.log(res.data.hits);
      // if (res.data.more) {
      //   console.log("No recipies for this query");
      // }
      setRecipies(res.data.hits);
      setQuery("");
    } else {
      console.log("please fill the form");
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipies ? (
        <MainContainer>
          {recipies.map((recipe, index) => (
            <RecipieCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
