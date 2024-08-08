import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link 컴포넌트 추가
import ProjectDetailLayout from './ProjectDetailLayout';
import projectData from '../data/projectData'; // 추가할 때 이 부분 주의
import Footer from '../components/Footer';
import Gogungcategory from '../assets/project/teamProject/teamPeriod/gogung_categori.png';
import Gogungcreate from '../assets/project/teamProject/teamPeriod/gogung_create.png';
import Gogunglist from '../assets/project/teamProject/teamPeriod/gogung_list.png';
import Modal from '../components/Modal.jsx'; // 모달 컴포넌트 추가

const ProjectDetail5 = () => {
	const project = projectData.find((p) => p.id === 5);
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
				duration="2024-05-16 ~ 2024-06-17"
				participants="4人 팀 프로젝트"
				skills={project.tags}
				content={project.content}
				involvement={[
					{ label: "디자인", percentage: 25 },
					{ label: "퍼블리싱", percentage: 35 },
					{ label: "기획", percentage: 25 },
					{ label: "개발", percentage: 50 },
				]}
				siteLink="https://juramii.github.io/Team_Period/"
				githubLink="https://github.com/JURAMII/Team_Period"
			/>

			{/* 여기에 로컬로 추가할 내용을 작성하세요 */}
			<div className="main_contents">
				<div className="space2"></div>
				<div className="space2"></div>
				<b className="cb">“Figma”</b>
				<p className="cp">
				레이아웃을 디자인하고, 색상 코드 및 폰트 사이즈 등을 정리하여 프로젝트의 완성도와 속도를 높이기 위해 활용하였습니다.
				</p>
				<div className="space2"></div>
				<b className="cb">“React”</b>
				<div className='space'></div>
				<p className='cp'>
				이번 프로젝트에서는 최신 웹 개발 도구인 Vite를 활용하여 빠르고 효율적인 개발 환경을 구축했습니다.
				<br />
				Vite의 빠른 빌드와 HMR( Hot Module Replacement ) 기능을 사용하여 프로젝트를 진행하였고,
				<br />
				특히 ESM( ECMAScript Modules )를 지원하기 때문에 <span className='impact'>모듈 단위의 코드 작성</span>을 통해 코드의 재사용성과 유지보수성을 높일 수 있었습니다.
				</p>
				<div className='space'></div>
				<p className='cp'>
					저는 컴포넌트 분리에 관심이 많아, 이번 프로젝트에서 <span className='impact'>다양한 컴포넌트를 분리</span>하고, 재사용 할 수 있도록 작업되었습니다.
					<br />
					협업을 통해 각 파트별로 추가되거나 컴퍼넌트에서 요구하는 키값이 다른 경우가 있어서,
					<br />
					사용하는 팀원들에게 코드를 리뷰하며 이해시키고, 유연한 프로젝트 진행이 되었습니다.
				</p>
				<div className="space"></div>
				<p className='cp'>
					다음은 각 컴포넌트에 대한 리뷰와 사용된 React 훅에 대한 설명입니다.
				</p>
				<div className="space2"></div>
				<b className="cbl">1. Main</b>
				<div className="space"></div>
				<img src={Gogungcategory} alt="Gogungcategory" className="common-img" onClick={() => openModal(Gogungcategory)} />
				<div className="space"></div>
				<p className='cp'>
				공지사항, 별빛야행, 달빛기행 글자를 누르면 useParams 훅을 사용하여 현재 URL의 파라미터를 가져와, 해당 카테고리를 활성화 상태로 설정합니다.
				<br />
				카테고리 탭을 클릭 시 동적으로 밑줄을 생성하고, URL 파라미터에 따라 활성화 상태를 변경하여 사용자에게 직관적인 네비게이션을 제공합니다.
				<br />
				useParams를 사용하여 클릭 시 리스트에 게시물들이 출력됩니다.
				</p>
				<div className="space2"></div>
				<b className="cbl">2. CreatePost, EditPost</b>
				<div className="space2"></div>
				<img src={Gogungcreate} alt="Gogungcreate" className="common-img" onClick={() => openModal(Gogungcreate)} />
				<div className='space'></div>
				<p className='cp'>
				새로운 게시글을 작성할 수 있는 폼을 제공하며, 제목, 내용, 작성자의 길이를 검증하여 사용자가 올바르게 입력할 수 있도록 합니다.
				<br />
				입력 값 상태 관리를 useState 훅을 사용하여 항목별 상태관리를 합니다. 여기서 폼 검증 로직이 존재하고,
				<br />
				유효하지 않은 경우 경고 메시지를 표시하고 폼 제출을 중단합니다.
				</p>
				<div className='space2'></div>
				<p className='cbl'>3. notiList, Pagination, Search</p>
				<img src={Gogunglist} alt="Gogunglist" className="common-img" onClick={() => openModal(Gogunglist)} />
				<div className='space'></div>
				<p className='cp'>
				notiList 컴퍼넌트에서는 useState 훅을 사용하여 현재 페이지, 검색어, 필터링된 게시물 등의 상태를 관리하고 출력합니다.
				<br />
				useParams 훅을 사용하여 URL 파라미터를 가져와 해당 카테고리의 게시물을 필터링 하고 있습니다.
				<br />
				Pagination 컴포넌트를 만들어 부모 컴포넌트에서 전달된 데이터 props의 갯수를 계산하여 페이지네이션 기능을 구현하였습니다.
				<br />
				SearchBar 컴포넌트를 사용하여 검색어를 입력하면 상태가 업데이트되고, 검색 버튼을 클릭하거나 엔터 키를 누르면 검색이 실행됩니다.
				<br />
				검색 할 내용 및 제목 등이 없을경우 검색결과가 없다는 페이지를 출력합니다.
				</p>
				<div className='space2'></div>
				<div className='space2'></div>
				<div className='space2'></div>
				<p className='cp'>
				이번 팀 프로젝트를 통해 데이터를 이동시키고, 생성하고, 관리하는 프론트 엔드 개발자의 역할을 깊이 이해할 수 있었습니다.
				<br />
				<br />
				React와 Vite를 활용하여 프론트엔드 개발의 핵심 요소들을 중점적으로 다룰 수 있었을 뿐만 아니라
				<br />
				React 훅과 최신 웹 기술을 활용하여 효율적인 상태 관리와 사용자 경험 최적화를 달성했으며,
				<br />
				URL 파라미터를 활용하여 동적으로 라우팅을 구현함으로써, 사용자 경험을 향상시킬 수 있는 아이디어,
				<br />
				반응형 UI UX디자인에 대한 효율적이고, 사용자 편의성을 위한 디자인들을 직접 만들어보며 
				<br />
				이를 통해 더 나은 웹 애플리케이션을 개발할 수 있는 역량을 키울 수 있었습니다.
				<br />
				<br />
				이번 경험은 향후 프로젝트에서도 큰 도움이 될 것이며, 웹 개발자로서의 기술적 역량과 문제 해결 능력을 향상시키는 데
				<br />
				기여하는 프로젝트가 되었습니다.
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

export default ProjectDetail5;
