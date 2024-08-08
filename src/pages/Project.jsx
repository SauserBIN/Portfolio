import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS 임포트
import projectData from '../data/projectData';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import '../common.css';
import './list.css';
import SearchImg from '../assets/search.png'

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const reversedData = [...projectData].reverse(); // 데이터를 역순으로 정렬
    setProjects(reversedData);
    setFilteredProjects(reversedData);
    AOS.init({ duration: 1000 }); // AOS 초기화 및 옵션 설정
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSearchTerm('');  // 검색어 초기화
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else if (filter === '반응형') {
      setFilteredProjects(projects.filter(project => project.tags.includes(filter)));
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  };

  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredProjects(projects);
      return;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = projects.filter(project => {
      return (
        project.category.toLowerCase().includes(lowercasedSearchTerm) ||
        project.title.toLowerCase().includes(lowercasedSearchTerm) ||
        project.subtitle.toLowerCase().includes(lowercasedSearchTerm) ||
        project.tags.some(tag => tag.toLowerCase().includes(lowercasedSearchTerm)) ||
        project.date.includes(lowercasedSearchTerm) ||
        project.content.toLowerCase().includes(lowercasedSearchTerm)
      );
    });

    setFilteredProjects(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleRefresh = () => {
    setSearchTerm('');
    setActiveFilter('All');
    setFilteredProjects(projects);
  };

  return (
    <div>
      <SubHeader />
      <div className="main_contents">
        <div className='list_contents_wrap'>
          <b className="gradient-bg-horizontal h2 mtfont" onClick={handleRefresh} style={{ cursor: 'pointer' }}>My Project List</b>
          <div className="filters" data-aos="fade-down">
            {['All', 'MainProject', 'ToyProject', '반응형'].map(filter => (
              <button 
                key={filter} 
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
            <div className="search-container" data-aos="fade-down">
              <div className="search_wrap flex">
                <span className="search-label">통합검색</span>
                <div className="search-input-wrapper">
                  <input 
                    type="text" 
                    placeholder="검색어를 입력해주세요..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="search-input"
                  />
                  <button onClick={handleSearch} className="search-button"><img src={SearchImg} alt="search_icon" /></button>
                </div>
              </div>
            </div>
          </div>
          {filteredProjects.length > 0 ? (
            <div className="project_grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="project_card" data-aos="fade-up">
                  <Link to={`/project-detail/${project.id}`}>
                    <img src={project.image} alt={project.title} className="project_image" />
                  </Link>
                  <div className="project_info">
                    <Link to={`/project-detail/${project.id}`}>
                      <h3>{project.title}</h3>
                    </Link>
                    <Link to={`/project-detail/${project.id}`}>
                      <p>{project.subtitle}</p>
                    </Link>
                    <div className="tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="detail-button">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              검색 결과가 없습니다. <br />
              <span className="no-results-suggestion">다시 검색어를 입력해주세요.</span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
