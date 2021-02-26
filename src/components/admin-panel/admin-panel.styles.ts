import styled from 'styled-components';
import { rem } from '../../utils/styles';

export const TopPanel = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${rem(16)} ${rem(12)};
`;

export const Title = styled.div`
    font-size: ${rem(20)};
`;

export const AdminPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: ${rem(16)};
    padding: ${rem(16)};
    box-shadow: 0 0 ${rem(4)} #000000;
`