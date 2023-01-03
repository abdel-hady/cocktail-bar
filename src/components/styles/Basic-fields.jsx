import styled from "styled-components";
export const HomeStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Cookie&family=Qwitcher+Grypen:wght@400;700&family=Yellowtail&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Cookie&family=Qwitcher+Grypen:wght@400;700&family=Roboto:wght@100;300;400;500;700;900&family=Yellowtail&display=swap");
  width: 100%;
  color: #1e1e1e;
  .logo {
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10%;
    font-family: "Cookie", cursive;
    font-size: 64px;
  }
  .logo-chef {
    width: 90px;
    height: 80px;
  }
  .logo-chef:hover {
    transform: scale(0.98);
  }
  .logo-bar-name{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    margin-bottom: 20px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
  .content {
    min-height: 80vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 5%;
  }
  .image-forms{
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image img {
    width: 70%;
    animation: moveImage 2s ease-out;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
  @keyframes moveImage {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .steps {
    width: 50%;
  }

  .basic-fields {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  .all-steps {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .all-steps div {
    margin: 0px 5px;
    font-weight: bold;
  }

  .first-stage {
    background: rgba(142, 74, 160, 0.9);
    padding: 20px;
    border-radius: 6px;
    width: 90%;
    box-shadow: 0px 0px 5px 0px blue;
  }

  .label-input {
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 20px;

  }

  label {
    color: white;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  input {
    padding: 15px;
    font-size: 18px;
    border-radius: 6px;
    outline: none;
    border: 1px solid black;
    color: black;
  }
  input::placeholder{
    color: black;
  }
  .next-step {
    display: flex;
    justify-content: flex-end;
  }

  button {
    background-color: green;
    color: white;
    padding: 15px;
    border-radius: 6px;
    font-weight: bold;
    border: 1px solid green;
    cursor: pointer;
  }

  select {
    width: 100%;
    font-size: 18px;
    padding: 15px;
    outline: 0;
    border-radius: 6px;
    outline: none;
    color: black;
    border: 1px solid green;
  }

  .ingredients > div {
      border: 1px solid green;
    outline: none;
    box-shadow: none;
    color: black;
    >div >div{
      color: black;
    padding 10px;
      font-size: 18px;
    }
  }

  .show-cocktails{
    
    min-height: 60vh;
    padding: 20px 10%;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    align-items: flex-start;

  }

  .img-cocktails{
    width: calc(( 100% / 4 ) - 40px);
    margin:5px;
  }

  .img-cocktails:nth-child(odd){
    animation:moveImageOdd 1s;
    animation-fill-mode: forwards;
  }
  .img-cocktail:nth-child(odd){
    animation: moveContinueOdd 3s ease-out infinite;
    animation-fill-mode: forwards;
  }

  @keyframes moveContinueOdd{
    0%{
      transform: rotate3d(1,0,0,0deg);
    }
    
    50%{
      transform: rotate3d(1,0,0,20deg);
    }

    100%{
      transform: rotate3d(1,0,0,0deg);
    }
  }

  .img-cocktails:nth-child(even){
    animation: moveImageEven 1s ease-out;
    animation-fill-mode: forwards;
  }

  @keyframes moveImageEven{
    0%{
      transform: translate3d(-300px,-50px,0px);
    }
    
    50%{
      transform: rotate3d(1,0,0,180deg)
    }

    100%{
      transform: translate3d(0px,0px,0px);
    }
  }

  @keyframes moveImageOdd{
    0%{
      transform: translate3d(300px,-50px,0px);
    }

    50%{
      transform-origin: top right;
      transform: rotate3d(0, 1, 0, 180deg);
    }

    100%{
      transform: translate3d(0px,0px,0px);
    }
  }

  .img-cocktail:hover{
    border-radius: 6px;
    animation: moveHover 1s ease-out;
  }

  @keyframes moveHover{
    0%{
      transform: translate3d(0px,0px,0px) scale(1) rotate(0deg);
    }
    
    50%{
      transform: translate3d(-5px,-5px,0px) scale(1.1) rotate(3deg);
    }

    100%{
      transform: translate3d(0px,0px,0px) scale(1) rotate(0deg);
    }
  }

  .img-cocktail{
    width: 100%;
    height: 100%;
    border-radius: 40%;
  }

  .footer {
    width: 100%;
    min-height: 10vh;
    min-height: 50px;
    padding: 25px 15px 15px 15px;
    margin-top: 50px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: #801b8d;
    box-shadow: 0px 0px 15px 0px #6b236b;
}
  .footer > div {
    margin-bottom: 15px;
    font-weight: bold;
    color: white;
  }
  .empty{
    text-align: center;
    width: 100%;
  }
  .syncLoader{
    position: absolute;
    top: 50%;
    left: 50%;
    display:flex;
    justify-content: center;
  }
  @media screen and (max-width:480px){

    .img-cocktails {
      width: calc(( 100% / 2 ) - 20px);
      margin: 5px;
    }
    .content{
      padding: 0px 2%;
    }

    .logo{
      padding: 5px 2%;
    }
    .logo-chef {
      width: 50px;
      height: 40px;
    }
    .logo-bar-name div{
      font-size: 44px;
    }
    .all-steps{
      height: 50px;
      font-size: 14px;
    }
    .all-steps div{
      margin: 0px 5px;
    }
    .all-steps .step1{
      width: 25px;
      height: 25px;
      margin: 0px;
    }

    .image{
      width: 20%;
    }

    .steps {
      width: 90%;
    }

    p{
      font-size: 24px;
    }
    .image-forms{
      margin-top: 0px;
      display: flex;
      flex-flow: column wrap;
    }

    input{
      width: 100%;
    }
    .PhoneInput{
      width: 100%;
    }
  }
  @media (min-width: 480px) and (max-width:768px){
    .img-cocktails {
      width: calc(( 100% / 2 ) - 20px);
      margin: 5px;
    }
    .content{
      padding: 0px 2%;
    }

    .logo{
      padding: 10px 2%;
    }
    .logo-chef {
      width: 50px;
      height: 40px;
    }
    .logo-bar-name div{
      font-size: 44px;
    }
    .all-steps{
      height: 50px;
      font-size: 16px;
    }
    .all-steps div{
      margin: 0px 5px;
    }
    .all-steps .step1{
      width: 25px;
      height: 25px;
      margin: 5px;
    }

    .image{
      width: 20%;
    }

    .steps {
      width: 90%;
    }

    p{
      font-size: 24px;
    }
    .image-forms{
      margin-top: 0px;
      display: flex;
      flex-flow: column wrap;
    }

    input{
      width: 100%;
    }
    .PhoneInput{
      width: 100%;
    }
  }
  @media (min-width: 768px) and (max-width:991px){
    .img-cocktails {
      width: calc(( 100% / 3 ) - 30px);
      margin: 5px;
  }
    .all-steps{
      height: 70px;
    }

    .image{
      width: 30%;
    }

    .steps {
      width: 80%;
    }

    p{
      font-size: 28px;
    }
    .image-forms{
      margin-top: 0px;
      display: flex;
      flex-flow: column wrap;
    }
  }
  
`;
export const ErrorBarName = styled.span((props) => ({
  visibility: props.visibility,
  marginTop: "5px",
}));
export const ErrorFirstName = styled.span((props) => ({
  visibility: props.visibility,
  marginTop: "5px",
}));
export const ErrorLastName = styled.span((props) => ({
  visibility: props.visibility,
  marginTop: "5px",
}));
export const ErrorPhone = styled.span((props) => ({
  visibility: props.visibility,
  marginTop: "5px",
}));

export const ErrorEmail = styled.span((props) => ({
  visibility: props.visibility,
  marginTop: "5px",
}));

export const StepOne = styled.div((props) => ({
  background: props.stepOne ? "green" : "white",
  color: "white",
  width: "25px",
  height: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  border: "1px solid green",
  fontWeight: "bold",
}));
export const StepTwo = styled.div((props) => ({
  background: props.stepTwo ? "green" : "white",
  color: props.stepTwo ? "white" : "black",
  width: "25px",
  height: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  border: "1px solid green",
  fontWeight: "bold",
}));

export const StepThree = styled.div((props) => ({
  background: props.stepThree ? "green" : "white",
  color: props.stepThree ? "white" : "black",
  width: "25px",
  height: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  border: "1px solid green",
  fontWeight: "bold",
}));

export const ErrorIngredients = styled.span((props) => ({
  visibility: props.visibility,
  marginTop: "5px",
}));

