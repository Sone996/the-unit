import "../../App.scss";
import { FC, ReactNode } from "react";

interface ScrollProps {
    children: ReactNode;
  }
  
const Scroll: FC<ScrollProps> = ({ children }) => {

  return (
    <div
      className="scroll position-relative overflow-hidden"
      data-test="scroll-component"
    >
      <div className="w-full h-full flex flex-col absolute top-0 left-0 scroll-y">
        {children}
      </div>
    </div>
  );
};

export default Scroll;