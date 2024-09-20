import Image from 'next/image';
import styles from '../app/styles/Header.module.scss';
import logo from '../public/Logomark.png'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={logo} alt="Logo da FocalPoint" />
                <h1>FocalPoint</h1>
            </div>
            <p>Bem-vindo de volta, Marcus</p>
            <span>Segunda, 01 de dezembro de 2025</span>
        </div>
    );
};
