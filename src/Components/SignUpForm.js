import React, { useState, useEffect } from "react";
import classes from "./SignUpForm.module.css";
import iconError from "../images/icon-error.svg";

const SignUpForm = () => {
	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setValues({ ...values, [name]: value });
	};

	const validate = (values) => {
		const errors = [];
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

		if (!values.firstName) {
			errors.firstName = "First Name cannot be empty";
		}

		if (!values.lastName) {
			errors.lastName = "Last Name cannot be empty";
		}

		if (!values.email) {
			errors.email = "Email cannot be empty";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "Looks like this is not an email";
		}

		if (!values.password) {
			errors.password = "Password cannot be empty";
		} else if (values.password.length < 6) {
			errors.password = "Password must be more than 6 characters";
		} else if (values.password.length > 12) {
			errors.password = "Password cannot exceed 12 characters";
		}

		return errors;
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		setErrors(validate(values));
		setIsSubmitted(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitted) {
			const msg = `First Name: ${values.firstName}\nLast Name: ${values.lastName}\nEmail: ${values.email}\nPassword: ${values.password}`;
			alert(msg);
		}
	}, [errors]);

	return (
		<div className={classes.formCard}>
			<form className={classes.signUpForm} onSubmit={onSubmitHandler}>
				<div className={classes.inputGroup}>
					<input type="text" name="firstName" onChange={onChangeHandler} placeholder="First Name" className={`${errors.firstName ? classes.inputError : ""}`} />
					<img className={`${errors.firstName ? classes.iconError : classes.hidden}`} src={iconError} alt="" />
					<div className={classes.error}>{errors.firstName}</div>
				</div>
				<div className={classes.inputGroup}>
					<input type="text" name="lastName" onChange={onChangeHandler} placeholder="Last Name" className={`${errors.lastName ? classes.inputError : ""}`} />
					<img className={`${errors.lastName ? classes.iconError : classes.hidden}`} src={iconError} alt="" />
					<div className={classes.error}>{errors.lastName}</div>
				</div>
				<div className={classes.inputGroup}>
					<input type="text" name="email" onChange={onChangeHandler} placeholder="Email Address" className={`${errors.email ? classes.inputError : ""}`} />
					<img className={`${errors.email ? classes.iconError : classes.hidden}`} src={iconError} alt="" />
					<div className={classes.error}>{errors.email}</div>
				</div>
				<div className={classes.inputGroup}>
					<input type="password" name="password" onChange={onChangeHandler} placeholder="Password" className={`${errors.password ? classes.inputError : ""}`} />
					<img className={`${errors.password ? classes.iconError : classes.hidden}`} src={iconError} alt="" />
					<div className={classes.error}>{errors.password}</div>
				</div>
				<button type="submit">Claim your free trial</button>
			</form>
			<p className={classes.terms}>
				By clicking the button, you are agreeing to our <span>Terms and Services</span>
			</p>
		</div>
	);
};

export default SignUpForm;
