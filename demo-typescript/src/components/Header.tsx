interface HeaderProps {
  name: string;
  place?: string;
}

const Header = ({ name, place = "VietNam" }: HeaderProps) => {
  return (
    <h1>
      Welcome to {name} Store in {place}
    </h1>
  );
};
export default Header;
