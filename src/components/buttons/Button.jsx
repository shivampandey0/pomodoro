export const Button = ({ type, children, onClick }) => {
  return <button onClick={onClick} className={`btn btn-full btn-${type}`}>{children}</button>;
};
