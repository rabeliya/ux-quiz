import { createPortal } from 'react-dom'
import { HEURISTICS } from '../data/questions'
import styles from './HeuristicsModal.module.css'

export default function HeuristicsModal({ onClose }) {
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>ニールセンの10原則</h2>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalSummary}>
            <p>インタラクションデザインにおける Jakob Nielsen の10の一般原則。広範な経験則であり、特定のユーザビリティガイドラインではないため「ヒューリスティクス」と呼ばれる。</p>
            <a
              href="https://www.nngroup.com/articles/ten-usability-heuristics/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              nngroup.com — 10 Usability Heuristics ↗
            </a>
          </div>
          {HEURISTICS.map(h => (
            <div key={h.id} className={styles.hItem}>
              <div className={styles.hItemHeader}>
                <span className={styles.hItemNum}>原則{h.id}</span>
                <div className={styles.hItemNames}>
                  <span className={styles.hItemName}>{h.name}</span>
                  <span className={styles.hItemEn}>{h.en}</span>
                </div>
              </div>
              <p className={styles.hItemDesc}>{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  , document.body)
}
