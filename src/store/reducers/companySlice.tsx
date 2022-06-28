import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICompany } from '../../types/company';

interface IState {
   companies: ICompany[];
}

const initialState: IState = {
   companies: [],
};

const companySlice = createSlice({
   name: 'company',
   initialState,
   reducers: {
      addCompany(state, action: PayloadAction<ICompany>) {
         state.companies.push({
            ...action.payload,
            id: Date.now(),
         });
      },
      deleteCompany(state, action: PayloadAction<number>) {
         state.companies = state.companies.filter((item) => item.id !== action.payload);
      },
   },
});

export const { addCompany, deleteCompany } = companySlice.actions;
export default companySlice.reducer;
