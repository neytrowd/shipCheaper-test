import React, { FC } from 'react';
import styles from './company-list.module.scss';
import garbage from '../../../assets/images/garbage.svg';
import {
   useAppDispatch,
   useAppSelector,
} from '../../../lib/hooks/redux';
import { deleteCompany } from '../../../store/reducers/companySlice';

const CompanyList: FC = () => {
   const dispatch = useAppDispatch();
   const { companies } = useAppSelector(
      (store) => store.company
   );

   const toggleDelete = (id: number) => {
      dispatch(deleteCompany(id));
   };

   return (
      <div className={styles.root}>
         <table className={styles.list}>
            <tbody className={styles.list__content}>
               <tr className={styles.list__head}>
                  <td />
                  <td>Company</td>
                  <td>Name</td>
                  <td>Additional</td>
                  <td>Street</td>
                  <td>Postal code</td>
                  <td>Country</td>
                  <td>IBAN</td>
                  <td>BIC</td>
                  <td>Bank name</td>
                  <td>Fax</td>
                  <td>E-mail</td>
                  <td>Birthday</td>
                  <td>Homepage</td>
               </tr>

               {companies.map((item) => (
                  <tr key={item.id}>
                     <td>
                        <button
                           className={styles.list__action}
                           type="button"
                           onClick={() =>
                              toggleDelete(item.id)
                           }
                        >
                           <img
                              src={garbage}
                              alt="delete"
                           />
                        </button>
                     </td>
                     <td>{item.company}</td>
                     <td>{item.name}</td>
                     <td>{item.additional}</td>
                     <td>{item.address?.street}</td>
                     <td>{item.address?.postalCode}</td>
                     <td>{item.address?.country}</td>
                     <td>{item.bankData?.iban}</td>
                     <td>{item.bankData?.bic}</td>
                     <td>{item.bankData?.bankName}</td>
                     <td>{item.contact.fax}</td>
                     <td>{item.contact.email}</td>
                     <td>{item.contact.birthday}</td>
                     <td>{item.contact.homepage}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default CompanyList;
