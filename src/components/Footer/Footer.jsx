import PropTypes from 'prop-types';

import * as Styled from './styles';
import Text from '../Text/Text';
import SectionContainer from '../SectionContainer/SectionContainer';

function Footer({ html }) {
  return (
    <Styled.Container>
      <SectionContainer>
        <Text>{html}</Text>
      </SectionContainer>
    </Styled.Container>
  );
}

Footer.propTypes = {
  html: PropTypes.string.isRequired
}

export default Footer;
