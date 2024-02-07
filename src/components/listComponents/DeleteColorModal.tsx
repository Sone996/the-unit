import { FC } from "react";
import { RootStore } from "../../clietStore";

const DeleteColorModal: FC = () => {
  const { appStore } = RootStore();

  const cancel = () => {
    return appStore.setModal("delete-color-modal", false, null);
  };

  const deleteColorHandler = () => {
    appStore.deleteColor(appStore.getModal.data.id);
    return appStore.setModal("delete-color-modal", false, null);
  };

  return (
    <div
      id="delete-color-modal"
      className="delete-color-modal p-4 rounded-lg w-6/12 h-3/12 bg-white flex flex-col absolute text-gray-700 text-tiny felx items-center justify-center"
    >
      <div className="flex items-center justify-center w-full px-8 py-4">
        <span className="text-xl" data-test="delete-modal-header">
          Are you sure you want to delete this color?
        </span>
      </div>
      <div className="flex items-center justify-around w-full mt-4">
        <button
          onClick={cancel}
          className="button border border-gray-300 py-2 px-4 rounded-lg w-24"
        >
          No
        </button>
        <button
          data-test="delete-color-confirm"
          onClick={deleteColorHandler}
          className="button border border-gray-300 py-2 px-4 w-24 rounded-lg"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteColorModal;
