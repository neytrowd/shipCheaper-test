import React, { forwardRef } from 'react';
import { SelectProps } from './select.props';
import styles from './select.module.scss';

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ id, label, error = '', ...args }, ref) => {
   return (
      <div className={styles.root}>
         <label htmlFor={id}>{label}</label>
         <div className={styles.block}>
            <select {...args} ref={ref} className={styles.field}>
               <option value="USA">USA</option>
               <option value="Brazil">Brazil</option>
               <option value="Germany">Germany</option>
            </select>
            {error && <span className={styles.error}>{error}</span>}
         </div>
      </div>
   );
});

export default Select;
