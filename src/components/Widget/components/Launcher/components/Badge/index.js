import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Badge = ({badge}) => {
    if (badge > 0) {
        return <span className="badge">{badge}</span>;
    }
    return (null);
};

Badge.propTypes = {
    badge: PropTypes.number
};

export default Badge;