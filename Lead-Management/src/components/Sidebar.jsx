import { FiUsers, FiPhoneCall , FiFileText, FiLayers  } from "react-icons/fi";
import logo from '../assets/logo.png';
import { MdOutlineWallet } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { CiCircleList } from "react-icons/ci";
import { MdWaterfallChart } from "react-icons/md";
import { AiFillIdcard } from "react-icons/ai";
import { TbFolderQuestion } from "react-icons/tb";
import { FiChrome } from "react-icons/fi";
function Sidebar() {
  return (
    <div 
      className="sidebar d-flex flex-column justify-content-between align-items-center border-end"
      style={{ width: "60px", height: "100vh" }}
    >
      <div className="d-flex flex-column align-items-center mt-1 gap-2">
        <img src={logo} alt="logo" style={{ width: "50px" }} className="mb-2 border-bottom" />
        <RiHome6Line  className="sidebar-icon" />
        <FiUsers className="sidebar-icon" />
        <MdOutlineWallet  className="sidebar-icon" />
        <FiPhoneCall  className="sidebar-icon" />
        <FiFileText  className="sidebar-icon" />
        <FiLayers  className="sidebar-icon" />
        <CiCircleList className="sidebar-icon" />
        <MdWaterfallChart  className="sidebar-icon" />
        <AiFillIdcard  className="sidebar-icon" />
      </div>
      <div className="d-flex flex-column align-items-center mb-3 gap-2">
        <TbFolderQuestion  className="sidebar-icon" />
        <FiChrome  className="sidebar-icon" />
      </div>
    </div>
  );
}

export default Sidebar;
