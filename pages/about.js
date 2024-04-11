import Head from 'next/head';
import Image from 'next/image';
import styles from '../src/styles/about.module.css';
import Link from 'next/link';

export default function About() {
    const teamMembers = [
        {
            
            name: "Sean Lewertow",
            study: "3rd Year Computer Science",
            location: "Miami, FL",
            funFact: "I’m a barber",
            statement: "To me, Clips for a Cause is about leveraging technology to create social change. It’s combining my passion for coding with my skills as a barber to help those in need.",
            image: "/sean.png",
            github: "http://www.seanlewertow.com"
        },
        {
            name: "John Aitken",
            study: "2nd Year Computer Science & Biochemistry",
            location: "Miami, FL",
            funFact: "I love home chemistry",
            statement: "Clips for a Cause represents the intersection of my two worlds — science and technology. It’s a way to contribute to the community by providing practical help and spreading awareness.",
            image: "/john.png",
            github: "https://github.com/Johna321"
        },
        {
            name: "Sharan Majumder",
            study: "3rd Year Math & Computer Science",
            location: "Miami, FL",
            funFact: "I know 70 digits of pi",
            statement: "For me, Clips for a Cause is about precision and care—whether it's in the meticulousness of mathematics or in providing precise haircuts. It’s my way of making a calculable impact.",
            image: "/sharan.png",
            github: "https://github.com/MajumderSharan"
        },
        {
            name: "Timothy Chen",
            study: "2nd year Computer Science Major",
            location: "Wellington, FL",
            funFact: "I placed 5th in National Chess Tournament",
            statement: "Clips for a Cause is a strategic move towards community building. It’s about thinking several steps ahead to ensure we make a lasting difference in people's lives.",
            image: "/timothy.png",
            github: "https://github.com/thunderduck369"
        },
    ];


    return (
        <>
            <Head>
                <title>About Us | Clips for a Cause</title>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.container}>
                <video autoPlay loop muted className={styles.videoBackground}>
                    <source src="/bordervid.mp4" type="video/mp4" />
                </video>
            <main className={`mx-auto p-8 ${styles.container}`}>
                <section className={`${styles.mission} mb-12`}>
                    <div className={styles.animatedTextWrapper}>
                        <p className={styles.animatedText}>Empowering through grooming, we innovate for social change and dignity.</p>
                    </div>
                </section>

                <section className={`${styles.teamIntro} mb-12`}>
                    <h2 className={`text-2xl ${styles.title} mb-4`}>Meet the Developers Behind the Cause</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {teamMembers.map(member => (
                             <div className={`${styles.teamMemberCard} text-center`} key={member.name}>
                                <div className={`relative w-48 h-48 rounded-full mx-auto mb-4 ${styles.imageWrapper}`}>
                                    <Image src={member.image} layout="fill" objectFit="cover" objectPosition="center" alt={member.name} className={styles.image} />
                                </div>
                                <h3 className={styles.teamMemberTitle}>{member.name}</h3>
                                <p className={styles.teamMemberText}>{member.study}</p>
                                <p className={styles.teamMemberText}>{member.location}</p>
                                <p className={styles.teamMemberText}><span className="highlight">{member.funFact}</span></p>
                                <p className={styles.teamMemberBio}>"{member.statement}"</p>
                                <Link href={member.github} legacyBehavior>
                                    <a className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                                        <i className={`fab fa-github ${styles.githubIcon}`}></i>
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={`${styles.visionGoals} mb-12`}>
                    <div className={`${styles.visionItem} ${styles.vision}`}>
                        <span className={styles.icon}>🎯</span>
                        <h3 className={styles.visionTitle}>Our Vision</h3>
                        <p>To be the beacon of hope and renewal for those who seek transformation.</p>
                    </div>
                    <div className={`${styles.visionItem} ${styles.goal}`}>
                        <span className={styles.icon}>🌱</span>
                        <h3 className={styles.visionTitle}>Our Goal</h3>
                        <p>Expanding our reach to every city.</p>
                    </div>
                </section>
            </main>
            </div>
        </>
    );
}
