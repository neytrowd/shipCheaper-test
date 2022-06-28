import React from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
   children: React.ReactNode;
   variant: 'contained' | 'outlined';
   [key: string]: any;
}
