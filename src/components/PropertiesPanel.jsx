import React, { useState, useEffect } from "react";

const PropertiesPanel = ({ selectedElement, elements, setElements }) => {
  const [label, setLabel] = useState("");
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(80);

  useEffect(() => {
    if (selectedElement) {
      setLabel(selectedElement.label || "");
      setWidth(selectedElement.width || 80);
      setHeight(selectedElement.height || 80);
    }
  }, [selectedElement]);

  const updateElement = () => {
    const updated = elements.map((el) =>
      el.id === selectedElement.id
        ? { ...el, label, width: parseInt(width), height: parseInt(height) }
        : el
    );
    setElements(updated);
  };

  return (
    <div style={{ marginLeft: 20, marginRight: 40}}>
      <h3>Edit Properties</h3>
      <label>
        Label:
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </label>
      <br />
      <label>
        Width:
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={updateElement}>Update</button>
    </div>
  );
};

export default PropertiesPanel;
