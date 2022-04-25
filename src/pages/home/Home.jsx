import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";

import "./home.scss";

const Home = () => {
	return (
		<div className="home">
			<Sidebar></Sidebar>
			<div className="home-container">
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earning" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<Featured />
					<Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
				</div>
				<div className="list-container">
					<div className="list-title">Latest Transactions</div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Home;
