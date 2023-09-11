import PropTypes from 'prop-types';
import * as Styled from './styles';

function Text({ children }) {
  return (
    <Styled.Text dangerouslySetInnerHTML={{__html: children}}/>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired
}

export default Text;
