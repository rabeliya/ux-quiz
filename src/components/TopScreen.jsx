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
          <path d="M197 1595C197 1486.75 109.248 1399 1 1399C-107.248 1399 -195 1486.75 -195 1595" stroke="url(#gradGray)" strokeWidth="80"/>
          <path d="M1074 1487C1074 1409.68 1011.32 1347 934 1347C856.68 1347 794 1409.68 794 1487" stroke="url(#gradIndigo)" strokeWidth="4" strokeDasharray="17 17"/>
          <circle r="209" fill="url(#gradIndigo)"/>
          <circle cx="627" cy="82" r="25" fill="url(#gradTerracotta)"/>
          <circle cx="437" cy="1548" r="11" fill="url(#gradTerracotta)"/>
          <circle cx="898" cy="255" r="8" fill="url(#gradGray)"/>
          <circle cx="898" cy="279" r="8" fill="url(#gradGray)"/>
          <circle cx="898" cy="303" r="8" fill="url(#gradGray)"/>
          <circle cx="898" cy="327" r="8" fill="url(#gradGray)"/>
          <circle cx="898" cy="351" r="8" fill="url(#gradGray)"/>
          <circle cx="898" cy="375" r="8" fill="url(#gradGray)"/>
          <circle cx="898" cy="399" r="8" fill="url(#gradGray)"/>
          <circle cx="898" cy="423" r="8" fill="url(#gradGray)"/>
          <circle cx="898" cy="447" r="8" fill="url(#gradGray)"/>
          <circle cx="65" cy="1543" r="6" fill="url(#gradIndigo)"/>
          <circle cx="65" cy="1567" r="6" fill="url(#gradIndigo)"/>
          <circle cx="65" cy="1591" r="6" fill="url(#gradIndigo)"/>
          <circle cx="65" cy="1615" r="6" fill="url(#gradIndigo)"/>
          <path d="M811 76C753.01 76 706 123.01 706 181H916C916 123.01 868.99 76 811 76Z" fill="url(#gradGray)"/>
          <path d="M714 247C656.01 247 609 294.01 609 352H819C819 294.01 771.99 247 714 247Z" fill="url(#gradIndigo)"/>
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
          <circle cx="822" cy="1596" r="4" fill="url(#gradIndigo)"/>
          <circle cx="822" cy="1624" r="4" fill="url(#gradIndigo)"/>
          <circle cx="822" cy="1652" r="4" fill="url(#gradIndigo)"/>
          <circle cx="850" cy="1596" r="4" fill="url(#gradIndigo)"/>
          <circle cx="850" cy="1624" r="4" fill="url(#gradIndigo)"/>
          <circle cx="850" cy="1652" r="4" fill="url(#gradIndigo)"/>
          <circle cx="878" cy="1596" r="4" fill="url(#gradIndigo)"/>
          <circle cx="878" cy="1624" r="4" fill="url(#gradIndigo)"/>
          <circle cx="878" cy="1652" r="4" fill="url(#gradIndigo)"/>
          <circle cx="906" cy="1596" r="4" fill="url(#gradIndigo)"/>
          <circle cx="906" cy="1624" r="4" fill="url(#gradIndigo)"/>
          <circle cx="906" cy="1652" r="4" fill="url(#gradIndigo)"/>
          <rect x="195" y="351" width="56" height="56" fill="url(#gradMustard)"/>
          <rect x="615" y="1461" width="143" height="143" fill="url(#gradIndigo)"/>
          <line x1="160.512" y1="329.309" x2="24.5117" y2="486.31" stroke="url(#gradIndigo)" strokeWidth="4"/>
          <line x1="304" y1="65.5" x2="470" y2="65.5" stroke="url(#gradLineGray)" strokeWidth="3"/>
          <path d="M315.5 1470L367 1559H264L315.5 1470Z" fill="url(#gradMustard)"/>
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
          {/* ===== 左クラスター ===== */}
          {/* 左上 1/4円 */}
          <circle r="210" fill="url(#dGradIndigo)"/>
          {/* 上部水平線 */}
          <line x1="285" y1="62" x2="462" y2="62" stroke="url(#dGradLineGray)" strokeWidth="3"/>
          {/* 4×4 ドットグリッド */}
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
          {/* 斜め線 */}
          <line x1="162" y1="308" x2="26" y2="465" stroke="url(#dGradIndigo)" strokeWidth="4"/>
          {/* マスタード正方形 */}
          <rect x="210" y="265" width="52" height="52" fill="url(#dGradMustard)"/>

          {/* ===== 右クラスター ===== */}
          {/* テラコッタ円 */}
          <circle cx="880" cy="150" r="22" fill="url(#dGradTerracotta)"/>
          {/* グレードーム */}
          <path d="M1030 110C972 110 920 158 920 220H1140C1140 158 1088 110 1030 110Z" fill="url(#dGradGray)"/>
          {/* グレー縦ドット列 9点 */}
          <circle cx="1415" cy="320" r="8" fill="url(#dGradGray)"/>
          <circle cx="1415" cy="344" r="8" fill="url(#dGradGray)"/>
          <circle cx="1415" cy="368" r="8" fill="url(#dGradGray)"/>
          <circle cx="1415" cy="392" r="8" fill="url(#dGradGray)"/>
          <circle cx="1415" cy="416" r="8" fill="url(#dGradGray)"/>
          <circle cx="1415" cy="440" r="8" fill="url(#dGradGray)"/>
          <circle cx="1415" cy="464" r="8" fill="url(#dGradGray)"/>
          <circle cx="1415" cy="488" r="8" fill="url(#dGradGray)"/>
          <circle cx="1415" cy="512" r="8" fill="url(#dGradGray)"/>
          {/* インディゴドーム（ドット列の左側） */}
          <path d="M1230 330C1172 330 1120 378 1120 440H1340C1340 378 1288 330 1230 330Z" fill="url(#dGradIndigo)"/>

          {/* ===== 左下クラスター ===== */}
          {/* 太いグレーアーク */}
          <path d="M196 900C196 791.75 108.25 704 0 704C-108.25 704 -196 791.75 -196 900" stroke="url(#dGradGray)" strokeWidth="80"/>
          {/* インディゴ縦ドット列 4点 */}
          <circle cx="58" cy="638" r="6" fill="url(#dGradIndigo)"/>
          <circle cx="58" cy="662" r="6" fill="url(#dGradIndigo)"/>
          <circle cx="58" cy="686" r="6" fill="url(#dGradIndigo)"/>
          <circle cx="58" cy="710" r="6" fill="url(#dGradIndigo)"/>
          {/* マスタード三角形 */}
          <path d="M280 640L332 729H228L280 640Z" fill="url(#dGradMustard)"/>
          {/* テラコッタ小円 */}
          <circle cx="432" cy="716" r="10" fill="url(#dGradTerracotta)"/>

          {/* ===== 右下クラスター ===== */}
          {/* 破線アーク 右下 */}
          <path d="M1580 900C1580 822.68 1517.32 760 1440 760C1362.68 760 1300 822.68 1300 900" stroke="url(#dGradIndigo)" strokeWidth="4" strokeDasharray="17 17"/>
          {/* インディゴ大正方形 */}
          <rect x="1200" y="600" width="135" height="135" fill="url(#dGradIndigo)"/>
          {/* 4×3 ドットグリッド 右下 */}
          <circle cx="1190" cy="748" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1218" cy="748" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1246" cy="748" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1274" cy="748" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1190" cy="776" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1218" cy="776" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1246" cy="776" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1274" cy="776" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1190" cy="804" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1218" cy="804" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1246" cy="804" r="4" fill="url(#dGradIndigo)"/>
          <circle cx="1274" cy="804" r="4" fill="url(#dGradIndigo)"/>
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
