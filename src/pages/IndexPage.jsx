import {InstaKidsrUs} from "../components/instaKidsrUs/InstaKidsrUs.jsx"
import {InitialSection} from "../components/initSection/InitialSection.jsx"
import {NewArrivals} from "../components/newArrivals/NewArrivals.jsx"



export const IndexPage = () => {
	return (
		<div>
			<InitialSection />
			<NewArrivals />
			<InstaKidsrUs/>
		</div>
	)
}
