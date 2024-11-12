import React from "react";

const ContactLink = () => {
	return (
		<>
			<div className='text-white w-full  p-3'>
				<h1 className='text-lg md:text-xl uppercase  text-red-600  font-bold '>
					contact us
				</h1>
				<div className='w-full h-1 border-b border-b-neutral-200' />
				<div className='text-sm lg:text-base text-gray-400 flex flex-col mt-4 gap-4'>
					<h1>Phone : +91 1234567890</h1>
					<h1>Email : 1iW5I@example.com</h1>
					<h1>Address : 1007 Mountain Drive, Gotham.</h1>
				</div>
			</div>
		</>
	);
};

export default ContactLink;