import PropTypes from 'prop-types';

import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

function GridImage({ title, description, grid, background = false, sectionId = '' }) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size='huge' uppercase colorDark={!background} as='h2'>{title}</Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          { grid.map((element) => (
            <Styled.GridElement key={element.altText}>
              <Styled.Image src={element.srcImg} alt={element.altText}/>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(PropTypes.shape({
    altText: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
  })).isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string
}

export default GridImage;
