import "./Table.css"
import { Table as BootstrapTable, Button } from "react-bootstrap";

const Table = ({ headings, data, isAdmin, onEdit = () => {}, onRemove = () => {},}) => {
  return (
  <div className="table-responsive"  >
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((vehicle, index) => (
          <tr key={vehicle._id}>
            <td>{index + 1}</td>
            <td>{vehicle.name}</td>
            <td>{vehicle.description}</td>
            <td>{vehicle.price}</td>
            <td>{vehicle.manufacture}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.image}</td>
            {isAdmin && (
              <td>
                {" "}
                <Button variant="warning" size="sm" onClick={() => onEdit(vehicle._id)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => onRemove(vehicle._id)}>
                  Remove
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  </div>
  );
};

export default Table;
