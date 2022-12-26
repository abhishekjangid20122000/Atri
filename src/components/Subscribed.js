import React from "react";

function Subscribed(props) {
  return (
    <div>
      <p>
        Thanks <b>{props.n}</b> for Subscribing. Your email service will start right away!
      </p>
      <p>Check your mail for an awesome new recipe!</p>
    </div>
  );
}

export default Subscribed;
