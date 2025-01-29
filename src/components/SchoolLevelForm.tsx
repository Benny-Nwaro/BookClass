import React, { useState } from "react";

interface SchoolLevelFormProps {
  handleClick: () => void;
}
const SchoolLevelForm: React.FC<SchoolLevelFormProps> = ({ handleClick }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { label: "Pre-K to Grade 3", icon: "😊" },
    { label: "Grades 4 — 8", icon: "👦" },
    { label: "Grades 9 -12", icon: "🎓" },
    { label: "Specialized Subjects (Music, Coding, Language)", icon: "💻" },
  ];

  const handleSelect = (label: string) => {
    setSelected(label);
  };

  return (
    <div className="flex justify-center lg:w-[500px]  items-center min-h-screen">
      <div className="bg-white shadow-lg  rounded-3xl p-8 max-w-lg w-full">
        <h1 className="text-sm font-medium text-center mb-4">
          Let’s help you find the perfect tutor for your child
        </h1>
        <h2 className="text-3xl max-md:text-xl font-bold text-center mb-6">
          Which school level is your child currently in?
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

export default SchoolLevelForm;
