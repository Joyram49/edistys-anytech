import { ModalStateContext } from "@/context";
import { useContext } from "react";

export const useModalStateHook = () => useContext(ModalStateContext);
