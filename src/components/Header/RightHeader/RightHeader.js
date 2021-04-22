import SearchIcon from '@material-ui/icons/Search';
import '../../../Main.scss';

const RightHeader = () => {
	return (
            <div className='header__input'>
				<input type='text' placeholder='Search' />

				<SearchIcon className='header__inputButton' />
			</div>);}

export default RightHeader;