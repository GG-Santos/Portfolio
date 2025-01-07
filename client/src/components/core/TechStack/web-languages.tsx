import sassLogo from "../../assets/svg/sass.svg";
import "../../assets/styles/web-languages.css";


export default function WebLanguages(){
    return (
        <>
            <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="web-logo">
                    <div className="box html">
                        <p>HTML</p>
                    </div>
                </div>
                <div className="web-logo">
                    <div className="box scss">
                        <img src={sassLogo} className="sass" alt="Sass logo" />
                    </div>
                </div>
                
                <div className="web-logo">
                    <div className="box css">
                        <p>CSS</p>
                    </div>
                </div>
                <div className="web-logo">
                    <div className="box ts">
                        <p>TS</p>
                    </div>
                </div>
                <div className="web-logo">
                    <div className="box js">
                        <p>JS</p>
                    </div>
                </div>
                <div className="web-logo">
                    <div className="box wa">
                        <p>WA</p>
                    </div>
                </div>
            </div>
        </>
    );
};