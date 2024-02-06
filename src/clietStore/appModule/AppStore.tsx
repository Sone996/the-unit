import { makeAutoObservable, runInAction } from "mobx";
import { IColor, IColorFilters, IModal } from "../../types/types";

export class AppStore {
  // STATE
  toggleModal: boolean = false;
  overlay: boolean = false;
  modal: IModal = {
    name: "",
    status: false,
    data: null,
  };
  colors: IColor[] = [
    { id: "1", name: "Red", hash: "#FF0000" },
    { id: "2", name: "Green", hash: "#00FF00" },
    { id: "3", name: "Blue", hash: "#0000FF" },
    { id: "4", name: "Yellow", hash: "#FFFF00" },
    { id: "5", name: "Cyan", hash: "#00FFFF" },
    { id: "6", name: "Magenta", hash: "#FF00FF" },
    { id: "7", name: "Orange", hash: "#FFA500" },
    { id: "8", name: "Purple", hash: "#800080" },
    { id: "9", name: "Pink", hash: "#FFC0CB" },
    { id: "10", name: "Lime", hash: "#00FF00" },
    { id: "11", name: "Teal", hash: "#008080" },
    { id: "12", name: "Brown", hash: "#A52A2A" },
    { id: "13", name: "Navy", hash: "#000080" },
    { id: "14", name: "Olive", hash: "#808000" },
    { id: "15", name: "Maroon", hash: "#800000" },
    { id: "16", name: "Aquamarine", hash: "#7FFFD4" },
    { id: "17", name: "Turquoise", hash: "#40E0D0" },
    { id: "18", name: "Gold", hash: "#FFD700" },
    { id: "19", name: "Silver", hash: "#C0C0C0" },
    { id: "20", name: "Gray", hash: "#808080" },
  ];
  colorFilters: IColorFilters = {
    name: "",
    hash: "",
  };
  // END :: STATE

  constructor() {
    makeAutoObservable(this);
  }

  //   COMPUTED
  get getModal() {
    return this.modal;
  }
  get getColors() {
    return this.colors;
  }
  get filteredColors(): IColor[] {
    const { name, hash } = this.colorFilters;
    return this.colors.filter((color) => {
      const isNameMatch =
        !name || color.name.toLowerCase().includes(name.toLowerCase());
      const isHashMatch =
        !hash || color.hash.toLowerCase().includes(hash.toLowerCase());
      return isNameMatch && isHashMatch;
    });
  }
  // END :: COMPUTED

  //   ACTIONS
  setModal = (name: string, status: boolean, data: any) => {
    runInAction(() => {
      this.modal.name = name;
      this.modal.status = status;
      this.modal.data = data;
    });
  };
  setColors = (values: IColor) => {
    runInAction(() => {
      this.colors = [...this.colors, values];
    });
  };
  deleteColor = (id: string) => {
    runInAction(() => {
      this.colors = [...this.colors.filter((color) => color.id !== id)];
    });
  };
  closeModal = () => {
    runInAction(() => {
      this.modal = {
        name: "",
        status: false,
        data: null,
      };
    });
  };
  setColorFilters = (filters: { name: string; hash: string }) => {
    runInAction(() => {
      this.colorFilters = filters;
    });
  };
  // END :: ACTIONS
}
