import { rem } from 'polished';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AvatarWrapper = styled.div`
  width: ${(props) => size(props.size)};
  &:hover{
     cursor: pointer;
  },
`;

const sizeUnit = 16;
/* sizes */
const createSize = (size) => rem(`${size * sizeUnit}px`);

const sizes = {
  sm: createSize(3),
  md: createSize(4),
  lg: createSize(5),
};

const size = (size) => {
  if (typeof size[size] !== 'undefined') {
    return sizes[size];
  } else {
    return size['md'];
  }
};

AvatarWrapper.defaultProps = {
  size: 'md',
};

AvatarWrapper.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default AvatarWrapper;
