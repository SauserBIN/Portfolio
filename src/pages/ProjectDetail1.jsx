import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProjectDetailLayout from './ProjectDetailLayout';
import projectData from '../data/webCloningData'; // 추가할 때 이 부분 주의
import Footer from '../components/Footer';
import Modal from '../components/Modal.jsx'; // 모달 컴포넌트 추가

const ProjectDetail1 = () => {
  const project = projectData.find((p) => p.id === 1);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleBackToList = () => {
    navigate('/webcloning');
  };
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // 이전글과 다음글 찾기
  const currentIndex = projectData.findIndex((p) => p.id === project.id);
  const previousProject = currentIndex > 0 ? projectData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectData.length - 1 ? projectData[currentIndex + 1] : null;

  return (
    <>
      <ProjectDetailLayout
        title={project.title}
        subtitle={project.subtitle}
        image={project.image}
        duration="2024-02-05 ~ 2024-02-07"
        participants="1人 웹 클로닝"
        skills={project.tags}
        content={project.content}
        involvement={[
          { label: "디자인", percentage: 100 },
          { label: "퍼블리싱", percentage: 100 },
          { label: "기획", percentage: 100 },
          { label: "개발", percentage: 100 },
        ]}
        siteLink="https://sauserbin.github.io/domino/"
        githubLink="https://github.com/SauserBIN/domino"
      />

      <div className="main_contents">
      <div className='space'></div>
      <div className='space2'></div>
      <b className="cb">“첫 웹 클로닝”</b>
      <div className='space'></div>
				<p className="cp">
        처음으로 HTML과 CSS를 활용하여 웹 사이트를 동일하게 만드는 작업을 진행하였습니다. 
					<br />
					아직 익숙하지 않은 HTML 용어와 CSS 속성들이 많아, 웹 클로닝 작업에 있어 많은 부분에서 추가적인 노력이 필요함을 느꼈습니다.
				</p>
				<div className='space'></div>
				<p className='cp'>
        수업 과정 중에 'Swiper Slide'라는 기능을 배웠습니다. 처음으로 외부 JS 기능을 가져와서 제 프로젝트에 추가했을 때,
          <br/>
        편리하고 사용성을 높일 수 있는 컴포넌트가 이것뿐만 아니라 더 많이 존재할 것이라는 생각이 들었습니다.
        </p>
				<div className="space"></div>
        <p className='cp'>
        시간이 조금 더 지나야 알겠지만, 신기하고 사용자에게 용이하며 좋은 사용자 경험을 제공하는
        <br />
        웹 사이트를 만들기 위해 더 많이 연구하고 시간을 투자해야겠다고 다짐했습니다.
        </p>
        <div className="space"></div>
        <div className="space2"></div>

        <button onClick={handleBackToList} className="turn_list_btn">목록으로</button>
        <div className='space'></div>
        <div className='space2'></div>
        <div className='alphaLine'></div>
        {previousProject && (
          <div className="previous_wrap">
            <p className='cp'>이전글</p>
            <div className='space2'></div>
            <Link to={`/webcloning-detail/${previousProject.id}`} onClick={handleScrollToTop}>
              <div className='flex'>
                <img src={previousProject.image} alt={previousProject.title} className="BFimage" />
                <div className='BFtext_wrap'>
                  <h3>{previousProject.title}</h3>
                  <p>{previousProject.subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        )}
        <div className='space2'></div>
        {nextProject && (
          <div className="next_wrap">
            <p className='cp'>다음글</p>
            <div className='space2'></div>
            <Link to={`/webcloning-detail/${nextProject.id}`} onClick={handleScrollToTop}>
              <div className='flex'>
                <img src={nextProject.image} alt={nextProject.title} className="BFimage" />
                <div className='BFtext_wrap'>
                  <h3>{nextProject.title}</h3>
                  <p>{nextProject.subtitle}</p>
                </div>
              </div>
            </Link>
          </div>
        )}
        <div className='space2'></div>
      </div>
      <Footer />

      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </>
  );
};

export default ProjectDetail1;
