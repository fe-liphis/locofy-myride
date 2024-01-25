import Modal from "@mui/material/Modal";
import { PropsWithChildren, ReactNode } from "react";
import Button from "../UI/Button/Button";

import { BoxModal } from "./styles";

type ModalProps = {
  initialOpen: boolean;
  fn?: () => void;
  children?: ReactNode;
} & PropsWithChildren;

export default function ModalTemplate({
  initialOpen,
  fn,
  children,
}: ModalProps) {
  function handleClose() {
    if (fn) {
      fn();
    }
  }

  console.log("Renderizado");

  return (
    <div>
      <Modal open={initialOpen} onClose={handleClose}>
        <BoxModal>
          {children}
          <Button onClick={handleClose}>Close Modal</Button>
        </BoxModal>
      </Modal>
    </div>
  );
}
