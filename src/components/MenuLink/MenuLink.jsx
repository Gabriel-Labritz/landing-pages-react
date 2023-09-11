import PropTypes from 'prop-types';
import * as Styled from './styles';

function MenuLink({ children, link, newTab = false }) {

  const target = newTab ? '_blank' : '_self';

  return (
    <div style={{display: 'flex'}}>
      <Styled.Container href={link} target={target}>
        {children}
      </Styled.Container>
    </div>

  );
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  newTab: PropTypes.bool
}

export default MenuLink;
