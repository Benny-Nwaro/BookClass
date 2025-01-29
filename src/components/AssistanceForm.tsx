import React from "react";
import SchoolLevelForm from "./SchoolLevelForm";

interface AssistanceFormProps {
  handleClick: () => void;
}
const AssistanceForm: React.FC<AssistanceFormProps>  = ({ handleClick }) => {
  const options = [
    { label: "Maths", icon: "📐" },
    { label: "Languages", icon: "🌐" },
    { label: "Culinary", icon: "🍳" },
    { label: "Driving", icon: "🚗" },
    { label: "Music", icon: "🎵" },
    { label: "Gym/Sports", icon: "🏋️‍♂️" },
    { label: "Examinations", icon: "📝" },
    { label: "Life/Skills", icon: "🌱" },
    { label: "Computing", icon: "💻" },
    { label: "Arts/Craft", icon: "🎨" },
  ];

  return (
    <div className="flex lg:w-[500px] justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-3xl p-8  w-full">
        <h1 className="text-sm font-medium text-center mb-4">
          Let’s set up a free trial session with the perfect tutor!
        </h1>
        <h2 className="text-3xl max-md:text-xl font-bold text-center mb-6">
          What area does your child need assistance with?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option) => (
            <button
              key={option.label}
              className="flex items-center justify-center border rounded-lg p-4 max-md:p-1 max-md:text-sm hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-2xl mr-2">{option.icon}</span>
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>
        <button onClick={handleClick} className="mt-6 max-w-fit px-12 max-md:px-5 bg-blue-500 text-white font-semibold py-4 rounded-full max-md:py-2 hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
          Continue
        </button>
      </div>
    </div>
  );
};

export default AssistanceForm;
