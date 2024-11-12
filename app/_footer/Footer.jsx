import React from "react";
import AboutSection from "./AboutSection";
import UserFollow from "./UserFollow";
import Category from "./Category";
import ContactLink from "./ContactLink";

const Footer = () => {
	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6  text-white py-16'>
				<AboutSection />
				<UserFollow />
				<Category />
				<ContactLink />
			</div>
		</>
	);
};

export default Footer;
