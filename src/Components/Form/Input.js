import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input className={styles.input} value={value} onChange={onChange} onBlur={onBlur}  id={name} name={name} type={type}/>
      <p className={styles.erro}>{error}</p>
    </div>
  )
}

export default Input
