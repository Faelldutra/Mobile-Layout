import styled from 'styled-components';

export const Header = styled.header`
    background: #4C33CC;
    height: 470px;
    display: flex;
    width: 100%;
    flex-direction: column;
    
    .header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5%;
        margin-top: 8%;
         
        .img{
            background: yellow;
            height: 70px;
            width: 6%;
            border-radius: 10px;

            img{
                margin-top: 18px;
                margin-left: 13px;
                width: 42px;
                height: 33px;
            }
        }

        p{
        font-family: "Montserrat", sans-serif;
        font-size: 2.5rem;
        color: lightgrey;
        margin-bottom: 0px;
        margin-top: 0px;
        }     
    }

    .header2{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5%;
        margin-top: 10%;
          
        .img2{
            display: flex;
            align-items: center; 
        }

        p{
        font-family: "Montserrat", sans-serif;
        font-size: 2.5rem;
        color: lightgrey;
        margin-bottom: 0px;
        margin-top: 0px;
        }
        h1{
            color: white;
            font-family: "Montserrat", sans-serif;
            font-size: 4.5rem;
            font-style: bold;
        }
        img{
            width:50px;
            height:60px;
            margin-right: 50px;
        }     
    }

    .input{
        display: flex;
        width: 90%;
        align-items: center;
        padding: 0 5%;
        margin-top: 10%;
        background: white;
        margin: 5%;
        border-radius: 10px;
        box-shadow: #000 0px 34px 63px -47px;

        input{
            height: 150px;
            width: 90%;
            font-size:50px;
            border-style: none;    
        }
        input::placeholder{
            font-size: 50px;
            color: lightgrey;
            padding-left: 5%;
            outline: 0px;         
        }
        img{
            width: 60px;
            height: 60px;
        } 
    }
`
export const Corpo = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 5%;

    .entrega{
        align-items: center;
        padding-top: 15%;
        display: flex;
        justify-content: space-between;

        p{
            font-size: 3rem;
            font-family: "Montserrat", sans-serif;
            color: grey;
        }
        .line{
            width:30%;
            height: 5px;
            background: lightgrey;
        }    
    }

    .box{
        width:100%;
        height: 360px;
        background: white;
        margin-top: 7%;
        box-shadow: inset #000 0px 0px 96px -66px;
        
        .cabecalho{
            padding: 0 5%;
            display: flex;
            justify-content: space-between;
            margin-top: 7%;
            align-items: center;

            p{
                font-size: 2rem;
                font-family: "Montserrat", sans-serif;
                color: grey;
            }

            h1{
                font-size: 4rem;
                font-family: "Montserrat", sans-serif;
                color: grey;
            }
        }

        .time{

            padding: 0 5%;
            display: flex;
            justify-content: space-between;
            margin-top: 7%;
            align-items: center;

            .ball{
                width: 40px;
                height: 35px;
                background: white;
                border: solid lightgrey 7px;
                border-radius: 50%;
                transition: 1s;
            }
            .line2{
                background: lightgrey;
                width:350px;
                height: 5px;
                transition: 1s;
            }
        }

        .progress{
            padding: 0 5%;
            display: flex;
            justify-content: space-between;
            margin-top: 3%;
            align-items: center;
            margin-bottom: 7%;
        
            p{
                font-size: 2rem;
                font-family: "Montserrat", sans-serif;
                color: grey;
            }
        }
    }
        .rodape{
            width: 100%;
            background: #FFF1D6;
            height:122px;
            align-items: center;
            display: flex;
            padding: 0 5%;
            justify-content: space-between;
        
                p{
                    font-size: 3rem;
                    font-family: "Montserrat", sans-serif;
                }
                img{
                    width: 50px;
                    height: 25px;

                }           
        }

        #colors{

            .ball1{
                width: 40px;
                height: 35px;
                border: solid lightgrey 7px;
                border-radius: 50%;
                background: green;
                transition: 1s;
            }

            .line3{
                background: green;
                width:350px;
                height: 5px;
                transition: 1s;
            }
        }

`