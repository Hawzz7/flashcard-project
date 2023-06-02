import React, { useRef, useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { setCardValue } from "../store/slice/CardSlice";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {v4 as uuidv4} from "uuid";


function CreateFlashcard() {
  const dispatch = useDispatch();

  const initialValues = {
    groupId: uuidv4(),
    createGroup: "",
    addDescription: "",
    uploadImage: null,
    form2: [
      {
        formId: uuidv4(),
        enterTerm: "",
        enterDefination: "",
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    createGroup: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Use 5 characters or more for your group name!"),
    addDescription: Yup.string()
      .min(20, "Too Short!")
      .required("Use 20 characters or more for group description!"),
    
    form2: Yup.array().of(
      Yup.object().shape({
        enterTerm: Yup.string()
          .min(3, "Too Short!")
          .required("Use 3 characters or more for term name!"),
        enterDefination: Yup.string()
          .min(10, "Too Short!")
          .required("Use 10 characters or more to define the term!"),
      })
    ),
  });

  const fileRef = useRef(null)
  const [uploadImage, setUploadImage] = useState("")

  onsubmit = (values, { resetForm }) => {
    dispatch(setCardValue(values));
    resetForm({ values: "" });
    setUploadImage("");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <div className="flex flex-col px-[180px] space-y-3">
              <div className="flex flex-col p-8 space-y-3 bg-white rounded shadow-lg">
                <div className="flex flex-col sm:flex-row sm:gap-10">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Create Group*"
                    name="createGroup"
                  />

                 {uploadImage ? (
                  <img src={uploadImage} alt="uploadImage" 
                  className="object-contain w-[80px] h-[80px]"
                  />
                 ):(
                  <div>
                     <input
                    hidden
                    ref={fileRef}
                    value={uploadImage}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onload =()=>{
                        formik.setFieldValue("uploadImage", reader.result);
                        setUploadImage(reader.result);
                      }
                    }}
                  />
                 
                  <button
                  className="flex justify-center items-center ring-1 ring-blue-400 rounded-md text-[12px] text-blue-400 hover:cursor-pointer h-[38px] px-3 mt-8 "
                  type="submit"
                  onClick={()=>{
                    fileRef.current.click()
                  }}
                  >{<FileUploadIcon />}Select Image</button>
                  </div>
                 )}
                </div>

                <FormikControl
                  className="ring-1 ring-red-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-red-500 sm:w-[700px]"
                  rows="3"
                  control="textarea"
                  as="textarea"
                  type="text"
                  label="Add Description"
                  name="addDescription"
                />
              </div>

              <div className="flex flex-col w-full p-8 space-y-3 bg-white rounded shadow-lg">
                <FieldArray
                  name="form2"
                  render={(arrayHelpers) => {
                    return (
                      <div>
                        {formik.values.form2.map((terms, index) => (
                          <div
                            className="flex flex-col gap-6 mb-5 min-[860px]:flex-row"
                            key={index}
                          >
                            <div
                            className="flex h-[25px] w-[25px] text-white justify-center
                            items-center bg-red-500 rounded-xl"
                            >{index + 1}</div>
                            <FormikControl
                              control="input"
                              type="text"
                              label="Enter Term*"
                              name={`form2.${index}.enterTerm`}
                            />

                            <FormikControl
                              className="ring-1 ring-red-300 rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-red-500 sm:w-[300px]"
                              control="textarea"
                              as="textarea"
                              type="text"
                              label="Enter Defination*"
                              name={`form2.${index}.enterDefination`}
                            />

                            <div>
                              {index > 0 && (
                                <div className="flex flex-col mt-6 space-y-3">
                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    <DeleteSweepIcon />
                                  </button>

                                  <button type="button">
                                    <EditIcon />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}

                        <div>
                          <button
                            className="text-blue-400"
                            type="button"
                            onClick={() =>
                              arrayHelpers.insert(formik.values.length + 1, {
                                formId: uuidv4(),
                                enterTerm: "",
                                enterDefination: "",
                              })
                            }
                          >
                            <AddIcon />
                            Add more
                          </button>
                        </div>
                      </div>
                    );
                  }}
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="text-white rounded-[4px] font-semibold bg-red-600 hover:bg-red-800 w-[180px] py-[4px]"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CreateFlashcard;
