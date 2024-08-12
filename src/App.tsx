import './App.css'
import Detailstab from './Components/Detailstab/Detailstab'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'

const App=()=> {

  return (
    <>
      <Header text='This is some Text'/>
      <main>
        <div className="customer-list">
          <SideBar />
        </div>
        <div className='main-detail-container'>
          <Detailstab />
        </div>
      </main>
    </>
  )
}

export default App


