import { FC } from "react";
import { RootStore } from "../../clietStore";
import { observer } from "mobx-react-lite";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputAndLabel from "../ui/InputAndLabel";
import { INewColorModal } from "../../types/types";
import ColorInputAndLabel from "../ui/ColorInputAndLabel";

const defaultForm: INewColorModal = {
  name: "",
  hash: "#ffffff",
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
    const newColor = { id: newId, ...values };
    appStore.setModal("add-new-color-modal", false, null);
    return appStore.setColors(newColor);
  };

  return (
    <div
      id="new-color-modal"
      data-test="new-color-modal"
      className="rounded-lg w-4/12 h-3/12 p-4 gap-3 bg-white flex flex-col absolute text-gray-700 text-tiny"
    >
      <span className="text-xl">Add a New Color</span>
      <div className="flex flex-col w-full">
        <Formik
          initialValues={defaultForm}
          onSubmit={(values) => {
            createColorHandler(values);
          }}
          validationSchema={NewColorSchema}
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
              <ColorInputAndLabel
                label="Color Hash"
                name="hash"
                errors={{
                  errors: errors.hash,
                  touched: touched.hash,
                }}
                type="text"
              />
              <div className="flex items-center justify-end gap-3 w-full mt-4">
                <span
                  onClick={cancel}
                  className="py-2 px-4 rounded-lg cursor-pointer"
                >
                  Cancel
                </span>
                <button
                  type="submit"
                  data-test="save-color"
                  className={`button border border-gray-300 py-2 px-4 rounded-lg ${
                    !(isValid && dirty)
                      ? "opacity-25 pointer-events-none"
                      : null
                  }`}
                >
                  Save
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
