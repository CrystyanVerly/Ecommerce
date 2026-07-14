import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../../Assets/icons/User-1.svg?react';

const ProfileHeader = () => {
	return (
		<Link to="/profile" aria-label="Profile">
			<ProfileIcon />
		</Link>
	);
};

export default ProfileHeader;
