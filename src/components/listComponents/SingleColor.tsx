import { FC } from "react";
import { IColor } from "../../types/types";
import { RootStore } from "../../clietStore";

const SingleColor: FC<{ props: IColor; index: number }> = ({
  props,
  index,
}) => {
  const { id, name, hash } = props;
  const { appStore } = RootStore();

  const deleteHandler = () => {
    appStore.deleteColor(id);

  }

  return (
    <div className="flex items-center w-full rounded-lg my-2 py-2 justify-between border border-black p-2 bg-white">
      <div className="inline-block px-3 py-1 mr-2 text-sm font-semibold">
        {id}
      </div>
      <div className="inline-block px-3 py-1 mr-2 text-sm font-semibold">
        {name}
      </div>
      <div className="text-xs text-gray-500 p-1">{hash}</div>
      <div className="w-12 h-3" style={{ backgroundColor: hash }}></div>
      <div className="flex hover:bg-red cursor-pointer" onClick={deleteHandler}>Delete</div>
    </div>
  );
};

export default SingleColor;
