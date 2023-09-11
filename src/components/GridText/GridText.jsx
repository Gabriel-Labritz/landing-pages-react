import PropTypes from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

function GridText({ title, description, grid, background = false, sectionId = '' }) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size='huge' uppercase colorDark={!background} as='h2'>{title}</Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((element) => (
            <Styled.GridElement key={element.title}>
              <Heading size='small' colorDark={!background} as='h3'>{element.title}</Heading>
              <Text>{element.description}</Text>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string
}

export default GridText;
