import { Button, Modal } from "react-bootstrap";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectMonth, selectYear } from "../../../../app/slice/dateSlice";
import {
  setPrice,
  setproductName,
  setDate,
  selectPrice,
  selectProductName,
  selectDate,
} from "../../../../app/slice/expenditureFormSlice";
import {
  putExpenditureAsync,
  getExpendituresAsync,
} from "../../../../app/slice/dbSlice";
import { Expenditure } from "../../../../dataTypes/expenditure";
import { ExpenditureForm } from "./ExpenditureForm";

interface props {
  show: boolean;
  closeBtn: () => void;
}

export const ExpenditureDialog = (props: props) => {
  const dispatch = useAppDispatch();
  const { show, closeBtn } = props;

  const year = useAppSelector(selectYear);
  const month = useAppSelector(selectMonth);

  const price = useAppSelector(selectPrice);
  const productName = useAppSelector(selectProductName);
  const date = useAppSelector(selectDate);

  const onShow = () => {
    dispatch(setPrice(0));
    dispatch(setproductName(""));
    dispatch(setDate(new Date(year, month - 1, 1)));
  };

  const addExpenditure = async () => {
    if (!(Number.isInteger(price) && price > 0)) {
      alert("金額には1以上の数値を入力してください。");
      return;
    }
    if (productName === "") {
      alert("品名が入力されていません。");
      return;
    }
    const expenditure: Expenditure = {
      productName: productName,
      price: price,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
    await dispatch(putExpenditureAsync(expenditure));
    closeBtn();
    dispatch(getExpendituresAsync({ year, month }));
  };

  return (
    <Modal
      show={show}
      onEscapeKeyDown={closeBtn}
      onShow={onShow}
      size="sm"
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          支出を追加する
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ExpenditureForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={addExpenditure}>追加する</Button>
        <Button onClick={closeBtn}>キャンセル</Button>
      </Modal.Footer>
    </Modal>
  );
};
