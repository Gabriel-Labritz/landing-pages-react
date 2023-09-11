import Proptypes from 'prop-types';
import * as Styled from './styles';

function Heading({ children, colorDark = true, as = 'h1', size = 'huge', uppercase = false}) {
  return (
    <Styled.Title
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
}

Heading.propTypes = {
  children: Proptypes.node.isRequired,
  colorDark: Proptypes.bool,
  as: Proptypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: Proptypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: Proptypes.bool
}

export default Heading;
