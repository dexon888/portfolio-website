import React from 'react';

const Tooltip = ({ title, description, points, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div
      className="absolute z-10 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-w-sm"
      style={{ left: '50%', transform: 'translateX(-50%)', top: '110%' }}
    >
      <h4 className="text-lg font-semibold mb-2 dark:text-white">{title}</h4>
      <p className="text-sm mb-2 dark:text-gray-300">{description}</p>
      {points && (
        <ul className="list-disc list-inside dark:text-gray-300">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tooltip;
