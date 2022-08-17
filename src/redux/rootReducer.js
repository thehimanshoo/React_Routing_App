import {combineReducers} from "redux";
import * as employeesReducer from './Employees/Employee.reducer';

const rootReducer = combineReducers({
    [employeesReducer.EMPLOYEES_FEATURE_KEY] : employeesReducer.employeesReducer,
    [employeesReducer.STOCKS_FEATURE_KEY] : employeesReducer.stocksReducer
});
export {rootReducer};