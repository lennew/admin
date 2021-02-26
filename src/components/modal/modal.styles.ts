import styled from 'styled-components';
import { rem } from '../../utils/styles';

export const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 ${rem(2)} #000000;
    background-color: white;
    border-radius: ${rem(6)}; 
    padding: ${rem(24)} ${rem(60)};
`;

export const ModalTitle = styled.div`
    padding-bottom: ${rem(20)};
    font-size: ${rem(24)};
`;

export const ModalButtons = styled.div`
    display: flex;
    padding-top: ${rem(20)};
`;

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;    
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: ${rem(16)};
    background: rgba(255,255,255,.7);
`;