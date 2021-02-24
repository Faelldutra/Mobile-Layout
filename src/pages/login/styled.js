import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:10%;
  position: relative;

  img {
    height: 150px;
  }
  P {
    color: yellow;
    font-family: "Montserrat", sans-serif;
    font-size: 4.5rem;
    font-weight: bold;
    font-style: italic;
  }
  span {
    color: white;
  }

  #backimg {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;

    img {
      height: 700px;
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
  }
`
export const Logo = styled.div`
  margin-top: 150px;
  flex-direction: column;
  width: 100%;
  display: flex;
  z-index: 2;

  p {
    color: yellow;
    font-family: "Montserrat", sans-serif;
    font-size: 4.5rem;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 0px;
  }
  span {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 4.5rem;
    font-weight: bold;
    font-style: italic;
  }
  .fontlogo {
    font-family: "Montserrat", sans-serif;
    color: #d4ccff;
    font-size: 2.5rem;
    font-style: normal;
  }
  .no-margin {
    margin: 0px;
  }
`
export const Login = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .focused{
      path{
          fill: #4C33CC;
      }
  }

  .notfocused{
    path{
          fill: #FFC042;
      }
  }
label{
    background: white;
    margin-bottom: 15px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    width: 80%;
   
   input{
      font-size: 45px;
      padding: 25px;
      border-style: none;
      outline: 0px;
      padding-left: 60px;
      border: 0px solid black; 
  }
  svg{
    width: 45px;
    height: 45px;
    margin-left: 24px;
    path{
        transition: .3s;
    }
  }
  input::placeholder{
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    color: #BEBCCC;
  }
}
.hide{
    display: none;
  }
  .error{
    display: flex;
    margin-bottom: 0px;
    
    p{
      width: 100%;
      font-family: "Montserrat", sans-serif;
      font-size: 3rem;
      color: white;
    }
  }

`;
export const CheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;
    flex-direction: column;
    padding-top: 2%;
    padding-bottom: 10%;

.senha{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
      font-size: 2.5rem;
      color: #D4CCFF;
      font-family: "Montserrat", sans-serif;
      }
  
  .checkbox{
    display: flex;
    align-items: center;
    padding-left: 2%;
    
      label{
          font-size: 2.5rem;
          color: #D4CCFF;
          margin-left: 50px;
          font-family: "Montserrat", sans-serif;
      }
      input{
          border-radius: 10px;   
      }
      input[type=checkbox] {
      transform: scale(4);
      
      }
      p{
          font-size: 2.5rem;
          color: #D4CCFF;
          font-family: "Montserrat", sans-serif;
      }
    }  
  }
   .button{
       display: flex;
       width: 100%;
       height: 20%;
       text-decoration: none;

      button{
        margin-top: 5%;
        width: 100%;
        padding: 5%;
        border-radius: 10px;
        font-size: 2.5rem;
        color: #4C33CC;
        background: #FFC042;
        font-family: "Montserrat", sans-serif;
        
      }
   }
`