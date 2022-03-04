import React from "react";
import WorkExperience from "../../containers/aboutMe/workExperienceContainer";
import Education from "../../containers/aboutMe/educationContainer";

const workExperience = () => {
  return (
    <div className="work_exps me_content">
      <h2>Work Experience</h2>
      <ul className="contents">
        <WorkExperience
          designation={"Project Engineer"}
          company={"Wipro Technologies"}
          location={"Chennai"}
          image={"wipro.png"}
          fromDate={new Date(2018, 8, 23)}
          toDate={new Date()}
          details={`
          <ul>
          <li>Worked on development of an online portal for Sellers to report their sales and claim back-margin rebates, and for Admins to manages sellers and claims.</li>
          <li>Implemented SQL procedure to update user information based on their contract details and last activity information.</li>
          <li>Implemented a functionality to detect Fraudulent Claims and generated reports as per business requirements.</li>
          <li>Worked on Front End and Backend Development of Admin Dashboard Screen.</li>
          <li>Received 'Inspiring Performance Badge' from my manager as a token of appreciation.</li>
          </ul>
          `}
        />
        <WorkExperience
          designation={"Project Engineer"}
          company={"Wipro Technologies"}
          location={"Chennai"}
          image={"wipro.png"}
          fromDate={new Date(2018, 8, 23)}
          toDate={new Date(2019, 8, 1)}
          details={`
          <ul>
          <li>Worked on development of an online portal for Sellers to report their sales and claim back-margin rebates, and for Admins to manages sellers and claims.</li>
          <li>Implemented SQL procedure to update user information based on their contract details and last activity information.</li>
          <li>Implemented a functionality to detect Fraudulent Claims and generated reports as per business requirements.</li>
          <li>Worked on Front End and Backend Development of Admin Dashboard Screen.</li>
          <li>Received 'Inspiring Performance Badge' from my manager as a token of appreciation.</li>
          </ul>
          `}
        />
        <Education
          college={"Vellore Institute of Technology"}
          branch={"B.tech in Mechanical Engineering, July 2014 - June 2018"}
          cgpa={"CGPA: 8.81"}
          image={"wipro.png"}
          fromDate={new Date(2014, 6, 1)}
          toDate={new Date(2018, 4, 31)}
          details={""}
        />
        {/* Can also add a timeline like feel by adding a span on the side giving the time period of the experience
            Can also include education under this with a different section name (History) */}
      </ul>
    </div>
  );
};

export default workExperience;
