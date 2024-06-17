import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [typeSubmit, setTypeSubmit] = useState({});
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name.trim().length > 5 && regexEmail.test(data.email)) {
      console.log(
        `Datos del submit: Nombre: ${data.name} - Email: ${data.email}`
      );
      setTypeSubmit({ success: true });
    } else {
      setTypeSubmit({ error: true });
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre completo"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
          setTypeSubmit({});
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
          setTypeSubmit({});
        }}
      />
      <button>Enviar</button>
    </form>
    {typeSubmit.success && (
      <p style={{ color: "green", textAlign:"center" }}>{`Gracias ${data.name}, formulario completado exitosamente`}</p>
    )}
    {typeSubmit.error && <p style={{ color: "red", textAlign:"center" }}>Ups, no se pueden enviar los datos, verifica y vuelve a intentar</p>}
  </div>
  );
};

export default Form;
