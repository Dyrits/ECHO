import { type Accessor, createContext, createSignal, type ParentComponent, type Setter, Show, useContext } from "solid-js";

type PopupContextState = {
  show: Accessor<boolean>;
  toggle: () => void;
};

const PopupContext = createContext<PopupContextState>();

const usePopup = () => {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error("The usePopup hook must be used within a PopupProvider.");
  }

  return context;
};

const PopupProvider: ParentComponent = (properties) => {
  const [show, setShow] = createSignal<boolean>(false);
  const value: PopupContextState = {
    show,
    toggle: () => {
      setShow(!show());
    },
  };

  return <PopupContext.Provider value={value}>{properties.children}</PopupContext.Provider>;
};

const PopupTrigger: ParentComponent = (properties) => {
  const { toggle } = usePopup();

  return <div onClick={toggle}>{properties.children}</div>;
};

const PopupContent: ParentComponent = (properties) => {
  const { show } = usePopup();

  return (
    <div class="relative">
      <Show when={show()}>{properties.children}</Show>
    </div>
  );
};

const Popup = {
  Content: PopupContent,
  Provider: PopupProvider,
  Trigger: PopupTrigger,
};

export default Popup;
