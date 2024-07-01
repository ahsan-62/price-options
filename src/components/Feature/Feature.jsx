import { FaCircleCheck } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div className="flex items-center gap-3">
           <FaCircleCheck></FaCircleCheck>
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.string.isRequired
}
export default Feature;