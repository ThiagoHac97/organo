import CardImovel from '../CardImovel/CardImovel'
import './Imoveis.css'
import hexToRgba from 'hex-to-rgba'

const imoveis = (props) => {
    const css = {backgroundColor: hexToRgba(props.cor, '0.6')}
    return(
    (props.imoveis.length > 0) && <section className='imovel' style={css}>
        <input onChange={evento => props.mudarCor(evento.target.value, props.id) } value={props.cor} type='color' className='input-cor'/>
        <h3 style={{borderColor: props.cor}} >{props.nome}</h3>
        <div className='Imoveis'>
        {props.imoveis.map(imovel => {
            return <CardImovel key ={imovel.titulo} 
                        titulo = {imovel.titulo} 
                        preco = {imovel.preco}
                        imagem = {imovel.imagem}
                        area = {imovel.area}
                        endereco = {imovel.endereco}
                        aoDeletar={imovel.aoDeletar}
                        corDeFundo = {props.cor}
                    />
        })}
        </div>     
    </section>
    )
}

export default imoveis