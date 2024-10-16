import ImageWithText from './ui/imageAnimation';
import Styles from './top.module.css';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
    <Head>
      <title>株式会社コヒーレントシステムズ</title>
        <meta name="description" content="株式会社コヒーレントシステムズの会社概要とメンバー紹介" />
        <meta name="keywords" content="コヒーレント, 会社概要, レーザー技術, 再生可能エネルギー, 宇宙デブリ" />
        <meta name="google-site-verification" content="CLa-v1ksCnsB2B0COb76i713L164flXP3O4gVO2P93Q" />
    </Head>
    <div>
      <ImageWithText />
      <div className={Styles.Overview}>
        <h2>Our Mission</h2>
        <p>
        宇宙開発の発展と共に、多くの人工衛星が打ち上げられる一方で、人工衛星の残骸も急速に増加しています。
        これらの破片は、秒速10km程度で衝突し、その衝撃でさらに多くのデブリが発生しています。
        これは、ケスラーシンドロームとして知られています。小型デブリ(10cm以下)は、地球からの観測が困難であり、
        それが衛星に弾丸のような速度で衝突すると衛星の機能を奪ってしまいます。宇宙開発の裏側で起こっている大きな問題です。
        また、石油エネルギーに依存する日本において、新たなエネルギー源としてマグネシウムから水素を発生させ、
        残骸として残った酸化マグネシウムを光の力で再生する技術開発に挑戦しています。私たちコヒーレントシステムズは、
        自社の強みであるレーザー科学や情報工学を駆使し、長期的な視野で戦略を構築し、これらの社会的課題の解決に取り組んでまいります。
        </p>
      </div>
    </div>
    </>
  );
};

export default HomePage;
