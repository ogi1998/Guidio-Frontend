import { NavLink, useNavigate } from "react-router-dom";

import { useEffect, useRef } from "react";
import { uiActions } from "../../store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";

import Form from "../ui/Form";
import { registerUser } from "../../store/controllers/authController";
import { FaExclamationCircle } from "react-icons/fa";

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const registerRef = useRef({});

	const error = useSelector(state => state.ui.errorMsg);

	useEffect(() => {
		dispatch(uiActions.hideLayout());
	}, [dispatch]);

	function registerHandler(event) {
		event.preventDefault();

		const { firstName, lastName, email, password, passwordConfirm } = registerRef.current;

		if (!firstName.value || !lastName.value || !email.value || !password.value || !passwordConfirm.value) {
			dispatch(uiActions.createError("Error! Fields can't be empty."));
			setTimeout(() => { dispatch(uiActions.clearErrors()); }, 3000);

			return false;
		}

		if (password.value !== passwordConfirm.value) {
			dispatch(uiActions.createError("Error! Password don't match."));
			setTimeout(() => { dispatch(uiActions.clearErrors()); }, 3000);

			return false;
		}

		dispatch(registerUser({
			first_name: firstName.value,
			last_name: lastName.value,
			email: email.value,
			password: password.value
		}, () => { navigate('/login') }));

	}
	return (
		<Form onSubmit={registerHandler}>
			<h1 className="text-5xl font-bold py-2">Register</h1>
			<div className={`text-danger-dark border border-dan bg-danger-light font-bold capitalize p-2 rounded text-lg w-[90%] ${!error && "invisible"}`}><FaExclamationCircle className="inline text-xl" /> {error}</div>
			<div className="flex gap-10 mt-7 py-5 w-[90%]">
				<div className="w-1/2">
					<label className="block pb-1">First Name</label>
					<input
						className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
						type="text"
						placeholder="First Name..."
						ref={(el) => (registerRef.current.firstName = el)}
					/>
				</div>
				<div className="w-1/2">
					<label className="block pb-1">Last Name</label>
					<input
						className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
						type="text"
						placeholder="Last Name..."
						ref={(el) => (registerRef.current.lastName = el)}
					/>
				</div>
			</div>
			<div className="w-[90%] pt-4 py-5">
				<label className="block pb-1">Email</label>
				<input
					className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
					type="email"
					placeholder="Email..."
					ref={(el) => (registerRef.current.email = el)}
				/>
			</div>
			<div className="w-[90%] py-5">
				<label className="block pb-1">Password</label>
				<input
					className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
					type="password"
					placeholder="Password..."
					ref={(el) => (registerRef.current.password = el)}
				/>
			</div>
			<div className="w-[90%] py-5">
				<label className="block pb-1">Confirm Password</label>
				<input
					className="border-b-2 border-b-gray-dark focus:border-b-secondary-main py-1 w-full"
					type="password"
					placeholder="Confirm Password..."
					ref={(el) => (registerRef.current.passwordConfirm = el)}
				/>
			</div>
			<div className="inline-block mt-3 text-center">
				<input
					type="submit"
					className="
				bg-secondary-main text-light-main text-lg w-full
				my-5 px-10 py-1.5 rounded-2xl shadow-normal shadow-secondary-main
				transition-all ease duration-300
				hover:shadow-normal-hover hover:shadow-secondary-main hover:cursor-pointer"
					value="Sign Up"
				/>
				<p className="border-t-2 mt-3 pt-2 px-2">
					Already a user?{" "}
					<NavLink
						to="/login"
						className="text-secondary-main border-b-2 border-secondary-main"
					>
						LOGIN
					</NavLink>
				</p>
			</div>
		</Form>
	);
};
export default Register;
