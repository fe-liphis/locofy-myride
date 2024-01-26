import { IconButton } from "@mui/material";

import bell_icon from "../../assets/bell-icon.svg";
import user_avatar from "../../assets/user-avatar.svg";
import { MenuButtonsContainer, SeparatorMenu } from "./styles";

function MenuButtons() {
  return (
    <MenuButtonsContainer>
      <IconButton>
        <img src={bell_icon} alt="Bell with a notification" />
      </IconButton>
      <SeparatorMenu />
      <IconButton>
        <img
          src={user_avatar}
          alt="Profile photo of a woman with a blue background and yellow blouse"
        />
      </IconButton>
    </MenuButtonsContainer>
  );
}

export default MenuButtons;
