import React from 'react';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import '../common.css';
import './Contact.css';
import Myprofile from '../assets/myprofile.png'; // 프로필 이미지 경로
import KakaoIcon from '../assets/kakaoColor.png'; // 아이콘 이미지 경로를 적절히 수정
import PhoneIcon from '../assets/callColor.png';
import EmailIcon from '../assets/EmailColor.png';
import DiscordIcon from '../assets/discordColor.png';

const Contact = () => {
    return (
        <div>
            <SubHeader />
            <div className='main_contents contact_page flex'>
                <aside className='about_my_name contact_m' >
                    <div className='profile_radio'>
                        <img src={Myprofile} />
                    </div>
                    <div>
                        <b className='h3 my_name'>구본일</b>
                        <div className='flex location_wrap'>
                            <span className='flex'>발전하고 공부하는<br />좋은 동료가 되겠습니다.</span>
                        </div>
                        <p className='font-purple-white my_job'>Web Publisher</p>
                        <p className='font-purple-white my_job'>Front End Developer </p>
                    </div>
                </aside>
                <div className='contact_info_section'>
                    <div className='contact_header'>
                        <b className='contact_title gradient-bg-horizontal'>HELLO! My name is 구본일</b>
                        <p className='contact_intro'>저와 함께 일하거나 궁금한 점이 있으신가요?
                        <br />
                        아래의 다양한 방법으로 연락하실 수 있습니다.</p>
                    </div>
                    <div className='contact_cards' data-aos="fade-up">
                        <div className='contact_card' >
                            <img src={KakaoIcon} alt="Kakao Talk" />
                            <div>
                                <h3>카카오톡</h3>
                                <p>카카오톡을 통해 실시간으로<br/>문의하실 수 있습니다.</p>
                                <a href="https://open.kakao.com/me/SauserBIN" target="_blank" className='contact_link'>OPEN KAKAO TALK</a>
                            </div>
                        </div>
                        <div className='contact_card'  data-aos-delay="200">
                            <img src={PhoneIcon} alt="Phone" />
                            <div>
                                <h3>전화</h3>
                                <p>전화로 직접 문의하실 수 있습니다.</p>
                                <p className='contact_info'>010-4102-7539</p>
                            </div>
                        </div>
                        <div className='contact_card'  data-aos-delay="300">
                            <img src={EmailIcon} alt="Email" />
                            <div>
                                <h3>이메일</h3>
                                <p>이메일로 문의하실 수 있습니다.</p>
                                <p className='contact_info'>gubonil13@naver.com</p>
                            </div>
                        </div>
                        <div className='contact_card'  data-aos-delay="400">
                            <img src={DiscordIcon} alt="Discord" />
                            <div>
                                <h3>Discord</h3>
                                <p>Discord를 통해
                                    <br />
                                    문의하실 수 있습니다.
                                </p>
                                <a className='contact_link' href="https://discord.gg/kkhW77bycw">Discord ID: sauserbin</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
