//프론트엔드 사전
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link 컴포넌트 추가
import ProjectDetailLayout from './ProjectDetailLayout';
import projectData from '../data/projectData'; // 추가할 때 이 부분 주의
import Footer from '../components/Footer';
import FrontEndLibraryMain from '../assets/toyProject/frontEndLibrary/frontEndLibrary_main.png';
import FrontEndLibraryList from '../assets/toyProject/frontEndLibrary/frontEndLibrary_list.png';
import FrontEndLibraryWrite from '../assets/toyProject/frontEndLibrary/frontEndLibrary_write.png';
import Modal from '../components/Modal.jsx'; // 모달 컴포넌트 추가

const ProjectDetail4 = () => {
	const project = projectData.find((p) => p.id === 4);
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
				duration="2024-05-04 ~ 2024-05-09"
				participants="1人 개인 프로젝트"
				skills={project.tags}
				content={project.content}
				involvement={[
					{ label: "디자인", percentage: 100 },
					{ label: "퍼블리싱", percentage: 100 },
					{ label: "기획", percentage: 100 },
					{ label: "개발", percentage: 100 },
				]}
				siteLink="https://sauserbin.github.io/FrontEndLibrary/"
				githubLink="https://github.com/SauserBIN/FrontEndLibrary"
			/>

			{/* 여기에 로컬로 추가할 내용을 작성하세요 */}
			<div className="main_contents">
				<div className="space2"></div>
				<b className="cb">“Vite”</b>
				<p className="cp">
					Vite를 사용한 첫번째 프로젝트 입니다.
					<br />
					프로젝트 초기 단계에서 Vite를 선택한 이유는 빠른 개발 환경 설정과 빌드 속도 때문이었습니다.
					<br />
					Express를 사용할 때보다 직관적이고 정리된 작업을 할 수 있었고, 이는 개발 생산성을 크게 향상시켰습니다.
				</p>
				<div className='space'></div>
				<p className='cp'>모듈 시스템(Module System)을 통해 코드를 독립적인 모듈로 분리함으로써 코드의 재사용성과 유지보수성을 높일 수 있다는 점이
					<br /> 매우 인상적이었습니다.이러한 특징은 앞으로의 협업 과정에서 필수적인 요소임을 깨달았습니다.<br />
					또한, Vite는 JSX(JavaScript XML) 문법을 사용하여 HTML과 JavaScript를 결합한 코드를 자동으로 컴파일해주어<br />
					개발 과정을 더욱 간편하게 만들어 주었습니다. Vite는 이번 프로젝트에서 저에게 매우 유용한 도구임을 입증했으며,<br /> 앞으로 다양한 프로젝트에서도 적극 활용하고 싶습니다.</p>
				<div className="space"></div>
				<p className='cp'>
					다음은 각 컴포넌트에 대한 리뷰와 사용된 React 훅에 대한 설명입니다.
				</p>
				<div className="space2"></div>
				<b className="cbl">1. Main</b>
				<div className="space"></div>
				<img src={FrontEndLibraryMain} alt="FrontEndLibraryMain" className="common-img" onClick={() => openModal(FrontEndLibraryMain)} />
				<div className="space"></div>
				<p className='cp'>React Router를 사용하여 라우팅을 처리합니다. useReducer 훅을 사용하여 데이터를 관리하고,
					<br />
					useContect를 사용하여 전역 상태로 데이터를 사용했습니다.
				</p>
				<div className="space2"></div>
				<b className="cbl">2. List, search, CRUD</b>
				<div className="space2"></div>
				<img src={FrontEndLibraryList} alt="FrontEndLibraryList" className="common-img" onClick={() => openModal(FrontEndLibraryList)} />
				<div className='space'></div>
				<p className='cp'>useReducer를 사용하여 로컬 데이터와 Reducer를 초기상태로 설정하여 데이터를 관리하였습니다.<br />
					useRef를 사용하여 사용자 ID관리, 각 데이터 별 CRUD(생성 수정 삭제), 검색이 관리되는 컴퍼넌트들이 있습니다.<br />
					위에서 설명한것에 부연설명을 하자면 React Louter를 사용하여
					useContext를 통해 중간과정 없이 직접 로컬 데이터에 접근할 수 있었습니다.<br /><br />
					검색창은 각 카테고리별로 검색이 가능하며, select option을 통해 카테고리를 골라 sort하여<br />
					관련 검색 리스트들을 출력할 수 있습니다.
				</p>
				<div className='space2'></div>
				<p className='cbl'>3. write</p>
				<img src={FrontEndLibraryWrite} alt="FrontEndLibraryWrite" className="common-img" onClick={() => openModal(FrontEndLibraryWrite)} />
				<div className='space'></div>
				<p className='cp'>useContext를 사용하여 중간 컴포넌트들을 거치지 않고, 새로운 항목을 생성하는 함수를 직접 사용할 수 있게 제작되었습니다.<br />
					폼 검증을 통해 입력된 값을 검증한 후 새로운 항목을 생성합니다.<br />
					입력 필드가 비어있는 경우 경고 메시지를 표시하고, 확인 후 새로운 항목을 생성하여 상태를 초기화합니다.</p>
				<div className='space'></div>
				<div className='space2'></div>
				<button onClick={handleBackToList} className="turn_list_btn">목록으로</button>
				<div className='space'></div>
				<div className='space2'></div>
				<div className='alphaLine'></div>
				{previousProject && (
					<div className="previous_wrap">
						<p className='cp'>이전글</p>
						<div className='space2'></div>
						<Link to={`/project-detail/${previousProject.id}`}>
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
						<Link to={`/project-detail/${nextProject.id}`}>
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

export default ProjectDetail4;
