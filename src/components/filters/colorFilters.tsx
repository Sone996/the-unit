import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { RootStore } from "../../clietStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <div className="flex flex-col justify-start md:flex-row py-2 gap-3 text-gray-600">
      <input
        type="text"
        autoComplete="off"
        className="input mb-2 md:mb-0"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={inputChangeHandler}
      />
      <input
        type="text"
        autoComplete="off"
        className="input"
        name="hash"
        placeholder="Code"
        value={form.hash}
        onChange={inputChangeHandler}
      />
      <button
        className="button font-bold items-center mt-2 md:mt-0 border border-gray-300 cursor-pointer"
        onClick={applyFilters}
      >
        <FontAwesomeIcon icon="search" className="mr-1"/> Search
      </button>
    </div>
  );
});

export default ColorFilters;
