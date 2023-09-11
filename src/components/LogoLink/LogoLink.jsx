import PropTypes from 'prop-types';
import * as Styled from './styles';
import Heading from '../Heading/Heading';

function LogoLink({ text, srcImage = '', link }) {
  return (
    <Heading size='small' uppercase>
      <Styled.Container href={link}>
        { srcImage && <img src={srcImage} alt={text} /> }
        { !srcImage && text }
      </Styled.Container>
    </Heading>

  );
}

LogoLink.propTypes = {
  text: PropTypes.string.isRequired,
  srcImage: PropTypes.string,
  link: PropTypes.string.isRequired
}

export default LogoLink;
