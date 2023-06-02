import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <Field
        className="w-full px-4 py-2 mt-2 rounded-md outline-none  ring-1 ring-red-300 focus:ring-1 focus:ring-red-500"
        id={name}
        name={name}
        {...rest}
      />
      <div className="text-red-600">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default Input;
