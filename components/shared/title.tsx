//Interface for the props
interface TitleProps {
  title?: string;
  subtitle?: string;
}
//Title component to reutilize
const title = (props: TitleProps) => {
  return (
    <div className="text-center">
      <p className="text-xl text-gray-500">{props.title}</p>
      <h2 className="text-3xl font-bold">{props.subtitle}</h2>
    </div>
  );
};

export default title;
