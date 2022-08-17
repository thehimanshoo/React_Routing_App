import * as employeesActions from './Employees.action';

// Feature Key
export const EMPLOYEES_FEATURE_KEY = 'EMPLOYEES_DETAILS';
export const STOCKS_FEATURE_KEY = 'STOCKS_DETAILS';

// Initial State
const employeesInitialState = {
   loading : false,
   employeesData : [],
   errorMessage : ''
};

const stocksInitialState = {
  loading : false,
  stocksData : [],
  errorMessage : ''
};

// Real Action_(Employees)
export const employeesReducer = (state=employeesInitialState, action) => {
    const {type, payload} = action;
    switch (type){
        case employeesActions.FETCH_EMPLOYEES_REQUEST :
            return{
                loading : true
            };
        case employeesActions.FETCH_EMPLOYEES_SUCCESS :
            return {
                loading : false,
                employeesData : payload
            };
        case employeesActions.FETCH_EMPLOYEES_FAILURE :
            return {
                errorMessage : payload
            };
        default : return state;
    }
};

// Real Action_(Stocks)
export const stocksReducer = (state=stocksInitialState, action) => {
    const {type, payload} = action;
    switch (type){
        case employeesActions.FETCH_STORE_REQUEST :
            return{
                loading : true,
            };
        case employeesActions.FETCH_STORE_SUCCESS :
            return {
                loading : false,
                stocksData : payload
            };
        case employeesActions.FETCH_STORE_FAILURE :
            return {
                errorMessage : payload
            };
        default : return state;
    }
};
