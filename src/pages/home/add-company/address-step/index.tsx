import React, { FC } from 'react';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { IStep } from '../step.props';

const AddressStep: FC<IStep> = ({ register, errors }) => {
   return (
      <>
         <Input
            type="text"
            label="Company *"
            id="company"
            error={errors.company?.message}
            {...register('company')}
         />
         <Input
            type="text"
            label="Name *"
            id="name"
            error={errors.name?.message}
            {...register('name')}
         />
         <Input
            type="text"
            label="Additional"
            id="additional"
            {...register('additional')}
         />
         <Input
            type="text"
            label="Street"
            id="street"
            {...register('address.street')}
         />
         <Input
            type="text"
            label="Postal code"
            id="postalCode"
            {...register('address.postalCode')}
         />
         <Select
            type="text"
            label="Country"
            id="country"
            {...register('address.country')}
         />
      </>
   );
};

export default AddressStep;
