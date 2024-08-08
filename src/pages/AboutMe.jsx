import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import '../common.css';
import './AboutMe.css';
import Myprofile from '../assets/myprofile.png';
import lotationImg from '../assets/location.png';
import AboutHumana from '../assets/aboutHuman.png';
import ProjectImg from '../assets/myProjectColor.png';
import SkillImg from '../assets/skillColor.png';
import EducationImg from '../assets/EducationColor.png';

const AboutMe = () => {
    const navigate = useNavigate();

    const goToProjectPage = () => {
        navigate('/project');
    };

    return (
        <div>
            <SubHeader />
            <div className='main_contents pr flex'>
                <aside className='about_my_name' data-aos="fade-right">
                    <div className='profile_radio'>
                        <img src={Myprofile} />
                    </div>
                    <div>
                        <b className='h3 my_name'>구본일</b>
                        <div className='flex location_wrap'>
                            <span className='flex'><img src={lotationImg} alt="location" />서울시 강북구 거주</span>
                        </div>
                        <p className='font-purple-white my_job'>Web Publisher</p>
                        <p className='font-purple-white my_job'>Front End Developer </p>
                    </div>
                </aside>
                <div className='about_my_story_wrap' data-aos="fade-left">
                    <b className='about_title mtfont h2 gradient-bg-horizontal'>HELLO!</b>
                    <div className='about_title_introduce'>
                        <span><img src={AboutHumana} alt="about_human" /> 안녕하세요! 저는 구본일 프론트엔드 주니어 개발자 구본일 입니다.</span>
                        <p>협업과 공부로 더 나은 사용자 경험을 만드는 <b className='mtfont gradient-bg-horizontal'>Front End</b> 개발자가 되고자 합니다.</p>
                    </div>
                    <div className='font-purple-white'>
                        <p className='line16'>
                            팀 프로젝트를 통해 협력과 소통의 중요성을 깨닫고, 이를 바탕으로 사용자 경험 개선과
                            <br />
                            어려움 극복에 기여하고자 합니다. 앞으로도 긍정적인 협업 문화를 조성하는 데 힘쓰겠습니다!
                        </p>
                        <p className='line16'>
                            사용자들에게 관심을 끌고 좋은 경험을 줄 수 있는 기능을 구현하는 것을 목표로 하고 있습니다.
                            <br />
                            지속적으로 새로운 기술을 배우고 발전하여 더 나은 사용자 경험을 제공하겠습니다.
                        </p>
                        <div className='project_btn' onClick={goToProjectPage} style={{ cursor: 'pointer' }}>
                            <img src={ProjectImg} alt="ProjectColorImage" />Project 매뉴로 이동하기
                        </div>
                    </div>
                    <div className='skill_box' data-aos="fade-up">
                        <span className='mid_title skill'>
                            <img src={SkillImg} alt="skill_icon" />
                            Skill
                        </span>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>React</span>
                            <span className='tag-button'>Vite</span>
                            <span className='tag-button'>javaScript</span>
                        </div>
                        <p className='write_size'>
                            Context API, Zustand, Redux Toolkit을 통한 전역 상태 관리 방법을 공부중에 있습니다.
                        </p>
                        <p className='write_size'>
                            useEffect를 활용하여 DOM 업데이트, 데이터 페칭, 구독 설정, 타이머 설정 등의
                            <br />다양한 부수효과를 효율적으로 관리할 수 있습니다.
                        </p>
                        <p className='write_size'>
                            useMemo, useCallback 훅을 사용하여 불필요한 랜더링을 방지하고
                            <br />
                            컴포넌트의 성능을 최적화할 수 있습니다.
                        </p>
                        <p className='write_size'>
                            npm 라이브러리의 Formik과 Yup을 활용하여 폼 상태 관리와 유효성 검사를
                            <br />
                            간편하게 처리하는 방법을 학습하여, 코드의 가독성과 유지보수성을 향상시킬 수 있습니다.
                        </p>
                        <p className='write_size'>
                            Axios를 사용하여 get, post, 에러처리, 요청취소 등을 수행할 수 있습니다.
                        </p>
                        <p className='write_size'>
                            컴포넌트 분리에 관심이 많으며 재사용 가능하도록 추상화하여
                            <br />
                            보일러플레이트를 최소화시키려고 노력합니다.
                        </p>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>css</span>
                            <span className='tag-button'>Styled-components</span>
                        </div>
                        <p className='write_size'>
                            반응형 웹 디자인에 능숙하며, 주로 미디어 쿼리를 사용하여 max-width 기준으로
                            <br />
                            분기점을 설정해 작업합니다.
                        </p>
                        <p className='write_size'>
                            동적 스타일링을 활용하여 사용자에게 직관적이고 우수한 사용자 경험(UX)을
                            <br />
                            제공하는 방법을 연구합니다.
                        </p>
                        <p className='write_size'>
                            다양한 CSS 레이아웃 및 스타일링 기술에 능숙하며, CSS 선택자와 가상 선택자를 활용하여
                            <br />
                            규격이나 사이즈를 정확하게 맞추는 작업을 잘 수행할 수 있습니다.
                        </p>
                        <p className='write_size'>
                            styled-components를 사용하여 컴포넌트 기반의 스타일링도 공부중에 있습니다.
                        </p>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>Git</span>
                            <span className='tag-button'>Git hub</span>
                        </div>
                        <p className='write_size'>
                            Branch, Merge등 다양한 브랜치 전략을 이해하고 코드베이스를 안정적으로 유지할 수 있습니다.
                        </p>
                        <p className='write_size'>
                            GitHub를 활용하여 코드 저장소를 관리하고, Pull Request 및 코드 리뷰를 통한 협업 경험이 있습니다.
                        </p>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>Adobe PhotoShop</span>
                            <span className='tag-button'>Adobe illustrator</span>
                            <span className='tag-button'>Figma</span>
                        </div>
                        <p className='write_size'>
                            일러스트를 활용하여 간단한 아이콘, 반복 형태, 벡터 이미지를 다루는 것들에 대한 지식이 있습니다.
                        </p>
                        <p className='write_size'>
                            포토샵을 활용하여 색상 조정, 광원 효과, 이미지 보정, 합성 및 편집 작업을 수행할 수 있습니다.
                        </p>
                        <p className='write_size'>
                            Figma를 활용하여 웹 표준과 디자인 가이드를 수립, 완성도, 사용자 편의성을 향상시킬 수 있습니다.
                        </p>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>MySQL</span>
                        </div>
                        <p className='write_size'>
                            Express와 MySQL 데이터베이스 연결 및 CRUD 연산 구현 경험이 있습니다.
                        </p>
                        <p className='write_size'>
                            PHP를 사용하여 작성하는 부분에 대해서는 아직 조금더 공부중에 있습니다.
                        </p>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>Express</span>
                        </div>
                        <p className='write_size'>
                            Express.js와 EJS를 include 구문을 사용하여 공통 컴포넌트, 레이아웃을 재사용 할 수 있습니다.
                        </p>
                        <p className='write_size'>
                            서버 데이터를 받아 EJS 템플릿에 전달하고, 클라이언트에 동적 페이지를 제공할 수 있습니다.
                        </p>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>ThreeJs</span>
                        </div>
                        <p className='write_size'>
                            3D 물체를 랜더링 하고, 웹 페이지 내에서 빛 효과, 카메라 각도 및 동적으로 간단하게 움직일 수 있습니다.
                        </p>
                        <p className='write_size'>
                            Blender 프로그램을 활용하여 GLTF파일에 애니메이션 적용 후 웹에 적용할 수 있습니다.
                        </p>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>Bootstrap</span>
                        </div>
                        <p className='write_size'>
                            Bootstrap 프레임워크를 활용하여 브라우저 호환성에 맞게 빠른 디자인이 가능하고,
                        </p>
                        <p className='write_size'>
                            효율적인 제작을 할 수 있습니다. CSS 변수 조정으로 커스텀도 가능합니다.
                        </p>
                        <div className='tag-button_wrap'>
                            <span className='tag-button'>관심있는 기능</span>
                        </div>
                        <p className='write_size'>
                            Type Script를 공부하는중입니다.
                        </p>
                    </div>
                    <div className='education_box' data-aos="fade-up">
                        <span className='mid_title skill'>
                            <img src={EducationImg} alt="EducationImg" />
                            Education
                        </span>
                        <span className='tag-button'>그린 온라인 캠프 - 웹퍼블리싱 & 웹개발을 위한 코딩 기초</span>
                        <span className='tag-button'>그린 컴퓨터 아카데미 노원 - WebGL(3D API)을 활용한 Motion UI 프론트엔드 웹앱개발자 양성과정 </span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe;
