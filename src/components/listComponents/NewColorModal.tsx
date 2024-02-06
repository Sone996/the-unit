import { FC, useEffect, useState } from "react";
import { RootStore } from "../../clietStore";
import { observer } from "mobx-react-lite";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputAndLabel from "../ui/InputAndLabel";
import { INewColorModal } from "../../types/types";

const defaultForm: INewColorModal = {
    name: '',
    hash: ''
};

const NewColorSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Potrebno je 4 - 30 karaktera")
    .max(30, "Potrebno je 4 - 30 karaktera")
    .required("Required field"),
  hash: Yup.string()
    .min(4, "Potrebno je 4 - 15 karaktera")
    .max(15, "Potrebno je 4 - 15 karaktera")
    .required("Required field"),
});

const NewColorModal: FC = observer(() => {
  const { appStore } = RootStore();

  const cancel = () => {
    appStore.closeModal();
  };

  const createColorHandler = (values: INewColorModal) => {
    const newId = (appStore.getColors.length + 1).toString();
    const newColor = {id: newId, ...values}
    appStore.setModal("add-new-color-modal", false, null);
    return appStore.setColors(newColor)
  };

  return (
    <div
      id="new-user-modal"
      className="new-user-modal rounded-lg w-4/12 h-3/12 bg-white flex flex-col absolute text-gray-700 text-tiny felx items-center justify-center"
    >
      <div className="flex items-center justify-center w-full px-8 py-4">
        <span className="font-bold text-xl">New Color</span>
      </div>
      <div className="flex flex-col w-full p-4 pt-0">
        <Formik
          initialValues={
            appStore.getModal.data
              ? {
                  ...appStore.getModal.data,
                  password: "",
                  password_confirm: "",
                }
              : defaultForm
          }
          onSubmit={(values) => { createColorHandler(values) }}
          validationSchema={ NewColorSchema }
        >
          {({ errors, touched, isValid, dirty, values, setFieldValue }) => (
            <Form autoComplete="off">
              <InputAndLabel
                label="Color Name"
                name="name"
                errors={{
                  errors: errors.name,
                  touched: touched.name,
                }}
                type="text"
              />
              <InputAndLabel
                label="Color Hash"
                name="hash"
                errors={{
                  errors: errors.hash,
                  touched: touched.hash,
                }}
                type="text"
              />
              <div className="flex items-center justify-between w-full mt-4">
                <span
                  onClick={cancel}
                  className="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white"
                >
                  Cancel
                </span>
                <button
                  type="submit"
                  className={`button bg-blue-500 py-2 px-4 rounded-lg text-white ${
                    !(isValid && dirty)
                      ? "opacity-25 pointer-events-none"
                      : null
                  }`}
                >
                  {appStore.getModal.data ? "Izmeni" : "Potvrdi"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
});

export default NewColorModal;
