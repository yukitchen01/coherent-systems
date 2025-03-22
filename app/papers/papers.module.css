import Head from 'next/head';
import styles from './papers.module.css';

export default function Paper() {
  const papers = [
    { title: 'Feasibility Study of Spaceborne Pulsed Laser System...', link: '/papers/AMOS_Uchida_240830.pdf' },
    // { title: 'Paper_2_Title', link: '/papers/Another_Paper.pdf' },
    // { title: 'Paper_3_Title', link: '/papers/Third_Paper.pdf' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.researchOverview}>
        <h1 className={styles.title}>Our Research Papers</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {papers.map((paper, index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/* インデックス */}
                <td>{paper.title}</td> {/* タイトル */}
                <td>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <span>Read</span>
                  </a>
                </td> {/* ボタン */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
