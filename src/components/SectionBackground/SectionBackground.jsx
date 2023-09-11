import PropTypes from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer/SectionContainer';

const random = () => `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

function SectionBackground({ children, sectionId = '',  background = false }) {

  const id = sectionId ? sectionId : random();

  return (
    <Styled.Container background={background} id={id}>
      <SectionContainer>
        { children }
      </SectionContainer>
    </Styled.Container>
  );
}

SectionBackground.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.bool,
  sectionId: PropTypes.string,
}

export default SectionBackground;
