import styles from "./Button.module.css";

export default function Button({ type = "default", label }) {
  const className = `${styles.button} ${
    type === "primary" ? styles.primary : styles.default
  }`;

  return <button className={className}>{label}</button>;
}
