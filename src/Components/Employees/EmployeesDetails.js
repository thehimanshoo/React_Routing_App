import React from "react";
import "../../App.css";
import * as employeesReducer from '../../redux/Employees/Employee.reducer';
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

const EmployeesDetails = () => {
    const employeeID = useParams().id;

    const employeesInfo = useSelector((state) => {
        return state[employeesReducer.EMPLOYEES_FEATURE_KEY];

    });
    const {employeesData} = employeesInfo;
    const selectedEmp = employeesData.find(employee => employee.login.uuid===employeeID );

    return(
        <React.Fragment>

            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h5 fw-bold text-secondary display-4">Employee Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut autem dolore dolorum facilis odit placeat ratione reprehenderit, rerum voluptates. Ab consequatur culpa cum dicta dolor enim eos eveniet inventore laborum, maxime molestiae nulla optio quasi quidem repudiandae soluta voluptate!</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <div className="card" style={{background : 'lightgrey'}}>
                            <div className="card-header bg-secondary text-white">
                                <p className="h5 text-white fw-bold display-6">{selectedEmp.name.title}. {selectedEmp.name.first} {selectedEmp.name.last}</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 justify-content-center align-items-center text-center">
                                        <img src={selectedEmp.picture.large} alt="" width="250" height="250" className="img-fluid img-thumbnail"/>
                                    </div>
                                    <div className="col-md-8">
                                        {
                                            Object.keys(selectedEmp).length > 0 ?
                                                <React.Fragment>
                                                    <ul className="list-group fw-bold">
                                                        <li className="list-group-item">
                                                            Name : {selectedEmp.name.title} {selectedEmp.name.first} {selectedEmp.name.last}
                                                        </li>
                                                        <li className="list-group-item">
                                                            Email : {selectedEmp.email}
                                                        </li>
                                                        <li className="list-group-item">
                                                            Age : {selectedEmp.dob.age}
                                                        </li>
                                                        <li className="list-group-item">
                                                            Gender : {selectedEmp.gender}
                                                        </li>
                                                        <li className="list-group-item">
                                                            Country : {selectedEmp.location.country}
                                                        </li>
                                                        <li className="list-group-item">
                                                            State : {selectedEmp.location.state}
                                                        </li>
                                                        <li className="list-group-item">
                                                            City : {selectedEmp.location.city}
                                                        </li>
                                                    </ul>
                                                </React.Fragment> : null
                                        }
                                    </div>
                                </div>
                                <Link to={`/employees`} className="btn btn-secondary">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default EmployeesDetails;