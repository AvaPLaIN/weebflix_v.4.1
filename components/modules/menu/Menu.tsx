import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import Button from "../../widgets/button/Button";
import { MenuContainer } from "./Menu.styles";
import { BsSearch } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "../../widgets/image/Image";
import ProfileMenu from "./components/profile-menu/ProfileMenu";

const Menu = () => {
  const [sessionLoading, setSessionLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (typeof window !== "undefined" && status === "loading") {
      setSessionLoading(true);
    } else {
      setSessionLoading(false);
    }
  }, [sessionLoading, status]);

  //* If session is loading, show loading indicator
  if (sessionLoading) {
    return <Button disabled>Loading...</Button>;
  }

  //* If user is not authenticated, show sign in button
  if (!session)
    return (
      <Button
        variant="outlined"
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Login
      </Button>
    );

  //* If user is authenticated, show protected content
  return (
    <MenuContainer>
      <ul>
        <li>
          <BsSearch />
        </li>
        <li>
          <FaRegBookmark />
        </li>
        <li className="profile">
          <div className="image">
            <Image
              src={`/api/imageProxy?url=${encodeURIComponent(
                session?.user?.image || ""
              )}`}
              alt="Avatar"
            />
          </div>
          <IoMdArrowDropdown />
          <ProfileMenu />
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
