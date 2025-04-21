import React from "react";

interface PortfolioButtonProps {
  onClick: () => any;
}

const PortfolioButton: React.FC<PortfolioButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center items-center ">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Portfolio
      </button>
    </div>
  );
};

export default PortfolioButton;
