import { useState } from 'react'
import { createPortal } from 'react-dom'
import { HEURISTICS } from '../data/questions'
import styles from './TopScreen.module.css'

export default function TopScreen({ onStart }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>Nielsen's 10 Heuristics</div>
        <h1 className={styles.title}>ヒューリスティクス<br />10本ノック</h1>
        <p className={styles.description}>
          実際のUIシナリオを見て、<br />
          ニールセンの10原則のどれに該当・違反しているかを<br />
          10択から当てよう。
        </p>
        <div className={styles.meta}>
          <span>全10問</span>
          <span className={styles.dot} />
          <span>Good / Bad 各5問</span>
          <span className={styles.dot} />
          <span>ランダム出題</span>
        </div>
        <button className={styles.startBtn} onClick={onStart}>
          クイズを始める
        </button>
        <button className={styles.hintBtn} onClick={() => setShowModal(true)}>
          ニールセンの10原則とは？
        </button>
      </div>

      {showModal && createPortal(
        <div className={styles.overlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>ニールセンの10原則</h2>
              <button className={styles.closeBtn} onClick={() => setShowModal(false)}>✕</button>
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
                    <span className={styles.hItemNum}>{h.id}</span>
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
      , document.body)}
    </div>
  )
}
