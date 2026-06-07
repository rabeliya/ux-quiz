import styles from './TopScreen.module.css'

export default function TopScreen({ onStart, onLearn }) {
  return (
    <div className={styles.container}>

      {/* モバイル用装飾レイヤー（縦長 941×1672） */}
      <svg
        className={styles.decor}
        viewBox="0 0 941 1672"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradIndigo" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#32398A" stopOpacity="1"/>
            <stop offset="100%" stopColor="#434EB6" stopOpacity="0.97"/>
          </linearGradient>
          <linearGradient id="gradGray" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#9C9EA4" stopOpacity="1"/>
            <stop offset="100%" stopColor="#D0D2DA" stopOpacity="0.97"/>
          </linearGradient>
          <linearGradient id="gradTerracotta" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#9B5446" stopOpacity="1"/>
            <stop offset="100%" stopColor="#CE705D" stopOpacity="0.97"/>
          </linearGradient>
          <linearGradient id="gradMustard" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#AB8C53" stopOpacity="1"/>
            <stop offset="100%" stopColor="#E4BA6E" stopOpacity="0.97"/>
          </linearGradient>
          <linearGradient id="gradLineGray" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#80828F" stopOpacity="1"/>
            <stop offset="100%" stopColor="#ABADBE" stopOpacity="0.97"/>
          </linearGradient>
          <clipPath id="topDecorClip">
            <rect width="941" height="1672"/>
          </clipPath>
          <filter id="grainOnShapes" x="0" y="0" width="941" height="1672" filterUnits="userSpaceOnUse">
            <feImage href="/grain.png" x="0" y="0" width="512" height="512" result="g1"/>
            <feTile in="g1" result="tiled1"/>
            <feColorMatrix in="tiled1" type="saturate" values="0" result="grain1"/>
            <feImage href="/grain.png" x="256" y="256" width="512" height="512" result="g2"/>
            <feTile in="g2" result="tiled2"/>
            <feColorMatrix in="tiled2" type="saturate" values="0" result="grain2"/>
            <feBlend in="grain1" in2="grain2" mode="multiply" result="combinedGrain"/>
            <feBlend in="combinedGrain" in2="SourceGraphic" mode="color-dodge" result="dodged"/>
            <feComposite in="dodged" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.6" k3="0.4" k4="0" result="mixed"/>
            <feComposite in="mixed" in2="SourceGraphic" operator="in"/>
          </filter>
        </defs>
        <g clipPath="url(#topDecorClip)" filter="url(#grainOnShapes)">
          {/* コーナーアンカー（3隅） */}
          <path d="M197 1672C197 1563.75 109.248 1476 1 1476C-107.248 1476 -195 1563.75 -195 1672" stroke="url(#gradGray)" strokeWidth="80"/>
          <path d="M1074 1567C1074 1489.68 1011.32 1427 934 1427C856.68 1427 794 1489.68 794 1567" stroke="url(#gradIndigo)" strokeWidth="4" strokeDasharray="17 17"/>
          <circle r="209" fill="url(#gradIndigo)"/>
          {/* ドットテクスチャ（左上に視線を集める） */}
          <circle cx="222" cy="136" r="4" fill="url(#gradIndigo)"/>
          <circle cx="222" cy="164" r="4" fill="url(#gradIndigo)"/>
          <circle cx="222" cy="192" r="4" fill="url(#gradIndigo)"/>
          <circle cx="222" cy="220" r="4" fill="url(#gradIndigo)"/>
          <circle cx="250" cy="136" r="4" fill="url(#gradIndigo)"/>
          <circle cx="250" cy="164" r="4" fill="url(#gradIndigo)"/>
          <circle cx="250" cy="192" r="4" fill="url(#gradIndigo)"/>
          <circle cx="250" cy="220" r="4" fill="url(#gradIndigo)"/>
          <circle cx="278" cy="136" r="4" fill="url(#gradIndigo)"/>
          <circle cx="278" cy="164" r="4" fill="url(#gradIndigo)"/>
          <circle cx="278" cy="192" r="4" fill="url(#gradIndigo)"/>
          <circle cx="278" cy="220" r="4" fill="url(#gradIndigo)"/>
          <circle cx="306" cy="136" r="4" fill="url(#gradIndigo)"/>
          <circle cx="306" cy="164" r="4" fill="url(#gradIndigo)"/>
          <circle cx="306" cy="192" r="4" fill="url(#gradIndigo)"/>
          <circle cx="306" cy="220" r="4" fill="url(#gradIndigo)"/>
          {/* 上部マスタード正方形（タイトル上のビート） */}
          <rect x="540" y="308" width="56" height="56" fill="url(#gradMustard)"/>
          {/* 右上4要素：右上アンカー(941,78)から1.2倍に拡大 */}
          <g transform="translate(941 78) scale(1.2) translate(-941 -78)">
            <line x1="706" y1="78" x2="916" y2="78" stroke="url(#gradLineGray)" strokeWidth="2.5"/>
            <path d="M811 136C753.01 136 706 183.01 706 241H916C916 183.01 868.99 136 811 136Z" fill="url(#gradGray)"/>
            <circle cx="688" cy="118" r="25" fill="url(#gradTerracotta)"/>
          </g>
          {/* 暖色アクセント（下部） */}
          <circle cx="437" cy="1548" r="11" fill="url(#gradTerracotta)"/>
          <path d="M315.5 1470L367 1559H264L315.5 1470Z" fill="url(#gradMustard)"/>
        </g>
        <g transform="translate(941 78) scale(1.2) translate(-941 -78)">
          <line x1="786" y1="267" x2="996" y2="267" stroke="#ABADBE" strokeWidth="2.5"/>
        </g>
      </svg>

      {/* デスクトップ用装飾レイヤー（横長 1440×900） */}
      <svg
        className={styles.decorDesktop}
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="dGradIndigo" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#32398A" stopOpacity="1"/>
            <stop offset="100%" stopColor="#434EB6" stopOpacity="0.97"/>
          </linearGradient>
          <linearGradient id="dGradGray" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#9C9EA4" stopOpacity="1"/>
            <stop offset="100%" stopColor="#D0D2DA" stopOpacity="0.97"/>
          </linearGradient>
          <linearGradient id="dGradTerracotta" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#9B5446" stopOpacity="1"/>
            <stop offset="100%" stopColor="#CE705D" stopOpacity="0.97"/>
          </linearGradient>
          <linearGradient id="dGradMustard" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#AB8C53" stopOpacity="1"/>
            <stop offset="100%" stopColor="#E4BA6E" stopOpacity="0.97"/>
          </linearGradient>
          <linearGradient id="dGradLineGray" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#80828F" stopOpacity="1"/>
            <stop offset="100%" stopColor="#ABADBE" stopOpacity="0.97"/>
          </linearGradient>
          <clipPath id="dTopDecorClip">
            <rect width="1440" height="900"/>
          </clipPath>
          <filter id="dGrainOnShapes" x="0" y="0" width="1440" height="900" filterUnits="userSpaceOnUse">
            <feImage href="/grain.png" x="0" y="0" width="512" height="512" result="g1"/>
            <feTile in="g1" result="tiled1"/>
            <feColorMatrix in="tiled1" type="saturate" values="0" result="grain1"/>
            <feImage href="/grain.png" x="256" y="256" width="512" height="512" result="g2"/>
            <feTile in="g2" result="tiled2"/>
            <feColorMatrix in="tiled2" type="saturate" values="0" result="grain2"/>
            <feBlend in="grain1" in2="grain2" mode="multiply" result="combinedGrain"/>
            <feBlend in="combinedGrain" in2="SourceGraphic" mode="color-dodge" result="dodged"/>
            <feComposite in="dodged" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.6" k3="0.4" k4="0" result="mixed"/>
            <feComposite in="mixed" in2="SourceGraphic" operator="in"/>
          </filter>
        </defs>

        <g clipPath="url(#dTopDecorClip)" filter="url(#dGrainOnShapes)">
          {/* 左上：インディゴ円で視線を集める（アンカー） */}
          <circle r="210" fill="url(#dGradIndigo)"/>
          {/* 4×4 ドットグリッド（左上に視線を集める） */}
          <circle cx="108" cy="148" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="136" cy="148" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="164" cy="148" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="192" cy="148" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="108" cy="176" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="136" cy="176" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="164" cy="176" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="192" cy="176" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="108" cy="204" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="136" cy="204" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="164" cy="204" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="192" cy="204" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="108" cy="232" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="136" cy="232" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="164" cy="232" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="192" cy="232" r="4" fill="url(#dGradIndigo)"/>
          {/* マスタード正方形（タイトル方向へ降りるビート・上へ逃がす） */}
          <rect x="230" y="222" width="52" height="52" fill="url(#dGradMustard)"/>

          {/* 上辺右：テラコッタ円＋グレー半円（1.4倍、右上アンカー） */}
          <g transform="translate(1440 55) scale(1.4) translate(-1340 -75)">
            <circle cx="1010" cy="112" r="22" fill="url(#dGradTerracotta)"/>
            <path d="M1160 75C1102 75 1050 123 1050 185H1270C1270 123 1218 75 1160 75Z" fill="url(#dGradGray)"/>
          </g>

          {/* 左下：グレーアーク（アンカー）＋暖色アクセント */}
          <path d="M196 900C196 791.75 108.25 704 0 704C-108.25 704 -196 791.75 -196 900" stroke="url(#dGradGray)" strokeWidth="80"/>
          <circle cx="235" cy="720" r="16" fill="url(#dGradTerracotta)"/>

          {/* 右下：破線アーク＋マスタード三角（Z下辺の終点を強調） */}
          <path d="M1580 900C1580 822.68 1517.32 760 1440 760C1362.68 760 1300 822.68 1300 900" stroke="url(#dGradIndigo)" strokeWidth="4" strokeDasharray="17 17"/>
          <path d="M1232 670L1284 759H1180L1232 670Z" fill="url(#dGradMustard)"/>
        </g>
        {/* グレー半円の下：細い横線（テクスチャなし） */}
        <g transform="translate(1440 55) scale(1.4) translate(-1340 -75)">
          <line x1="1130" y1="205" x2="1340" y2="205" stroke="#ABADBE" strokeWidth="2.5" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>

      <div className={styles.content}>
        <div className={styles.badge}>Nielsen's 10 Heuristics</div>
        <h1 className={styles.title}><span className={styles.titleNoBreak}>ヒューリスティクス</span><br className={styles.titleBr} />10本ノック</h1>
        <p className={styles.description}>
          UIシナリオを見て、ニールセンの10原則のどれに<br />
          該当・違反しているかを当てよう。
        </p>
        <div className={styles.levels}>
          <button className={styles.levelBtn} onClick={() => onStart('normal')}>
            <span className={styles.levelInner}>
              <span className={styles.levelIcon}>
                <svg width="40" height="40" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="38" cy="38" r="37.25" stroke="#D9D9D9" strokeWidth="2.5"/>
                  <path d="M23 38.0001H53M39.9963 25L52.9964 38.0001L39.9963 51.0001" stroke="white" strokeWidth="2.5"/>
                </svg>
              </span>
              <span className={styles.levelText}>
                <span className={styles.levelName}>通常モード</span>
                <span className={styles.levelDesc}>原則を1つ選ぶ</span>
              </span>
            </span>
          </button>
          <button className={`${styles.levelBtn} ${styles.levelAdvanced}`} onClick={() => onStart('advanced')}>
            <span className={styles.levelInner}>
              <span className={styles.levelIcon}>
                <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="8" cy="8" r="3.5" fill="#434EB6"/>
                  <circle cx="28" cy="8" r="3.5" fill="#434EB6"/>
                  <circle cx="8" cy="28" r="3.5" fill="#434EB6"/>
                  <circle cx="28" cy="28" r="3.5" fill="#434EB6"/>
                </svg>
              </span>
              <span className={styles.levelText}>
                <span className={styles.levelName}>上級モード</span>
                <span className={styles.levelDesc}>該当する原則を2つ選ぶ</span>
              </span>
            </span>
          </button>
        </div>
        <button className={styles.hintBtn} onClick={onLearn}>
          ニールセンの10原則とは？
        </button>
      </div>
    </div>
  )
}
