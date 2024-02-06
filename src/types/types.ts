  export interface IColor {
    id: string,
    name: string,
    hash: string
  }
  
  export interface ISelectOption {
    value: string;
    label: string;
  }
  
  export interface IInputAndLabel {
    label: string;
    name: string;
    errors: any;
    type: string;
  }
  
  export interface IModal {
    name: string;
    status: boolean;
    data: any;
  }
  
  export interface INewColorModal {
    id?: string;
    name: string,
    hash: string
  }

  export interface IDateFilters {
    start_date: string;
    end_date: string;
  }

  export interface IColorFilters {
    name: string,
    hash: string
  }
