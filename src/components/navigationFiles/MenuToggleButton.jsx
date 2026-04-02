import menubar from "../../assets/burger-bar.png";
import close from "../../assets/close.png";

const MenuToggleButton = ({ isOpen, onToggle }) => {
  return (
    <button
      className="px-4 fixed font-bold flex items-center gap-2 bg-green-100 cursor-pointer z-50"
      onClick={onToggle}
    >
      {isOpen ? (
        <div className="flex items-center gap-2">
          Menu <img src={close} alt="close" className="w-4" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          Menu <img src={menubar} alt="menu bar" className="w-5" />
        </div>
      )}
    </button>
  );
};

export default MenuToggleButton;
