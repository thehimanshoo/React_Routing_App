import Axios from "axios";

// --------------- Fetch Employee Data ---------------------
export const FETCH_EMPLOYEES_REQUEST = 'FETCH_EMPLOYEES_REQUEST';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';

// --------------- Fetch Store Data ------------------
export const FETCH_STORE_REQUEST = 'FETCH_STORE_REQUEST';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILURE = 'FETCH_STORE_FAILURE';

// -------------- Action to fetch local data ------------
export const GET_SELECTED_EMPLOYEE_DATA = 'GET_SELECTED_EMPLOYEE_DATA';
export const GET_SELECTED_STORE_DATA = 'GET_SELECTED_STORE_DATA';


// Action for fetching Employee Details
export const fetchEmployeesDetails = () => {
    return async (dispatch) => {
        try {
            dispatch ({type : FETCH_EMPLOYEES_REQUEST});

            const dataURL = 'https://gist.githubusercontent.com/thehimanshoo/3c4dc9a0a98dca994febe2619b644162/raw/b0477635bddfb28e3632d730783ebddbd999ff27/customers.14-03-2022.json';
            const response = await Axios.get(dataURL);
            dispatch ({type : FETCH_EMPLOYEES_SUCCESS, payload : response.data});
        }
        catch (error) {
            dispatch ({type : FETCH_EMPLOYEES_FAILURE, payload : error});
            console.log(error.message);
        }
    };
};

// Action for fetching Store Data
export const fetchStocksDetails = () => {
    return async (dispatch) => {
        try {
            dispatch ({type : FETCH_STORE_REQUEST});

            const dataURL = 'https://gist.githubusercontent.com/thehimanshoo/5b37d3979de22cf876b12b094cb85dcb/raw/40d8ee6df0a01b567deda6349586184c416741d2/stocksData.json';
            const response = await Axios.get(dataURL);

            dispatch ({type : FETCH_STORE_SUCCESS, payload : response.data});
        }
        catch (error) {
            dispatch ({type : FETCH_STORE_FAILURE, payload : error});
            console.log(error.message);
        }
    };
};