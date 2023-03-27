import Dexie from "dexie";
import { Expenditure } from "../dataTypes/expenditure";

export interface db_expenditure {
  year_month: string;
  expenditure: Expenditure;
}

const database = new Dexie("kakeibo-4-browser");
database.version(1).stores({ expenditures: "++id, year_month" });
const expenditureTable: Dexie.Table<db_expenditure, string> =
  database.table("expenditures");

export const putExpenditure = async (expenditure: Expenditure) => {
  const year_month = `${expenditure.year}${expenditure.month}`;
  await expenditureTable.put({
    year_month,
    expenditure,
  });
};

export const getExpenditures = async (
  year: number,
  month: number
): Promise<Expenditure[]> => {
  const target = `${year}${month}`;
  return expenditureTable
    .where("year_month")
    .equals(target)
    .toArray((data) => data)
    .then((db_expenditures) => {
      const expenditures: Expenditure[] = [];
      db_expenditures.forEach((db_expenditure) => {
        expenditures.push(db_expenditure.expenditure);
      });
      return Promise.resolve(expenditures.sort((a, b) => a.day - b.day));
    });
};
