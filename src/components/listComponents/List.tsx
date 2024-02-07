import { FC } from "react";
import { IColor } from "../../types/types";
import { observer } from "mobx-react-lite";
import { RootStore } from "../../clietStore";
import SingleColor from "./SingleColor";

const List: FC = observer(() => {
  const { appStore } = RootStore();

  return (
    <div className="flex flex-wrap">
      {appStore.filteredColors.length === 0 ? (
        <div>No matching colors</div>
      ) : (
        appStore.filteredColors.map((color: IColor, index: number) => (
          <SingleColor key={color.id} props={color} index={index} />
        ))
      )}
    </div>
  );
});

export default List;
