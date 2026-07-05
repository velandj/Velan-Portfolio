import "./About.css";

const About = () => {
    return (
        <section className="about" id="about">

            <h2 className="section-title">
                About Me
            </h2>

            <div className="about-container">

                {/* <div className="about-image">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="About"
                    />

                </div> */}

                <div className="about-content">

                    <h3>Hello, I'm Velan D 👋</h3>

                    <p>
                        I'm currently pursuing B.Tech Information Technology
                        at Madras Institute of Technology, Anna University.
                    </p>

                    <p>
                        I enjoy developing modern web applications using
                        React, Django, REST APIs and Java.
                    </p>

                    <p>
                        Alongside development, I actively practice Data
                        Structures & Algorithms to strengthen my
                        problem-solving skills.
                    </p>

                    <p>
                        My goal is to become a Software Engineer at a
                        product-based company where I can build scalable
                        applications and continuously learn new technologies.
                    </p>
                    <div className="about-stats">

    <div className="stat-card">
        <h2>3+</h2>
        <p>Projects</p>
    </div>

    <div className="stat-card">
        <h2>300+</h2>
        <p>LeetCode</p>
    </div>

    <div className="stat-card">
        <h2>8.35</h2>
        <p>CGPA</p>
    </div>

    <div className="stat-card">
        <h2>10+</h2>
        <p>Technologies</p>
    </div>

</div>

                </div>

            </div>

        </section>
    );
};

export default About;