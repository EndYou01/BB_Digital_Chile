import Wave from 'react-wavify'

import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {

	const footer_list = ['Shop',
		'Sale',
		'Girls',
		'Boys',
		'Lookbook',
		'Contacts']

	return (
		<>
			<Wave fill='#FBB660'
				paused={false}
				options={{
					height: 20,
					amplitude: 50,
					speed: 0.1,
					points: 10
				}}
			/>
			<footer>
				<div className='footer_container container'>

					<img className='logo_image' src="assets/main/logo(1).png" alt="" />

					<ul className='footer_list'>
						{
							footer_list.map((element, key) => {
								return (
									<li key={key}>
										<p>{element}</p>
									</li>
								)
							})
						}
					</ul>

					<ul className="footer_social_list">
						<li><FaFacebookF className='social_item' /></li>
						<li><ImInstagram className='social_item' /></li>
						<li><FaTwitter className='social_item' /></li>
					</ul>

					<p className='privacy_policy'><b>Privacy Policy</b><span>/ This is a sample website - cmsmaster 2022 / All Rigths Reserved</span></p>

				</div>
				<div className="banda_blanca">
					<p>This website use cookies to improve your experience. We'll asume you're ok whit this, but you can opt-out if you wish <span>Accept</span></p>
				</div>

			</footer>
		</>
	)
}