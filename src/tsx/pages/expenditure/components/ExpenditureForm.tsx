import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import React from "react";
import Datepicker from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { registerLocale } from "react-datepicker";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  setDate,
  setPrice,
  setproductName,
  selectPrice,
  selectProductName,
  selectDate,
} from "../../../../app/slice/expenditureFormSlice";

export const ExpenditureForm = () => {
  registerLocale("ja", ja);
  const dispatch = useAppDispatch();

  const price = useAppSelector(selectPrice);
  const productName = useAppSelector(selectProductName);
  const date = useAppSelector(selectDate);

  return (
    <Form>
      <FormGroup>
        <FormLabel>金額</FormLabel>
        <FormControl
          type="number"
          value={price || ""}
          onChange={(e) => {
            dispatch(setPrice(Number.parseInt(e.target.value)));
          }}
        ></FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>品名</FormLabel>
        <FormControl
          value={productName}
          onChange={(e) => dispatch(setproductName(e.target.value))}
        ></FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel>購入日</FormLabel>
        <Datepicker
          dateFormat={"yyyy年MM月dd日"}
          selected={date}
          className="form-control"
          locale="ja"
          onChange={(d) => dispatch(setDate(d || new Date()))}
        ></Datepicker>
      </FormGroup>
    </Form>
  );
};
