import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProjectDetailLayout from './ProjectDetailLayout';
import projectData from '../data/webCloningData';
import Footer from '../components/Footer';
import Modal from '../components/Modal.jsx'; // 모달 컴포넌트 추가
import ListPhoto from '../assets/webCloning/bizcarList.png'

const ProjectDetail2 = () => {
  const project = projectData.find((p) => p.id === 2);
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
        duration="2024-02-28 ~ 2024-03-04"
        participants="1인 웹 클로닝"
        skills={project.tags}
        content={project.content}
        involvement={[
          { label: "디자인", percentage: 100 },
          { label: "퍼블리싱", percentage: 100 },
          { label: "기획", percentage: 100 },
          { label: "개발", percentage: 100 },
        ]}
        siteLink="https://sauserbin.github.io/Bizcar/"
        githubLink="https://github.com/SauserBIN/Bizcar"
      />
   <div className="main_contents">
      <div className='space'></div>
      <div className='space2'></div>
      <b className="cb">“두 번째 웹 클로닝”</b>
      <div className='space'></div>
				<p className="cp">
        HTML과 CSS용어에 익숙해지기 시작할 때 즈음 두 번째 웹 클로닝을 하게 되었습니다.
        <br />
        이제는 swiper slide가 익숙해져서 웹에 기능으로 넣게 될 때 오류가 생겨도 해결하기 좋아졌습니다.
				</p>
				<div className='space'></div>
				<p className='cp'>
        이번에는 Hover라는 기능을 사용하여 웹에 적용하여 조금더 동적인 느낌을 주는 기능들을 사용했습니다.
          <br/>
        그리고 처음으로 자바 스크립트를 활용하여 상품 부분의 탭을 변경하는 방법을 알게 되었습니다.
        </p>
				<div className="space"></div>
        <div className="space"></div>
				<img src={ListPhoto} alt="ListPhoto" className="common-img" onClick={() => openModal(ListPhoto)} />
				<div className="space"></div>
        <p className='cp'>
        해당 기능은 탭을 누를 때 마다 숨겨져있는 장비들이 출력되는 기능입니다.
        <br />
        새로운 방법을 배우고서 조금씩 발전하고 있다는 생각에 앞으로 더 열심히 해야겠다는 생각이 듭니다.
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

export default ProjectDetail2;
