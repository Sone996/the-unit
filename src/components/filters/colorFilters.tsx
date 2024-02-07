import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { RootStore } from "../../clietStore";

const ColorFilters: FC = observer(() => {
  const { appStore } = RootStore();
  const [searchQuery, setSearchQuery] = useState("");

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    appStore.setColorFilters(value);
  };

  return (
    <div className="flex py-2 text-gray-600">
      <input
        type="text"
        autoComplete="off"
        className="input"
        placeholder="Search"
        value={searchQuery}
        onChange={inputChangeHandler}
      />
    </div>
  );
});

export default ColorFilters;
