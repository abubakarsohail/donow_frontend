const Icon = ({ src }) => {
  return (
    <img src={`/static/icons/${src}`} width="100%" height="100%" alt={src} />
  );
};

export default Icon;
