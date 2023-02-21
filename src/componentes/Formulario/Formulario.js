import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [titulo, setTitulo] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [area, setArea] = useState('')
    const [endereco, setEndereco] = useState('')
    const [category, setCategory] = useState('')

    const categoria = [
        'Imóvel',
        'Lote',
        'Apartamento',
        'Ponto Comercial'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoImovel({
            titulo,
            preco,
            descricao,
            area,
            endereco,
            category
        })
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha com as informações do imóvel</h2>
            <CampoTexto
             obrigatorio={true} 
             label="Título" 
             placeholder="Título da venda"
             valor={titulo}
             aoAlterado={valor => setTitulo(valor)}
             />
            <CampoTexto 
            obrigatorio={true}  
            label="Valor" 
            placeholder="Valor do imóvel/aluguel"
            valor={preco}
            aoAlterado={valor => setPreco(valor)}
            />
            <CampoTexto 
            obrigatorio={true}  
            label="Descrição" 
            placeholder="Descrição dos cômodos"
            valor={descricao}
            aoAlterado={valor => setDescricao(valor)}
            />
            <CampoTexto 
            obrigatorio={true}  
            label="Área" 
            placeholder="Tamanho do lote/área construída"
            valor={area}
            aoAlterado={valor => setArea(valor)}
            />
            <CampoTexto 
            obrigatorio={true}  
            label="Endereço"
            placeholder="Endereço do imóvel/lote"
            valor={endereco}
            aoAlterado={valor => setEndereco(valor)}
            />
            <ListaSuspensa 
            obrigatorio={true}  
            label="Categoria" 
            itens={categoria}
            valor={category}
            aoAlterado={valor => setCategory(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )

}
export default Formulario