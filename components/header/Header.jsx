import React from "react";
import DropDown from "./DropDown";

const Header = () => {
	return (
		<>
			<div className='flex justify-between fixed top-0 left-0 bg-[#12121280] backdrop-blur-3xl items-center w-full z-30 h-16 p-5 md:px-16'>
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
