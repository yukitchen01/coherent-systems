import Head from 'next/head';
import Image from 'next/image';
import styles from './about.module.css'; // CSS module for styling

export default function About() {
    return (
    <>
    <Head>
      <title>株式会社コヒーレントシステムズ - 会社概要</title>
          <meta name="description" content="株式会社コヒーレントシステムズの会社概要とメンバー紹介" />
          <meta name="keywords" content="コヒーレント, 会社概要, レーザー技術, 再生可能エネルギー, 宇宙デブリ, 内田 成明, 竹内 清澄" />
          <meta property="og:title" content="株式会社コヒーレントシステムズ - 会社概要" />
          <meta property="og:description" content="株式会社コヒーレントシステムズの会社概要、代表挨拶、研究内容などの詳細情報。" />
    </Head>
    <div className={styles.container}>
        <div className={styles.companyOverview}>
            <h1>Member</h1>
        </div>
      {/* Cards for CEO and CTO */}
      <div className={styles.cardsContainer}>
        {/* CEO Card */}
        <div className={styles.card}>
          <Image
            src="/images/ceo.jpg" // Path to the CEO's picture
            alt="CEO"
            width={200}
            height={200}
            className={styles.cardImage}
          />
          <p>代表取締役 CEO</p>
          <h1>竹内 清澄</h1>
          <h2>(Kiyozumi Takeuchi)</h2>
          <p>慶応義塾大学 経済学部卒 プライム上場企業のマーケティング部長、
            執行役員(営業部長)等を歴任後2020年7月に知財マーケティングの事業化のために起業。
            2022年4月大阪大学と共同研究を開始。
            大学内にレーザープラズマ応用研究所(産学共創A棟501号室)を開所。
            2024年8月より国際戦略経営研究学会会員。
          </p>
        </div>

        {/* CTO Card */}
        <div className={styles.card}>
          <Image
            src="/images/cto.jpg" // Path to the CTO's picture
            alt="CTO"
            width={200}
            height={200}
            className={styles.cardImage}
          />
          <p>取締役 CTO</p>
          <h1>内田 成明</h1>
          <h2>(Nariaki Uchida)</h2>
          <p>大阪大学 工学部・工学研究科修了後、米国ロチェスター大学にて博士号取得。
            レーザー技術総合研究所主任研究員、東京工業大学特任教授、東京大学客員教授、光産業創成大学院大学
            客員教授、大阪大学招聘教授等を歴任。
            2022 年 4 月取締役兼レーザープラズマ応用研究所（大阪大学レーザー科学研究所との産学
            共同研究）所長に就任。現在、河南科技大(Henan university of Science and Technology)、
            材料科学与工程学院 河南省招聘研究員、先进材料研究所客員教授。レーザー学会所属。
            </p>
            {/* <br/>
            <p>主な研究開発分野:</p>
              <li>高出力レーザーの産業応用</li>
              <li>レーザーを用いた避雷技術（レーザー誘雷）</li>
              <li>レーザー干渉技術と機械学習を応用した非破壊検査</li>
              <li>高出力レーザー装置（太陽光励起レーザー装置）の開発</li>
              <li>上記の応用として宇宙太陽光発電衛星+再生可能燃料プラント</li>
              <li>光触媒や放電・プラズマを用いた環境浄化とエネルギ変換技術</li>
              <li>材料科学・工学へのレーザー技術の応用研究</li>
              <li>再生可能燃料の基礎研究(太陽励起レーザー、MgOレーザー還元)</li> */}
        </div>
      </div>

      <br/>
            
      <div className={styles.companyOverview}>
        <h2>Company Profile</h2>
        <section className={styles.section}>
            <p className={styles.title}>会社名</p>
            <p className={styles.content}>株式会社コヒーレントシステムズ</p>
        </section>

        <section className={styles.section}>
            <p className={styles.title}>設立年月日</p>
            <p className={styles.content}>2020年7月(法人番号:0400-01-114430)</p>
        </section>
  
        <section className={styles.section}>
            <p className={styles.title}>代表取締役</p> 
            <p className={styles.content}>竹内 清澄</p>
        </section>
  
        <section className={styles.section}>
            <p className={styles.title}>所在地</p>
            <p className={styles.content}>〒302-0121 茨城県守谷市みずき野2-12-2</p>
        </section>
  
        <section className={styles.section}>
            <p className={styles.title}>研究所</p>
            <p className={styles.content}>河南科技大(Henan university of Science and Technology) 材料科学与工程学院</p>
        </section>
  
        <section className={styles.section}>
            <p className={styles.title}>資本金</p>
            <p className={styles.content}>700万円</p>
        </section>
  
        <section className={styles.section}>
        <p className={styles.title}>事業内容</p>
            <div className={styles.content}>
                <li>
                    レーザー装置及びそれぞれを応用した各種製品の開発並びにその著作権等知的財産の研究，管理，取得，譲渡及び貸与等。
                </li>
                <li>
                    再生可能エネルギーを利用する製品類の開発，並びにその著作権等知的財産の研究，管理，取得，譲渡及び貸与等。
                </li>
            </div>
        </section>
  
        <section className={styles.section}>
        <p className={styles.title}>研究目的</p>
          <p className={styles.content}>
            レーザー光のコヒーレンシーを利用した場合に発現する光と物質の相互作用現象を産業技術に応用し、人類の持続可能性に資する新規産業を創出。
          </p>
        </section>
  
        <section className={styles.section}>
        <p className={styles.title}>研究内容</p> 
        <p className={styles.content}>
            レーザープラズマを利用した”再生可能燃料”の生成と高出力位相共役光発生に関する研究。
        </p>
        </section>
  
        <section className={styles.section}>
        <p className={styles.title}>特許</p>
        <p className={styles.content}>
          特許第6644342号「振動評価装置及び振動評価システム」の専用実施権
        </p>
        </section>
      </div>

        <div className={styles.companyOverview}>
            <h2>Message from CEO</h2>
            <p>企業の存在意義は、企業の生産するあらゆる製品やサービスなどを通して、人間社会
                を豊かにすることにあります。 日本企業は、戦後の日本型経営から21世紀にはグロー
                バルスタンダード化し、米国に先導される形で株主価値の最大化と言う経済的価値の
                追求に軸足を取った形で、 収益性と成長性を高め経済発展を成し遂げてきました。し
                かし、経済発展の裏側で起こっている地球環境など社会的問題の解決は先送りとなっ
                ています。 これらの先送りされた課題に積極的に取り組む必要があると思います。 今
                や企業にとって社会的責任を無視した経営は、支持を得ることは難しいでしょう。
                株主資本主義による短期市場に翻弄されずに、 長期的な視点で社会問題の解決に取り組
                まなければならないと考えます。私たちコヒーレントシステムズは、自社の強みであ
                るレーザー科学や情報工学を駆使し、 長期的な視野で戦略を構築し、社会的課題を解
                決する技術を提供できる、そんな企業を目指しています。
            </p>
        <br/>
        <p className={styles.signature}>株式会社 コヒーレントシステムズ</p>
        <p className={styles.signature}>代表取締役CEO 竹内清澄</p>
        </div>
    </div>
    </>
    );
  }
  
