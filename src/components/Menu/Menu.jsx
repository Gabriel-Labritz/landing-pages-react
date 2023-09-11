import PropTypes from 'prop-types';
import { useState } from 'react';

import * as Styled from './styles';
import SectionContainer from '../SectionContainer/SectionContainer';
import LogoLink from '../LogoLink/LogoLink';
import NavLinks from '../NavLinks/NavLinks';
import { Menu as MenuIcon} from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon} from '@styled-icons/material-outlined/Close';


function Menu({ links = [], logoData = {} }) {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label='Open/Close menu'
      >
        { visible ? <CloseIcon aria-label='Close menu'/> : <MenuIcon aria-label='Open menu'/> }
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: PropTypes.shape(LogoLink.propTypes).isRequired
}

export default Menu;
