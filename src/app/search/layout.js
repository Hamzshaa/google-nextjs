import SearchHeader from "./SearchHeader";
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
