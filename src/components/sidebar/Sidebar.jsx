import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SummarizeIcon from "@mui/icons-material/Summarize";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import DarkModeContext from "../../store/darkMode-context";
import { useContext } from "react";

const Sidebar = () => {
	const darkModeCtx = useContext(DarkModeContext);

	const DarkBtnHandler = () => {
		darkModeCtx.goDark();
	};
	const LightBtnHandler = () => {
		darkModeCtx.goLight();
	};
	console.log(`darkModeCtx`, darkModeCtx);
	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/">
					<span className="logo">local dashboard</span>
				</Link>
			</div>
			<div className="center">
				<ul>
					<p className="title">Main</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">Lists</p>
					<Link to="/users">
						<li>
							<GroupIcon className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/products">
						<li>
							<StoreIcon className="icon" />
							<span>Products</span>
						</li>
					</Link>
					<li>
						<CreditCardIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USFUL LINKS</p>
					<li>
						<AnalyticsIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsIcon className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<HealthAndSafetyIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<SummarizeIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<PersonIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="color-option" onClick={LightBtnHandler}></div>
				<div className="color-option" onClick={DarkBtnHandler}></div>
			</div>
		</div>
	);
};

export default Sidebar;
