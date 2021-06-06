import "./style.css";
import resumePdf from "./CorbinGarnerResume.pdf"

function Experience() {
    return (
        <div className="container my-2" id="experience">
            <div className="card cardStyle">
                <h1 className="card-header">Experience</h1>
                <div className="card-body">
                    <h1 className="card-title">Coding Boot Camp Certificate</h1>
                    <h1 className="card-subtitle mb-2">University of Washington</h1>
                    <p className="card-text">2021</p>
                </div>
                <h1 className="card-body">Check out my <a href={resumePdf} className="resumeLink"
                    target="_blank" rel="noreferrer">resume</a> for more details.</h1>
            </div>
        </div>
    )
}

export default Experience;