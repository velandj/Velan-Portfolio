import "./Education.css";
import certficate from "../../assets/pdf/Internforte.pdf";
const Education = () => {
  return (
    <section className="education" id="education">

      <h2 className="section-title">
        Education & Certifications
      </h2>

      <div className="timeline">

        <div className="timeline-card">

          <h3>🎓 B.Tech Information Technology</h3>

          <h4>Madras Institute of Technology, Anna University</h4>

          <p>CGPA : 8.35</p>

          <span>2026 - Present</span>

        </div>

        <div className="timeline-card">

          <h3>🏫 Higher Secondary</h3>

          <h4>A.K.T Academy Matric Hr. Sec School , Kallakurichi</h4>

          <p>Bio-Maths • 568/600</p>

          <span>2024</span>

        </div>
        <div className="timeline-card">

          <h3>🏫 SSLC</h3>

          <h4>Sri Maruthi Vidhyashram Matric School , Villupuram</h4>

          <p>470/500 </p>

          <span>2022</span>

        </div>

      </div>
       
      <div className="certifications">

        <div className="certificate">
          📜 Full Stack Development – Internforte
          <div className="button">
            <a target="_blank" href={certficate} >Download</a>
          </div>
          
        </div>

        <div className="certificate">
          📜 NPTEL – Python for Data Science
        </div>

        <div className="certificate">
          🏆 SIH'25 Participant
        </div>

        <div className="certificate">
          💻 Solved 300+ LeetCode Problems
        </div>

      </div>

    </section>
  );
};

export default Education;