
import PropTypes from 'prop-types';

import Feature from '../Feature/Feature';

const Price = ({coursePrice}) => {

    console.log(coursePrice);
    const {plan,price,features}=coursePrice;

   
    return (
        <div className='flex flex-col p-6 m-2 bg-blue-400 rounded-md'>
            <h2 className='text-2xl text-center '>
            <span className='text-3xl text-center'>{price} </span>
            <span>usd/month</span>
            </h2>
            <h4 className='text-3xl text-center'>{plan}</h4>
            <div className='flex-grow mt-8'>
            {
                features.map((feature,idx)=> <Feature key={idx} feature={feature}s></Feature>)
            }

            </div>
            <button type='button'>Buy Now</button>
        </div>
    );
};

Price.propTypes={
    coursePrice:PropTypes.object.isRequired
}
export default Price;