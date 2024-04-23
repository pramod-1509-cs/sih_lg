import { useContext } from 'react'
import { UserContext } from "../../context/userContext"
import { Link } from 'react-router-dom'
import './Dashboard.css'
import v1 from '../assets/rte_v1_w.webm'
import rte1 from '../assets/rte1.webm'
import rte2 from '../assets/rte2.webm'
import rte3 from '../assets/rte3.webm'
import rae1 from '../assets/rae1.webm'
import rae2 from '../assets/rae2.webm'
import rae3 from '../assets/rae3.webm'
import rtf1 from '../assets/rtf1.webm'
import rtf2 from '../assets/rtf2.webm'
import rtf3 from '../assets/rtf3.webm'
import rtd1 from '../assets/rtd1.webm'
import rtd2 from '../assets/rtd2.webm'
import rtd3 from '../assets/rtd3.webm'



export default function Dashboard() {
  const { user } = useContext(UserContext)
  return (
    <div className='dashboard-container'>
      {/* <h1>Dashboard</h1>
      {!!user && (<h2>{user.name}!</h2>)}
      <Link to="/snake-game">
        <button>Play Snake Game</button>
      </Link>
      <Link to="/quiz-app">
        <button>Play Quiz App</button>
      </Link> */}

      {/* Section 1 */}
      <section className="level-section">
        <h2>Right to Education</h2>
        <div className="card-container">
          <div className="card">
            <video controls width="300">
              <source src={rte1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>


          <div className="card">
            <video controls width="300">
              <source src={rte2} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="card">
            <video controls width="300">
              <source src={rte3} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="level-section">
        <h2>Right against exploitation</h2>
        <div className="card-container">

          <div className="card">
            <video controls width="300">
            <source src={rae1} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          </div>

          <div className="card">
            <video controls width="300">
              <source src={rae2} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="card">
            <video controls width="300">
              <source src={rae3} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>

      {/* Section 3 */}
      <section className="level-section">
        <h2>Right to Freedom</h2>
        <div className="card-container">
          <div className="card">
            <video controls width="300">
              <source src={rtf1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="card">
            <video controls width="300">
              <source src={rtf2} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="card">
            <video controls width="300">
              <source src={rtf3} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="level-section">
        <h2>Right against discrimination</h2>
        <div className="card-container">
          <div className="card">
            <video controls width="300">
              <source src={rtd1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="card">
            <video controls width="300">
              <source src={rtd2} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="card">
            <video controls width="300">
              <source src={rtd3} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      {/* <section className="level-section">
        <h2>Right to a Family and Alternative Care</h2>
        <div className="card-container">
          <div className="card">
            <video controls width="300">
              <source src={v1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="card">
            <video controls width="300">
              <source src={v1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="card">
            <video controls width="300">
              <source src={v1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section> */}
      
    </div>
  )
}
