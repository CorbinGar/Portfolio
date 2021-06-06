import "./style.css";
import resumePdf from "../../assets/CorbinGarnerResume.pdf"

function Experience() {
    return (
        <div className="container my-2" id="experience">
            <div className="card cardStyle">
                <h2 className="card-header">Experience</h2>
                <div className="card-body">
                    <h5 className="card-title">Coding Boot Camp Certificate</h5>
                    <h6 className="card-subtitle mb-2">University of Washington</h6>
                    <p className="card-text">2021</p>
                </div>
                <h5 className="card-body">Check out my <a href={resumePdf} className="resumeLink"
                    target="_blank" rel="noreferrer">resume</a> for more details.</h5>
            </div>
        </div>
    )
}

export default Experience;