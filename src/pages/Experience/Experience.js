import "./style.css";
import resumePdf from "./CorbinGarnerResume.pdf"

function Experience() {
    return (
        <div className="container my-2" id="experience">
            <div className="card cardStyle">
                <h2 className="card-header">Experience</h2>
                <div className="card-body">

                    <div class="row"> 
                    <h1 className="card-title">University of Washington Coding Boot Camp Certificate 2021</h1>
                    </div> 
        
               
                </div>
                <h1 className="card-body">Check out my <a href={resumePdf} className="resumeLink"
                    target="_blank" rel="noreferrer">resume</a> for more details.</h1>
            </div>
        </div>
    )
}

export default Experience;