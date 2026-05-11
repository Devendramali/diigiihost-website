import React from "react";

const Breadcrumb = ({ breadcrumb }) => {
  return (
    <div className="breadcrumb">
      {/* Last item show in h2 */}
      <h2>{breadcrumb[breadcrumb.length - 1]}</h2>

      <ul>
        {breadcrumb.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <a href="">{item}</a>
            </li>

            {/* Last item ke pehle || */}
            {index === breadcrumb.length - 2 && <li>||</li>}

            {/* Baaki sab ke beech | */}
            {index < breadcrumb.length - 2 && <li>|</li>}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;