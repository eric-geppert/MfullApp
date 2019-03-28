import React from 'react';
import PropTypes from 'prop-types';

//add cont styles later

const MenuItem = (props) => {
    return (
        <div>
            {props.gym}
            <p>blah</p>
        </div>
    );
};

MenuItem.defaultProps = {
    gym: "default gym here"
};

MenuItem.propTypes = {
    rating: PropTypes.any
};

export default MenuItem;