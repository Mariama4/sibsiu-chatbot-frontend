import { observer } from "mobx-react-lite";
import { Container, Form } from "react-bootstrap";

const SearchBar = observer(({ onChange }) => {
  return (
    <Container className="p-3">
      <Form.Control
        id="searchBar"
        placeholder="Введите frame id для поиска"
        onChange={onChange}
      />
    </Container>
  );
});

export default SearchBar;
