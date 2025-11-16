import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue, useRecoilState } from "recoil"
import { notificationAtom, networkAtom, jobsAtom, messagingAtom, sumSelector } from "./atom"

function App() {
  const [notificationCount, setNotificationCount] = useRecoilState(notificationAtom);
  const [networkCount, setNetworkCount] = useRecoilState(networkAtom);
  const [jobsCount, setJobsCount] = useRecoilState(jobsAtom);
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
  const sum = useRecoilValue(sumSelector)

  return (
    <>
      {/* <button onClick ={()=>setJobsCount(c=>c+1)}>Home({jobsCount>=100 ? "99+": jobsCount})</button>
    <button onClick ={()=>setMessagingCount(c=>c+1)}>Messaging({messagingCount >=100 ? "99+" : messagingCount})</button>
    <button onClick ={()=>setNotificationCount(c=>c+1)}>Notifications({notificationCount >=100 ? "99+": notificationCount})</button>
    <button>Total({sum})</button> */}
<div className="Divv">

      <div className="OuterDiv">
        <img className="iconImg" src="preview.png" alt="icon" />
        <h3 >Lorem Ipsum</h3>
        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi sit, recusandae rem nulla eius sint corporis dignissimos alias, ipsum optio. Qui accusantium eum accusamus nostrum distinctio eveniet illum cum!
        </p>
      </div>

          <div className="OuterDiv">
        <img className="iconImg" src="preview.png" alt="icon" />
        <h3 >Lorem Ipsum</h3>
        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi sit, recusandae rem nulla eius sint corporis dignissimos alias, ipsum optio. Qui accusantium eum accusamus nostrum distinctio eveniet illum cum!
        </p>
      </div>

          <div className="OuterDiv">
        <img className="iconImg" src="preview.png" alt="icon" />
        <h3 >Lorem Ipsum</h3>
        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi sit, recusandae rem nulla eius sint corporis dignissimos alias, ipsum optio. Qui accusantium eum accusamus nostrum distinctio eveniet illum cum!
        </p>
      </div>

          <div className="OuterDiv">
        <img className="iconImg" src="preview.png" alt="icon" />
        <h3 >Lorem Ipsum</h3>
        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi sit, recusandae rem nulla eius sint corporis dignissimos alias, ipsum optio. Qui accusantium eum accusamus nostrum distinctio eveniet illum cum!
        </p>
      </div>
</div>
    </>
  )
}

export default App
