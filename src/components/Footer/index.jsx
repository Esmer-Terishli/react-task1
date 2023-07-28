import './Footer.style.css'

export const Footer = () => {
    // const name = 'John'
    const isMarried = true
  return (
    <div className='footer'>
        {/* {1+1} */}
        {/* {name} */}
        {
            isMarried ? 'Married' : 'UnMarried'
        }
    </div>
  )
}
