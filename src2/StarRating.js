import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
    starsInner: {
        width: `${width}px`
    },
    starsEmptyInner: {
        position: 'absolute',
        width: `${width}px`
    },
    starsOuter: {
        overflow: 'hidden'
    },
    star: {
        padding: '1px'
    }
};

const cropWidth = (rating) => {
    return Math.floor(rating * width / 5);
};

const StarRating = (props) => {

    const containerStyle = { width: `${cropWidth(props.rating)}px` };

    return (
        <div>
            {props.rating}
            <p>theres going to be a rating here</p>
        </div>
    );
};

StarRating.defaultProps = {
    rating: 10// change later
};

StarRating.propTypes = {
    rating: PropTypes.number
};

export default StarRating;