import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const DataTable = () => {
	const [rowData, setRowData] = useState(userRows);
	const deleteUserHandler = (id) => {
		setRowData(rowData.filter((item) => item.id !== id));
	};
	const actionColumn = {
		field: "action",
		headerName: "action",
		width: 200,
		renderCell: (params) => (
			<div className="cell-action">
				<Link to="/users/test">
					<div className="view-button">View</div>
				</Link>
				<div
					className="delete-button"
					onClick={() => deleteUserHandler(params.row.id)}
				>
					Delete
				</div>
			</div>
		),
	};
	return (
		<div className="datatable">
			<div className="datatable-title">
				Add New user
				<Link to="/users/new" className="link">
					Add New
				</Link>
			</div>
			<DataGrid
				className="datatable-grid"
				rows={rowData}
				columns={userColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default DataTable;
