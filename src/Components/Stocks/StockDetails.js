import React from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import * as employeesReducer from "../../redux/Employees/Employee.reducer";

const StockDetails = () => {
    const stockID = useParams().id;
    const id =parseInt(stockID);

    const stocksInfo = useSelector((state) => {
        return state[employeesReducer.STOCKS_FEATURE_KEY];
    });
    const {stocksData} = stocksInfo;
    const selectedStock = stocksData.find(stock => stock.id === id);

    return(
        <React.Fragment>
            {/*<pre>{JSON.stringify(selectedStock)}</pre>*/}
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                         <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at aut dicta dolore earum facilis, harum in nam, natus nostrum nulla odio omnis quibusdam quod sapiente sequi voluptatibus? Accusamus beatae cumque enim labore molestiae neque numquam, perferendis perspiciatis quidem repellendus.</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-secondary text-white fw-bold">

                                {/*<p className="h6 fw-bold text-white display-6">{(selectedStock.id === 1) ? `${selectedStock.id}`}</p>*/}
                                <p className="h6 fw-bold text-white display-6">{(selectedStock.id === 1) ? `${selectedStock.id}'st` : (selectedStock.id === 2) ? `${selectedStock.id}'nd` : (selectedStock.id === 3) ? `${selectedStock.id}'rd` : `${selectedStock.id}'th`} Row Details</p>

                            </div>
                            <div className="card-body fw-bold bg-light">
                                {
                                    Object.keys(selectedStock).length > 0 ?
                                        <React.Fragment>
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    Name : {selectedStock.name}
                                                </li>
                                                <li className="list-group-item">
                                                    Industry : {selectedStock.industry}
                                                </li>
                                                <li className="list-group-item">
                                                    Market : {selectedStock.market}
                                                </li>
                                                <li className="list-group-item">
                                                    Sector : {selectedStock.sector}
                                                </li>
                                                <li className="list-group-item">
                                                    Symbol : {selectedStock.symbol}
                                                </li>
                                            </ul>
                                        </React.Fragment> : null
                                }
                                <Link to={`/stocks`} className="btn btn-secondary text-white mt-2">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default StockDetails;