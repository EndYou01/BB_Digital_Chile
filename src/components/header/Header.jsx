
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import HomeLink from './homeLink';


const Header = () => {


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
						<HomeLink link='home' />
					</li>
					<li>
						<HomeLink link='shop features' />
					</li>


					<li>
						<HomeLink link='Clothes' />

					</li>

					<li>
						<HomeLink link='Pages' />

					</li>

					<li>
						<HomeLink link='shortcodes' />

					</li>

					<li>
						<HomeLink link='post types' />

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
