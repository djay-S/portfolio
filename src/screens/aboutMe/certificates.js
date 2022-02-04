import React from "react";
import Certification from "../../containers/aboutMe/certficationContainer";

const certificates = () => {
  return (
    <div className="certifications me_content">
      <h2>Certifications</h2>
      <div className="contents">
        <Certification
          title={
            "React - The Complete Guide (including Hooks, React Router, Redux)"
          }
          provider={"Udemy"}
          url={
            "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f8abb324-4b76-4ec2-be42-307cdfb8de44.pdf"
          }
        />
        <Certification
          title={"JavaScript Es6"}
          provider={"Udemy"}
          url={
            "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f8abb324-4b76-4ec2-be42-307cdfb8de44.pdf"
          }
        />
        <Certification
          title={"MongoDB - The Complete Developer's Guide"}
          provider={"Udemy"}
          url={
            "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f8abb324-4b76-4ec2-be42-307cdfb8de44.pdf"
          }
        />
        {/* Can also include flip-book type style alternating left & right the placement of the text and the pic */}
      </div>
    </div>
  );
};

export default certificates;
