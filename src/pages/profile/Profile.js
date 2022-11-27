import { HiFolderOpen} from 'react-icons/hi'
import "../profile/Profile.css"


export default function Profile() {

  return (
    <>
    <div class="profile">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQE9xM9QPi_7ag/profile-displayphoto-shrink_800_800/0/1652579727599?e=2147483647&v=beta&t=S5Iq_3H4E8A5eLCq_cEfcSEZDMFpzJ4bgDFjJIBSIB4" alt="" class="photo"/>
        <span class="name">Fangki Igo Pramana</span>
        <span class="name" style={{marginTop: "0px", fontSize: "15px"}}>Backend Developer</span>

        <div class="buttons" style={{marginTop: "5px"}}>
                Mampir di Repository giithub
            <div class="button follow">
                <HiFolderOpen className='button-icon'/>
            </div>
        </div>
    </div>
    </>
  );
}
