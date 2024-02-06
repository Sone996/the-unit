import { Field } from "formik";
import { FC } from "react";
import { IInputAndLabel } from "../../types/types";

const ColorInputAndLabel: FC<IInputAndLabel> = ({
  label,
  name,
  errors,
  type,
}) => {
  return (
    <div className="flex flex-col pt-3">
      <div className="flex">
        <label className="text-sm" htmlFor="username">
          {label}
        </label>
        {errors != null ? (
          errors.errors && errors.touched ? (
            <span className="ml-2 text-red">{errors.errors}</span>
          ) : null
        ) : null}
      </div>
      <div className="relative">
        <Field
          autoComplete="new-password"
          className="input w-full"
          type={type}
          name={name}
          data-test={`data_${name}`}
        />
        <Field className="absolute right-2 top-2" type="color" name={name}/>
      </div>
    </div>
  );
};

export default ColorInputAndLabel;
