import React from 'react';

export interface ModalProps extends React.ComponentProps<'div'> {
   children: React.ReactNode;
   open: boolean;
   onClose: (...args: any[]) => any;
   [key: string]: any;
}
