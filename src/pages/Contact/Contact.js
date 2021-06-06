import "./style.css";

function Contact() {
    return (
        <div className="container my-2" id="contact">
        <div className="card contactCard">
            <div className="card-header">
                <h2>Contact</h2>
            </div>
            <div>
            <h1 className="card-body contactSubheading">Feel free to send me an email at CorbinGar@gmail.com.</h1>
            </div>
            <div className="row iconRow">
                <div className="card col-4 iconCard">
                    <a href="https://www.linkedin.com/in/CorbinGar/" target="_blank" rel="noreferrer"><span
                            className="fa fa-linkedin fa-5x"></span></a>
                </div>
                <div className="card col-4 iconCard">
                        <a href="https://github.com/CorbinGar" target="_blank" rel="noreferrer"><span
                            className="fa fa-github githubContactLink fa-5x"></span></a>
                </div>
                <div className="card col-4 iconCard">
                    <a href="mailto:CorbinGar@gmail.com" target="_blank" rel="noreferrer"><span
                            className="fa fa-envelope-o fa-5x"></span></a>
                </div>
                <div className="card col-4 iconCard">
                    <a href="tel:+1-253-315-0112" target="_blank" rel="noreferrer"><span className="fa fa-phone fa-5x"></span></a>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Contact;