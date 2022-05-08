import React, { useEffect, useState } from "react";

const Expire = (props) => {
  const [visible, setVisible] = useState(true);
console.log("dans le Expire !");
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  });

  return visible ? <div>{props.children}</div> : <div />;
};

export default Expire;
