import { FC } from "react";
import Scroll from "../components/ui/Scroll";
import ColorFilters from "../components/filters/colorFilters";
import { IColor } from "../types/types";
import { observer } from "mobx-react-lite";
import { RootStore } from "../clietStore";
import SingleColor from "../components/listComponents/SingleColor";

const List: FC = observer(() => {
  const { appStore } = RootStore();

  const addColor = () => {
    appStore.setModal("add-new-color-modal", true, null);
  };

  return (
    <div className="relative h-full w-full">
      <Scroll>
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
          <div className="container mx-auto">
            <div className="flex py-1 w-full justify-end">
              <button
                className="button bg-blue-500 w-full md:w-1/5 text-white text-2xl font-bold items-center"
                onClick={addColor}
              >
                +
              </button>
            </div>

            <ColorFilters />
            <div className="flex flex-wrap -mx-4">
              {appStore.filteredColors.length === 0 ? (
                <div>No matching colors</div>
              ) : (
                appStore.filteredColors.map((color: IColor, index: number) => (
                  <SingleColor key={color.id} props={color} index={index} />
                ))
              )}
            </div>
          </div>
        </div>
      </Scroll>
    </div>
  );
});

export default List;
