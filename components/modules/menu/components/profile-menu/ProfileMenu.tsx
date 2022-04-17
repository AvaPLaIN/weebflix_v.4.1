import { ProfileMenuContainer } from "./ProfileMenu.styles";
import Link from "next/link";
import { signOut } from "next-auth/react";

// TODO - redirect on home page after logout

const ProfileMenu = () => {
  return (
    <ProfileMenuContainer className="profile-menu">
      <ul>
        <li>
          <Link href="/">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Settings</a>
          </Link>
        </li>
        <li onClick={() => signOut()}>
          <Link href="/">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </ProfileMenuContainer>
  );
};

export default ProfileMenu;
