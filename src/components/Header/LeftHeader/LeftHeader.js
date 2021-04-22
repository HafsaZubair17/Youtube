import MenuIcon from '@material-ui/icons/Menu';
import '../../../Main.scss';

const LeftHeader = () => {
	return (
        <div className='header__left'>
				<MenuIcon />

				<img className='header__logo' src='/YoutubeLogo.jpg' alt='' />
			</div>
    );}
export default LeftHeader;