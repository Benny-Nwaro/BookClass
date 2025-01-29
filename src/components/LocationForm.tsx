import React from "react";

type LocationPreferenceProps = {
  onContinue: () => void;
  onSelect: (location: string) => void;
  selectedLocation?: string;
};

const LocationForm: React.FC<LocationPreferenceProps> = ({
  onContinue,
  onSelect,
  selectedLocation,
}) => {
  const locations = [
    { id: "virtual", label: "Virtual", icon: "📱" },
    { id: "student_home", label: "Student's home", icon: "🏠" },
    { id: "teacher_place", label: "Teacher's place", icon: "🏫" },
  ];

  return (
    <div className="flex justify-center items-center lg:w-[500px]  h-screen">
      <div className="bg-white rounded-3xl w-full shadow-lg p-8 ">
        <h2 className="text-sm font-medium text-center mb-2">
          We want to ensure we find the right tutor for your child
        </h2>
        <h3 className="text-2xl font-bold text-center mb-6">Location Preference</h3>
        <div className="space-y-4">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => onSelect(location.id)}
              className={`flex items-center justify-between w-full border rounded-lg px-4 py-3 transition-all duration-300 text-left ${
                selectedLocation === location.id
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300 bg-white hover:bg-gray-100"
              }`}
            >
              <span className="flex items-center">
                <span className="text-xl mr-3">{location.icon}</span>
                {location.label}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={onContinue}
          disabled={!selectedLocation}
          className="mt-6 w-fit px-12 bg-blue-500 text-white font-semibold py-4 rounded-full shadow-md disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LocationForm;
