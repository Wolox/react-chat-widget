import React from 'react';
import PropTypes from 'prop-types';

const Snippet = props =>
  <div>
    <div className="snipet-title">
      {props.title}
    </div>
    <div className="snippet-details">
      <a href={props.link}>
        {props.link}
      </a>
    </div>
  </div>;

Snippet.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Snippet;
