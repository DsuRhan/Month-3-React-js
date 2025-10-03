export default function Avatar({ src, alt }) {
  return <img src={src} alt={alt} style={{ width: 50, borderRadius: "50%" }} />;
}
