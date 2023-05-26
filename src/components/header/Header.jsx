/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { NavLink } from 'react-router-dom'

import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";




const Header = () => {

	const [activeButton, setActiveButton] = useState('home');

	return (
		<header>
			<div className="banda_naranja">
				<p>20% off all kidswear + free shipping when you spend $60 or more</p>
			</div>
			<div className="header_logo">
				<img className='logo_image' src="src\assets\main\logo.png" alt="app-logo" />
			</div>
			<div className="navbar_section">
				<ul className='navbar'>
					<li>
						<NavLink
							className={activeButton == 'home' ? 'navigation_button navigation_button_active' : 'navigation_button'}
							onClick={() => setActiveButton('home')}
							to='/home'
						>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink
							className={activeButton == 'shopfeatures' ? 'navigation_button navigation_button_active' : 'navigation_button'}
							onClick={() => setActiveButton('shopfeatures')}
							to='/shopfeatures'
						>
							Shop Features
						</NavLink>
					</li>

					<li>
						<NavLink
							className={activeButton == 'clothes' ? 'navigation_button navigation_button_active' : 'navigation_button'}
							onClick={() => setActiveButton('clothes')}
							to='/clothes'
						>
							Clothes
						</NavLink>
					</li>

					<li>
						<NavLink
							className={activeButton == 'pages' ? 'navigation_button navigation_button_active' : 'navigation_button'}
							onClick={() => setActiveButton('pages')}
							to='/pages'
						>
							Pages
						</NavLink>
					</li>

					<li>
						<NavLink
							className={activeButton == 'shortcodes' ? 'navigation_button navigation_button_active' : 'navigation_button'}
							onClick={() => setActiveButton('shortcodes')}
							to='/shortcodes'
						>
							Shortcodes
						</NavLink>
					</li>

					<li>
						<NavLink
							className={activeButton == 'posttypes' ? 'navigation_button navigation_button_active' : 'navigation_button'}
							onClick={() => setActiveButton('posttypes')}
							to='/posttypes'
						>
							Post Types
						</NavLink>
					</li>

					<li>
						<div className='menu_icons_section'>
							<AiOutlineHeart className='menu_icon' />
							<div className='shopingCar_container'>
								<RiShoppingCartLine className='menu_icon' />
								<div className="shopingCar_counter">0</div>
							</div>
							<FiSearch className='menu_icon' />
						</div>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
