import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
//import './App.css';
import './Main.scss';

function App() {
	return (
		<div className='app'>
			<Header />

			<div className='app__container'>
				<Sidebar />
				<RecommendedVideos />
			</div>
		</div>
	);
}

export default App;
