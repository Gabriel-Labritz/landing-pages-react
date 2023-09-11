import PropTypes from 'prop-types';
import * as Styled from './styles';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import GoTop from '../../components/GoTop/GoTop';

function Base({ links = [], logoData, footerHtml, children }) {
  return (
    <>
      <Menu links={links} logoData={logoData}/>
      <Styled.Container>
        {children}
        <Footer html={footerHtml}/>
      </Styled.Container>
      <GoTop />
    </>
  );
}

Base.propTypes = {
  children: PropTypes.node.isRequired,
  ...Menu.propTypes,
  footerHtml: PropTypes.string.isRequired
}

export default Base;
