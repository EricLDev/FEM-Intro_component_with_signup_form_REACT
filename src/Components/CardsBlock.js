import React from "react";
import classes from "./CardsBlock.module.css";
import TryIt from "./TryIt";
import SignUpForm from "./SignUpForm";

const CardsBlock = () => {
	return (
		<div className={classes.cardsBlock}>
			<TryIt />
			<SignUpForm />
		</div>
	);
};

export default CardsBlock;
