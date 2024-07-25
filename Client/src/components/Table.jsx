
import { Table as BootstrapTable, Button } from "react-bootstrap";

const Table = ({ headings, data, isAdmin, onEdit = () => {}, onRemove = () => {},}) => {
  return (
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
                <Button variant="warning" onClick={() => onEdit(index)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => onRemove(index)}>
                  Remove
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};

export default Table;
