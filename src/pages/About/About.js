import myImage from "../../assets/images/Corbin.jpg";
import "./style.css";

function About() {
    return (
        <div className="container my-2" id="about-me">
            <div className="card cardStyle">
                <div className="card-header">
                    <h2>About</h2>
                </div>
                <div className="card-body">
                    <img src={myImage} className="card-img-top about-me-img" alt="Corbin in Seattle"></img>
                    <h1 className="card-text about-me-text"></h1>
                        <h1> Full stack web developer and educationally motivated, i love learning about new things. 
                        i have Received certificate in full stack web development from the University of Washington Coding Boot Camp. 
                        Collaborative, industrious and a team player and i love a optimizing and problem solving. 
                          Personal interests in video gamins, Blacksmithing, and ocational creative writing. 
                         Technologies I've used recently include:</h1>
                    <ul className="techList">
                        <li className="techListItem">HTML5</li>
                        <li className="techListItem">CSS3</li>
                        <li className="techListItem">Bootstrap</li>
                        <li className="techListItem">Javascript ES6+</li>
                        <li className="techListItem">JQuery</li>
                        <li className="techListItem">Node.js</li>
                        <li className="techListItem">Express</li>
                        <li className="techListItem">MySQL</li>
                        <li className="techListItem">Sequelize</li>
                        <li className="techListItem">Handlebars</li>
                        <li className="techListItem">MongoDB</li>
                        <li className="techListItem">React.js</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;