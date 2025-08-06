function Navbar({ className }) {
  return (
    <>
      <div className=" relative top-10 left-3 m-3 space-y-18">
        {" "}
        <h2 className="text-2xl">Categorizacion de productos </h2>
        <div className="space-y-8 list-none">
          <h3 className="font-semibold text-2xl">Color</h3>

          <ul className="space-y-4 mx-3">
            <li>Plateado</li>
            <li>Rojo</li>
            <li>Negro</li>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="font-semibold text-2xl">Línea</h3>
          <ul className="space-y-4 mx-3">
            <li>Sport</li>
            <li>Camioneta</li>
            <li>pickup</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
