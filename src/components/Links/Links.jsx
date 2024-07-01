
import PropTypes from 'prop-types';
const Links = ({route}) => {
    return (
        <div>
            
                <li className="mr-6 font-bold hover:text-red-500" ><a href={route.path}>{route.name}</a></li>
           
        </div>
    );
};

Links.propTypes = {
    route: PropTypes.object.isRequired
}

export default Links;