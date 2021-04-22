import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import { Avatar} from '@material-ui/core';
import '../../../Main.scss';
import Avatar from 'react-avatar';

const CenterHeader = () => {
	return (
        <div className='header__icons'>
				<VideoCallIcon className='header__icon' />
				<AppsIcon className='header__icon' />
				<NotificationsIcon className='header__icon' />
				<Avatar
					alt='User Icon'
					src='/Hafsa.jpeg' alt=''
				/>
			</div>
    );}

export default CenterHeader;