import React, { useRef, useState } from "react";
import { Stage, Layer, Line, Text, Image as KonvaImage, Rect } from "react-konva";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faServer, faDatabase, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { iconToImage } from "../utils/iconToImage";

const iconTypes = {
  Browser: { label: "Browser", icon: faGlobe, width: 60, height: 60 },
  Server: { label: "Server", icon: faServer, width: 60, height: 60 },
  Database: { label: "Database", icon: faDatabase, width: 60, height: 60 },
  Computer: { label: "Computer", icon: faDesktop, width: 60, height: 60 },
};

const CanvasArea = ({
  elements,
  setElements,
  selectedElement,
  setSelectedElement,
  connections,
  setConnections,
}) => {
  const stageRef = useRef();
  const [selectedForConnection, setSelectedForConnection] = useState([]);

  const handleDrop = async (e) => {
    e.preventDefault();
    const iconType = e.dataTransfer.getData("icon");
    const stage = stageRef.current;
    const pointerPosition = stage.getPointerPosition();
    const faIcon = iconTypes[iconType].icon;
    const iconImage = await iconToImage(<FontAwesomeIcon icon={faIcon} size="2x" />);

    const newElement = {
      id: Date.now(),
      type: iconType,
      label: iconTypes[iconType].label,
      x: pointerPosition.x,
      y: pointerPosition.y,
      width: iconTypes[iconType].width,
      height: iconTypes[iconType].height,
      iconImage,
    };

    setElements((prev) => [...prev, newElement]);
  };

  const handleDragEnd = (e, id) => {
    const updated = elements.map((el) =>
      el.id === id ? { ...el, x: e.target.x(), y: e.target.y() } : el
    );
    setElements(updated);
  };

  const handleElementClick = (el) => {
    setSelectedElement(el);
    if (selectedForConnection.length === 0) {
      setSelectedForConnection([el]);
    } else if (selectedForConnection.length === 1 && selectedForConnection[0].id !== el.id) {
      const newConnection = {
        from: selectedForConnection[0].id,
        to: el.id,
        label: `Connection from ${selectedForConnection[0].label} to ${el.label}`,
      };
      setConnections((prev) => [...prev, newConnection]);
      setSelectedForConnection([]);
    } else {
      setSelectedForConnection([]);
    }
  };

  return (
    <div
  style={{ flex: 1, border: "1px solid gray", height: '100%' }}
  onDrop={handleDrop}
  onDragOver={(e) => e.preventDefault()}
>
  <Stage
    width={stageRef.current?.parentElement?.clientWidth || 800}
    height={stageRef.current?.parentElement?.clientHeight || 600}
    ref={stageRef}
  >

        <Layer>
          {connections.map((conn, idx) => {
            const from = elements.find((el) => el.id === conn.from);
            const to = elements.find((el) => el.id === conn.to);
            if (!from || !to) return null;
            return (
              <React.Fragment key={idx}>
                <Line
                  points={[
                    from.x + from.width / 2,
                    from.y + from.height / 2,
                    to.x + to.width / 2,
                    to.y + to.height / 2,
                  ]}
                  stroke="black"
                />
                <Text
                  text={conn.label}
                  x={(from.x + to.x) / 2}
                  y={(from.y + to.y) / 2 - 15}
                  fontSize={12}
                />
              </React.Fragment>
            );
          })}

{elements.map((el) => (
  <React.Fragment key={el.id}>
   
    {selectedElement?.id === el.id && (
  <Rect
    x={el.x - 5}
    y={el.y - 5}
    width={el.width + 10}
    height={el.height + 10}
    stroke="blue"
    strokeWidth={2}
    cornerRadius={6}
    dash={[10, 5]} // Add a dotted line effect (optional)
  />
)}


    {/* Icon Image */}
    {el.iconImage && (
      <KonvaImage
        image={el.iconImage}
        x={el.x}
        y={el.y}
        width={el.width}
        height={el.height}
        draggable
        onClick={() => handleElementClick(el)}
        onDragEnd={(e) => handleDragEnd(e, el.id)}
      />
    )}

    {/* Label Below Icon */}
    <Text
      x={el.x}
      y={el.y + el.height + 14}
      text={el.label}
      fontSize={12}
      fill="black"
    />
  </React.Fragment>
))}

        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasArea;
