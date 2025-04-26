import React from 'react';

function DragItems() {
  const items = [
    { label: 'Browser', icon: '🌐' },
    { label: 'Server', icon: '🖥️' },
    { label: 'Database', icon: '🗄️' },
    { label: 'Computer', icon: '💻' }
  ];

  return (
    <div>
      <h2 className="pb-2 mb-4 text-xl font-semibold border-b">Drag Icons</h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            draggable
            className="flex items-center gap-3 p-3 transition bg-gray-100 rounded-lg shadow-sm cursor-move hover:bg-gray-200"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragItems;
