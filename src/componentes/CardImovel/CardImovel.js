import {AiFillCloseCircle} from 'react-icons/ai';
import './CardImovel.css'

const CardImovel = ({titulo, preco, area, endereco, imagem, aoDeletar, corDeFundo}) => {
    return(
        <div className='card-imovel'>
            <AiFillCloseCircle 
                size={25}
                className="deletar"
                onClick={aoDeletar(titulo)}
            />
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt='Foto do Imóvel'/>
            </div>
            <div className='rodape'>
                <h3>{titulo}</h3>
                <h4>{preco}</h4>
                <h5>{area}</h5>
                <h5>{endereco}</h5>
            </div>
        </div>
    )
}

export default CardImovel
