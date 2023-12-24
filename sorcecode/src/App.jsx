import { useEffect, useState } from 'react'
import './App.css'
import starImg from "./assets/images/icon-star.svg"
import plus from "./assets/images/icon-plus.svg"
import minus from "./assets/images/icon-minus.svg"

function App() {

  const [data, setData] = useState()
  const [active, setShow] = useState(-1)

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = () => {
    fetch("../data.json")
    .then(res => res.text())
    .then(text => {
      let details = JSON.parse(text)
      setData(details)
    })
  }

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
          {data.map((e, i) => {
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
                {data.length - 1 === i ? "" : <hr />}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
