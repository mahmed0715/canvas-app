import React, { useState } from "react";
import CanvasArea from "./components/CanvasArea";
import PropertiesPanel from "./components/PropertiesPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faDesktop, faServer, faDatabase, faBraille } from "@fortawesome/free-solid-svg-icons";
import { generateReport } from "./utils/reportUtils";


function App() {
  const [elements, setElements] = useState([]);
  const [connections, setConnections] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    // <div className="App">
    //   <h2>SecDesigner Canvas App</h2>
    //   <div style={{ display: "flex" }}>
    //     {/* Dragging Icons */}
    //     <div style={{ marginRight: "20px" }}>
    //       <h3>Drag Icons</h3>
    //       <div
    //         style={{ width: "100px", marginBottom: "10px" }}
    //         draggable
    //         onDragStart={(e) => e.dataTransfer.setData("icon", "Browser")}
    //       >
    //         <FontAwesomeIcon icon={faBraille} size="3x" />
    //         <div>Browser</div>
    //       </div>
    //       <div
    //         style={{ width: "100px", marginBottom: "10px" }}
    //         draggable
    //         onDragStart={(e) => e.dataTransfer.setData("icon", "Server")}
    //       >
    //         <FontAwesomeIcon icon={faServer} size="3x" />
    //         <div>Server</div>
    //       </div>
    //       <div
    //         style={{ width: "100px", marginBottom: "10px" }}
    //         draggable
    //         onDragStart={(e) => e.dataTransfer.setData("icon", "Database")}
    //       >
    //         <FontAwesomeIcon icon={faDatabase} size="3x" />
    //         <div>Database</div>
    //       </div>
    //       <div
    //         style={{ width: "100px", marginBottom: "10px" }}
    //         draggable
    //         onDragStart={(e) => e.dataTransfer.setData("icon", "Computer")}
    //       >
    //         <FontAwesomeIcon icon={faDesktop} size="3x" />
    //         <div>Computer</div>
    //       </div>
    //     </div>

    //     {/* Canvas Area */}
    //     <CanvasArea
    //       elements={elements}
    //       setElements={setElements}
    //       selectedElement={selectedElement}
    //       setSelectedElement={setSelectedElement}
    //       connections={connections}
    //       setConnections={setConnections}
    //     />

    //     {/* Properties Panel */}
    //     {selectedElement && (
    //       <PropertiesPanel
    //         selectedElement={selectedElement}
    //         elements={elements}
    //         setElements={setElements}
    //       />
    //     )}
    //   </div>

    //   {/* Generate Report Button */}
    //   <button onClick={() => generateReport(elements, connections)}>
    //     Generate Report
    //   </button>
    // </div>
    <div className="App">
  <h2>SecDesigner Canvas App</h2>
  <div style={{ display: "flex", }}>

    {/* Sidebar */}
    <div className="sidebar">
      <h3>Drag Icons</h3>

      <div className="sidebar-item" draggable onDragStart={(e) => e.dataTransfer.setData("icon", "Browser")}>
        <FontAwesomeIcon icon={faBraille} size="2x" />
        <div>Browser</div>
      </div>

      <div className="sidebar-item" draggable onDragStart={(e) => e.dataTransfer.setData("icon", "Server")}>
        <FontAwesomeIcon icon={faServer} size="2x" />
        <div>Server</div>
      </div>

      <div className="sidebar-item" draggable onDragStart={(e) => e.dataTransfer.setData("icon", "Database")}>
        <FontAwesomeIcon icon={faDatabase} size="2x" />
        <div>Database</div>
      </div>

      <div className="sidebar-item" draggable onDragStart={(e) => e.dataTransfer.setData("icon", "Computer")}>
        <FontAwesomeIcon icon={faDesktop} size="2x" />
        <div>Computer</div>
      </div>
    </div>

    {/* Canvas Area */}
    <div className="canvas-container">
      <CanvasArea
        elements={elements}
        setElements={setElements}
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
        connections={connections}
        setConnections={setConnections}
      />
    </div>

    {/* Properties Panel */}
    {selectedElement && (
      <div className="properties-panel">
        <PropertiesPanel
          selectedElement={selectedElement}
          elements={elements}
          setElements={setElements}
        />
      </div>
    )}
  </div>

  {/* Generate Report Button */}
  <button style={{ marginTop: "20px" }} onClick={() => generateReport(elements, connections)}>
    Generate Report
  </button>
</div>

  );
}
export default App;
