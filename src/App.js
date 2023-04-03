import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Imoveis from './componentes/Imoveis/Imoveis';
import Rodape from './componentes/rodape/rodape';
import Menu from './componentes/menu/menu';

function App() {
  
  const categoriaImoveis =[
    {
      nome:'Imóvel',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome:'Lote',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome:'Apartamento',
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    },
    {
      nome:'Ponto Comercial',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
  ]
  const [imoveis, setImoveis] = useState([])

  const aoNovoImovel = (imovel) =>{
    console.log(imovel)
    setImoveis([...imoveis, imovel])
  }
  return (
    <div className="App">
      <Banner/>
      <Menu/>
      <Formulario categoriaImoveis={categoriaImoveis.map(categoriaImoveis => categoriaImoveis.nome)} aoImovel={imovel => aoNovoImovel(imovel)} />
      {categoriaImoveis.map(categoriaImoveis => <Imoveis 
      key={categoriaImoveis.nome} 
      nome = {categoriaImoveis.nome} 
      corPrimaria={categoriaImoveis.corPrimaria} 
      corSecundaria={categoriaImoveis.corSecundaria}
      imoveis = {imoveis.filter(imovel => imovel.category === categoriaImoveis.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
