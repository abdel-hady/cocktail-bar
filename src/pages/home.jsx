import React, { useEffect, useState } from "react";
import axios from "axios";
import { FcCheckmark } from "react-icons/fc";
import Select from "react-select";
import {
  HomeStyle,
  ErrorBarName,
  ErrorFirstName,
  ErrorLastName,
  ErrorPhone,
  ErrorEmail,
  StepOne,
  StepTwo,
  StepThree,
  ErrorIngredients,
} from "../components/styles/Basic-fields";
import GlobalStyles from "../components/Global";
import Logo from "../assets/—Pngtree—cocktail bar with icon neon_6576512.png";
import Image from "../assets/vecteezy_gnomes-surfboard-summer-watercolor-clipart_9693973_145.png";
import "react-phone-number-input/style.css";
import { SyncLoader } from "react-spinners";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import swal from "sweetalert";
/*
I have exams at the university,
so I did the work quickly. 
I know that this page and the layout page should be divided into several components. 
I will do that when I finish my exam.
Thank you.
I hope you like it.
*/
const Home = () => {
  const currentYear = new Date().getFullYear();
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [glasses, setGlasses] = useState("");
  const [categories, setCategories] = useState("");
  const [alcoholic, setAlcoholic] = useState("");
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [visibilityBarName, setVisibilityBarName] = useState("hidden");
  const [visibilityFirstName, setVisibilityFirstName] = useState("hidden");
  const [visibilitylastName, setVisibilitylastName] = useState("hidden");
  const [visibilityPhone, setVisibilityPhone] = useState("hidden");
  const [visibilityEmail, setVisibilityEmail] = useState("hidden");
  const [visibilityIngredients, setVisibilityIngredients] = useState("hidden");
  const [valuePhoneNumber, setValuePhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [array, setArray] = useState();
  const [data, setData] = useState({
    barName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    categories: "Ordinary Drink",
    typeOfDrinks: "Alcoholic",
    glasses: "Highball glass",
    ingredients: [],
  });
  const [error, setError] = useState({
    barName: "The field is required",
    firstName: "The field is required",
    lastName: "The field is required",
    phone: "The field is required",
    email: "The field is required",
    ingredients: "Please select ingredients",
  });
  let allCocktails;
  if (drinks) {
    if (array)
      allCocktails = drinks
        .filter(
          (items) =>
            items.strAlcoholic === data.typeOfDrinks &&
            items.strCategory === data.categories &&
            items.strGlass === data.glasses &&
            array.filter((item) => items.strIngredient1 === item.value).length >
              0
        )
        .map((item, index) => (
          <div key={index} className="img-cocktails">
            <img
              key={index}
              className="img-cocktail"
              src={item.strDrinkThumb}
              alt="logo-chef"
            />
          </div>
        ));
  }

  useEffect(() => {
    if (showProducts)
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
        .then((res) => {
          setDrinks(res.data.drinks);
          setLoading(true);
        })
        .catch((err) => {
          swal({
            title: "error",
            text: `${err.message}`,
            icon: "error",
          });
        });
    if (stepThree)
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        .then((res) => {
          res.data.drinks.map((item) =>
            setIngredients((ingredients) => [
              ...ingredients,
              { value: item.strIngredient1, label: item.strIngredient1 },
            ])
          );
        })
        .catch((err) => {
          swal({
            title: "error",
            text: `${err.message}`,
            icon: "error",
          });
        });
    if (!stepTwo) {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
        .then((res) => {
          setGlasses(res.data.drinks);
        })
        .catch((err) => {
          swal({
            title: "error",
            text: `${err.message}`,
            icon: "error",
          });
        });
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then((res) => {
          setCategories(res.data.drinks);
        })
        .catch((err) => {
          swal({
            title: "error",
            text: `${err.message}`,
            icon: "error",
          });
        });
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
        .then((res) => {
          setAlcoholic(res.data.drinks);
        })
        .catch((err) => {
          swal({
            title: "error",
            text: `${err.message}`,
            icon: "error",
          });
        });
    }
  }, [stepOne, stepTwo, stepThree, showProducts]);

  const handleSendData = (e) => {
    e.preventDefault();
    if (
      data.barName !== "" &&
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.phone !== "" &&
      data.email !== ""
    ) {
      setStepOne(false);
      setStepTwo(true);
    }
    if (data.barName == "") {
      setVisibilityBarName("visible");
      setError({ ...error, barName: "The field is required" });
    }
    if (data.firstName == "") {
      setVisibilityFirstName("visible");
      setError({ ...error, firstName: "The field is required" });
    }
    if (data.lastName == "") {
      setVisibilitylastName("visible");
      setError({ ...error, lastName: "The field is required" });
    }
    if (data.phone == "") {
      setVisibilityPhone("visible");
      setError({ ...error, phone: "The field is required" });
    }
    if (data.email == "") {
      setVisibilityEmail("visible");
      setError({ ...error, email: "The field is required" });
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeBarName = (e) => {
    setData({
      ...data,
      barName: e.target.value,
    });
    if (e.target.value === "") {
      setError({ ...error, barName: "The field is required" });
      setVisibilityBarName("visible");
    } else {
      setVisibilityBarName("hidden");
      setError({ ...error, barName: "The field is required" });
    }
  };
  const handleChangeFirstName = (e) => {
    setData({
      ...data,
      firstName: e.target.value,
    });
    if (e.target.value === "") {
      setError({ ...error, firstName: "The field is required" });
      setVisibilityFirstName("visible");
    } else {
      setVisibilityFirstName("hidden");
      setError({ ...error, firstName: "The field is required" });
    }
  };
  const handleChangelastName = (e) => {
    setData({
      ...data,
      lastName: e.target.value,
    });
    if (e.target.value === "") {
      setError({ ...error, lastName: "The field is required" });
      setVisibilitylastName("visible");
    } else {
      setVisibilitylastName("hidden");
      setError({ ...error, lastName: "The field is required" });
    }
  };
  const handleChangePhone = (event) => {
    if (event && isPossiblePhoneNumber(event) && isValidPhoneNumber(event)) {
      setError({ ...error, phone: "Invalid phone number" });
      setData({
        ...data,
        phone: event,
      });
      setValuePhoneNumber(event);
      setVisibilityPhone("hidden");
    } else {
      setError({ ...error, phone: "Invalid phone number" });
      setValuePhoneNumber(event);
      setVisibilityPhone("visible");
      setData({
        ...data,
        phone: "",
      });
    }
  };
  const handleChangeEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError({ ...error, email: "Email is invalid" });
      setVisibilityEmail("visible");
      setData({
        ...data,
        email: "",
      });
    } else {
      setData({
        ...data,
        email: event.target.value,
      });
      setError({ ...error, email: "Email is invalid" });
      setVisibilityEmail("hidden");
    }
    setMessage(event.target.value);
  };

  const handleSendAdvancedData = (e) => {
    e.preventDefault();
    setStepOne(false);
    setStepTwo(false);
    setStepThree(true);
  };
  const handlecomfirmData = (e) => {
    e.preventDefault();
    if (
      array&&array.length != 0 &&
      data.barName !== "" &&
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.phone !== "" &&
      data.email !== ""
    ) {
      setShowProducts(true);
    }

    if (!array||array.length===0) {
      setVisibilityIngredients("visible");
      setError({ ...error, ingredients: "Please select ingredients" });
    }
    if (data.barName == "") {
      setVisibilityBarName("visible");
      setError({ ...error, barName: "The field is required" });
    }
    if (data.firstName == "") {
      setVisibilityFirstName("visible");
      setError({ ...error, firstName: "The field is required" });
    }
    if (data.lastName == "") {
      setVisibilitylastName("visible");
      setError({ ...error, lastName: "The field is required" });
    }
    if (data.phone == "") {
      setVisibilityPhone("visible");
      setError({ ...error, phone: "The field is required" });
    }
    if (data.email == "") {
      setVisibilityEmail("visible");
      setError({ ...error, email: "The field is required" });
    }
  };

  const handleSelect = (newData) => {
    setVisibilityIngredients("hidden");
    setArray(newData);
    setData({ ...data, ingredients: [newData] });
  };
  return (
    <>
      <GlobalStyles />
      <HomeStyle>
        <div className="bg-defualt"></div>
        <div>
          <div className="logo">
            <div className="logo-bar-name">
              <img className="logo-chef" src={Logo} alt="logo-chef" />
              {showProducts && <div>{data.barName}</div>}
            </div>
            <div>lang</div>
          </div>
          {!showProducts && (
            <div className="content">
              <div>
                <div className="all-steps">
                  <StepOne stepOne={stepOne} className="step1">
                    {stepOne ? 1 : <FcCheckmark size="10px" className="img" />}
                  </StepOne>
                  <div>Basic fields --- </div>
                  <StepTwo stepTwo={stepTwo} className="step1">
                    {stepOne && !stepTwo ? (
                      2
                    ) : !stepOne && stepTwo ? (
                      2
                    ) : (
                      <FcCheckmark size="10px" className="img" />
                    )}
                  </StepTwo>
                  <div>advanced fields --- </div>
                  <StepThree stepThree={stepThree} className="step1">
                    {stepOne || stepTwo ? (
                      3
                    ) : stepThree ? (
                      3
                    ) : (
                      <FcCheckmark size="10px" className="img" />
                    )}
                  </StepThree>{" "}
                  <div>comfirm</div>
                </div>
                {stepOne ? (
                  <p>
                    Welcome to Cocktail Bar, please enter the information below
                  </p>
                ) : stepTwo ? (
                  <p>Choose the details of the drinks you want</p>
                ) : (
                  <p>Press the Continue button if you are sure of this data</p>
                )}
              </div>
              <div className="image-forms">
                <div className="image">
                  <img className="" src={Image} alt="logo-chef" />
                </div>

                <div className="steps">
                  <div className="basic-fields">
                    {stepOne && (
                      <form className="first-stage" onSubmit={handleSendData}>
                        <div className="label-input">
                          <label>Bar Name</label>
                          <input
                            id="name"
                            type="text"
                            value={data.barName}
                            onChange={handleChangeBarName}
                            placeholder="Name"
                          />
                          <ErrorBarName
                            visibility={visibilityBarName}
                            style={{ color: "red" }}
                          >
                            {error && error.barName ? error.barName : ""}
                          </ErrorBarName>
                        </div>
                        <div className="label-input">
                          <label>First Name</label>
                          <input
                            id="name"
                            type="text"
                            value={data.firstName}
                            onChange={handleChangeFirstName}
                            placeholder="Name"
                          />
                          <ErrorFirstName
                            visibility={visibilityFirstName}
                            style={{ color: "red" }}
                          >
                            {error && error.firstName ? error.firstName : ""}
                          </ErrorFirstName>
                        </div>
                        <div className="label-input">
                          <label>Last Name</label>
                          <input
                            id="name"
                            type="text"
                            value={data.lastName}
                            onChange={handleChangelastName}
                            placeholder="Name"
                          />
                          <ErrorLastName
                            visibility={visibilitylastName}
                            style={{ color: "red" }}
                          >
                            {error && error.lastName ? error.lastName : ""}
                          </ErrorLastName>
                        </div>
                        <div className="label-input">
                          <label>Phone Number</label>
                          <PhoneInput
                            id="name"
                            type="text"
                            value={valuePhoneNumber}
                            onChange={handleChangePhone}
                            placeholder="+44 20 7947 6330"
                          />
                          <ErrorPhone
                            visibility={visibilityPhone}
                            className="error-phone"
                            style={{ color: "red" }}
                          >
                            {error && error.phone ? error.phone : ""}
                          </ErrorPhone>
                        </div>
                        <div className="label-input">
                          <label>Email Address</label>
                          <input
                            id="message"
                            name="message"
                            value={message}
                            placeholder="example@gmail.com"
                            onChange={handleChangeEmail}
                          />
                          <ErrorEmail
                            visibility={visibilityEmail}
                            className="error-phone"
                            style={{ color: "red" }}
                          >
                            {error && error.email ? error.email : ""}
                          </ErrorEmail>
                        </div>
                        <div className="next-step">
                          <button>Next</button>
                        </div>
                      </form>
                    )}
                    {stepTwo && (
                      <form
                        className="first-stage"
                        onSubmit={handleSendAdvancedData}
                      >
                        <div className="label-input">
                          <label>categories</label>
                          <select
                            onChange={(e) => {
                              setData({
                                ...data,
                                categories: e.target.value,
                              });
                            }}
                          >
                            {categories &&
                              categories.map((item, index) => (
                                <option key={index} value={item.strCategory}>
                                  {item.strCategory}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="label-input">
                          <label>Type of drink</label>
                          <select
                            onChange={(e) => {
                              setData({
                                ...data,
                                typeOfDrinks: e.target.value,
                              });
                            }}
                          >
                            {alcoholic &&
                              alcoholic.map((item, index) => (
                                <option key={index} value={item.strAlcoholic}>
                                  {item.strAlcoholic}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="label-input">
                          <label>glasses</label>
                          <select
                            onChange={(e) => {
                              setData({
                                ...data,
                                glasses: e.target.value,
                              });
                            }}
                          >
                            {glasses &&
                              glasses.map((item, index) => (
                                <option key={index} value={item.strGlass}>
                                  {item.strGlass}
                                </option>
                              ))}
                          </select>
                        </div>

                        <div className="next-step">
                          <button>Next</button>
                        </div>
                      </form>
                    )}
                    {stepThree && (
                      <form
                        className="first-stage"
                        onSubmit={handlecomfirmData}
                      >
                        <div className="label-input">
                          <label>Bar Name</label>
                          <input
                            id="name"
                            type="text"
                            value={data.barName}
                            onChange={handleChangeBarName}
                            placeholder="Name"
                          />
                          <ErrorBarName
                            visibility={visibilityBarName}
                            style={{ color: "red" }}
                          >
                            {error && error.barName ? error.barName : ""}
                          </ErrorBarName>
                        </div>
                        <div className="label-input">
                          <label>First Name</label>
                          <input
                            id="name"
                            type="text"
                            value={data.firstName}
                            onChange={handleChangeFirstName}
                            placeholder="Name"
                          />
                          <ErrorFirstName
                            visibility={visibilityFirstName}
                            style={{ color: "red" }}
                          >
                            {error && error.firstName ? error.firstName : ""}
                          </ErrorFirstName>
                        </div>
                        <div className="label-input">
                          <label>Last Name</label>
                          <input
                            id="name"
                            type="text"
                            value={data.lastName}
                            onChange={handleChangelastName}
                            placeholder="Name"
                          />
                          <ErrorLastName
                            visibility={visibilitylastName}
                            style={{ color: "red" }}
                          >
                            {error && error.lastName ? error.lastName : ""}
                          </ErrorLastName>
                        </div>
                        <div className="label-input">
                          <label>Phone Number</label>
                          <PhoneInput
                            id="name"
                            type="text"
                            value={valuePhoneNumber}
                            onChange={handleChangePhone}
                            placeholder="+44 20 7947 6330"
                          />
                          <ErrorPhone
                            visibility={visibilityPhone}
                            className="error-phone"
                            style={{ color: "red" }}
                          >
                            {error && error.phone ? error.phone : ""}
                          </ErrorPhone>
                        </div>
                        <div className="label-input">
                          <label>Email Address</label>
                          <input
                            id="message"
                            name="message"
                            value={message}
                            placeholder="example@gmail.com"
                            onChange={handleChangeEmail}
                          />
                          <ErrorEmail
                            visibility={visibilityEmail}
                            className="error-phone"
                            style={{ color: "red" }}
                          >
                            {error && error.email ? error.email : ""}
                          </ErrorEmail>
                        </div>
                        <div className="label-input">
                          <label>categories</label>
                          <select
                            value={data.categories}
                            onChange={(e) => {
                              setData({
                                ...data,
                                categories: e.target.value,
                              });
                            }}
                          >
                            {categories &&
                              categories.map((item, index) => (
                                <option key={index} value={item.strCategory}>
                                  {item.strCategory}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="label-input">
                          <label>Type of drink</label>
                          <select
                            value={data.typeOfDrinks}
                            onChange={(e) => {
                              setData({
                                ...data,
                                typeOfDrinks: e.target.value,
                              });
                            }}
                          >
                            {alcoholic &&
                              alcoholic.map((item, index) => (
                                <option key={index} value={item.strAlcoholic}>
                                  {item.strAlcoholic}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="label-input">
                          <label>glasses</label>
                          <select
                            value={data.glasses}
                            onChange={(e) => {
                              setData({
                                ...data,
                                glasses: e.target.value,
                              });
                            }}
                          >
                            {glasses &&
                              glasses.map((item, index) => (
                                <option key={index} value={item.strGlass}>
                                  {item.strGlass}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="label-input">
                          <label>Ingredients</label>
                          {ingredients && (
                            <Select
                              className="ingredients"
                              placeholder="Select ingredients"
                              color="red "
                              isMulti
                              onChange={handleSelect}
                              options={ingredients}
                              isSearchable={true}
                            ></Select>
                          )}
                          {array &&
                            array.map((item, index) => {
                              <div key={index}>{item.label}</div>;
                            })}

                          <ErrorIngredients
                            visibility={visibilityIngredients}
                            style={{ color: "red" }}
                          >
                            {error && error.ingredients
                              ? error.ingredients
                              : ""}
                          </ErrorIngredients>
                        </div>
                        <div className="next-step">
                          <button>Continue</button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {showProducts && (
            <div className="show-cocktails">
              {allCocktails && allCocktails.length ? (
                allCocktails
              ) : !loading ? (
                <SyncLoader color="purple" className="syncLoader" />
              ) : (
                <p className="empty">
                  We don't have a result that matches the specifications of the
                  beverage you selected
                </p>
              )}
            </div>
          )}
          {showProducts ? (
            <div className="footer">
              <div>
                Owner Name: {data.firstName} {data.lastName}
              </div>
              <div>Phone Number: {data.phone}</div>
              <div>Email: {data.email}</div>
              <div>pizza &copy; {currentYear}</div>
            </div>
          ) : (
            <div className="footer">
              <div>pizza &copy; {currentYear}</div>
            </div>
          )}
        </div>
      </HomeStyle>
    </>
  );
};

export default Home;
