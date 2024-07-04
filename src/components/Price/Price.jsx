
import PropTypes from 'prop-types';

import Feature from '../Feature/Feature';

const Price = ({coursePrice}) => {

    const {plan,price,features}=coursePrice;

   
    return (
        <div className='flex flex-col p-6 m-2 text-white bg-blue-600 rounded-md'>
            <h2 className='mb-3 text-5xl text-center '>
            <span className='text-5xl text-center'>{price} </span>
            <span>usd/month</span>
            </h2>
            <h4 className='text-3xl text-center'>{plan}</h4>
            <div className='flex-grow mt-8'>
            {
                features.map((feature,idx)=> <Feature key={idx} feature={feature}s></Feature>)
            }

            </div>
            <button className='w-full py-2 mt-8 text-white bg-yellow-500 rounded hover:bg-green-600 hover:cursor-progress' type='button'>Buy Now</button>
        </div>
    );
};

Price.propTypes={
    coursePrice:PropTypes.object.isRequired
}
export default Price;