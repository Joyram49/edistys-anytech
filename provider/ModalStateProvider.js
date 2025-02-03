"use client";

const { ModalStateContext } = require("@/context");
const { useState } = require("react");

function ModalStateProvider({ children }) {
  const [modalState, setModalState] = useState({
    isNavOpen: false,
  });
  return (
    <ModalStateContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalStateContext.Provider>
  );
}

export default ModalStateProvider;
