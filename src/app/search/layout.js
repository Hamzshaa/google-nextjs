import SearchHeader from "../../components/SearchHeader.jsx";
import "./../globals.css";

const layout = ({ children }) => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
};

export default layout;
