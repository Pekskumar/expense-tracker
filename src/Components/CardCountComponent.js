import React from "react";
import { Col,  Row } from "react-bootstrap";
import IncomeIcon1 from "../Assets/Images/IncomeIcon1";
import ExpensecountIcon from "../Assets/Images/ExpensecountIcon";
import BalanceIcon from "../Assets/Images/BalanceIcon";
import TransactionIcon from "../Assets/Images/TransactionIcon";

const CardCountComponent = (props) => {
  return (
    <>
      <Row>
        <Col md={3} className="mb-3">
          <div className="cardcount-body p-4 d-flex     justify-content-between">
            <div>
              <h4 className="blue">₹ {props?.data?.income}</h4>
              <span className="box-title-color">Income</span>
            </div>
            <IncomeIcon1 />
          </div>
        </Col>
        <Col md={3} className="mb-3">
          <div className="cardcount-body p-4 d-flex     justify-content-between">
            <div>
              <h4 className="pink">₹ {props?.data?.expenses}</h4>
              <span className="box-title-color">Expenses</span>
            </div>
            <ExpensecountIcon />
          </div>
        </Col>
        <Col md={3} className="mb-3">
          <div className="cardcount-body p-4 d-flex     justify-content-between">
            <div>
              <h4 className={`${props?.data?.balance > 0 ? "green" : "red"}`}>
                ₹ {props?.data?.balance}
              </h4>
              <span className="box-title-color">Balance</span>
            </div>
            <BalanceIcon />
          </div>
        </Col>
        <Col md={3} className="mb-3">
          <div className="cardcount-body p-4 d-flex     justify-content-between">
            <div>
              <h4 className="sky-blue">{props?.data?.transactions}</h4>
              <span className="box-title-color">Transactions</span>
            </div>
            <TransactionIcon />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CardCountComponent;
