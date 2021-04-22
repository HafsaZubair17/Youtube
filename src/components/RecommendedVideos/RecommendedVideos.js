import React from 'react';
import Video from './Video/Video';
//import './RecommendedVideos.css';
import '../../Main.scss';
import HeaderButtons from './HeaderButtons/HeaderButtons';

const RecommendedVideos = () => {
	return (
		<div className='recommendedVideos'>

			<div className="Header__Buttons">
			<HeaderButtons label="All"/>
			<HeaderButtons label="Music"/>
			<HeaderButtons label="Mixes"/>
			<HeaderButtons label="Pakistani Dramas"/>
			<HeaderButtons label="Hollywood"/>
			<HeaderButtons label="Comedy"/>
			<HeaderButtons label="Seasons"/>
			<HeaderButtons label="Coke Studio"/>
			<HeaderButtons label="Pop"/>
			<HeaderButtons label="Dance"/>
			<HeaderButtons label="Coke Studio"/>
			<HeaderButtons label="Pop"/>
			<HeaderButtons label="Dance"/>
			</div>

			<div className='recommenedVideos__videos'>
				<Video
					title='Khuda ar Mohabbat'
					views='2.4K Views'
					timestamp='2 months ago'
					channelImage='/GeoTV.jpg'
					channel='GeoTV'
					image='/GeoTV.jpg'
				/>
				<Video
					title='Khan Academy Course'
					views='52.1K Views'
					timestamp='3 months ago'
					channelImage='/Khan Academy.png'
					channel='Khan Academy'
					image='/Khan Academy.png'
				/>
				<Video
					title='Apocalypse'
					views='31M Views'
					timestamp='1 week ago'
					channelImage='/Apocalypse.jpg'
					channel='Apocalypse'
					image='/Apocalypse.jpg'
				/>
				<Video
					title='Canada Immigration'
					views='2.4K Views'
					timestamp='2 months ago'
					channelImage='/canada.png'
					channel='Canada'
					image='/canada.png'
				/>
				<Video
					title='Tonight with HSY'
					views='52.1K Views'
					timestamp='3 months ago'
					channelImage='/HumTV.jpg'
					channel='Hun TV'
					image='/HumTV.jpg'
				/>
				<Video
					title='Best Fruit'
					views='31M Views'
					timestamp='1 week ago'
					channelImage='/kiwi.jpg'
					channel='MrGuide'
					image='/kiwi.jpg'
				/>
				<Video
					title='Bella Ciao'
					views='2.4K Views'
					timestamp='2 months ago'
					channelImage='/MoneyHeist.jpg'
					channel='Money Heist'
					image='/MoneyHeist.jpg'
				/>
				<Video
					title='Prank on Brother'
					views='52.1K Views'
					timestamp='3 months ago'
					channelImage='/prank.jpg'
					channel='Prankster'
					image='/prank.jpg'
				/>
				<Video
					title='Khuda ar Mohabbat'
					views='2.4K Views'
					timestamp='2 months ago'
					channelImage='/GeoTV.jpg'
					channel='GeoTV'
					image='/GeoTV.jpg'
				/>
				<Video
					title='Khan Academy Course'
					views='52.1K Views'
					timestamp='3 months ago'
					channelImage='/Khan Academy.png'
					channel='Khan Academy'
					image='/Khan Academy.png'
				/>
				<Video
					title='Apocalypse'
					views='31M Views'
					timestamp='1 week ago'
					channelImage='/Apocalypse.jpg'
					channel='Apocalypse'
					image='/Apocalypse.jpg'
				/>
				<Video
					title='Canada Immigration'
					views='2.4K Views'
					timestamp='2 months ago'
					channelImage='/canada.png'
					channel='Canada'
					image='/canada.png'
				/>
				<Video
					title='Tonight with HSY'
					views='52.1K Views'
					timestamp='3 months ago'
					channelImage='/HumTV.jpg'
					channel='Hun TV'
					image='/HumTV.jpg'
				/>
				<Video
					title='Best Fruit'
					views='31M Views'
					timestamp='1 week ago'
					channelImage='/kiwi.jpg'
					channel='MrGuide'
					image='/kiwi.jpg'
				/>
				<Video
					title='Bella Ciao'
					views='2.4K Views'
					timestamp='2 months ago'
					channelImage='/MoneyHeist.jpg'
					channel='Money Heist'
					image='/MoneyHeist.jpg'
				/>
				<Video
					title='Prank on Brother'
					views='52.1K Views'
					timestamp='3 months ago'
					channelImage='/prank.jpg'
					channel='Prankster'
					image='/prank.jpg'
				/>
			</div>
		</div>
	);
};

export default RecommendedVideos;
