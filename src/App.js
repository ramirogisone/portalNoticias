import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

	const [categoria, guardaCategoria] = useState('');
	const [noticias, guardarNoticias] = useState([]);

	useEffect(() => {
		const consultarAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=c104e41c66a742519e0693f3c7d7f5a0`;

			const respuesta = await fetch(url);
			const noticias = await respuesta.json();

			guardarNoticias(noticias.articles);
		}
		consultarAPI();	
	}, [categoria]);

	return (
		<Fragment>
			<Header 
				titulo='Portal de noticias'
			/>
			<div className='container white'>
				<Formulario 
					guardaCategoria={guardaCategoria}
				/>
				<ListadoNoticias 
					noticias={noticias}
				/>
			</div>
		</Fragment>
	);
}

export default App;
