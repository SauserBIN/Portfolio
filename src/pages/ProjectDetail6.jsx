import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProjectDetailLayout from './ProjectDetailLayout';
import projectData from '../data/projectData';
import Footer from '../components/Footer';
import ezdomathMain from "../assets/project/teamProject/EZDOMATH/ezdomath_main.png";
import ezdomathIntro from "../assets/project/teamProject/EZDOMATH/ezdomath_intro.png";
import ezdomathNoti from "../assets/project/teamProject/EZDOMATH/ezdomath_noti.png";
import ezdomathPlay from "../assets/project/teamProject/EZDOMATH/ezdomath_play.png";
import ezdomathPlayDetail from "../assets/project/teamProject/EZDOMATH/ezdomath_play_detail.png";

import Modal from '../components/Modal'; // Modal 컴포넌트 추가

const ProjectDetail6 = () => {
  const project = projectData.find((p) => p.id === 6);
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
        duration="2024-07-08 ~ 2024-08-06"
        participants="3人 팀 프로젝트"
        skills={project.tags}
        content={project.content}
        involvement={[
          { label: "디자인", percentage: 33.3 },
          { label: "퍼블리싱", percentage: 33.3 },
          { label: "기획", percentage: 33.3 },
          { label: "개발", percentage: 33.3 },
        ]}
        siteLink="https://thesandfox.github.io/ezdomath/"
        githubLink="https://github.com/TheSandfox/ezdomath"
      />
      
      <div className="main_contents">
      <div className="space2"></div>
				<div className="space2"></div>
				<b className="cb">“Figma”</b>
				<p className="cp">
				레이아웃을 디자인하고, 색상 코드 및 폰트 사이즈 등을 정리하여 프로젝트 시작 전 common.css를 완성하고 시작할 수 있었습니다.
				</p>
				<div className="space2"></div>
				<b className="cb">“React”</b>
				<div className='space'></div>
				<p className='cp'>
				이번 프로젝트에서는 데이터를 <span className='impact'>로컬 스토리지에 데이터를 저장하는 방식</span>으로 작성되었습니다.
				<br />
				이전 프로젝트와 마찬가지로 Vite의 react를 사용하여 프로젝트를 진행하였고,
				<br />
				<span className='impact'>팀원간의 컴포넌트 공유, 부분별 컴퍼넌트화, 모듈단위의 코드 작성</span>을 통해 빠르게 오류를 해결하고 교체할 수 있었습니다.
				</p>
				<div className='space'></div>
				<p className='cp'>
          이번 프로젝트에서는 권한별 데이터 처리가 특히 인상적이었습니다. <span className='impact'>각 아이디 마다 데이터 권한을 설정하는</span> 작업을 수행했습니다.
          <br />
          <span className='impact'>아이디별 데이터 권한을 삼항 연산자를 사용한 조건문으로 추가하고 제거하는 방식</span>을 시도해 보았습니다.
          <br />
          특히 이번 프로젝트에서는 데이터를 가공하고 원하는 위치에 렌더링하는 부분을 심도 있게 다룰 수 있어 매우 유익한 경험이었습니다.
				</p>
        <div className='space2'></div>
        <p className='cbl'>메인페이지 헤더부분</p>
        <div className='space'></div>
        <img src={ezdomathMain} alt="ezdomathMain" className="common-img" onClick={() => openModal(ezdomathMain)} />
        <div className='space'></div>
        <p className='cp'>
          메인페이지 Header부분입니다. 이 부분에는<span className='impact'>SVGator를 활용하여 만든 SVG애니메이션</span>이 적용되어 있습니다.
          <br />
          프로젝트 사용성 피드백을 반영하여 홈페이지의 설명으로 갈 수 있는 버튼을 Header 최상단에 배치하였습니다.
				</p>
        <div className='space2'></div>
        <p className='cbl'>소개 페이지</p>
        <img src={ezdomathIntro} alt="ezdomathIntro" className="common-img" onClick={() => openModal(ezdomathIntro)} />
        <div className='space'></div>
        <p className='cp'>
          메인페이지 Header부분과 동일하게 SVG애니메이션이 있습니다.
          <br />
          소개 페이지에서 사용된 SVG애니메이션은 <span className='impact'>도형의 다양성과 시각적 디자인을 통한 흥미유발을 목적으로 제작</span>되었습니다.
          <br />
          <br />
          이 페이지는 EZDOMATH사이트를 이용하는 사람들의 가이드가 되는 부분으로 해당 사이트의 주요기능을 큰 버튼으로 표시하고,
          <br />
          Router Dom Link 기능을 통해 이동 할 수 있도록 하고, 사진과 글로 가이드 라인을 제시했습니다.
				</p>
        <div className='space2'></div>
        <p className='cbl'>게시판 페이지</p>
        <img src={ezdomathNoti} alt="ezdomathNoti" className="common-img" onClick={() => openModal(ezdomathNoti)} />
        <div className='space'></div>
        <p className='cp'>
          해당 페이지는 로컬스토리지 데이터를 저장하게 만들었습니다.
          <br />
          <span className='impact'>게시판은 관리자 권한을 가진 사람만 게시물 작성, 수정, 삭제가 가능</span>하며, 학생과 학부모 권한을 가진 인원은 확인만 가능합니다.
          <br />
          <br />
          <span className='impact'>데이터의 중요도를 체크</span>하면 리스트 최상단에 표시되고, <span className='impact'>페이지네이션</span> 기능은 5개의 일반 게시물, 5칸의 숫자를 표시합니다. 중요게시물은 고정입니다.
          <br />
          <span className='impact'>게시물 갯수를</span> 데이터를 호출하여 notices.length으로 표기하여 숫자로 표기하게 만들었습니다.
          <br />
          데이터 내에 <span className='impact'>important값이 true, false인지를 구분</span>해서 true일 경우 번호를 이미지로 표시하고 최상단에 표시가 됩니다.
          <br />
          <br />
          <span className='impact'>검색기능</span>은 컴퍼넌트로 제작되었습니다. 제목, 내용, 들어가는 글자를 useState로 관리하고,
          <br />
          검색 타입과 검색어를 부모 컴포넌트로 전달하여 리스트 페이지에 랜더링합니다.
				</p>
        <div className='space2'></div>
        <p className='cbl'>학습 페이지</p>
        <img src={ezdomathPlay} alt="ezdomathPlay" className="common-img" onClick={() => openModal(ezdomathPlay)} />
        <div className='space'></div>
        <p className='cp'>
          이 페이지는 제가 작업하는 데이터 뿐만 아니라 팀원의 데이터가 제 데이터가 들어오는 자리에 들어와야하기 때문에
          <br />
          팀원의 데이터가 자리를 잡을 수 있도록 작업자의 데이터를 확인하고 랜더링 할 수 있는 공간을 작업할 수 있는 경험을 주었습니다.
          <br />
          <br />
          그뿐만 아니라, <span className='impact'>제가 사용하는 데이터를 가공하고 디자인하여 렌더링</span>할 수 있었습니다.
          <br />
          데이터 파일에서 특정 글자를 다른 명칭의 데이터로 호출하고, 작성된 데이터를 정규식으로 변환하여
          <br />
          강조할 부분을 span으로 감싸 스타일을 적용하는 방법도 시도해 보았습니다.
				</p>
        <div className='space2'></div>
        <img src={ezdomathPlayDetail} alt="ezdomathPlayDetail" className="common-img" onClick={() => openModal(ezdomathPlayDetail)} />
        <div className='space'></div>
        <p className='cp'>
          이 부분은 팀원의 데이터가 왼쪽 회차데이터와 오른쪽 문제 데이터가 일치하게 나오도록 랜더링 하는 장면이고,
          <br />
          오른쪽 문제를 누르면 올바르게 팀원의 데이터가 자리를 잡을 수 있는 부분을 랜더링 하는 부분입니다.         
				</p>
        <div className='space'></div>
        <p className='cp'>
          만약 이번 프로젝트에서 이 파트를 해보지 않았더라면 데이터를 확인하고 내보내는 과정에 대한 이해가 부족했을 것이라고 생각이 들었습니다.
          <br />
          하지만 이 부분을 통해 소통과 협업을 통해 컴퍼넌트, <span className='impact'>데이터를 정밀히 확인하여 올바른 랜더링</span>을 할 수 있는 좋은 경험이 되었습니다.
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

export default ProjectDetail6;
