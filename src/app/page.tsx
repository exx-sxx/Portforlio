'use client';

import React from 'react';
import styles from './page.module.css';

// 프로젝트 정보 배열
const projects = [
  {
    title: '서비스 기획 프로젝트 A',
    description: '사용자 데이터 분석을 통해 이탈율을 20% 개선한 서비스입니다.',
    techStack: ['Figma', 'Miro', 'Google Analytics'],
    link: '#',
    image: '/images/projectA.jpg',
  },
  {
    title: '서비스 기획 프로젝트 B',
    description: 'A/B 테스트를 통해 신규 기능 도입을 결정한 프로젝트입니다.',
    techStack: ['Zeplin', 'Hotjar', 'SQL'],
    link: '#',
    image: '/images/projectB.jpg',
  },  {
    title: '서비스 기획 프로젝트 C',
    description: 'A/B 테스트를 통해 신규 기능 도입을 결정한 프로젝트입니다.',
    techStack: ['Zeplin', 'Hotjar', 'SQL'],
    link: '#',
    image: '/images/projectB.jpg',
  },  {
    title: '서비스 기획 프로젝트 D',
    description: 'A/B 테스트를 통해 신규 기능 도입을 결정한 프로젝트입니다.',
    techStack: ['Zeplin', 'Hotjar', 'SQL'],
    link: '#',
    image: '/images/projectB.jpg',
  },
];

export default function Home() {
  return (
    <div>
      {/* 고정된 헤더 */}
      <header className={styles.header}>
        <div className={styles.container}>
          {/* 내비게이션 메뉴 */}
          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
             <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* 자기소개 섹션 */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>👋 About Me</h2>
          <div className={styles.aboutMeText}>
            <p>
              안녕하세요, 사용자 행동 데이터를 기반으로 문제를 정의하고 해결하는
              서비스 기획자 안선희입니다.
            </p>
            <p>
              복잡한 데이터를 명확한 인사이트로 바꾸어 사용자와 비즈니스 모두를
              성장시키는 데 기여합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 스킬 섹션 */}
      <section id="skills" className={`${styles.section} ${styles.grayBackground}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>🛠️ My Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3 className={styles.skillTitle}>기획 및 분석</h3>
              <ul className={styles.skillList}>
                <li>- 요구사항 정의 (PRD, Spec)</li>
                <li>- 데이터 기반 의사결정</li>
                <li>- 사용자 인터뷰 및 설문조사</li>
                <li>- A/B 테스트 설계 및 분석</li>
              </ul>
            </div>
            <div className={styles.skillCard}>
              <h3 className={styles.skillTitle}>디자인 및 협업</h3>
              <ul className={styles.skillList}>
                <li>- 와이어프레임 & 프로토타입 (Figma)</li>
                <li>- 사용자 흐름(User Flow) 설계</li>
                <li>- Jira, Confluence, Slack 활용</li>
              </ul>
            </div>
            <div className={styles.skillCard}>
              <h3 className={styles.skillTitle}>기술 이해</h3>
              <ul className={styles.skillList}>
                <li>- SQL (데이터 추출 및 분석)</li>
                <li>- Git (협업 환경 이해)</li>
                <li>- HTML/CSS/React (기초 이해)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>🚀 My Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.techStack}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className={styles.projectLink}>
                    자세히 보기 &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Contact 섹션 추가 */}
      <section id="contact" className={`${styles.section} ${styles.grayBackground}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>✉️ Contact Me</h2>
          <div className={styles.contactInfo}>
            <p className={styles.contactText}>
              제 포트폴리오를 봐주셔서 감사합니다. 협업이나 문의사항이 있다면 아래 연락처로 편하게 연락 주세요!
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:your.email@example.com" className={styles.contactLink}>
                your.email@example.com
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                LinkedIn
              </a>
              {/* GitHub 프로필이 있다면 추가 */}
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}