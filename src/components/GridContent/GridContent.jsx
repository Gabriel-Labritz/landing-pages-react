import PropTypes from 'prop-types';

import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

function GridContent({ title, html, background = false, sectionId = '' }) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as='h2'>{title}</Heading>
        <Styled.Html>
          <Text>{html}</Text>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
}

GridContent.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
}

export default GridContent;
