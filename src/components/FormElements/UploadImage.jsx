import React from "react";
import { Field } from "formik";
import FileUploadIcon from "@mui/icons-material/FileUpload";


function UploadImage(props) {
  const { label, name, ...rest } = props;
  return ( 
    <div>
      <label htmlFor={name}
      className="flex justify-center items-center ring-1 ring-blue-400 rounded-md text-[12px] text-blue-400 hover:cursor-pointer h-[38px] px-3 mt-8 ">
        <FileUploadIcon />
        {label}
      </label>
      
      <Field 
      id={name} 
      name={name} 
      on
      {...rest} 
      />
      
    </div>
  );
}

export default UploadImage;
