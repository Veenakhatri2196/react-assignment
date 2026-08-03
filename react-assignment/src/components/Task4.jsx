import { useMemo, useState } from "react";
import customers from "../data/customers";

function Task4() {
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState("All");
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "asc",
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getArrow = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "▲" : "▼";
  };

  const filteredCustomers = useMemo(() => {
    let data = customers.filter((customer) => {
      const matchSearch =
        customer.id.toString().includes(search) ||
        customer.customer.toLowerCase().includes(search.toLowerCase()) ||
        customer.segment.toLowerCase().includes(search.toLowerCase()) ||
        customer.latestPurchase.toLowerCase().includes(search.toLowerCase());

      const matchSegment =
        segment === "All" || customer.segment === segment;

      return matchSearch && matchSegment;
    });

    if (sortConfig.key) {
      data = [...data].sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];

        if (sortConfig.key === "customer" || sortConfig.key === "segment") {
          return sortConfig.direction === "asc"
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }

        if (sortConfig.key === "lastSeen") {
          const da = new Date(aVal);
          const db = new Date(bVal);
          return sortConfig.direction === "asc" ? da - db : db - da;
        }

        return sortConfig.direction === "asc"
          ? aVal - bVal
          : bVal - aVal;
      });
    }

    return data;
  }, [search, segment, sortConfig]);

  return (
    <div>
      <h2>Task 4 - Customer Data Grid</h2>

      <div style={{ display:"flex", gap:"12px", margin:"20px 0", flexWrap:"wrap" }}>
        <input
          type="text"
          placeholder="Search by ID, Name, Segment or Purchase..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          style={{padding:"10px", width:"250px"}}
        />

        <select
          value={segment}
          onChange={(e)=>setSegment(e.target.value)}
          style={{padding:"10px"}}
        >
          <option value="All">All Segments</option>
          <option value="Regular">Regular</option>
          <option value="Premium">Premium</option>
          <option value="New">New</option>
        </select>
      </div>

      <table border="1" cellPadding="10" style={{width:"100%",borderCollapse:"collapse",textAlign:"center"}}>
        <thead style={{background:"#3b82f6",color:"#fff"}}>
          <tr>
            <th>ID</th>
            <th style={{cursor:"pointer"}} onClick={()=>handleSort("customer")}>Customer {getArrow("customer")}</th>
            <th style={{cursor:"pointer"}} onClick={()=>handleSort("lastSeen")}>Last Seen {getArrow("lastSeen")}</th>
            <th style={{cursor:"pointer"}} onClick={()=>handleSort("orders")}>Orders {getArrow("orders")}</th>
            <th style={{cursor:"pointer"}} onClick={()=>handleSort("totalSpent")}>Total Spent {getArrow("totalSpent")}</th>
            <th>Latest Purchase</th>
            <th>News</th>
            <th style={{cursor:"pointer"}} onClick={()=>handleSort("segment")}>Segment {getArrow("segment")}</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.length ? filteredCustomers.map((customer)=>(
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.customer}</td>
              <td>{customer.lastSeen}</td>
              <td>{customer.orders}</td>
              <td>₹ {customer.totalSpent}</td>
              <td>{customer.latestPurchase}</td>
              <td>{customer.news ? "✔":"✖"}</td>
              <td>{customer.segment}</td>
            </tr>
          )) : (
            <tr><td colSpan="8">No Customer Found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;
