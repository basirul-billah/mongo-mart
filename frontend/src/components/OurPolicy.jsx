
import { assets } from './../assets/assets';
const OurPolicy = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Easy Exchange</p>
                <p className='text-gray-400'>We offer hassle free easy exchange policy.</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>7 Days Returns</p>
                <p className='text-gray-400'>Get 7 days free return with every product.</p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>24/7 Support</p>
                <p className='text-gray-400'>We are online 24/7 for any support required by you.</p>
            </div>
        </div>
    )
}

export default OurPolicy
