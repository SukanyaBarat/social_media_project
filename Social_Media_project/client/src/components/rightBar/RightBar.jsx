import React from 'react'
import './rightBar.scss';
const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://sbnri.com/blog/wp-content/uploads/2022/04/Thinking-Like-An-Indian-Parent-Part-2-2vlycph8holkhb0rfzhatc.jpeg" alt="" />
              <span>Naba Chandra</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://img.freepik.com/premium-photo/portrait-indian-young-mother-son-against-white-background-looking-camera_466689-8069.jpg" alt="" />
              <span>Tanusree Chandra</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://avatars.githubusercontent.com/u/89825678?v=4" alt="" />
              
              <p><span>Sohug Chandra</span> changed their cover picture</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://girlandworld.com/wp-content/uploads/2018/12/619_d195483b3865795d947933295c6931e8.jpg" alt="" />
              <p><span>Jhuma Barat</span> changed their profile picture</p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://girlandworld.com/wp-content/uploads/2018/12/619_d195483b3865795d947933295c6931e8.jpg" alt="" />
              <p><span>Jhuma Barat</span> liked a post</p>
            </div>
            <span>2 mins ago</span>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://media.istockphoto.com/id/485700644/photo/young-indian-family-with-the-kid.jpg?s=612x612&w=0&k=20&c=ig27Cp-ZihN2zb7o4PFXTKo2U_P52_yl1n_MkEY4pss=" alt="" />
              <p><span>Sunit Barat</span> shared a post</p>
            </div>
            <span>5 mins ago</span>
          </div>
        </div>
        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://media.istockphoto.com/id/485700644/photo/young-indian-family-with-the-kid.jpg?s=612x612&w=0&k=20&c=ig27Cp-ZihN2zb7o4PFXTKo2U_P52_yl1n_MkEY4pss=" alt="" />
              <div className='online'/>
              <span>Sunit Barat</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://img.freepik.com/premium-photo/indian-woman-holding-baby-l-mothers-day_768688-6.jpg" alt="" />
              <div className='online'/>
              <span>Sanchari Barat</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://avatars.githubusercontent.com/u/89825678?v=4" alt="" />
              <div className='online'/>
              <span>Sohug Chandra</span>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src="https://girlandworld.com/wp-content/uploads/2018/12/619_d195483b3865795d947933295c6931e8.jpg" alt="" />
              <div className='online'/>
              <span>Jhuma Barat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar;