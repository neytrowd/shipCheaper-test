import React, { FC } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from './button.props';

const Button: FC<ButtonProps> = ({ children, variant, type = '', ...props }) => {
   return (
      <button {...props} type={type === 'submit' ? 'submit' : 'button'} className={`${styles.root} ${styles[variant]}`}>
         {children}
      </button>
   );
};

export default Button;
