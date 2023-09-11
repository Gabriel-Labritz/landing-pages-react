import PropTypes from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/SectionBackground';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

function GridTwoColumns({ title, text, srcImg, background = false, sectionId = ''}) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as='h2'>{title}</Heading>
          <Text>{text}</Text>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title}/>
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
}

GridTwoColumns.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string
}

export default GridTwoColumns;
