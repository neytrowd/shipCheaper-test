import React, { FC } from 'react';
import AddCompany from './add-company';
import CompanyList from './company-list';

const Home: FC = () => {
   return (
      <div>
         <AddCompany />
         <CompanyList />
      </div>
   );
};

export default Home;
