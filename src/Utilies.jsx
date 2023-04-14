import { FaReact } from "react-icons/fa";
import {  SiRedux, SiTailwindcss,SiPostman,SiFirebase } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3,DiWordpress,DiJavascript1 } from "react-icons/di";
import {TbBrandNextjs} from "react-icons/tb"
import {BsGit} from "react-icons/bs"
export const data = [
  { icon: <FaReact size={35} color="#569DAA"/>,name:"React"  },
  { icon: <AiOutlineHtml5 size={35} color="orange"/>, name: "HTML" },
  { icon: <DiCss3 size={35} color="blue"/>, name: "CSS" },
  { icon: <TbBrandNextjs size={35}  color="black"/>, name: "Next Js" },
  { icon: <DiJavascript1 size={35}  color="#F45050"/>, name: "JS" },
  { icon: <SiRedux size={35} color="#577D86" />, name: "Redux" },
  { icon: <SiTailwindcss size={35} color="darkblue"/>, name: "Tailwind" },
  { icon: <SiFirebase size={35} color="#F9D949" />, name: "FireBase" },
  { icon: <SiPostman size={45} color="orange"/>, name: "PostMan" },
  { icon: <DiWordpress size={45} color="#577D86" />, name: "Wordpress"},
  {icon :<BsGit size={35} color="red"/> , name:"Git",}
  
];
