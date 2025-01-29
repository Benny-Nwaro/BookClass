import React, { useState } from "react";

interface BookingFormProps {
  handleClick: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ handleClick }) => {
  const [userType, setUserType] = useState<'Parent' | 'Student'>('Parent');
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    mobileNumber: '',
    childGrade: '',
    password: '',
    confirmPassword: '',
    referralSource: ''
  });

  const isFormValid = () => {
    const { parentName, parentEmail, mobileNumber, childGrade, password, confirmPassword, referralSource } = formData;
    return (
      parentName &&
      parentEmail &&
      mobileNumber &&
      childGrade &&
      password &&
      confirmPassword &&
      referralSource &&
      password === confirmPassword
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="lg:w-[500px] max-md:w-full bg-white shadow-2xl lg:my-12 rounded-3xl lg:p-8 max-md:px-3 lg:px-10 mt-8 relative">
      <h2 className="text-3xl max-md:text-lg font-extrabold text-gray-800 mb-2">
        Book a free <span className="italic">(subject)</span> class with us
      </h2>
      <p className="text-sm text-gray-500 lg:mb-6 max-md:mb-2">Limited spots Available</p>

      <div className="flex w-2/3 mx-auto rounded-xl justify-between mb-6 max-md:mb-2 bg-gray-200">
        <button
          className={`px-6 py-3 max-md:py-2 w-full rounded-xl text-sm font-medium transition-all ${
            userType === 'Parent' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => setUserType('Parent')}
        >
          Parent
        </button>
        <button
          className={`px-6 py-3 rounded-xl w-full max-md:py-2 text-sm font-medium transition-all ${
            userType === 'Student' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => setUserType('Student')}
        >
          Student
        </button>
      </div>

      <form className="space-y-4 max-md:space-y-2">
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleInputChange}
          placeholder="Parent's name*"
          className="w-full border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="parentEmail"
          value={formData.parentEmail}
          onChange={handleInputChange}
          placeholder="Parent's email address*"
          className="w-full border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-2">
          <input
            type="tel"
            placeholder="+234"
            className="w-1/4 border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder="Parent's mobile number*"
            className="w-3/4 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          name="childGrade"
          value={formData.childGrade}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Child grade/class in school*</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
        </select>
        <div className="flex space-x-2">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create password*"
            className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm password*"
            className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          name="referralSource"
          value={formData.referralSource}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">How did you hear about us?</option>
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend">Friend</option>
        </select>
        <button
           onClick={(e) => {
            e.preventDefault(); // Correct usage
            handleClick();
          }}
          disabled={!isFormValid()}
          type="submit"
          className={`w-2/3 text-white py-6 rounded-full lg:text-lg max-md:text-sm max-md:p-2 font-medium shadow-md ${
            isFormValid() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'
          }`}
        >
          Schedule a free class
        </button>
      </form>

      <p className="text-xs text-gray-500 lg:mt-6 max-md:mt-2 max-md:text-left text-center">
        By signing up, you agree to our{' '}
        <span className="text-blue-500 underline">terms and conditions</span>.
      </p>
    </div>
  );
};

export default BookingForm;
