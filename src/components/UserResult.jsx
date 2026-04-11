import "./UserResult.css"
import { UserHeader } from "./UserHeader"

export const UserResult = () => {

    const text = "PlaceHolder text ".repeat(50)

    return (
        <div>
            <UserHeader/>
            <div className="main">
                <div className="result-container">
                    <p className="result">{text}</p>
                </div>
            </div>

            <div className="btn-container">
                <button className="result-btn">SAFE 4 ME</button>
                <button className="result-btn">NOT 4 ME</button>
            </div>
            
        </div>
    )
}