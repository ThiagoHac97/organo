import CardImovel from '../CardImovel/CardImovel'
import './Imoveis.css'

const imoveis = (props) => {
    const css = {backgroundColor: props.corSecundaria}
return(
    (props.imoveis.length > 0) && <section className='imovel' style={css}>
        <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>
        <div className='Imoveis'>
        {props.imoveis.map(imovel => <CardImovel key ={imovel.titulo} 
        titulo = {imovel.titulo} 
        preco = {imovel.preco}
        imagem = {imovel.imagem}
        area = {imovel.area}
        endereco = {imovel.endereco}
        />)}
        </div>     
    </section>
)
}

export default imoveis