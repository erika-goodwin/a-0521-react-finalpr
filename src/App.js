import Nav from "./components/Nav";
import Filter from "./components/Filter";
import "./css/app.css";
import Table from "./components/Table";
import TableSimp from "./components/TableSimp";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Filter />
      <TableSimp />
      <Table />
    </div>
  );
}
