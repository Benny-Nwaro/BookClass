import React, { useState } from "react";

interface GoalFormProps {
  handleClick: () => void;
}
const GoalForm: React.FC<GoalFormProps> = ({ handleClick }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { label: "Improve grades", icon: "✔️" },
    { label: "Prepare for exams", icon: "📚" },
    { label: "Assist with homework", icon: "🏠" },
    { label: "Other reasons", icon: "🔲" },
  ];

  const handleSelect = (label: string) => {
    setSelected(label);
  };

  return (
    <div className="flex lg:w-[500px]  justify-center items-center min-h-screen">
      <div className="bg-white   shadow-lg rounded-3xl p-8 max-w-lg w-full">
        <h1 className="text-sm font-medium text-center mb-4">
          We want to ensure we find the right tutor for your child
        </h1>
        <h2 className="text-xl font-bold text-center mb-6">
          What is the main goal for getting a tutor?
        </h2>
        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleSelect(option.label)}
              className={`flex items-center justify-between w-full border rounded-lg p-4 max-md:p-2 transition focus:outline-none focus:ring-2 ${
                selected === option.label
                  ? "bg-blue-100 border-blue-500"
                  : "hover:bg-blue-50"
              }`}
            >
              <span className="flex items-center">
                <span className="text-2xl mr-3">{option.icon}</span>
                <span className="font-medium">{option.label}</span>
              </span>
              {selected === option.label && (
                <span className="text-blue-500 font-bold">✔</span>
              )}
            </button>
          ))}
        </div>
        <button
          className="mt-6 w-fit px-12 bg-blue-500 text-white font-semibold py-4 max-md:py-2 rounded-full hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={!selected}
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GoalForm;
