import React,{ useState } from "react";
import "./UserHeader.css"
import profileImg from "../assets/profile.jpg"

export const UserHeader = () => {
    const [ShowHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const [BurgerMenuClass, setBurgerMenuClass] = useState("burger-menu hidden");
    const [ShowProfileMenu, setShowProfileMenu] = useState(false);
    const [ProfileMenuClass, setProfileMenuClass] = useState("profile-menu hidden")
    const userName = "username";

    //toggle burger menu
    const updateburger = () => {
        if(!ShowHamburgerMenu){
            setBurgerMenuClass("burger-menu visible")
        }
        else {
            setBurgerMenuClass("burger-menu hidden")
        }
        setShowHamburgerMenu(!ShowHamburgerMenu);
    }

    //toggle profile menu
    const updateprofile = () => {
        if(!ShowProfileMenu){
            setProfileMenuClass("profile-menu visible")
        }
        else {
            setProfileMenuClass("profile-menu hidden")
        }
        setShowProfileMenu(!ShowProfileMenu);
    }

    return (
        <div>
            <header>
                <div>
                    <button className="burger-btn" onClick={updateburger}>
                        <div className="burger_dash"></div>
                        <div className="burger_dash"></div>
                        <div className="burger_dash"></div>
                    </button>
                </div>

                <div>
                    <h1>CLEAR LABEL</h1>
                </div>

                <button className="profile-btn" onClick={updateprofile}>
                    <img src={profileImg} className="profilepic"></img>
                </button>
            </header>

            <div className={BurgerMenuClass}>
                <button className="new-scan-btn">New Scan</button>
                <h2>Saved</h2>
            </div>

            <div className={ProfileMenuClass}>
                <img src={profileImg} className="profilepic"></img>
                <p>{userName}</p>
                <button>SIGN OUT</button>
            </div>
        </div>
    )
}

export default UserHeader