import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngContainer,
  OtherPart,
} from "./DetailsStyle";
import dietSvg from "../../assets/diet.svg";

const Details = () => {
  //!navigate'te yazdik pull with location
  const location = useLocation();
  //console.log(location.state.recipe);
  const recipe = location.state.recipe;
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h2 style={{ color: "rgb(56, 56, 61)" }}>Nutrients</h2>
          <p style={{ color: "rgb(56, 56, 61)" }}>
            {recipe.totalNutrients.CA.label} :{" "}
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
        </OtherPart>
        <IngContainer>
          <h3>TotalTime : {recipe.totalTime}</h3>
          <h3>TotalWeight : {recipe.totalWeight}</h3>
          <h3>Source : {recipe.source}</h3>
        </IngContainer>
        <ImgContainer>
          <img src={recipe.image} alt={recipe.label} />
        </ImgContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
