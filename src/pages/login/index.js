import { Header, Logo, Login, CheckBox } from './styled';
import Logotipo from '../../assets/Logotipo.png';
import FF from '../../assets/FF.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {

  const [focusLogin, setFocusLogin] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(true);
  const [senha, setSenha] = useState('');
  const [login, setLogin] = useState('');
  const [route, setRoute] = useState('');

  const log = "root";
  const pass = "root";

  const handleLogin = () => {

    if (senha === pass && login === log) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }

  useEffect(() => {
    if (senha === pass && login === log) {
      setRoute(true);
    } else {
      setRoute(false);
    }
  }, [senha, pass, login, log]);

  return (
    <div>
      <Header>
        <div className="wrapper">
          <img src={Logotipo} alt="logotipo"></img>
          <p>FAST<span>FEET</span></p>
          <div id="backimg">
            <img src={FF} alt="logotipo de fundo"></img>
          </div>
        </div>
        <Logo>
          <p>ENTREGADOR,</p>
          <span>VOCÊ É NOSSO</span>
          <span>MAIOR VALOR</span>
          <p className="fontlogo">Faça seu login para</p>
          <p className="fontlogo no-margin">começar suas entregas</p>
        </Logo>
      </Header>
      <Login>
        <label>
          <svg className={focusLogin ? 'focused' : 'notfocused'} xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M8 8.83972C10.21 8.83972 12 7.04972 12 4.83972C12 2.62972 10.21 0.839722 8 0.839722C5.79 0.839722 4 2.62972 4 4.83972C4 7.04972 5.79 8.83972 8 8.83972ZM8 10.8397C5.33 10.8397 0 12.1797 0 14.8397V16.8397H16V14.8397C16 12.1797 10.67 10.8397 8 10.8397Z" fill="#4C33CC" />
          </svg>
          <input value={login} onChange={(e) => setLogin(e.target.value)} onBlur={() => setFocusLogin(false)} onFocus={() => setFocusLogin(true)} type="text" placeholder="CPF" />
        </label>
        {!showPassword &&
          <label>
            <svg id="show" className={focusPassword ? 'focused' : 'notfocused'} xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
              <path d="M14 7.83972H13V5.83972C13 3.07972 10.76 0.839722 8 0.839722C5.24 0.839722 3 3.07972 3 5.83972V7.83972H2C0.9 7.83972 0 8.73972 0 9.83972V19.8397C0 20.9397 0.9 21.8397 2 21.8397H14C15.1 21.8397 16 20.9397 16 19.8397V9.83972C16 8.73972 15.1 7.83972 14 7.83972ZM8 16.8397C6.9 16.8397 6 15.9397 6 14.8397C6 13.7397 6.9 12.8397 8 12.8397C9.1 12.8397 10 13.7397 10 14.8397C10 15.9397 9.1 16.8397 8 16.8397ZM11.1 7.83972H4.9V5.83972C4.9 4.12972 6.29 2.73972 8 2.73972C9.71 2.73972 11.1 4.12972 11.1 5.83972V7.83972Z" fill="#FFC042" />
            </svg>
            <input value={senha} onChange={(e) => setSenha(e.target.value)} onBlur={() => setFocusPassword(false)} onFocus={() => setFocusPassword(true)} type="password" placeholder="Password" />
            <svg onClick={() => setShowPassword(true)} xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
              <path d="M11 4C13.76 4 16 6.24 16 9C16 9.65 15.87 10.26 15.64 10.83L18.56 13.75C20.07 12.49 21.26 10.86 21.99 9C20.26 4.61 15.99 1.5 10.99 1.5C9.59 1.5 8.25 1.75 7.01 2.2L9.17 4.36C9.74 4.13 10.35 4 11 4ZM1 1.27L3.28 3.55L3.74 4.01C2.08 5.3 0.78 7.02 0 9C1.73 13.39 6 16.5 11 16.5C12.55 16.5 14.03 16.2 15.38 15.66L15.8 16.08L18.73 19L20 17.73L2.27 0L1 1.27ZM6.53 6.8L8.08 8.35C8.03 8.56 8 8.78 8 9C8 10.66 9.34 12 11 12C11.22 12 11.44 11.97 11.65 11.92L13.2 13.47C12.53 13.8 11.79 14 11 14C8.24 14 6 11.76 6 9C6 8.21 6.2 7.47 6.53 6.8ZM10.84 6.02L13.99 9.17L14.01 9.01C14.01 7.35 12.67 6.01 11.01 6.01L10.84 6.02Z" fill="#4C33CC" />
            </svg>
          </label>
        }
        {showPassword &&
          <label>
            <svg id="hide" className={focusPassword ? 'focused' : 'notfocused'} xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
              <path d="M14 7.83972H13V5.83972C13 3.07972 10.76 0.839722 8 0.839722C5.24 0.839722 3 3.07972 3 5.83972V7.83972H2C0.9 7.83972 0 8.73972 0 9.83972V19.8397C0 20.9397 0.9 21.8397 2 21.8397H14C15.1 21.8397 16 20.9397 16 19.8397V9.83972C16 8.73972 15.1 7.83972 14 7.83972ZM8 16.8397C6.9 16.8397 6 15.9397 6 14.8397C6 13.7397 6.9 12.8397 8 12.8397C9.1 12.8397 10 13.7397 10 14.8397C10 15.9397 9.1 16.8397 8 16.8397ZM11.1 7.83972H4.9V5.83972C4.9 4.12972 6.29 2.73972 8 2.73972C9.71 2.73972 11.1 4.12972 11.1 5.83972V7.83972Z" fill="#FFC042" />
            </svg>
            <input value={senha} onChange={(e) => setSenha(e.target.value)} onBlur={() => setFocusPassword(false)} onFocus={() => setFocusPassword(true)} type="text" placeholder="Password" />
            <svg onClick={() => setShowPassword(false)} xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z" fill="#4C33CC" />
            </svg>
          </label>
        }
        {!check &&
          <div className="error">
            <p>Login ou senhas incorretos</p>
          </div>
        }
      </Login>
      <CheckBox>
        <div className="senha">
          <div className="checkbox">
            <input type="checkbox"></input>
            <label>Lembre-me</label>
          </div>
          <p>Esqueci minha senha</p>
        </div>
        <Link to={route ? '/main' : ''} className="button">
          <button onClick={() => handleLogin()}> Entrar</button>
        </Link>
      </CheckBox>
    </div>
  );
}

export default App;
