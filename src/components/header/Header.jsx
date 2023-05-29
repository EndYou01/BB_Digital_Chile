
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import HomeLink from './HomeLink.jsx';


const Header = () => {

	const home_Links = [
		'home',
		'shop features',
		'Clothes',
		'Pages',
		'shortcodes',
		'post types'
	]

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
					{
						home_Links.map((link, key) => {
							return (
								<li key={key}>
									<HomeLink link={link} />
								</li>
							)
						})
					}
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
