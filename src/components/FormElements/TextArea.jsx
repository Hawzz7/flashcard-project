import React from "react";
import { Field, ErrorMessage } from "formik";

function TextArea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor="name">{label}</label>
      <div className="flex flex-row">
        <Field
          placeholder="Describe the roles, resposibility, skilss required for the job and help candidate to understand the role better."
          id={name}
          name={name}
          {...rest}
        />
      </div>

      <div className="text-red-600">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}

export default TextArea;
