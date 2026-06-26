import styles from './button.module.css';

function Button() {
    const styles= {
  margintop:" 12px",
  padding: "10px 18px",
  border: "none",
  borderradius: "25px",
 
}
  return (
    <button className={styles}>
      Click me
    </button>
  );
}

export default Button;