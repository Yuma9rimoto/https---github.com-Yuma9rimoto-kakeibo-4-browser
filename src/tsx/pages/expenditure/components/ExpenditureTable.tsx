import { Table as BootStrapTable } from "react-bootstrap";
import { Expenditure } from "../../../../dataTypes/expenditure";
import styled from "styled-components";

export const ExpenditureTable = ({ rows }: { rows: Expenditure[] }) => {
  return (
    <BootStrapTable striped bordered>
      <thead>
        <tr>
          <DayColomn>日</DayColomn>
          <th>内容</th>
          <PriceColomn>金額</PriceColomn>
        </tr>
      </thead>
      {rows && (
        <tbody>
          {rows.map((row) => (
            <tr>
              <td>{row.day}日</td>
              <td>{row.productName}</td>
              <td>{row.price} 円</td>
            </tr>
          ))}
        </tbody>
      )}
    </BootStrapTable>
  );
};

const DayColomn = styled.th`
  width: 5em;
`;
const PriceColomn = styled.th`
  width: 12em;
`;
