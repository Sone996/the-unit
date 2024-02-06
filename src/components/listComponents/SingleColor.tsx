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
  };

  return (
    <div
      className="flex items-center w-full rounded-lg my-2 py-2 justify-between border border-black p-2 bg-white"
      data-test={`item_${id}`}
    >
      <div className="inline-block px-3 py-1 text-sm font-semibold w-1/5">
        {id}
      </div>
      <div className="inline-block px-3 py-1 text-md font-semibold w-1/5">
        {name}
      </div>
      <div className="text-md text-gray-500 p-1 w-1/5">{hash}</div>
      <div className="h-3 w-1/5" style={{ backgroundColor: hash }}></div>
      <div
        className="flex cursor-pointer w-1/5 justify-end pr-4"
        onClick={deleteHandler}
      >
        <span
          className="text-red hover:bg-red hover:text-white p-1 rounded-md"
          data-test={`delete_item_${id}`}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default SingleColor;
