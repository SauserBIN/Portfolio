import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProjectDetailLayout from './ProjectDetailLayout';
import projectData from '../data/projectData';
import Footer from '../components/Footer';
import bootstrapMain from "../../src/assets/toyProject/bootstrapCRUD/bootstrap_main.png"
import bootstrapList from "../../src/assets/toyProject/bootstrapCRUD/bootstrap_list.png"
import bootstrapChange from "../../src/assets/toyProject/bootstrapCRUD/bootstrap_change.png"

import Modal from '../components/Modal'; // Modal 컴포넌트 추가

const ProjectDetail7 = () => {
  const project = projectData.find((p) => p.id === 7);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleBackToList = () => {
    navigate('/project');
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // 이전글과 다음글 찾기
  const currentIndex = projectData.findIndex((p) => p.id === 6);
  const previousProject = currentIndex > 0 ? projectData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectData.length - 1 ? projectData[currentIndex + 1] : null;

  return (
    <>
      <ProjectDetailLayout
        title={project.title}
        subtitle={project.subtitle}
        image={project.image}
        duration="2024-08-07 ~ 2024-08-08"
        participants="1人 토이 프로젝트"
        skills={project.tags}
        content={project.content}
        involvement={[
          { label: "디자인", percentage: 100 },
          { label: "퍼블리싱", percentage: 100 },
          { label: "기획", percentage: 100 },
          { label: "개발", percentage: 100 },
        ]}
        siteLink="https://sauserbin.github.io/bootstrap/"
        githubLink="https://github.com/SauserBIN/bootstrap"
      />
      
      <div className="main_contents">
      <div className="space2"></div>
				<div className="space2"></div>
				<b className="cb">“Bootstrap”</b>
        <div className='space'></div>
				<p className="cp">
				웹 개발을 쉽게 하고, 일관된 디자인을 유지할 수 있도록 도와주는 HTML, CSS, JavaScript를 기반 오픈 소스 프론트엔드 프레임워크
				</p>
				<div className="space2"></div>
				<b className="cb">“React + Vite”</b>
				<div className='space'></div>
				<p className='cp'>
				이 프로젝트는 <span className='impact'>Bootstrap의 기능 이해</span>를 위해 공부목적으로 만들었습니다.
				<br />
				노드에 npm install bootstrap 설치 후 Vite, React로 작업되었습니다.
				<br />
				<span className='impact'>CRUD</span>를 제작하여 Bootstrap의 용어 및 사용방법을 익혔습니다.
				</p>
        <div className='space2'></div>
        <p className='cbl'>메인 페이지</p>
        <div className='space'></div>
        <img src={bootstrapMain} alt="bootstrapMain" className="common-img" onClick={() => openModal(bootstrapMain)} />
        <div className='space'></div>
        <p className='cp'>
          해당 사이트는 한 페이지로만 작업되었습니다.<span className='impact'>폼 태그 검증, 리스트</span>가 한페이지에 담겨있습니다.
          <br />
          디자인을 만들기 위해서 Container, Row, Col, Form, Button, Table를 사용하였습니다. 여기서 Container는 중앙정렬을 위한 목적으로 사용되었습니다.
				</p>
        <div className='space2'></div>
        <p className='cbl'>내용 추가</p>
        <img src={bootstrapList} alt="bootstrapList" className="common-img" onClick={() => openModal(bootstrapList)} />
        <div className='space'></div>
        <p className='cp'>
          함수에 대한 설명보단 이 테이블 디자인을 잡기위해서 어떤 기능을 썼는지 작성해보겠습니다.
          <br />
          <span className='impact'>행을 나타내는 Row, 열을 나타내는 Col</span>을 감싸 Table 속성안에 striped bordered hover의 기능을 담았습니다.
          <br />
          <br />
          <span className='impact'>striped</span>는 bootstrap의 table에서 제공하는 기능 중 하나이며, 이는 줄이 추가될 때 마다 2가지의 색상이 번갈아 등장하는 기능입니다.
          <br />
          Button에도 마찬가지로 <span className='impact'>warning, danger를 사용</span>하여 색상이 노란색 경고와 붉은색 위험을 표시하는것 같은 느낌을 사용하였습니다.
				</p>
        <div className='space2'></div>
        <p className='cbl'>수정기능 사용시</p>
        <img src={bootstrapChange} alt="bootstrapChange" className="common-img" onClick={() => openModal(bootstrapChange)} />
        <div className='space'></div>
        <p className='cp'>
        <span className='impact'>리스트에 있는 수정 버튼</span>을 누를경우 form으로 호출된 useState안에 담긴 제목과 내용이 handleChange를 통해 그자리에 들어오게 됩니다.
          <br />
          <span className='impact'>기존에 추가 버튼이 수정 버튼으로 교체</span>되며 누를경우 내용이 반영됩니다.
          <br />
          <br />
          또한 이 테이블의 <span className='impact'>간격이나 마진은 mt-3, me-2 mb-3등 bootstrap에서 사용하는 명칭</span>을 사용하여 랜더링 하였습니다.
				</p>
        <div className='space2'></div>
        <div className='space'></div>
        <p className='cp'>
          이번 프로젝트를 진행하면서 유용한 프레임워크나 개발에 필요한 도구를 찾는 데에 자신감이 생겼습니다.
          <br />
          프론트엔드 개발자로서 사용자에게 편의성을 제공하면서 일관된 디자인을 유지하는 방법에 대해 고민하던 중,
          <br />
          이번 프로젝트가 저의 부족한 부분을 채워주는 경험이 되었습니다.
        </p>
				<div className='space1'></div>
				<div className='space2'></div>
				<button onClick={handleBackToList} className="turn_list_btn">목록으로</button>
				<div className='space'></div>
				<div className='space2'></div>
				<div className='alphaLine'></div>
        {previousProject && (
        <div className="previous_wrap">
        <p className='cp'>이전글</p>
        <Link to={`/project-detail/${previousProject.id}`} onClick={handleScrollToTop}>
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
        {nextProject && (
        <div className="next_wrap">
          <p className='cp'>다음글</p>
          <Link to={`/project-detail/${nextProject.id}`} onClick={handleScrollToTop}>
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
      </div>
      
      <Footer />

      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </>
  );
};

export default ProjectDetail7;
