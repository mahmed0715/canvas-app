import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconTypes } from "./CanvasArea";

const Sidebar = () => {
  return (
    <div className="w-48 p-4 bg-white rounded shadow-md">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">Drag Icons</h3>
      {Object.keys(iconTypes).map((key) => (
        <div
          key={key}
          draggable
          onDragStart={(e) => e.dataTransfer.setData("icon", key)}
          className="flex items-center gap-3 p-2 mb-4 bg-white border border-gray-300 cursor-grab rounded-xl hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={iconTypes[key].icon} size="lg" className={iconTypes[key].color} />
          <span className="text-sm text-gray-600">{iconTypes[key].label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
