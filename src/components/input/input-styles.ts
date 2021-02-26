import styled from 'styled-components';
import { RED, rem } from '../../utils/styles';

export const StyledInput = styled.input`
    display: flex;
    flex: 2;
`;

export const InputLabel = styled.div`
    flex: 1;
    padding-right: ${rem(12)};
`;

export const InputFields = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputRow = styled.div`
    display: flex;
    padding-bottom: ${rem(12)};
`;

export const ValidationMessage = styled.div`
    font-size: ${rem(10)};
    color: ${RED};
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;