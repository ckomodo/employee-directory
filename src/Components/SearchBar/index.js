import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function SearchBar(props) {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default" >
            Search
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={props.userSearch}
          name="userSearch"
          placeholder="search by name"
          onChange={props.handleInputChange}
        />
      </InputGroup>
    </div>
  );
}
