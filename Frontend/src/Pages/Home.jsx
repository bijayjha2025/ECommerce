import FeaturedComponent from '../Components/FeaturedCollection/FeaturedComponent';
import Hero from '../Components/Hero/Hero';
import Marquee from '../Components/Marquee';
import NewsLetterSignUp from '../Components/NewsLetterSignUp';

const Home = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <FeaturedComponent />


      <NewsLetterSignUp />
    </div>
  )
}

export default Home