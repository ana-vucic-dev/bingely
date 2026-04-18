import { useState } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem'
};

const starContainerStyle = {
  display: 'flex'
};

function StarRating({
  color = '#fcc419',
  size = 48,
  className = '',
  messages = [],
  maxRating = 5,
  defaultRating = 0,
  onSetRating
}) {
  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color: color,
    fontSize: `${size / 1.2}px`
  };

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating?.(rating);
  }

  return (
    <div
      style={containerStyle}
      className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i + 1}
            color={color}
            size={size}
            isFilledStar={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            label={i + 1 === 1 ? `${i + 1} star` : `${i + 1} stars`}
            onClick={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>

      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ''}
      </p>
    </div>
  );
}

StarRating.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func
};

export default StarRating;
