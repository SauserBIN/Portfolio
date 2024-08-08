import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectData from '../data/projectData';
import webCloningData from '../data/webCloningData';
import './header.css';

const Header = () => {
    const [latestProjects, setLatestProjects] = useState([]);

    useEffect(() => {
        // Combine and sort project data by id (descending)
        const allProjects = [...projectData, ...webCloningData];
        allProjects.sort((a, b) => b.id - a.id);

        // Get the latest 2 projects
        setLatestProjects(allProjects.slice(0, 2));
    }, []);

    return (
        <>
            <div className='home_page'>
                <div className='main_contents home_page_wrap'>
                    <p className="home_top_p gradient-bg-horizontal" data-aos="fade-down">FRONT  END  &  Web  Publisher</p>
                    <div className='pr' data-aos="fade-up">
                        <p className="home_top_p2 gradient-bg-vertical">PORTFOLIO</p>
                        <p className="home_top_p2alpha gradient-bg-vertical">PORTFOLIO</p>
                    </div>
                    <div className='pr margin_down' data-aos="fade-up" data-aos-delay="200">
                        <p className="home_top_p2 gradient-bg-vertical">WEB DEVELOPER <span>{'</>'}</span></p>
                        <p className="home_top_p2alpha gradient-bg-vertical">WEB DEVELOPER <span>{'</>'}</span></p>
                    </div>
                    <div className='home_bottom flex' data-aos="fade-up" data-aos-delay="400">
                        <div className='home_bottom_left'>
                            <div className='home_bottom_p_wrap'>
                                <p>저의 포트폴리오에 방문해 주셔서 감사합니다.</p>
                                <p>협업을 통해 더 나은 결과를 만들어내는 것을 즐기는 주니어 프론트엔드 개발자입니다.</p>
                                <p>새로운 기술을 배우고, 성장하는 것을 즐깁니다.</p>
                            </div>
                            <div className='home_btn_wrap flex'>
                                <Link to="/about" className='main_button'>
                                    <div className='icon_about_me'></div>
                                    <p>About me</p>
                                </Link>
                                <Link to="/project" className='main_button'>
                                    <div className='icon_my_project'></div>
                                    <p>My Project</p>
                                </Link>
                                <Link to="/contact" className='main_button'>
                                    <div className='icon_contact'></div>
                                    <p>Contact</p>
                                </Link>
                            </div>
                        </div>
                        <aside className='home_bottom_right flex' data-aos="fade-left" data-aos-delay="600">
                            <p>new post</p>
                            {latestProjects.map((project, index) => (
                                <Link 
                                    key={index} 
                                    to={project.category === 'MainProject' ? `/project-detail/${project.id}` : `/webcloning-detail/${project.id}`} 
                                    className='project_box flex'
                                    data-aos="zoom-in"
                                    data-aos-delay={(index + 1) * 200}
                                >
                                    <div className='project_box_inner flex'>
                                        <p className='b14'>[{project.category}] <span>{project.title}</span></p>
                                        <p className='ellipsis'>{project.content}</p>
                                        <p className='time'>{project.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
