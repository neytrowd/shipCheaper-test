import React, { FC } from 'react';
import Input from '../../../../components/Input';
import { IStep } from '../step.props';

const DataStep: FC<IStep> = ({ register, errors }) => {
   return (
      <div>
         <Input
            type="text"
            label="IBAN *"
            id="iban"
            error={errors.bankData?.iban?.message}
            {...register('bankData.iban')}
         />
         <Input
            type="text"
            label="BIC *"
            id="bic"
            error={errors.bankData?.bic?.message}
            {...register('bankData.bic')}
         />
         <Input
            type="text"
            label="Bank name *"
            id="bankName"
            error={errors.bankData?.bankName?.message}
            {...register('bankData.bankName')}
         />
      </div>
   );
};

export default DataStep;
