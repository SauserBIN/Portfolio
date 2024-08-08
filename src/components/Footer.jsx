import React from 'react';
import './Footer.css';
import GithubImg from '../assets/gitHub.png'
import DiscordImg from '../assets/discord.png'
import Email from '../assets/Email.png'
import Call from '../assets/call.png'

const Footer = () => {
	return (
		<footer className="main_contents">
			<div className="footer-content flex">
				<div className="footer-icons flex">
					<a href="https://github.com/SauserBIN/portfolio" target="_blank">
						<img src={GithubImg} alt="gitHubImage" />
					</a>
					<a href="https://discord.gg/kkhW77bycw" target="_blank">
						<img src={DiscordImg} alt="discordImage" />
					</a>
				</div>
				<div className="footer-contact">
					<p><img src={Email} alt="" /> | gubonil13@naver.com</p>
					<p><img src={Call} alt="" /> | 010-4102-7539</p>
				</div>
				<div className="footer-text">
					<p className='alphaFont'>이미지 저작권은 오픈소스 라이선스를 사용중이며, 게시물은 상업적 목적이 아닌 포트폴리오 목적으로 사용됩니다.</p>
					<p className='alphaFont'>Copyright © Bonil Gu</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
