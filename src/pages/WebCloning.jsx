import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS 임포트
import webCloningData from '../data/webCloningData';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import '../common.css';
import './list.css';
import SearchImg from '../assets/search.png';

const WebCloning = () => {
  const [webClonings, setWebClonings] = useState([]);
  const [filteredWebClonings, setFilteredWebClonings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const reversedData = [...webCloningData].reverse(); // 데이터를 역순으로 정렬
    setWebClonings(reversedData);
    setFilteredWebClonings(reversedData);
    AOS.init({ duration: 1000 }); // AOS 초기화 및 옵션 설정
  }, []);

  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredWebClonings(webClonings);
      return;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = webClonings.filter(webCloning => {
      return (
        webCloning.category.toLowerCase().includes(lowercasedSearchTerm) ||
        webCloning.title.toLowerCase().includes(lowercasedSearchTerm) ||
        webCloning.subtitle.toLowerCase().includes(lowercasedSearchTerm) ||
        webCloning.tags.some(tag => tag.toLowerCase().includes(lowercasedSearchTerm)) ||
        webCloning.date.includes(lowercasedSearchTerm) ||
        webCloning.content.toLowerCase().includes(lowercasedSearchTerm)
      );
    });

    setFilteredWebClonings(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleRefresh = () => {
    setSearchTerm('');
    setFilteredWebClonings(webClonings);
  };

  return (
    <div>
      <SubHeader />
      <div className="main_contents">
        <div className='list_contents_wrap'>
          <b className="gradient-bg-horizontal h2 mtfont list_title" onClick={handleRefresh} style={{ cursor: 'pointer' }}>WebCloning List</b>
          <div className="filters">
            <button
              className={`filter-button active`}
              onClick={handleRefresh}
              data-aos="fade-down" // AOS 속성 추가
            >
              All
            </button>
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
          {filteredWebClonings.length > 0 ? (
            <div className="project_grid">
              {filteredWebClonings.map((webCloning) => (
                <div key={webCloning.id} className="project_card" data-aos="fade-up">
                  <Link to={`/webcloning-detail/${webCloning.id}`}>
                    <img src={webCloning.image} alt={webCloning.title} className="project_image" />
                  </Link>
                  <div className="project_info">
                    <Link to={`/webcloning-detail/${webCloning.id}`}>
                      <h3>{webCloning.title}</h3>
                    </Link>
                    <Link to={`/webcloning-detail/${webCloning.id}`}>
                      <p>{webCloning.subtitle}</p>
                    </Link>
                    <div className="tags">
                      {webCloning.tags.map((tag, index) => (
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

export default WebCloning;
