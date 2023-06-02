import React from "react";
import  Input  from "./FormElements/Input";
import TextArea from "./FormElements/TextArea";
import UploadImage from "./FormElements/UploadImage";


function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input": return <Input {...rest}/>
    case "textarea": return <TextArea {...rest}/>
    case "uploadimage": return <UploadImage {...rest}/>
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
