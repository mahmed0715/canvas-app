# Canvas Drag-and-Drop Application

A React + TailwindCSS-based canvas application that allows users to:

- Drag and drop icons (Browser, Server) onto a canvas
- Set properties for each icon (custom label, size)
- Connect Browser to Server with labeled connections
- Generate a report summarizing the canvas state
- Download the report as a PDF

Live Demo: [https://canvas-app-vbs9.vercel.app/](https://canvas-app-vbs9.vercel.app/)

---

## Features

### 1. Drag-and-Drop Functionality

- Sidebar contains draggable Browser and Server icons.
- Drag icons onto the canvas to create instances.

### 2. Set Properties of Icons

- Click on any icon on the canvas to edit:
  - Custom label (name)
  - Size (small, medium, large)

### 3. Add Connection Line

- Click on one icon, then shift-click another to create a connection.
- A labeled arrow shows the relationship.

### 4. Generate Report

- "Generate Report" button creates a report of all icons and connections.
- Report includes icon labels and connection labels.
- PDF download option is available.

---

## Tech Stack

- **Frontend:** React 18, TailwindCSS
- **Canvas Rendering:** React Konva (wrapper around Konva.js)
- **PDF Generation:** jsPDF
- **Deployment:** Vercel (Optional for demo)

---

## Installation Instructions

### 1. Clone the repository

```bash
git clone https://github.com/mahmed0715/canvas-app
cd canvas-app
```

### 2. Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Run the development server

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

---

## How to Use

1. **Drag** Browser or Server from the sidebar into the canvas.
2. **Click** on an icon to **edit its properties** (label, size).
3. **Connect** Browser to Server:
   - Click on one icon
   - Shift-click on another to create a connection
4. **Generate Report**:
   - Click the "Generate Report" button
   - View and download the PDF report.

---

## Deployment

Deploy easily on Vercel:

```bash
npm run build
npm run start
```

Then push the repository to GitHub and connect it to [Vercel](https://vercel.com/).

---

## Future Improvements (Optional)

- Multiple connections between nodes
- Delete icons or connections
- Move connections dynamically when icons are moved
- Zoom in/out and pan canvas
- Export entire canvas as an image
- Enhanced UI styling

---

## License

This project is licensed under the MIT License.
