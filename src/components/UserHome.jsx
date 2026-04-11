import "./UserHome.css"
import { UserHeader } from "./UserHeader"

export const UserHome = () => {
    return (
    <div>
        <UserHeader/>
        <div className="main">
            <button className="camera-placeholder"></button>
        </div>


        <footer>
            <div>
                <button className="camera-btn">
                    <span>WHAT'S IN YOUR PRODUCT?</span>
                    <span>📷</span>
                </button>
            </div>
        </footer>
    </div>
    )
    

}

export default UserHome;