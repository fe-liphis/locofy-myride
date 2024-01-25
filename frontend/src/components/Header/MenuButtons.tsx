import { IconButton } from "@mui/material";

import bell_icon from "../../assets/bell-icon.svg";
import user_avatar from "../../assets/user-avatar.svg";
import { MenuButtonsContainer, SeparatorMenu } from "./styles";

function MenuButtons() {
  return (
    <MenuButtonsContainer>
      <IconButton>
        <img src={bell_icon} alt="Sino com uma notificação" />
      </IconButton>
      <SeparatorMenu />
      <IconButton>
        <img
          src={user_avatar}
          alt="Foto de perfil de uma mulher com fundo azul e blusa amarela"
        />
      </IconButton>
    </MenuButtonsContainer>
  );
}

export default MenuButtons;
