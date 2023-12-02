import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";



export const UserC = () => {
  const [clientes, setClientes] = useState([]);
  

  useEffect(() => {
    const db = getFirestore();
    const clientesRef = collection(db, "Clientes");

   

    getDocs(clientesRef)
      .then((snapshot) => {
        const clientes = snapshot.docs.map((doc) => ({
          Id: doc.data().Id,
          Nombre: doc.data().Nombre,
          Direccion: doc.data().Direccion,
          Email: doc.data().Email,
          NumTelefono: doc.data().NumTelefono,
        }));
        setClientes(clientes);
        
      });
      
  }, []);
  
  return (
    <section className="vh-50">
           <div className="container py-3 h-100" >
             <center><h1>Administración de Usuarios Clientes</h1></center>
           </div>
           <p/>
         <table className="table py-5" center>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Nombre</th>
               <th scope="col">Direccion</th>
               <th scope="col">E-mail</th>
               <th scope="col">Numero</th>
               <th scope="col">Borrar</th>
             </tr>
           </thead>
           <tbody>
           {clientes.map((cliente, i) => (
             <tr key={i}>
               <td>{cliente.Id}</td>
               <td>{cliente.Nombre}</td>
               <td>{cliente.Direccion}</td>
               <td>{cliente.Email}</td>
               <td>{cliente.NumTelefono}</td>
               <td>
                <button onClick="" /*{() => borrarCliente(cliente.id)} */ className=" btn-primary " type="submit" id='cb'>Borrar</button>
              </td>
            </tr>
          ))}
           </tbody>
         </table>
         </section>
    
  );
};
// const borrarCliente = (id) => {
//   const db = getFirestore();
//   const clientesRef = collection(db, "Clientes");
 
//   clientesRef.doc(id).delete().then(() => {
//     setClientes(clientes.filter((cliente) => cliente.id !== id));
//   });
  
// };