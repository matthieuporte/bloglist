import * as React from "react";
import Alert from "@mui/material/Alert";

const Notification = (props) => {

	let severityVal;
	switch (props.severity){
	case 1:
		severityVal = "error";
		break;
	case 2:
		severityVal = "warning";
		break;
	case 3:
		severityVal = "info";
		break;
	default:
		severityVal = "success";
	}

	if (!props.notif) {
		return null;
	}

	return (
		<Alert className="notification" onClose={() => {props.setNotif(false);}} severity={severityVal}>{props.message}</Alert>
	);
};

export default Notification;