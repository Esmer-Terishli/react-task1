import './Button.style.css'

export const Button = ({variant = 'primary', onClick, children}) => {
  return (
    <button onClick={onClick} className={`button ${variant}`}>{children}</button>
  )
}




// export const Button = ({variant, text, onClick}) => {
//     return (
//       <button onClick={onClick} className={`button ${variant}`}>{text}</button>
//     )
// }

  
// export const Button = (props) => {
//     return (
//       <button className={props.variant}>{props.text}</button>
//     )
// }
