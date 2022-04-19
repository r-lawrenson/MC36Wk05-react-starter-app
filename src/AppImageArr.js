
import './AppImage.css';
import image01 from './images/image01-480x270.jpg';
import image02 from "./images/image02-480x270.png";
import image03 from "./images/image03-480x270.jpg";
import image04 from "./images/image04-480x270.jpg";

const AppImageArr = () => {

  let imageArr = [
    {image: image01, heading: "Layered Textures Design", text: "Design of new procedural and layered textures, for community feedback."},
    {image: image02, heading: "Sculpt Development Update", text: "Overview of the upcomming improvements in the Sculpt/Paint module."},
    {image: image03, heading: "Overides Workshop", text: "As part of the 2022 strategic targets, a workshop to help refine Overides was held during January at the Blender HQ."},
    {image: image04, heading: "VFX Reference Platform", text: "Blender will no longer stick to the VFX Refernce Platform."}
  ]

  return (
    <div id="main">
        <h1>Development Updates</h1>
            <div id="wrapper">
              {imageArr.map((item, index) => {
                return <Image key={index} img={item.image} heading={item.heading} text={item.text}/>
              })}
            </div>
      </div>
  )
}
              

const Image = (props) => {
  return (
  <div id="imageCard"> 
    <div>
        <img id="image" src={props.img}/>
        <p id="heading">{props.heading}</p>
        <p id="text">{props.text}</p>
    </div>
        <a id="readMore" href=""> {'READ MORE >'}</a>
    </div>

  )
}

export default AppImageArr