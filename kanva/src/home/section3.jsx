import "../css/section3.css"
import quiz from '../assets/quiz.jpg'

const Section3 = () => {
    return (
        <>
        <div className="section-content-3">
            <div className="cover-quiz">
                <img src= {quiz} alt="quizzes" className="quiz-pics"/>
            </div>
            <div className="section3-quiz-desc">
                <h1 className="section3-title">Not sure what works best for your skin?</h1>
                <p className="section3-desc">Take our quick quiz to find products tailored to your skincare routine</p>
                <a href="" className="link-quiz">Take the quiz</a>
            </div>
        </div>
        </>
    );
}

export default Section3;
