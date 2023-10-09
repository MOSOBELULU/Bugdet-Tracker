import classes from './Footer.module.css'

export default function Footer() {
  return (
    <div className={classes.footer}>
      <a href="https://www.linkedin.com/in/lulu-mosobe-b96a99139/">
        <img src='\public\images\linkedin (1).png' alt="" className={classes.icon} />
      </a>
      <a href="https://github.com/MOSOBELULU">
        <img src='.\public\images\github (1).png'  alt=""className={classes.icon}/>
      </a>
      <a href="mosobelulu@gmail.com">mosobelulu@gmail.com</a>
    </div>
  )
}
