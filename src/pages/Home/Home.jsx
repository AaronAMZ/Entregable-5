import { useContext } from "react"
import UserNameForm from "../../Components/home/UserNameForm/UserNameForm"
import "./Home.css"
import { UserNameContext } from "../../context/UserNameContext"
import { useLocation, useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // Ruta original donde quería entrar el usuario.
  const from = location.state?.from ?? "/pokedex";
  const {saveUserName} = useContext(UserNameContext);

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate(from);
  }

  return (
    <section className="home_container">
        <div  className="logo-container">
            <img src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1686528000&Signature=cTQ96T4tp65XIOan4OK-~mnz18YJaD33Pta1O8PdoOP4rzpNwthXbQZZUOddVHCPYTnGLH9d-0iZH105QYPqWPV3IkbuJ2KJZzO6S-n~ZOTRkTfZrokLidLQktlKvlAw4W63QkOnXrUHSh~kO8~YHNKIDaDtdqjn0I22MgkdMKSZoMkS6tNZo2Aw7Risdh29YKVCTMA-PLsnvXSyzIxLgMI66N0zxxg0oyISiwJaB~7vVuZ7ENTHBbF0ZDO6REbUKOzr2NEuGz3OCOQS3Z2i4p46fsuz2CpG0Qg4~cw6g8Xt2AkAR7ihsTtOuFDxiViSnBSFsabb9uAR2P14p0PFEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Pokedex" />
        </div>

        <h1 className="home_title">¡Hola Entrenador!</h1>
        <p className="home_description">Para poder comenzar, dame tu nombre</p>

        <div className="home_form_container">
        <UserNameForm onSendName={handleSendName}/>
        </div>
        
    </section>
  )
}

export default Home