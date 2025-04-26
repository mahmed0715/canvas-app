import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faServer, faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons';

const icons = [
  { type: 'Browser', icon: faGlobe },
  { type: 'Server', icon: faServer },
  { type: 'Database', icon: faDatabase },
  { type: 'Computer', icon: faDesktop },
];

const IconPalette = () => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, type: string) => {
    e.dataTransfer.setData('iconType', type);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Main container with padding */}
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h3 className="mb-6 text-2xl font-semibold text-center text-gray-800">Drag Icons</h3>
        
        {/* Icon Palette */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {icons.map(({ type, icon }) => (
            <div
              key={type}
              className="flex flex-col items-center p-4 transition-transform transform bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105"
              draggable
              onDragStart={(e) => handleDragStart(e, type)}
            >
              <FontAwesomeIcon icon={icon} size="3x" className="mb-2 text-blue-500" />
              <div className="text-sm font-medium text-gray-700">{type}</div>
            </div>
          ))}
        </div>

        {/* Canvas Area */}
        <div
          className="relative p-6 border-4 border-gray-300 border-dashed rounded-lg bg-gray-50 min-h-96"
          style={{ height: '400px' }}
        >
          <h4 className="absolute text-gray-600 top-4 left-4">Canvas Area (Drop Icons Here)</h4>
          {/* You can add the functionality for dragging icons here */}
        </div>
      </div>
    </div>
  );
};

export default IconPalette;
