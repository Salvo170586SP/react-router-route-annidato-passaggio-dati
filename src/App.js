import './App.css';
import Header from './components/header/header.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';
import Articoli from './pages/articoli/articoli.component';
import Carrello from './pages/carrello/carrello.component';
import CategorieArticoli from './pages/categorie-articoli/categorie-articoli.component';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/articoli" element={<Articoli />}/>
				<Route path="/articoli/:cat" element={<CategorieArticoli />} />
			
				<Route path="/carrello" element={<Carrello />} />
			</Routes>
		</div>
	);
}

export default App;
