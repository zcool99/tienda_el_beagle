import React, { useState } from "react";

function Saludo(props) {
  // Crear estado para el nombre
  const [nombre, setNombre] = useState(props.nombre);

  // Función para cambiar el nombre
  const cambiarNombre = () => {
    setNombre(nombre === "Omi" ? "Eri" : "Omi");
  };

  return (
    <div>
      <h2>¡Hola, {nombre}!</h2>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </div>
  );
}

export default Saludo;
