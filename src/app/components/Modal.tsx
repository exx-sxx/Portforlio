// src/app/components/Modal.tsx

'use client';

import React from 'react';
import styles from './modal.module.css'; // modal.module.css 불러오기
import pageStyles from '../page.module.css'; // page.module.css도 함께 사용
import { Project } from '@/data/types'; // Project 타입 가져오기

// ✨ Project 인터페이스를 사용하여 prop의 타입을 명확히 정의합니다.
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          &times;
        </button>
        <img src={project.image} alt={project.title} className={styles.modalImage} />
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <p className={styles.modalDescription}>{project.description}</p>
        
        {/* ✨ 상세 내용을 표시하는 새로운 섹션을 추가합니다. */}
        {project.details && (
          <div className={styles.modalDetails}>
            {project.details.map((detail, index) => (
              <p 
                key={index} 
                className={styles.detailItem} 
                dangerouslySetInnerHTML={{ __html: detail }} 
              />
            ))}
          </div>
        )}

        <div className={pageStyles.techStack}>
          {project.techStack.map((tech) => (
            <span key={tech} className={pageStyles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;