import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
	return (
		<div className="single">
			<Sidebar />
			<div className="single-container">
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="edit-btn">Edit</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img
								src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=julian-wan-WNoLnJo7tS8-unsplash.jpg&w=640"
								alt=""
								className="item-img"
							/>
							<div className="details">
								<h1 className="item-title">Mohamed Hasan</h1>
								<div className="detail-item">
									<span className="item-key">Email:</span>
									<span className="item-value">eng.mdahroug@gmail.com</span>
								</div>
								<div className="detail-item">
									<span className="item-key">Phone:</span>
									<span className="item-value">+967 777042721</span>
								</div>
								<div className="detail-item">
									<span className="item-key">Address:</span>
									<span className="item-value">Aden - heat street</span>
								</div>
								<div className="detail-item">
									<span className="item-key">Country:</span>
									<span className="item-value">Yemen</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">Last Transactions</h1>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Single;
