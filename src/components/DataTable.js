import React, { useState } from "react";
import Details from "./Details";

const DataTable = ({ data }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleRowClick = (id) => {
    setActiveTab(id === activeTab ? null : id);
  };

  // TableRows
  const TableRows = () => {
    return data.map((rowData) => (
      <div>
        <table>

          <tbody>
            <tr key={rowData.id} >
              <td>{rowData.name}</td>
              <td>{rowData.amount}</td>
              <td>
                <button onClick={() => handleRowClick(rowData.id)}>More Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  };

  // tabs name 
  const TabsName = () => {
    return data.map((rowData) => {
      const isActive = activeTab === rowData.id;

      return (
        <div key={rowData.id} >
          {/* <button onClick={() => handleRowClick(rowData.id)}>
            {rowData.name}
          </button> */}
          {isActive && TabDetails(rowData)}
        </div>
      );
    });
  };

  // Details for each tab
  const TabDetails = (rowData) => {
    return (
      <div >
        <div >
          <p>{rowData.description}</p>
          <p>{rowData.date}</p>
          <p>{rowData.amount}</p>
          <button onClick={()=>setActiveTab(null)}>close</button>
        </div>
      </div>
    );
  };



  return (
    <div className="container">
      <div id="students">
        <tr>
          <th >Name</th>
          <th >Amount</th>
          <th >Details</th>
        </tr>
        {TableRows()}
      </div>
      <div className="details">
        <Details TabsName={TabsName} />
      </div>
    </div >
  );
};

export default DataTable;
