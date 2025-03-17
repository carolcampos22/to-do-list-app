import Image from 'next/image';
import styles from '../app/styles/Header.module.scss';
import logo from '../public/notebook-pen.webp'
import { useEffect, useState } from 'react';

export const Header = () => {

    const showDate = () => {
        const currentDate = new Date()

        const daysOfTheWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
        const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

        const dayOfTheWeek = daysOfTheWeek[currentDate.getDay()]

        const day = currentDate.getDate().toString().padStart(2, '0')
        const month = months[currentDate.getMonth()]
        const year = currentDate.getFullYear()

        const formattedDate = `${dayOfTheWeek}, ${day} de ${month} de ${year}`

        return formattedDate
    }

    function clock(){
        const [time, setTime] = useState(showTime())

        useEffect(() => {
            const interval = setInterval(() => {
                setTime(showTime())
            }, 1000)

            return () => clearInterval(interval)
        }, [])

        return time     
    }

    const showTime = () => {
        const now = new Date()

        const hours = String(now.getHours()).padStart(2, "0")
        const minutes = String(now.getMinutes()).padStart(2, "0")
        const seconds = String(now.getSeconds()).padStart(2, "0")

        const currentTime = `${hours}:${minutes}:${seconds}`

        return currentTime
    }


    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={logo} alt="Logo da UpTask" />
            </div>
            <h1>UpTask</h1>
            <div className={styles.date_time}>
                <span>{showDate()}</span>
                <span className={styles.time}>{clock()}</span>
            </div>
        </div>
    );
};
