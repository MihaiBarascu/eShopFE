import Header from "../components/partials/Header";
function UnautehnticatedLayout({ children }) {
  return (
    <div className>
      <Header />
      {children}
    </div>
  );
} //{childer}//aici e inner components ca acest layout e in ficare pagina

export default UnautehnticatedLayout;
