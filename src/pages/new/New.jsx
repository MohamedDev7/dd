import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.scss";

const New = (props) => {
	const [file, setFile] = useState("");
	const fileChangeHandler = (e) => {
		setFile(e.target.files[0]);
		console.log(`file`, file);
	};
	return (
		<div className="new">
			<Sidebar />
			<div className="new-container">
				<Navbar />
				<div className="top">
					<h1>{[props.title]}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt=""
						/>
					</div>
					<div className="right">
						<form>
							<div className="form-input">
								<label htmlFor="file">
									image:
									<DriveFolderUploadIcon className="icon" />
								</label>
								<input type="file" id="file" onChange={fileChangeHandler} />
							</div>
							{props.inputs.map((input) => (
								<div className="form-input" key={input.id}>
									<label>{input.label}</label>
									<input type={input.type} placeholder={input.placeholder} />
								</div>
							))}
							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
