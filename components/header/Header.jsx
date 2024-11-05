import React from "react";
import DropDown from "./DropDown";

const Header = () => {
	return (
		<>
			<div className='flex justify-between bg-[#1a1a1a] backdrop-blur-3xl items-center w-full h-16 p-5 md:px-16'>
				<div className='text-white   font-bold text-2xl'>
					<h1>LOGO</h1>
				</div>
				<div className='text-white text-xl'>
					<DropDown />
				</div>
			</div>
		</>
	);
};

export default Header;
