/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import {
  selectMonth,
  selectYear,
  nextYear,
  prevYear,
  nextMonth,
  prevMonth,
} from "../../../../app/slice/dateSlice";
import { getExpendituresAsync } from "../../../../app/slice/dbSlice";
import { Button } from "react-bootstrap";
import { ExpenditureDialog } from "./ExpenditureDialog";

export const MenuBar = () => {
  const [display, setDisplay] = useState(false);

  const year = useAppSelector(selectYear);
  const month = useAppSelector(selectMonth);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getExpendituresAsync({ year, month }));
  }, [month, year]);

  const NumChanger = (props: {
    onLeft: () => void;
    onRight: () => void;
    data: number;
    unitName: String;
  }) => {
    return (
      <>
        <Button onClick={props.onLeft}>＜</Button>
        <DateBlock>
          {props.data}
          {props.unitName}
        </DateBlock>
        <Button onClick={props.onRight}>＞</Button>
      </>
    );
  };

  return (
    <>
      <StyledMenuBar>
        <DateBox>
          <NumChanger
            data={year}
            unitName={"年"}
            onLeft={() => dispatch(prevYear())}
            onRight={() => dispatch(nextYear())}
          />
          <NumChanger
            data={month}
            unitName={"月"}
            onLeft={() => dispatch(prevMonth())}
            onRight={() => dispatch(nextMonth())}
          />
        </DateBox>
        <AddButton>
          <Button onClick={() => setDisplay(true)}>支出を追加</Button>
        </AddButton>
      </StyledMenuBar>
      <ExpenditureDialog
        show={display}
        closeBtn={() => {
          setDisplay(false);
        }}
      ></ExpenditureDialog>
    </>
  );
};
const StyledMenuBar = styled.div`
  display: flex;
  justify-content: center;
`;

const DateBox = styled.div`
  display: inline;
  margin: 16px, 16px;
  position: absolute;
  left: 0;
`;

const DateBlock = styled.div`
  text-align: center;
  width: 4rem;
  display: inline-block;
`;

const AddButton = styled.div`
  display: inline;
  text-align: right;
  margin: 16px, 16px;
`;
