import React from "react";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list-center">
        <Card>
          <h2>No places found. Try creating one.</h2>
          <button>Placeholder</button>
        </Card>
      </div>
    );
  }
};

export default PlaceList;
