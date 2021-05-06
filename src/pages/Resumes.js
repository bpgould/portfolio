import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";

function Resumes(){
  const [skills, setSkills] = useState([]);
  const [awsskills, setawsSkills] = useState([]);//added
  const [frontendskills, setfrontendSkills] = useState([]); //added
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() =>{
    axios.get('/api/skills')
      .then(response =>{
        setSkills(response.data);
      })
    axios.get('/api/awsskills')
      .then(response =>{
        setawsSkills(response.data);
      })
    axios.get('/api/frontendskills')
      .then(response =>{
        setfrontendSkills(response.data);
      })
    axios.get('/api/experience')
      .then(response =>{
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      })
  }, [])

  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Skills:" />
          <Sectiontitle title="Backend" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>
          <Sectiontitle title="AWS" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {awsskills.map(awsskill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={awsskill.title}>
                  <Progress title={awsskill.title} percentage={awsskill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>
          <Sectiontitle title="Frontend" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {frontendskills.map(frontendskill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={frontendskill.title}>
                  <Progress title={frontendskill.title} percentage={frontendskill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp}/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
