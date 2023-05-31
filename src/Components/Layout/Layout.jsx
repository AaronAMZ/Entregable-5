import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserNameContext } from "../../context/UserNameContext"
import "./Layout.css"


const Layout = () => {
  const {removeUserName} = useContext(UserNameContext);
  const navigate = useNavigate();

  const logout = () => {
    removeUserName();
    navigate("/");
  }

  return (
    <div>
        <header className="header_layout">
            <img src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1686528000&Signature=cTQ96T4tp65XIOan4OK-~mnz18YJaD33Pta1O8PdoOP4rzpNwthXbQZZUOddVHCPYTnGLH9d-0iZH105QYPqWPV3IkbuJ2KJZzO6S-n~ZOTRkTfZrokLidLQktlKvlAw4W63QkOnXrUHSh~kO8~YHNKIDaDtdqjn0I22MgkdMKSZoMkS6tNZo2Aw7Risdh29YKVCTMA-PLsnvXSyzIxLgMI66N0zxxg0oyISiwJaB~7vVuZ7ENTHBbF0ZDO6REbUKOzr2NEuGz3OCOQS3Z2i4p46fsuz2CpG0Qg4~cw6g8Xt2AkAR7ihsTtOuFDxiViSnBSFsabb9uAR2P14p0PFEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

            <button onClick={logout}>Log Out</button>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout