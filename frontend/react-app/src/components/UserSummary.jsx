import { useEffect, useState } from "react";

export default function UserSummary() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch("http://localhost:8000/usuario");
        const data = await res.json();
        setUsuario(data);
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    obtenerDatos();

    // Escucha el evento "usuario_actualizado"
    window.addEventListener("usuario_actualizado", obtenerDatos);

    // Limpieza del listener al desmontar
    return () => {
      window.removeEventListener("usuario_actualizado", obtenerDatos);
    };
  }, []);

  if (!usuario) return <p>Cargando datos del usuario...</p>;

  return (
    <div className="p-4 bg-sky-100 mb-4 rounded  overflow-y-auto custom-scroll ">
      <div className="relative top-4 min-h-[400px] ">
        <h2 className="font-bold mb-2 m-4 text-[18px]">Resumen del Usuario</h2>
        <ul className="text-sm  justify-items-start m-4">
          <li>
            <strong>Nombre:</strong> {usuario.nombre || "No registrado"}
          </li>
          <li className="m-1">
            <strong>Edad:</strong> {usuario.edad || "No registrada"}
          </li>
          <li className="m-1">
            <strong>Ocupación:</strong> {usuario.ocupacion || "No registrada"}
          </li>
          <li className="m-1">
            <strong>Ingresos:</strong> {usuario.ingresos || "No registrados"}
          </li>
          <li className="m-1">
            <strong>Tiempo laborado:</strong>{" "}
            {usuario.tiempo_laborado || "No registrado"} meses
          </li>
          <li className="m-1">
            <strong>Carros seleccionados:</strong>
          </li>
          <ul className="pl-4 list-disc m-4">
            {usuario.carros_seleccionados?.length === 0 ? (
              <li>No hay carros registrados</li>
            ) : (
              usuario.carros_seleccionados.map((carro, i) => (
                <li key={i}>
                  {carro.tipo} - {carro.color}
                </li>
              ))
            )}
          </ul>
        </ul>
      </div>
    </div>
  );
}
