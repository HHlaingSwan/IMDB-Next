import React from "react";
const CategoryAction = [
	{
		id: 1,
		name: "Action",
	},
	{
		id: 2,
		name: "Gaming",
	},
	{
		id: 3,
		name: "Discovery",
	},
	{
		id: 4,
		name: "Music",
	},
	{
		id: 5,
		name: "Romance",
	},
];

const Category = () => {
	return (
		<>
			<div className='text-white w-full  p-3'>
				<h1 className='text-lg md:text-xl uppercase  text-red-600  font-bold '>
					Category
				</h1>
				<div className='w-full h-1 border-b border-b-neutral-200' />
				{CategoryAction.map((data) => {
					return (
						<ol
							key={data.id}
							className='mt-4 lg:text-base text-sm'>
							<li className='text-gray-400 hover:text-red-600 cursor-pointer'>
								{data.name}
							</li>
						</ol>
					);
				})}
			</div>
		</>
	);
};

export default Category;
