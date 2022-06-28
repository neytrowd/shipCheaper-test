export interface ICompany {
   id: number;
   company: string;
   name: string;
   additional: string;
   address: IAddress;
   bankData: IBankData;
   contact: IContact;
}

interface IAddress {
   street: string;
   postalCode: string;
   country: string;
}

interface IBankData {
   iban: string;
   bic: string;
   bankName: string;
}

interface IContact {
   fax: string;
   email: string;
   birthday: string;
   homepage: string;
}
