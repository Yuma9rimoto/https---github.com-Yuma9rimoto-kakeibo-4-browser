import React from "react";
import { MenuBar } from "./components/Menubar";
import { useAppSelector } from "../../../app/hooks";
import { ExpenditureTable } from "./components/ExpenditureTable";
import { selectExpenditures } from "../../../app/slice/expenditureSlice";

export const Expenditure = () => {
  const expenditures = useAppSelector(selectExpenditures);

  return (
    <>
      <MenuBar />
      <ExpenditureTable rows={expenditures} />
    </>
  );
};
