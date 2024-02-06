import { FC } from "react";
import { observer } from "mobx-react-lite";
import { RootStore } from "../clietStore";
import NewColorModal from "../components/listComponents/NewColorModal";
import List from "../pages/List";

const AppLayout: FC = observer(() => {
  const { appStore } = RootStore();

  // modal logic
  const modalSwitch = (prop: string) => {
    switch (prop) {
      case "add-new-color-modal":
        return <NewColorModal />;
      default:
        break;
    }
  };
  // END :: modal logic

  return (
    <div className="flex flex-col w-full h-full">
      {/* MODALS */}
      {appStore.getModal.status ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex modal">
          <div className="modal-overlay fixed top-0 left-0 modal-overlay h-screen w-screen flex"></div>
          <div className="modal flex items-center justify-center w-full">
            {modalSwitch(appStore.getModal.name)}
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* END :: MODALS */}
      {/* MAIN CONTENT */}
      <List />
      {/* END :: MAIN CONTENT */}
    </div>
  );
});

export default AppLayout;
