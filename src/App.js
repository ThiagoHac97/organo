import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Imoveis from './componentes/Imoveis/Imoveis';
import Rodape from './componentes/rodape/rodape';
import Menu from './componentes/menu/menu';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [categoriaImoveis, setcategoriaImoveis] = useState([
    {
      id: uuidv4(),
      nome:'Imóvel',
      cor: '#d9f7e9'
    },
    {
      id: uuidv4(),
      nome:'Lote',
      cor: '#e8f8ff'
    },
    {
      id: uuidv4(),
      nome:'Apartamento',
      cor: '#fde7e8'
    },
    {
      id: uuidv4(),
      nome:'Ponto Comercial',
      cor: '#fae9f5'
    },
  ])
  const [imoveis, setImoveis] = useState([""])

  const aoNovoImovel = (imovel) =>{
    console.log(imovel)
    setImoveis([...imoveis, imovel])
  }

function deletarImovel(props){
  console.log('deletando imovel', props)
}

function mudarCorDaCategoria(cor, id){
  setcategoriaImoveis(categoriaImoveis.map(categoria =>{
    if(categoria.id=== id){
      categoria.cor = cor;
    }
    return categoria;
  }))
}

  return (
    <div className="App">
      <Banner/>
      <Menu/>
      <Formulario categoriaImoveis={categoriaImoveis.map(categoriaImoveis => categoriaImoveis.nome)} aoImovel={imovel => aoNovoImovel(imovel)} />
      {categoriaImoveis.map(categoriaImoveis => 
        <Imoveis
         mudarCor = {mudarCorDaCategoria}
          key={categoriaImoveis.nome} 
          nome = {categoriaImoveis.nome} 
          cor= {categoriaImoveis.cor}
          id = {categoriaImoveis.id} 
          imoveis = {imoveis.filter(imovel => imovel.category === categoriaImoveis.nome)}
          aoDeletar = {deletarImovel}
        />)}
      <Rodape />
    </div>
  );
}

export default App;
