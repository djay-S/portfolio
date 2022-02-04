import React from "react";
import WorkExperience from "../../containers/aboutMe/workExperienceContainer";

const workExperience = () => {
  return (
    <div className="work_exps me_content">
      <h2>Work Experience</h2>
      <div className="contents">
        <WorkExperience
          designation={"Project Engineer"}
          company={"Wipro Technologies"}
          location={"Chennai"}
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
        {/* Can also add a timeline like feel by adding a span on the side giving the time period of the experience
            Can also include education under this with a different section name (History) */}
      </div>
    </div>
  );
};

export default workExperience;
