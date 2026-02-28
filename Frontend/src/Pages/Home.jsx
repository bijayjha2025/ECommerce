import BestSeller from '../Components/BestSeller';
import CraftStory from '../Components/CraftStory';
import FeaturedComponent from '../Components/FeaturedCollection/FeaturedComponent';
import Hero from '../Components/Hero/Hero';
import Marquee from '../Components/Marquee';
import NewsLetterSignUp from '../Components/NewsLetterSignUp';
import Testimonials from '../Components/HomeComponents/Testimonial/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <FeaturedComponent />

      <BestSeller />

      <CraftStory />

      <Testimonials />


      <NewsLetterSignUp />
    </div>
  )
}

export default Home