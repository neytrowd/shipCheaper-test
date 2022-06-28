import React, { FC, useState } from 'react';
import styles from './add-company.module.scss';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../lib/hooks/redux';
import { addCompany } from '../../../store/reducers/companySlice';
import AddressStep from './address-step';
import DataStep from './data-step';
import ContactStep from './contact-step';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const title = ['Invoice Address', 'Bank Data', 'Contact'];

const schema = yup.object().shape({
   company: yup
      .string()
      .required('Company is a required field'),
   name: yup.string().required('Name is a required field'),
   bankData: yup.object().shape({
      iban: yup
         .string()
         .required('IBAN is a required field'),
      bic: yup.string().required('BIC is a required field'),
      bankName: yup
         .string()
         .required('Bank name is a required field'),
   }),
});

const AddCompany: FC = () => {
   const dispatch = useAppDispatch();
   const [open, setOpen] = useState(false);
   const [currentStep, setCurrentStep] = useState(0);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      mode: 'all',
      resolver: yupResolver(schema),
   });

   const toggleModal = () => {
      setOpen((prev) => !prev);
   };

   const toggleReset = () => {
      reset();
      toggleModal();
      setCurrentStep(0);
   };

   const onSubmit = (data: any) => {
      dispatch(addCompany(data));
      toggleReset();
   };

   const toggleStep = (step: number) => {
      if (step < 0 && currentStep !== 0) {
         setCurrentStep((prev) => prev - 1);
      } else if (step > 0 && currentStep !== 2) {
         setCurrentStep((prev) => prev + 1);
      }
   };

   return (
      <div className={styles.root}>
         <Button onClick={toggleModal} variant="contained">
            Add
         </Button>

         <Modal open={open} onClose={toggleModal}>
            <h2 className={styles.title}>
               {title[currentStep]}
            </h2>

            <form
               onSubmit={handleSubmit(onSubmit)}
               noValidate
            >
               {currentStep === 0 && (
                  <AddressStep
                     register={register}
                     errors={errors}
                  />
               )}
               {currentStep === 1 && (
                  <DataStep
                     register={register}
                     errors={errors}
                  />
               )}
               {currentStep === 2 && (
                  <ContactStep
                     register={register}
                     errors={errors}
                  />
               )}

               <div className={styles.actions}>
                  <Button
                     variant="outlined"
                     onClick={toggleReset}
                  >
                     Cancel
                  </Button>
                  {currentStep !== 0 && (
                     <Button
                        variant="outlined"
                        onClick={() => toggleStep(-1)}
                     >
                        Previous
                     </Button>
                  )}
                  {currentStep !== 2 && (
                     <Button
                        variant="contained"
                        onClick={() => toggleStep(1)}
                     >
                        Next
                     </Button>
                  )}
                  {currentStep === 2 && (
                     <Button
                        type="submit"
                        variant="contained"
                     >
                        Save
                     </Button>
                  )}
               </div>
            </form>
         </Modal>
      </div>
   );
};

export default AddCompany;
