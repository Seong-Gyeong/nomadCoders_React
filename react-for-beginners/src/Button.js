import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
//create-react-app이 btn css코드를 JS 오브젝트(styles)로 변환시켜줌

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
