import React from "react";
const TeamCondition = [
	{
		id: 1,
		name: "About Us",
	},
	{
		id: 2,
		name: "Contact Us",
	},
	{
		id: 3,
		name: "Team & Subscription",
	},
	{
		id: 4,
		name: "Privacy Policy",
	},
	{
		id: 5,
		name: "Press & Media",
	},
];

const UserFollow = () => {
	return (
		<>
			<div className='text-white w-full  p-3'>
				<h1 className='text-lg md:text-xl uppercase  text-red-600  font-bold '>
					Team & Subscription
				</h1>
				<div className='w-full h-1 border-b border-b-neutral-200' />
				{TeamCondition.map((data) => {
					return (
						<ul
							key={data.id}
							className='mt-4 lg:text-base  text-sm'>
							<li className='text-gray-400 hover:text-red-600 cursor-pointer'>
								{data.name}
							</li>
						</ul>
					);
				})}
			</div>
		</>
	);
};

export default UserFollow;
