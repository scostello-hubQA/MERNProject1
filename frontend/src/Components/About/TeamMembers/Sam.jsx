import Media from "react-bootstrap/Media";
import logo from "../../../Resources/Logo/logo.jpg"
import './Sam.css'

const Sam = () => {



    return (

        <Media>
            <Media.Body>
                <img
                    width={64}
                    height={64}
                    className="align-self-end mr-3"
                    src={logo}
                    alt="Generic placeholder"
                />
                <h3 id="samHeading">Sam Costello</h3>
                <p>
                    Hi! :-) I'm Sam and I am 25.
                </p>
                <p><i>Former lemonade stand owner turned developer</i></p>

                <p>
                    I was mainly involved in the API and Back-End development and testing of this website!
                    I first started coding at the start of december 2020 - and this is the first team software development project that I have been involved with.
                </p>

                <p>Below is where you will find all of my experiments:</p><a id="GitHubLink" href="https://github.com/scostello-hubQA" target="_blank" rel="noreferrer">Sam's GitHub</a>


                <hr />
            </Media.Body>
        </Media>


    )
}

export default Sam; 