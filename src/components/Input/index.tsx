import React, { forwardRef } from 'react';
import { InputProps } from './input.props';
import styles from './input.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, error, ...args }, ref) => {
   return (
      <div className={styles.root}>
         <label htmlFor={id}>{label}</label>
         <div className={styles.block}>
            <input {...args} id={id} ref={ref} className={styles.field} />
            {error && <span className={styles.error}>{error}</span>}
         </div>
      </div>
   );
});

export default Input;
