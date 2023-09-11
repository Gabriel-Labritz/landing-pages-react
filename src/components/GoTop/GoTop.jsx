import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

function GoTop() {
  return (
    <Styled.Container href='#' title='Go to top' aria-label='Go to top'>
      <KeyboardArrowUp />
    </Styled.Container>
  );
}


export default GoTop;
