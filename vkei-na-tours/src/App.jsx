import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Events from './components/Events'

const App = () => {

  return (
    <div className="App">
      <h1>VKEI AMERICAS TOURS 2025</h1>
      <h2 class='category'>Visual Kei Artists</h2>
      <Events name='DIR EN GREY' image='https://jrocknews.com/wp-content/uploads/2024/10/dir-en-grey-who-is-this-hell-for-2025-california.jpg' tour='TOUR25 WHO IS THIS HELL FOR?' 
      cities='Los Angeles, CA (April 8-9) | Anaheim, CA (April 11)'/>
      <Events name='JILUKA' image='https://jrocknews.com/wp-content/uploads/2024/10/jiluka-imminence-the-return-of-the-black-tour--north-america-2025-640x800.jpg' tour='The Return of the Black Tour' 
      cities='Worcester, MA (March 8) | Montreal, QC (March 9) | Toronto, ON (March 10) | Cleveland, OH (March 11) | Detroit, MI (March 12) | Chicago, IL (March 14) | Milwaukee, WI (March 15) | Minneapolis, MN (March 16) | Denver, CO (March 18) | Albuquerque, NM (March 19) | Los Angeles, CA (March 21) | San Diego, CA (March 22) | Tempe, AZ (March 23) | San Antonio, TX (March 25) | Houston, TX (March 26) | Orlando, FL (March 28) | Atlanta, GA (March 29) | Charlotte, NC (March 30) | Norfolk, VA (April 1) | McKees Rocks, PA (April 3) | Silver Spring, MD (April 4) | Sayreville, NJ (April 5)'/>
      <Events name='KAMIJO' image='https://electricbloomwebzine.com/wp-content/uploads/2024/12/JAPAN-TOUR-2025-MASTERPIECE-Tour-Poster-1000px.jpg' tour='THE AMERICAS TOUR 2025 -MASTERPIECE-' 
      cities= 'São Paulo, Brazil (May 24) | Santiago, Chile (May 25) | Mexico City, Mexico (May 28) | New York City, NY (May 30) | Los Angeles, CA (June 1)'/>
      <h2 class='category'>J-Rock Artists</h2>
      <Events name='ONE OK ROCK' image='https://www.oneokrock.com/en/wp-content/uploads/2025/01/OneOkRock_2025_SA_DetoxTour_NorthAmerican_AllDates_1920x1080_TourPoster01a.jpg' tour='DETOX North American Tour 2025' 
      cities='Vancouver, BC (May 13) | Seattle, WA (May 14) | San Francisco, CA (May 16) | Los Angeles, CA (May 18-19) | Irving, TX (May 22) | Houston, TX (May 23) | Orlando, FL (May 25) | Atlanta, GA (May 27) | Newark, NJ (May 30) | Washington, DC (May 31) | Boston, MA (June 1) | Montreal, QC (June 3) | Toronto, ON (June 4) | Chicago, IL (June 6) | Minneapolis, MN (June 7)'/>
      <Events name='NANO' image='https://jrocknews.com/wp-content/uploads/2024/11/nano-do-or-die-rock-your-heart-out-in-north-america-madkid-rising-live-2025-tour.jpeg' tour='DO OR DIE!! Rock Your Heart Out in North America' 
      cities='Vancouver, BC (January 24) | Seattle, WA (January 25) | San Francisco, CA (January 27) | San Diego, CA (January 28) | Los Angeles, CA (January 29) | Mexico City, Mexico (February 1) | Monterrey, Mexico (February 2) | Dallas, TX (February 4) | Chicago, IL (February 5) | New York, NY (February 6) | Toronto, ON (February 8)'/>
      <h2 class='category'>Japanese Metal/Kawaii Metal</h2>
      <Events name='BABYMETAL' image='https://babymetal.com/contents/1/TO/BabyMetal_NATour25_1080x1080_AllDates.jpg' tour='2025 North American Summer Tour' 
      cities='Houston, TX (June 13) | Irving, TX (June 14) | Tampa, FL (June 17) | Atlanta, GA (June 18) | Charlotte, NC (June 20) | Baltimore, MD (June 21) | New York, NY (June 24) | Boston, MA (June 25) | Uncasville, CT (June 27) | Philadelphia, PA (June 28) | Laval, QC (June 30)'/>
      <h2 class='category'>Japanese Alternative Rock</h2>
      <Events name='Hitsujibungaku' image='https://electricbloomwebzine.com/wp-content/uploads/2025/02/Hitsujibungaku-US-West-Coast-Tour-2025-Poster-copy.jpg' tour='US West Coast Tour 2025' 
      cities='San Diego, CA (April 10) | Los Angeles, CA (April 13) | San Francisco, CA (April 15) | Portland, OR (April 16)'/>
      <h2 class='category'>Japanese Power Pop/Punk</h2>
      <Events name='Shonen Knife' image='https://s.yimg.com/ny/api/res/1.2/z503SKUAYAWMXQ9_oei2qg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEwNTI-/https://media.zenfs.com/en/consequence_of_sound_458/8aebd704010e85bd4e58d53674132456' tour='Everyone Happy U.S. Tour' 
      cities='Buffalo, NY (September 20) | Boston, MA (September 21) | Hamden, CT (September 23) | New York, NY (September 24) | Baltimore, MD (September 26) | Sellersville, PA (September 27) | Pittsburgh, PA (September 28) | Columbus, OH (September 30) | Cleveland, OH (October 2) | Ann Arbor, MI (October 3) | Grand Rapids, MI (October 4) | Indianapolis, IN (October 5) | Kansas City, MO (October 7) | Denver, CO (October 9) | Colorado Springs, CO (October 10) | Santa Fe, NM (October 11) | Phoenix, AZ (October 13) | San Diego, CA (October 14) | Los Angeles, CA (October 16) | Fresno, CA (October 17) | San Jose, CA (October 18) | San Francisco, CA (October 19) | Novato, CA (October 21) | Sacramento, CA (October 22) | Portland, OR (October 24) | Seattle, WA (October 25) | Tacoma, WA (October 26)'/>
      <h2 class='category'>J-Pop/Anisong</h2>
      <Events name='LiSA' image='https://a.storyblok.com/f/178900/1200x675/df7eed9594/lisa-another-great-day-update.png/m/1200x0/filters:quality(95)format(webp)' tour='Another Great Day' 
      cities='New York, NY | Los Angeles, CA | Mexico City, Mexico'/>
      <h2 class='category'>Loud-kei/Japanese Metalcore</h2>
      <Events name='MADKID' image='https://jrocknews.com/wp-content/uploads/2024/11/nano-do-or-die-rock-your-heart-out-in-north-america-madkid-rising-live-2025-tour.jpeg' tour='Rising Live 2025 Tour' 
      cities='Vancouver, BC (January 24) | Seattle, WA (January 25) | San Francisco, CA (January 27) | San Diego, CA (January 28) | Los Angeles, CA (January 29) | Mexico City, Mexico (February 1) | Monterrey, Mexico (February 2) | Dallas, TX (February 4) | Chicago, IL (February 5) | New York, NY (February 6) | Toronto, ON (February 8)'/>
    </div>
  )
}

export default App
