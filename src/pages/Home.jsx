import React from 'react'
import Header from "../component/Header/Header";
import Hero from "../component/Heor/Hero";
import Companies from "../component/Companies/Companies";
import Residencies from "../component/Companies/Residencies/Residencies";
import Items from "../component/Items/Items";
import Contact from "../component/Contact/Contact";
import GetStarted from "../component/GetStarted/GetStarted";
import Footer from "../component/Footer/Footer";

const Home = () => {
	return (
		<>
		<div>
			<div className="white-gradient"/>
			<Header/>
			<Hero/>
		</div>
			<Companies/>
			<Residencies/>
			<Items/> 
			<Contact/>
			<GetStarted/>
			<Footer/> 
		</>
	)
}

export default Home