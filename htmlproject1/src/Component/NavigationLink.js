import * as React from "react";

function NavigationLink({ text, className }) {
  return (
    <div className={`basis-auto ${className}`}>
      {text}
    </div>
  );
}

export default NavigationLink;