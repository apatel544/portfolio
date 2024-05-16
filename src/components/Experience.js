import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School, Work } from "@mui/icons-material";
import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience">
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2018 - August 2018"
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">General Insurance Technology Intern: Production Support Team</h3>
            <h4 className="vertical-timeline-element-subtitle">American International Group</h4>
          </VerticalTimelineElement>
          {/* Education on Timeline */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2019"
            iconStyle={{ background: '#005035', color: '#A49665' }}
            icon={<School />}
          >
            <h3 className=" vertical-timeline-element-title">University of North Carolina at Charlotte</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor's of Science in Computer Science</h4>
          </VerticalTimelineElement>
          {/* Work Experience on Timeline */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2019 - November 2023"
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Wells Fargo Asset Management</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2023 - Present"
            iconStyle={{ background: '#3e497a', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Allspring Global Investments</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">Testing card</h3>
            <h4 className="vertical-timeline-element-subtitle">Wow this looks cool!</h4>
            <p>
              Using this card to test some fun ways of improving the timeline
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div >
    </section >
  );
};

export default Experience;