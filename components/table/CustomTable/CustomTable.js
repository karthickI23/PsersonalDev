import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TableRow = ({ rowData , handleEdit}) => (
  <Tr className="table-row" onclick={handleEdit}>
    {rowData.map((data, index) => (
      <Td key={index}>{data}</Td>
    ))}
  </Tr>
);

const CustomTable = ({ headers, data }) => {
  return (
    <Table className="custom-table">
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index} className="header-cell">
              {header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((entry, index) => (
          <TableRow key={index} rowData={entry} />
        ))}
      </Tbody>
    </Table>
  );
}
export default CustomTable