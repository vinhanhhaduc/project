import * as React from "react";

function FormInput({ label, type = "text", required = false }) {
  const id = `${label.toLowerCase().replace(/\s/g, '')}-input`;
  
  return (
    <div className="flex flex-col grow text-xl font-medium text-black max-md:mt-4 mt-3">
      <label htmlFor={id} className="self-start">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="flex shrink-0 bg-gray-200 rounded-xl h-[45px] w-[300px]"
        aria-label={label}
      />
    </div>
  );
}

export default FormInput;