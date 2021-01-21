import React from 'react';
import { CSSTransition } from 'react-transition-group';
import imgHero from '../../Assets/Image/lgAdobeOverlay.svg';

function Hero() {
	return (
		<>
			<section className="h-1/3 md:h-3/4 lg:h-2/3 transition-all duration-100 transition-gpu ease-in-out bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 flex item-center justify-center ">
				<div className="flex flex-row h-5/6 w-4/5 item-center justify-around ">
					<div className="flex flex-col justify-center p-6 hidden xl:flex" style={{ width: '423px' }}>
						<h1 className="flex text-4xl text-black p-2">All together now</h1>
						<p className="text-md  p-2">
							The new release of Adobe Creative Cloud gives you all the best creative apps and services,
							so you can stay more connected and creative wherever you’re inspired.{' '}
						</p>
						<div className="flex flex-row space-x-4">
							<button className=" bg-blue-600 text-center text-white font-normal text-xs	rounded-2xl pl-3 pr-3 pt-2 pb-2 outline-none">
								Start free trial
							</button>
							<button>Learn more</button>
						</div>
					</div>
					<div className="flex item-center justify-center">
						<img src={imgHero} className="" height="65%" width="65%" />
					</div>
				</div>
			</section>
			<section>
				<div className="flex flex-col justify-center p-6" style={{ width: '423px' }}>
					<h1 className="flex text-4xl font-medium text-black p-2">All together now.</h1>
					<p className="text-md  p-2">
						The new release of Adobe Creative Cloud gives you all the best creative apps and services, so
						you can stay more connected and creative wherever you’re inspired.{' '}
					</p>
					<div className="flex flex-row space-x-4 outline-none">
						<button className=" bg-blue-600 text-center text-white font-normal text-xs	rounded-2xl pl-3 pr-3 pt-2 pb-2 outline-none">
							Start free trial
						</button>
						<button className="text-sm text-blue-500 font-medium outline-none">Learn more</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
