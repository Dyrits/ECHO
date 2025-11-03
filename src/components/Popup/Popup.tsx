import { type Accessor, createContext, createSignal, type ParentComponent, Show, useContext } from "solid-js";

type PopupContextState = {
  show: Accessor<boolean>;
  toggle: () => void;
};

const PopupContext = createContext<PopupContextState>();

const usePopup = () => {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error("The usePopup hook must be used within a PopupBox.");
  }

  return context;
};

const PopupBox: ParentComponent = (properties) => {
  const [show, setShow] = createSignal<boolean>(false);
  const value: PopupContextState = {
    show,
    toggle: () => {
      setShow(!show());
    },
  };

  return (
    <PopupContext.Provider value={value}>
      <div class="relative w-full">{properties.children}</div>
    </PopupContext.Provider>
  );
};

const PopupTrigger: ParentComponent = (properties) => {
  const { toggle } = usePopup();

  return <div onClick={toggle}>{properties.children}</div>;
};

export enum Position {
  Top = "Top",
  Bottom = "Bottom",
  Left = "Left",
  Right = "Right",
}

type PopupContentProps = {
  position: Position;
};

const PopupContent: ParentComponent<PopupContentProps> = (properties) => {
  const { show } = usePopup();
  const position = {
    [Position.Top]: "-top-full",
    [Position.Bottom]: "top-full",
    [Position.Left]: "left-full",
    [Position.Right]: "left-full",
  }[properties.position];

  return (
    <Show when={show()}>
      <div class={`absolute ${position} w-full`}>{properties.children}</div>
    </Show>
  );
};

const Popup = {
  Box: PopupBox,
  Content: PopupContent,
  Trigger: PopupTrigger,
};

export default Popup;
