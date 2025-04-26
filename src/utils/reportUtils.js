import jsPDF from "jspdf";

export const generateReport = (elements, connections) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("Canvas Report", 10, 10);

  doc.setFontSize(14);
  doc.text("Icons:", 10, 20);
  elements.forEach((el, index) => {
    doc.text(
      `${index + 1}) Label: ${el.label}, Type: ${el.type}, Position: (${el.x}, ${el.y}), Size: (${el.width}x${el.height})`,
      10,
      30 + index * 10
    );
  });

  const connStartY = 30 + elements.length * 10 + 10;
  doc.text("Connections:", 10, connStartY);

  connections.forEach((conn, index) => {
    const fromEl = elements.find((e) => e.id === conn.from);
    const toEl = elements.find((e) => e.id === conn.to);
    doc.text(
      `${index + 1}) ${conn.label} (${fromEl?.label || "Unknown"} → ${toEl?.label || "Unknown"})`,
      10,
      connStartY + 10 + index * 10
    );
  });

  doc.save("canvas-report.pdf");
};
