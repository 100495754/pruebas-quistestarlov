

import PropTypes from 'prop-types';

const Avatar = ({ src, alt, size, onAvatarHover, onAvatarUnHover }) => {
  return (
    <img
      src={src}
      alt={alt}
      onMouseEnter={onAvatarHover}
      onMouseLeave={onAvatarUnHover}
      className="rounded-circle"
      style={{ width: size, height: size, borderRadius: "50%", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onAvatarHover: PropTypes.func,
  onAvatarUnHover: PropTypes.func
};

export default Avatar;