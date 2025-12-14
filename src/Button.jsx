import './Button.css';
export default function Button({ children, ...props }){
  return (
    <button className="app-button" {...props}>
      {children}
    </button>
  );
}
