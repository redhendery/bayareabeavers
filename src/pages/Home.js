import Baz from '../images/Baz.png'
import Sri from '../images/Sri.jpg'
import Jarrod from '../images/Jarrod.jpg'

const Home = () => {
	return (
		<>
			<h1>Bay Area Beavers</h1>

			<div class="row">
				<div class="col">
					<p>
						The Bay Area Beavers are America's second oldest cricket club, are proudly the oldest active club in America and is happy to have arguably the brownest website on the internet.
					</p>
					<p>
						Established in San Francisco, California in 1861, the team was revived in 2019 by Red Hendery a distant relative of David Cornelius Wides and are now a conglomerate of players from all over the world, much as the team originally was. Go read the 'Comprehensive History of the Bay Area Beavers' to learn more about the club and the team.
					</p>
					<p>
						The team is focused on inclusion, has a heavy emphasis on playing the game the right way, giving everyone an equal opportunity and has a strict 'no dicks' policy.
					</p>
					<p>
						Today's squad have been fortunate to play cricket on 3 continents, playing in New Zealand, Ireland and in America where they are based.
					</p>
				</div>

			  <div class="col-sm-2 offset-1">
				  <div class="card border-0">
						<img src={Baz} 
	            alt="'Baz' Beaver"
	            class="card-img-top">
	          </img>
				    <div class="card-body">
					    <p class="card-text text-end">
					    	Barry 'Baz' Beaver
					    </p>
					  </div>
				  </div>
				</div>
			</div>

			<div class="row d-flex justify-content-between">
			  <div class="col-sm-4">
				  <div class="card border-0">
						<img src={Jarrod} 
	            alt="Jarrod Lovell laces one through the covers" 
	            class="card-img-top">
	          </img>
				    <div class="card-body">
					    <p class="card-text text-center">
						    Jarrod Lovell blazes one through the covers
						  </p>
					  </div>
				  </div>
			  </div>
			  <div class="col-sm-4">
				  <div class="card border-0">
						<img src={Sri} 
	            alt="Srikant Ramakrishnan poses provactively" 
	            class="card-img-top">
	          </img>
				    <div class="card-body">
					    <p class="card-text text-center">
						    Srikant Ramakrishnan always poses provactively before going out to bat
						  </p>
					  </div>
				  </div>
			  </div>
			</div>
		</>
	)
};

export default Home;