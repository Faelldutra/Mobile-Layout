import { Header, Corpo } from './styled';
import localizacao from '../../assets/localizacao.png';
import lupa from '../../assets/lupa.png';
import setaDireita from '../../assets/setaDireita.png';
import setaEsquerda from '../../assets/setaEsquerda.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dados = () => {

    const [showProgress, setShowProgress] = useState(false);
    const [showProgress2, setShowProgress2] = useState(false);
    const [showProgress3, setShowProgress3] = useState(false);
    const [showProgress4, setShowProgress4] = useState(false);
    const [showProgress5, setShowProgress5] = useState(false);
    const [showProgress6, setShowProgress6] = useState(false);

    function handleProgress(x, y) {
        if (x === false) {
            y(true);
        } else {
            y(false)
        }
    }

    return (
        <>
            <Header>
                <div className="header">
                    <div>
                        <p>Bem vindo,</p>
                        <p>Thiago Luchtenberg</p>
                    </div>
                    <Link to="/" className="img">
                        <img src={setaEsquerda} alt="seta para esquerda"></img>
                    </Link>
                </div>
                <div className="header2">
                    <div>
                        <h1>Entregas</h1>
                    </div>
                    <div className="img2">
                        <img src={localizacao} alt="localizacao"></img>
                        <p>Rio do Sul</p>
                    </div>
                </div>
                <div className="input">
                    <input type="text" placeholder="Filtrar por bairro"></input> <img src={lupa} alt="lupa"></img>
                </div>
            </Header>
            <Corpo>
                <div className="entrega">
                    <div className="line"></div>
                    <div>
                        <p>8 entregas</p>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="box" id="colors">
                    <div className="cabecalho">
                        <h1>Pacote 03</h1>
                        <p>01/07/2020</p>
                    </div>
                    <div className="time">
                        <div onClick={() => handleProgress(showProgress, setShowProgress)} className={showProgress ? 'ball1' : 'ball'}></div>
                        <div className={showProgress ? 'line3' : 'line2'}></div>
                        <div onClick={() => handleProgress(showProgress2, setShowProgress2)} className={showProgress2 ? 'ball1' : 'ball'}></div>
                        <div className={showProgress2 ? 'line3' : 'line2'}></div>
                        <div onClick={() => handleProgress(showProgress3, setShowProgress3)} className={showProgress3 ? 'ball1' : 'ball'}></div>
                    </div>
                    <div className="progress">
                        <p>AGUARDANDO</p>
                        <p>RETIRADO</p>
                        <p>ENTREGUE</p>
                    </div>
                </div>
                <div className="rodape">
                    <p>Detalhes</p>
                    <img src={setaDireita} alt="seta para direita"></img>
                </div>
                <div className="box" id="colors">
                    <div className="cabecalho">
                        <h1>Pacote 04</h1>
                        <p>01/07/2020</p>
                    </div>
                    <div className="time">
                        <div onClick={() => handleProgress(showProgress4, setShowProgress4)} className={showProgress4 ? 'ball1' : 'ball'}></div>
                        <div className={showProgress4 ? 'line3' : 'line2'}></div>
                        <div onClick={() => handleProgress(showProgress5, setShowProgress5)} className={showProgress5 ? 'ball1' : 'ball'}></div>
                        <div className={showProgress5 ? 'line3' : 'line2'}></div>
                        <div onClick={() => handleProgress(showProgress6, setShowProgress6)} className={showProgress6 ? 'ball1' : 'ball'}></div>
                    </div>
                    <div className="progress">
                        <p>AGUARDANDO</p>
                        <p>RETIRADO</p>
                        <p>ENTREGUE</p>
                    </div>
                </div>
                <div className="rodape">
                    <p>Detalhes</p>
                    <img src={setaDireita} alt="seta paa direita"></img>
                </div>
            </Corpo>
        </>
    );
}

export default Dados;