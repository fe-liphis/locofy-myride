import Modal from "@mui/material/Modal";
import { PropsWithChildren, ReactNode, useState } from "react";
import Button from "../UI/Button/Button";
import { Box } from "@mui/material";
import { useTheme } from "styled-components";
import { BoxModal } from "./styles";

type ModalProps = {
  initialOpen: boolean;
  fn: () => void;
  children?: ReactNode;
} & PropsWithChildren;

export default function ModalTemplate({
  initialOpen,
  fn,
  children,
}: ModalProps) {
  const [open, setOpen] = useState(initialOpen);
  const theme = useTheme();

  function handleClose() {
    fn();
    setOpen(false);
  }

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <BoxModal>
          {children}
          <Button onClick={handleClose}>Close Modal</Button>
        </BoxModal>
      </Modal>
    </div>
  );
}
