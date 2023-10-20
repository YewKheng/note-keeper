import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

function Note(props) {
	function handleDelete() {
		props.onDelete(props.id);
	}

	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={handleDelete}>
				<DeleteForeverRoundedIcon />
			</button>
		</div>
	);
}

export default Note;
