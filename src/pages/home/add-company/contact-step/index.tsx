import React, { FC } from 'react';
import Input from '../../../../components/Input';
import { IStep } from '../step.props';

const ContactStep: FC<IStep> = ({ register }) => {
   return (
      <>
         <Input
            type="text"
            label="Fax"
            id="fax"
            {...register('contact.fax')}
         />
         <Input
            type="text"
            label="E-mail"
            id="email"
            {...register('contact.email')}
         />
         <Input
            type="date"
            label="Birthday"
            id="birthday"
            {...register('contact.birthday')}
         />
         <Input
            type="text"
            label="Homepage"
            id="homepage"
            {...register('contact.homepage')}
         />
      </>
   );
};

export default ContactStep;
