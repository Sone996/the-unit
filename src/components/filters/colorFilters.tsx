import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { RootStore } from "../../clietStore";

const ColorFilters: FC = observer(() => {
  const { appStore } = RootStore();
  const [form, setForm] = useState({ name: "", hash: "" });

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const applyFilters = () => {
    appStore.setColorFilters(form);
  };

  return (
    <div className="flex flex-col md:flex-row py-2 justify-between">
      <span className="flex flex-col md:flex-row">
        <input
          type="text"
          autoComplete="off"
          className="input md:mr-6 mb-2 md:mb-0"
          name="name"
          placeholder="Color Name..."
          value={form.name}
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          autoComplete="off"
          className="input"
          name="hash"
          placeholder="Color Hash..."
          value={form.hash}
          onChange={inputChangeHandler}
        />
      </span>
      <button
        className="button bg-blue-500 text-white font-bold items-center mt-2 md:mt-0 w-full md:w-1/4"
        onClick={applyFilters}
      >
        Search
      </button>
    </div>
  );
});

export default ColorFilters;
