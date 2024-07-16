import { useState } from "react";

type Props = {};

const Tabs = (props: Props) => {
  const [activePanel, setActivePanel] = useState(0);

  const tabButtonClickHandler = () => {
    setActivePanel(1);
  };
  return (
    <div>
      <button onClick={() => tabButtonClickHandler()}>X</button>
      <button>Y</button>
    </div>
  );
};

export default Tabs;
