import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProjectDetailLayout from './ProjectDetailLayout';
import projectData from '../data/webCloningData';
import Footer from '../components/Footer';
import Modal from '../components/Modal.jsx'; // 모달 컴포넌트 추가

const ProjectDetail3 = () => {
  const project = projectData.find((p) => p.id === 3);
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
        duration="2024-04-03 ~ 2024-04-08"
        participants="1人 웹 클로닝"
        skills={project.tags}
        content={project.content}
        involvement={[
          { label: "디자인", percentage: 100 },
          { label: "퍼블리싱", percentage: 100 },
          { label: "기획", percentage: 100 },
          { label: "개발", percentage: 100 },
        ]}
        siteLink="https://sauserbin.github.io/gongju/"
        githubLink="https://github.com/SauserBIN/gongju"
      />

<div className="main_contents">
      <div className='space'></div>
      <div className='space2'></div>
      <b className="cb">“세 번째 웹 클로닝”</b>
      <div className='space'></div>
				<p className="cp">
        이번에는 공주 박물관 웹사이트를 클로닝해보았습니다.
        <br />
        포지션 기능을 활용하여 웹 구조를 짜보았습니다. 포지션을 사용할 경우 반응형 웹 디자인을 만들 때 수정하기 어렵다는 점을 알게 되었습니다.
				</p>
				<div className='space'></div>
				<p className='cp'>
        정해진 위치에서 알맞은 규격에 맞추는 작업도 중요하지만, 이번 작업을 통해 조금 더 유연한 디자인을 시도할 수 있었습니다.
        <br />
        딱딱한 디자인보다 더 유용한 디자인을 구현해보는 기회가 되었습니다.
        </p>
  			<div className="space"></div>
        <p className='cp'>
        이제 곧 React 과정을 배우게 되는데, 걱정이 많이 됩니다.
        <br />
        어려운 과정을 해쳐나가기 전 마지막 워밍업이라고 생각하면서 이번 웹 클로닝 프로젝트를 마칩니다.
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
            <Link to={`/webcloning-detail/${previousProject.id}`}>
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
            <Link to={`/webcloning-detail/${nextProject.id}`}>
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

export default ProjectDetail3;
