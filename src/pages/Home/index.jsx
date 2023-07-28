import './Home.style.css'
import { Button } from '../../components/Button'
import {useState} from 'react'

const Home = () => {

    const [toggleText, setToggleText] = useState(true)

  return (
    <div className='home'>

        <Button onClick={() => setToggleText(!toggleText)}>Toggle text</Button>

        {
            toggleText && (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt 
           esse nesciunt quaerat veritatis, eveniet maiores.
        </p>
            )
        }


        {/* <Button onClick={() => console.log('clicked')}>Click</Button>
        <Button variant="secondary" onClick={() => console.log('click send')}>
            <span>Sendd</span>
        </Button> */}


        {/* <Button variant="primary" onClick={() => console.log('clicked')}/>
        <Button text="Send" variant="secondary" />  */}
    </div>
  )
}

export default Home
