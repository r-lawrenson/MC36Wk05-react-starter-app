
import './AppImage.css';
import image01 from './images/image01-480x270.jpg';
import image02 from "./images/image02-480x270.png";
import image03 from "./images/image03-480x270.jpg";
import image04 from "./images/image04-480x270.jpg";

const AppImage = () => {
  return (
    <div id="main">
        <h1>Development Updates</h1>
            <div id="wrapper">
                <Image img={image01} heading="Layered Textures Design" text="Design of new procedural and layered textures, for community feedback."/>
                <Image img={image02} heading="Sculpt Development Update" text="Overview of the upcomming improvements in the Sculpt/Paint module."/>
                <Image img={image03} heading="Overides Workshop" text="As part of the 2022 strategic targets, a workshop to help refine Overides was held during January at the Blender HQ."/>
                <Image img={image04} heading="VFX Reference Platform" text="Blender will no longer stick to the VFX Refernce Platform." />
            </div>
    </div>
  );
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

export default AppImage