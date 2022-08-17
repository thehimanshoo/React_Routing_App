import React, {useEffect} from "react";
import "../../App.css";
import {useDispatch, useSelector} from "react-redux";
import * as employeesAction from '../../redux/Employees/Employees.action';
import * as employeesReducer from "../../redux/Employees/Employee.reducer";
import {Link} from "react-router-dom";

const Stocks = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(employeesAction.fetchStocksDetails());
    }, []);

    const STOCKS_DETAILS = useSelector((state) => {
        return state [employeesReducer.STOCKS_FEATURE_KEY];
    });

    const {stocksData} = STOCKS_DETAILS;

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="col">
                            <p className="h5 text-primary fw-bold display-5">Stocks List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, architecto autem, corporis dolores eligendi iure molestias, provident quod reiciendis sequi temporibus unde vel voluptate? In, nemo ratione. Ad autem cum facilis iure natus nemo quas, repellendus. Aliquam commodi eaque natus.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        {
                            (stocksData?.length > 0) ?
                                <React.Fragment>
                                    <table className="table table-striped table-hover table-dark">
                                        <thead className="bg-dark text-white">
                                        <tr>
                                            <td>Id</td>
                                            <td>Name</td>
                                            <td>Industry</td>
                                            <td>Market</td>
                                            <td>Sector</td>
                                            <td>Symbol</td>
                                        </tr>
                                        </thead>
                                        <tbody className="table-success bg-success">
                                        {
                                            stocksData.map(eachStock => {
                                                return(
                                                    <tr key={eachStock.id}>
                                                        <td>{eachStock.id}</td>
                                                        <td>
                                                            <Link to={`/stocks/${eachStock.id}`} className="fw-bold fs-6">{eachStock.name}</Link>
                                                        </td>
                                                        <td>{eachStock.industry}</td>
                                                        <td>{eachStock.market}</td>
                                                        <td>{eachStock.sector}</td>
                                                        <td>{eachStock.symbol}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>

            <div style={{marginBottom : '50px'}}/>
        </React.Fragment>
    )
};
export default Stocks;