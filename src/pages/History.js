import Team from '../images/Team.jpg'
import DC_Wides from '../images/DC_Wides.jpg'
import M_Extras from '../images/M_Extras.jpg'
import BAB_Phoenix from '../images/BAB_Phoenix.png'

const History = () => {
	return (
		<>
			<h1>A Comprehensive History of the Bay Area Beavers</h1>

			<div class="container-fluid">
			  <div class="row">
				  <div class="col">
						<p>
							The Bay Area Beavers are America's oldest active cricket club and were founded in 1861. The club was formed by an English farmer David Cornelius Wides and, having been around for over 150 years, it has a rich, unique history which the players today are proud to uphold.
						</p>
						<p>
							<span class="fst-italic">'D.C.'</span> as his friends affectionately called him, moved to the Bay Area at some point during the 1840's and pined for cricket after leaving the motherland. He would look out across his porch and down to the river that ran through his property, where he would see trees cut down by Beavers that resembled the stumps of the game he loved and missed so dearly. 
						</p>
						<p>
							Around 1859, Wides hired Miguel Extras. Extras was born in Mexico City and moved to Canada as a child where he learnt and grew to love the game of cricket before relocating to the Bay Area in 1858. This meeting reinvigorated Wides' passion for cricket and the two quickly bonded over their mutual love for the game.
						</p>
						<p>
							With the gold rush coming to an end, there were many expats from cricketing nations in and around the Bay Area so Wides and Extras cobbled together a few teams and played what is believed to be the first game of cricket in San Francisco on a hot August day in 1861.
						</p>
					</div>
				  <div class="col-sm-3">
					  <div class="card border-0">
						  <img src={Team} 
		            alt="Beavers circa 1886" 
		            class="card-img-top">
		          </img>
				      <div class="card-body">
						    <p class="card-text text-center">
							    Team photo circa 1886, the kid in the front row was banned from playing again until he grew a moustache.
							  </p>
						  </div>
						</div>
					</div>
				</div>

			  <div class="row">
				   <div class="col-sm-3">
					  <div class="card border-0">
							<img src={DC_Wides} 
		            alt="D.C. Wides" 
		            class="card-img-top">
		          </img>
				      <div class="card-body">
						    <p class="card-text text-center">David Cornelius Wides takes guard circa 1873</p>
						  </div>
					  </div>
					</div>
				  <div class="col">
						<p>
							It's unknown how many games the original side actually played, but we do have evidence both Wides and Extras were heavily involved in helping cricket gain a foothold in the Bay Area. Wides was a classicly elegant top order batter, technically correct in every way, shape and form, Extras was regarded as the top bowler in the area. His searing pace put fear into the hearts of the opposition and swung the bat hard in the lower order. Wides dubbed Extras' patented across the line slog as the <span class="fst-italic">'California Cover Drive'</span> in a playful nod to his friends effective, yet less than graceful approach to batting.
						</p>
						<p>
							The two worked tirelessly to grow the game locally, Miguel came up with ways of inflating batting totals for bowling that was difficult to hit, or when the ball would deflect off of the batter and they would scamper through for a single. This effort was to get more fans along and make the game more appealing to American audiences who found the game <span class="fst-italic">'slow'</span> compared to the rising popularity of baseball. Extras determined that any ball out of reach from the batter was too hard to hit and he dubbed these <span class="fst-italic">'Wides'</span> as a tribute to his dear friend D.C, who was a terrible bowler and struggled to keep it on the pitch. Collectively, these additional runs became affectionately known as <span class="fst-italic">'Extras'</span> by the fans, a name that remains in the cricketing lexicon today.
						</p>
					</div>
					  <div class="col-sm-3">
						  <div class="card border-0">
						  	<img src={M_Extras} 
			            alt="Miguel Extras" 
			            class="card-img-top">
			          </img>
				      <div class="card-body">
						    <p class="card-text text-center">Miguel Extras pioneer of the "California Cover Drive"</p>
						  </div>
						</div>
					</div>
				</div>

			  <div class="row">
				  <div class="col">
						<p>
							Around 1900, it's believed Extras returned to Mexico, age was catching up with D.C. Wides and it's about this point in time that club records cease to exist. Rumour has it, a nephew of Wides relocated to Michigan where he started the short lived <a href="https://en.wikipedia.org/wiki/Bay_City_Beavers" target='blank'>Bay City Beavers</a> baseball team in the Southern Michigan League Baseball in 1913, but club historians are yet to corroborate this.
						</p>
						<p>
							The team then lay dormant for just over a hundred years, when at a family reunion Red Hendery decided to catch up with his Great Uncle Barry, or Baz as he was known. Now living in the Bay Area, Red mentioned he joined a cricket club which piqued Baz's interest, "You know your Great, Great, Great, Great Grandfather ran a cricket team in the Bay Area right?" he asked. Red, having no idea, was immediately curious to hear more and the two talked for hours.
						</p>
						<p>
							The next day, they took a trip to cousin Sharon's place who had a bunch of old family history in cupboard and as they poured through the boxes they uncovered club records, team photos, newspaper clippings and everyone told tales of what they knew about the team, how it formed and what eventually happened to it. Armed with this knowledge it was clear, upon returning to the Bay Area, Red would reform the Beavers and continue to uphold the proud traditions of the club. 
						</p>
						<p>
							As tribute to Uncle Baz, the team mascot was named 'Barry Beaver' but he stills refuses to wear the costume.
						</p>
					</div>
				</div> 

			  <div class="col">
				  <div class="card border-0">
				  	<img src={BAB_Phoenix} 
	            alt="Phoenix Cricket Club, Ireland July 2023" 
	            class="card-img-top">
	          </img>
			      <div class="card-body">
					    <p class="card-text text-center">
					    	Team photo at <a href="https://phoenixcricketclub.com/" target='blank'>Phoenix Cricket Club </a> 
					    	in Ireland on July 27th, 2023
					    </p>
					  </div>
					</div>
				</div>

			</div>
		</>
	)
};

export default History;