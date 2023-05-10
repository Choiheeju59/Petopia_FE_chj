import Pagination from "react-bootstrap/Pagination";
import "../../Styles/RecomendStyle.css";

const Pagination = () => {
  const pagination = () => {
    for (let i = 2; i <= 10; i++) {
      <Pagination.Item>{i}</Pagination.Item>;
    }
  };

  return (
    <div className="pagination">
      <Pagination className="pagenation">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>

        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default Pagination;
