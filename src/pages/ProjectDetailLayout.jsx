import React from 'react';
import SubHeader from '../components/SubHeader';
import '../common.css';
import './ProjectDetailLayout.css';
import LinkIcon from '../assets/link.png';
import SmallGit from '../assets/smallGit.png';

const ProjectDetailLayout = ({ title, subtitle, image, duration, participants, skills, involvement, siteLink, githubLink, children, content }) => {
  return (
    <div>
      <SubHeader />
      <div className="main_contents detail_page">
        <div data-aos="fade-down">
          <b className="gradient-bg-horizontal h3 mtfont detail_title">{title}</b>
          <p className="detail_subtitle">{subtitle}</p>
        </div>
        <div className='project-detail_inner' data-aos="fade-up">
          <div className='detail_left_wrap' data-aos="fade-right">
            <img src={image} alt={title} className="detail-image" />
            {children}
          </div>
          <div className='detail_right_wrap' data-aos="fade-left">
            <div className="info-section flex" data-aos="fade-left">
              <div>
                <div className="info-label">참여 인원수</div>
                <div className="detail-button">{participants}</div>
              </div>
              <div>
                <div className="info-label">프로젝트 기간</div>
                <div className="detail-button">{duration}</div>
              </div>
            </div>
            <div className="skills-section" data-aos="fade-left">
              <p className="info-label">사용 스킬:</p>
              <div className="tags">
                {skills.map((skill, index) => (
                  <span key={index} className="detail-button">{skill}</span>
                ))}
              </div>
            </div>
            <div className="involvement-section" data-aos="fade-left">
              <p className="info-label">참여도:</p>
              {involvement.map((item, index) => (
                <div key={index} className="gauge-bar-wrap">
                  <span className="gauge-bar-label">{item.label}</span>
                  <div className="gauge-bar">
                    <div className="gauge-bar-inner" style={{ width: `${item.percentage}%` }}>
                      <span className="gauge-bar-percentage">{item.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="links-section flex" data-aos="fade-left">
              <a href={siteLink} className="detail_btn" target="_blank" ><img src={LinkIcon} alt="link_icon" />사이트 보러가기</a>
              <a href={githubLink} className="detail_btn" target="_blank"><img src={SmallGit} alt="gitHub" />Git Hub 바로가기</a>
            </div>
          </div>
        </div>
        <div className='alphaLine' data-aos="fade-up"></div>
        <div data-aos="fade-up">
          <p className='project-content'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailLayout;
