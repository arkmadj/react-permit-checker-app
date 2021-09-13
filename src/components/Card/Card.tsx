import React from 'react'
import styles from "./card.module.css"

export interface CardProps {
    title: string,
    amount: string,
    background: string,
}

const Card: React.FC<CardProps> = ({title, amount, background, children}) => {
    return (
        <div className={styles.card} style={{background}}>
            <div className={styles.card_left}>
                <span className={styles.title}>{title}</span>
                <span className={styles.amount}>{amount}</span>
            </div>
            <div className={styles.card_right}>
                {children}
            </div>
            
        </div>
    )
}

export default Card
