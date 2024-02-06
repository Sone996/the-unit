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
    <div className="flex py-2 justify-between">
      <input
        type="text"
        autoComplete="off"
        className="input"
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
      <button
        className="button bg-blue-500 w-1/4 text-white font-bold items-center"
        onClick={applyFilters}
      >
        Search
      </button>
    </div>
  );
});

export default ColorFilters;

