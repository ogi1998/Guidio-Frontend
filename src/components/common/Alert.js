import { FaExclamationCircle, FaInfo } from "react-icons/fa";

const Alert = ({ type, msg, size = "full" }) => {
	return (
		<div
			className={`
			flex items-center justify-center border font-bold capitalize px-2 py-4 mb-5 rounded text-xl
			${size === "full" && "w-full"}
			${size === "half" && "w-1/2"}
			${size === "fit" && "w-fit"}
			${type === "error" && "text-danger-dark border-danger-dark bg-danger-light"}
			 ${type === "success" && "text-success-darker border-success-main bg-success-main"}
			${!msg && "invisible"}`}
		>
			&nbsp;
			{type === "error" && <FaExclamationCircle className="inline text-xl mr-1" />}
			{type === "success" && <FaInfo className="inline text-xl mr-1" />}
			{msg}
		</div>
	);
};
export default Alert;
