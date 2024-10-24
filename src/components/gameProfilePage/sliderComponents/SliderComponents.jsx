export function NextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", right: "5px" }} onClick={onClick} />;
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", left: "5px", zIndex: "3" }} onClick={onClick} />;
}
