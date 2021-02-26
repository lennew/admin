import styled from 'styled-components';
import { rem } from '../../utils/styles';
import { InputFields } from '../input/input-styles';

export const FormButtons = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
`;

export const AddPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
    box-shadow: 0 0 ${rem(4)} #000000;
    padding: ${rem(16)} ${rem(40)};
    margin-top: ${rem(30)};
`;

export const ContentWrapper = styled(InputFields)`
    width: 40%;
`;