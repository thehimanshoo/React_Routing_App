import React, {useEffect} from "react";
import "../../App.css"
import {useDispatch, useSelector} from "react-redux";
import * as employeesAction from '../../redux/Employees/Employees.action';
import * as employeesReducer from '../../redux/Employees/Employee.reducer';
import {Link} from "react-router-dom";

const Employees = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(employeesAction.fetchEmployeesDetails());
    }, []);

    const EMPLOYEES_DETAILS = useSelector((state) => {
        return state [employeesReducer.EMPLOYEES_FEATURE_KEY];
    });
    const {employeesData} = EMPLOYEES_DETAILS;

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="col">
                            <p className="h5 text-secondary fw-bold display-5">Employees List</p>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, architecto autem, corporis dolores eligendi iure molestias, provident quod reiciendis sequi temporibus unde vel voluptate? In, nemo ratione. Ad autem cum facilis iure natus nemo quas, repellendus. Aliquam commodi eaque natus.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        {
                            (employeesData?.length > 0) ?
                                <React.Fragment>
                                    <table className="table table-striped table-hover table-dark">
                                        <thead className="bg-dark text-white">
                                        <tr>
                                            <td>SNO</td>
                                            <td>Name</td>
                                            <td>Email</td>
                                            <td>Country</td>
                                            <td>State</td>
                                            <td>City</td>
                                        </tr>
                                        </thead>
                                        <tbody className="table-success bg-success">
                                            {
                                                employeesData.map(eachEmp => {
                                                    return(
                                                        <tr key={eachEmp.login.uuid}>
                                                            <td>{eachEmp.login.uuid.slice(0,5)}</td>
                                                            <td>
                                                                <Link to={`/employees/${eachEmp.login.uuid}`} className="text-primary fw-bold">{eachEmp.name.title} {eachEmp.name.first} {eachEmp.name.last}</Link>
                                                            </td>
                                                            <td>{eachEmp.email}</td>
                                                            <td>{eachEmp.location.country}</td>
                                                            <td>{eachEmp.location.state}</td>
                                                            <td>{eachEmp.location.city}</td>
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
export default Employees;