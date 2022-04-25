import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Totle Revenue</h1>
				<MoreVertIcon className="icon" />
			</div>
			<div className="classess"></div>
			<div className="bottom">
				<div className="featured-chart">
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">$420</p>
				<p className="desc">
					Previous transactions processing. Last payments may not be included.
				</p>
				<div className="summary">
					<div className="item">
						<div className="item-title">Target</div>
						<div className="item-result negative positave">
							<KeyboardArrowDownIcon className="icon" />
							<div className="result-amount">$24.5K</div>
						</div>
					</div>
					<div className="item">
						<div className="item-title">Last Week</div>
						<div className="item-result positave">
							<KeyboardArrowUpIcon className="icon" />
							<div className="result-amount">$24.5K</div>
						</div>
					</div>
					<div className="item">
						<div className="item-title">Last Month</div>
						<div className="item-result positave">
							<KeyboardArrowUpIcon className="icon" />
							<div className="result-amount">$24.5K</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
