import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchIcon />
				</div>
				<div className="items">
					<div className="item">
						<LanguageIcon className="icon" />
						English
					</div>

					<div className="item">
						<FullscreenExitIcon className="icon" />
					</div>
					<div className="item">
						<NotificationsIcon className="icon" />
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleIcon className="icon" />
						<div className="counter">2</div>
					</div>
					<div className="item">
						<FormatListBulletedIcon className="icon" />
					</div>
					<div className="item">
						<img
							src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=julian-wan-WNoLnJo7tS8-unsplash.jpg&w=640"
							alt=""
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
