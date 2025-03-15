import Image from 'next/image';
import styles from '../app/styles/Header.module.scss';
import logo from '../public/note.jpg'

export const Header = () => {
    const currentDate = new Date()
    
    const daysOfTheWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    const dayOfTheWeek = daysOfTheWeek[currentDate.getDay()]
    
    const day = currentDate.getDate().toString().padStart(2, '0')
    const month = months[currentDate.getMonth()]
    const year = currentDate.getFullYear()

    const formattedDate = `${dayOfTheWeek}, ${day} de ${month} de ${year}`
    

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={logo} alt="Logo da UpTask" />
            </div>
            <p>UpTask</p>
            <span>{formattedDate}</span>
        </div>
    );
};
