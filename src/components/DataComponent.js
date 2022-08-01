import { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

const DataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const URL = "https://dummy.restapiexample.com/api/v1/employees";

  useEffect(() => {
    const getTask = async () => {
      const taskFromSever = await fetchData();
      setData(taskFromSever);
    };
    getTask();
  }, []);

  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    setLoading(true);
    console.log(data);
    return data.data;
  };

  return (
    <div>
      <h1 className="App" style={{ margin: "20px" }}>
        Data Table
      </h1>
      {loading ? (
        <div>
          <div className="table-wrapper">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="App">
            <Link
              className="linkStyle"
              style={{ width: "200px", fontSize: 22, marginBottom: "20px" }}
              to="/"
            >
              Go back
            </Link>
          </div>
        </div>
      ) : (
        <div className="spinner">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
    </div>
  );
};

export default DataComponent;
