import React from "react";
import { Form } from "react-bootstrap";
import Input from "../../components/Input";
import "./SearchPage.css";
const SearchPage = (props) => {
  return (
    <div>
      <div className="searchInput">
        <Input helperText="choose a city." placeHolder="Enter City" />
      </div>
    </div>
  );
};

export default SearchPage;
