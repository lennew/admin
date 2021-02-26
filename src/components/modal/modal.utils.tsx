import  { ReactNode } from 'react';

export interface ModalProps {
    isOpen?: boolean;
    content: ReactNode;
}