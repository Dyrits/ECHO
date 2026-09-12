import {
  type Accessor,
  createContext,
  createSignal,
  type ParentComponent,
  Show,
  onCleanup,
  onMount,
  useContext,
} from "solid-js";

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
  let box: HTMLDivElement;
  const [show, setShow] = createSignal<boolean>(false);

  const value: PopupContextState = {
    show,
    toggle: () => {
      setShow(!show());
    },
  };

  onMount(() => {
    const hide = (event: PointerEvent) => {
      if (event.target instanceof Node && !box.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("pointerdown", hide);

    onCleanup(() => {
      document.removeEventListener("pointerdown", hide);
    });
  });

  return (
    <PopupContext.Provider value={value}>
      <div
        class="relative w-full"
        ref={(element) => {
          box = element;
        }}
      >
        {properties.children}
      </div>
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
    [Position.Top]: "bottom-full left-0",
    [Position.Bottom]: "top-full left-0",
    [Position.Left]: "right-full top-0",
    [Position.Right]: "left-full top-0",
  }[properties.position];

  return (
    <Show when={show()}>
      <div class={`absolute z-50 ${position} w-full`}>{properties.children}</div>
    </Show>
  );
};

const Popup = {
  Box: PopupBox,
  Content: PopupContent,
  Trigger: PopupTrigger,
};

export default Popup;
