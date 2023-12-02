import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";



export const Pedidos = () => {
  const [servicio, setServicio] = useState([]);
  

  useEffect(() => {
    const db = getFirestore();
    const servicioRef = collection(db, "Servicio");

   

    getDocs(servicioRef)
      .then((snapshot) => {
        const servicio = snapshot.docs.map((doc) => ({
          Id: doc.data().Id,
          Nombre: doc.data().Nombre,
          NumMotorista: doc.data().NumMotorista,
          Precio: doc.data().Precio,
          FechServicio: doc.data().FechServicio,
          Direccion: doc.data().Direccion,
          Descripcion: doc.data().Descripcion,
        }));
        setServicio(servicio);
        
      });
      
  }, []);
  
  return (
    <section className="vh-50">
           <div className="container py-3 h-100" >
             <center><h1>Administración de Pedidos</h1></center>
           </div>
           <p/>
         <table className="table py-5" center>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Nombre</th>
               <th scope="col">Compra</th>
               <th scope="col">Pago</th>
               <th scope="col">Direccion</th>
               <th scope="col">Fecha</th>
               <th scope="col">Motorista</th>
               <th scope="col">Borrar</th>
             </tr>
           </thead>
           <tbody>
           {servicio.map((servicio, i) => (
             <tr key={i}>
               <td>{servicio.Id}</td>
               <td>{servicio.Nombre}</td>
               <td>{servicio.Descripcion}</td>
               <td>{servicio.Precio}</td>
               <td>{servicio.Direccion}</td>
               <td>{servicio.FechServicio}</td>
               <td>{servicio.NumMotorista}</td>
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