import Title from './../components/Title';
import { assets } from './../assets/assets';
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to our world! We’re a team of passionate individuals dedicated to delivering the best in everything we do. With a focus on innovation and a commitment to excellence, we aim to make a difference in the lives of our customers and community. Our journey is all about pushing boundaries and redefining standards to bring you products and services you can trust.</p>
          <p>Our story is rooted in a deep desire to provide value and build long-lasting relationships with everyone we work with. From our products to our customer service, we are driven by a mission to create meaningful connections and ensure satisfaction in every interaction.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is simple: to exceed expectations by providing high-quality products, exceptional service, and a seamless experience. We believe in transparency, integrity, and constantly evolving to better serve you. Together, let’s achieve greatness.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>We stand by the quality of our products and services. From materials to craftsmanship, every detail matters, and we ensure nothing short of excellence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Your convenience is our priority. We’ve streamlined our processes to save you time and make every interaction smooth and hassle-free.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>We’re here for you, always. Our dedicated team is ready to help with any questions or concerns, ensuring you feel supported every step of the way.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
