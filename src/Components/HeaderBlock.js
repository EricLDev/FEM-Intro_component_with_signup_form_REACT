import React from "react";
import classes from "./HeaderBlock.module.css";

const HeaderBlock = () => {
	return (
		<div className={classes.headerBlock}>
			<h1> Learn to code by watching others</h1>
			<p> See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
		</div>
	);
};

export default HeaderBlock;