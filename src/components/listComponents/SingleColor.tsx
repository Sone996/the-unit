import { FC } from "react";
import { IColor } from "../../types/types";
import { RootStore } from "../../clietStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SingleColor: FC<{ props: IColor; index: number }> = ({
  props,
  index,
}) => {
  const { id, name, hash } = props;
  const { appStore } = RootStore();

  const deleteHandler = () => {
    appStore.setModal("delete-color-modal", true, {id});
  };

  return (
    <div
      className="single-color-list-item text-gray-500 flex items-center w-full justify-between border-b border-gray-300 px-4 py-3 bg-white"
      data-test={`item_${id}`}
    >
      <div className="inline-block py-1 text-sm font-semibold w-6 text-right">
        {id}.
      </div>
      <div className="inline-block px-3 py-1 text-md font-semibold w-full">
        {name}
      </div>
      <div className="text-md p-1 w-1/5 text-right pr-4">{hash}</div>
      <div className="h-6 min-w-6 rounded-full border border-gray-200" style={{ backgroundColor: hash }}></div>
      <div
        className="flex cursor-pointer justify-end pl-4"
        onClick={deleteHandler}
      >
        <span
          className="delete-button opacity-0 transition-opacity duration-700 text-gray-400 p-1 rounded-md"
          data-test={`delete_item_${id}`}
        >
            <FontAwesomeIcon icon="trash" />
        </span>
      </div>
    </div>
  );
};

export default SingleColor;
