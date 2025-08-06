import { useApp } from "../context/AppContext";





export default function CarList() {
  const { carrito } = useApp();
  return (
    <div className="p-4 bg-blue-50 mt-4 w-full md:w-full lg:w-full rounded-2xl">
      <h2 className="m-4 font-semibold text-[18px] ">Carrito chatbot</h2>
      {carrito.length === 0 ? (
        <p>No hay carros aún.</p>
      ) : (
        <ul>
          {carrito.map((c, i) => (
            <li key={i}>
              {c.linea} - {c.color} - ${c.valor}

              <img src={c.img} alt="" />
            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
}
