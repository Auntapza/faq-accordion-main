import { useEffect, useState } from 'react'
import './App.css'
import starImg from "./assets/images/icon-star.svg"
import plus from "./assets/images/icon-plus.svg"
import minus from "./assets/images/icon-minus.svg"

function App() {

  const [active, setShow] = useState(-1)

  let text = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      ans: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      title: "Is Frontend Mentor free?",
      ans: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      ans: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
      title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      ans: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
  ]

  const setActive = (index) => {
    setShow(index)
    if (active === index) {
      setActive(-1)
    }
  }
  
  return (
    <>
      <div className="card">
        <div className="card-title">
          <img src={starImg} alt="" />
          <h1>
            FAQs
          </h1>
        </div>
        <div className="card-body">
          {text.map((e, i) => {
            return (
              <>
                <div className="accordion" key={i} onClick={() => setActive(i)}>
                  <div className="title">
                    <p>{e.title}</p>
                    <img src={active !== i ? plus : minus} alt="" />
                  </div>
                  <div className={active == i ? "detail show" : "detail"}>
                    <p>{e.ans}</p>
                  </div>
                </div>
                {text.length - 1 === i ? "" : <hr />}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
