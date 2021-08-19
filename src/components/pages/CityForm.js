"use strict";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class CityForm extends React.Component {
  render() {
    return (
      <form onSubmit={(e) => this.props.renderForm(e)}>
        <fieldset>
          <label>cat name</label>
          <input type="text" name="name" />
          <label>cat breed</label>
          <input type="submit" value="Update" />
        </fieldset>
      </form>
    //   <form onSubmit={(e) => this.props.renderForm(e)}>
    //     <fieldset>
    //       <label>cat name</label>
    //       <input type="text" name="name" />
    //       <label>cat breed</label>
    //       <input type="submit" value="Update" />
    //     </fieldset>
    //   </form>
    );
  }
}

export default CityForm;
