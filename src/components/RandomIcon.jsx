import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const RandomIconComponent = () => {
  const [icon, setIcon] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const allIconNames = Object.keys(fas);

  const getRandomIcon = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const randomIconName =
      allIconNames[Math.floor(Math.random() * allIconNames.length)];

    const newTimeoutId = setTimeout(() => {
      setIcon(fas[randomIconName]);
      setShowIcon(true);
    }, 3000);

    setTimeoutId(newTimeoutId); 
  };

  return (
    <div className="container">
      <button onClick={getRandomIcon}>Show Random Icon</button>
      <div className="random-icon">
        {showIcon && icon && <FontAwesomeIcon icon={icon} size="3x" />}
      </div>
    </div>
  );
};

export default RandomIconComponent;
