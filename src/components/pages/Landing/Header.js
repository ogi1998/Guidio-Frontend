import { FaSearch } from 'react-icons/fa';

const Header = () => {
	return (
		<div className="py-16 text-center min-h-screen flex flex-col items-center">
			<h2 className=" font-bold my-[4.5rem] text-6xl">
				Learn Anytime, Anywhere, <br />
				and Accelerate Future
			</h2>
			<div className="flex gap-5 items-center rounded-3xl text-2xl w-1/2 bg-light-main px-5
			shadow-normal shadow-secondary-main focus-within:shadow-normal-focused focus-within:shadow-secondary-main">
				<FaSearch className="text-dark-main" />
				<input
					placeholder="Search..."
					type="text"
					className="bg-light-main outline-none w-full text-dark-main placeholder:font-light py-5"
				/>
			</div>
		</div>
	);
};
export default Header;
