import React from "react";
import Card from "./ui/Card";
import classes from "./TryIt.module.css";

const TryIt = () => {
	const style = {
		color: "white",
		backgroundColor: "hsl(248, 32%, 49%)",
		padding: "1.25rem 4rem",
		marginBottom: "1.5rem",
	};
	return (
		<Card style={style} className={classes.tryIt}>
			<p>
				<span>Try it free 7 days </span>then $20/mo. thereafter
			</p>
		</Card>
	);
};

export default TryIt;
