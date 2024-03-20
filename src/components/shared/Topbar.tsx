import { Link,useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import {useEffect} from'react'
import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {
    const navigate = useNavigate();
    const { user } = useUserContext();
    const { mutate: signOut, isSuccess } = useSignOutAccount();
  
    useEffect(() => {
      if (isSuccess) navigate(0);
    }, [isSuccess]);
  
    return (
      <section className="topbar">
        <div className="flex-between py-4 px-5">
          <Link to="/" className="flex gap-3 items-center">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              width={130}
              height={325}
            />
          </Link>
  
          <div className="flex gap-4">
            <Button
              variant="ghost"
              className="shad-button_ghost"
              onClick={() => signOut()}>
              <img src="/assets/icons/logout.png" alt="logout" width={20} height={18}/>
            </Button>
            <Link to={`/profile/${user.id}`} className="flex-center gap-3">
              <img
                src={user.imageUrl || "/assets/icons/profile-placeholder.jpg" }
                alt="profile"
                // width={50}
                // height={40}
                className="h-8 w-8 rounded-full"
              />
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Topbar;
