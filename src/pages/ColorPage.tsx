import { FC } from "react";
import Scroll from "../components/ui/Scroll";
import ColorFilters from "../components/filters/colorFilters";
import { observer } from "mobx-react-lite";
import { RootStore } from "../clietStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "../components/listComponents/List";

const ColorPage: FC = observer(() => {
  const { appStore } = RootStore();

  const addColor = () => {
    appStore.setModal("add-new-color-modal", true, null);
  };

  return (
    <div className="relative h-full w-full">
      <Scroll>
        <div className="flex w-full ml-10">
          <img src="/Logo.jpeg" alt="Logo" className="w-24 h-auto mr-4" />
        </div>
        <div className="antialiased bg-white text-gray-900 font-sans p-6 pt-0">
          <div className="container mx-auto">
            <div className="flex py-1 w-full justify-between items-center">
              <ColorFilters />
              <button
                className="button text-gray-600 h-10 font-bold items-center border border-gray-300 cursor-pointer"
                data-test="add-color"
                onClick={addColor}
              >
                <FontAwesomeIcon icon="plus-circle" className="mr-1" /> Add New
                Color
              </button>
            </div>
            <List />
          </div>
        </div>
      </Scroll>
    </div>
  );
});

export default ColorPage;
