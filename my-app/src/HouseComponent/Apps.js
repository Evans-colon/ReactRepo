import Land from '../HouseComponent/Land'
import Foundation from '../HouseComponent/Foundation'
import Room from '../HouseComponent/Room'
import Decking from './Decking'
import Roof from './Roof'
import House from './House'
import Wall from './Wall'
import Pillar from './Pillar'
import Window from './Window'
import Door from './Door'

// const Apps = () => (
//     <div >
        
//         <div className="decking">
//             <Decking/>
//         </div>

//             <div>


      
//         <div  className="generalDiv">
//             <Room>
//                 <div className="generalDiv">
//             <Pillar/>

//             <div  className="generalDiv">
//                 <Wall>
//                     <div>
//                     <Window/>
//                     <div className="generalDiv">
//                     <Door/>
//                     <Door/>
//                     </div>
//                     </div>
//                 </Wall>
//                 </div>
//                 <Pillar/>
           

//             <div>
//                 <Wall>
//                     <Window/>
//                     <Door/>
//                 </Wall>
//             </div>
//             </div>
//             </Room>
//         </div>
//         </div>
        
//         <div  className="foundation">
//             <Foundation/>
//         </div>

//         <div className="land">
//             <Land/>
//         </div>



//     </div>

// )









const Apps = () => (
    <div className="House" >


        <div className="FirstRoom">
        <Room>
            <div className="LeftPillar"><Pillar/></div>
            
            <div className="FirstWall">
                <Wall>
                <div className="WallContainer1">
                   <div className="Window2"><Window/></div> 
                    <Door/>
                    <Door/>
                    </div>
                    </Wall>   
            </div>
            
           

            
            <div className="SecondWall">
            <Wall>
                    {/* <h4>Wall</h4> */}
                    <div className="WallContainer2">
                    <div className="Window1"><Window/></div>
                        <Door/>
                        <Door/> 
                        </div>          
            </Wall>
            </div>
        </Room>
        </div>
        
        <div className="Foundation"><Foundation/></div>
        <div className="Land"><Land/></div>
    </div>
)

export default Apps;