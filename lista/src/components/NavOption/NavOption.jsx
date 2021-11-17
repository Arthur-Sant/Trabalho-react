import React from 'react';
import { Link } from 'react-router-dom';
import './NavOption.css'

const NavOption = ({children, idNumber, to}) => {
  const select = (id) => {
        document.querySelectorAll(".activity").forEach((element, key) => {
          element.style.backgroundColor = key == id ? "blue" : "white";
          element.style.color = key == id ? "white" : "black";
        });
  };

  const hover = (id) => {
    const element = document.getElementsByClassName("activity").item(id);
    element.onmouseover = () => {
      if(element.style.backgroundColor != "blue"){
        element.style.backgroundColor = "rgb(187,187,187)";
      }
    };

    element.onmouseleave = () => {
      if(element.style.backgroundColor == "blue"){
        element.style.backgroundColor = "blue"
      }else{
        element.style.color = "black";
        element.style.backgroundColor = "white";
      }
    };
  };

  return (
    <Link
      to={to}
      className="activity"
      onClick={() => select(idNumber)}
      onMouseOver={() => hover(idNumber)}
    >
      {children}
    </Link>
  );
}

export default NavOption;