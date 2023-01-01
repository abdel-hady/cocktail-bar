import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const Home = () => {
  const Img = styled.img`
    width: 400px;
    height: 300px;
  `;
  const [drinks, setDrinks] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [glasses, setGlasses] = useState("");
  const [categories, setCategories] = useState("");
  const [alcoholic, setAlcoholic] = useState("");
  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => {
        console.log(res.data.drinks);
        setDrinks(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => {
        console.log(res.data.drinks);
        setIngredients(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
      .then((res) => {
        // console.log(res.data);
        setGlasses(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => {
        // console.log(res.data);
        setCategories(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
      .then((res) => {
        // console.log(res.data);
        setAlcoholic(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      fklsd
      {drinks &&
        drinks.map((item) => (
          <div>
            {/* {item.strIngredient1 == "Gin" && (
              <Img src={item.strDrinkThumb} alt="" />
            )} */}
            {item.strAlcoholic == "Alcoholic" && item.idDrink == "15288" && (
              <Img src={item.strDrinkThumb} alt="" />
            )}
            {/* <Img src={item.strDrinkThumb} alt="" /> */}
          </div>
        ))}
      {/* {ingredients && ingredients.map((item) => <div>{item.strIngredient1}</div>)} */}
      {/* {glasses && glasses.map((item) => <div>{item.strGlass}</div>)} */}
      {/* {categories && categories.map((item) => <div>{item.strCategory}</div>)} */}
      {alcoholic && alcoholic.map((item) => <div>{item.strAlcoholic}</div>)}
    </div>
  );
};

export default Home;
