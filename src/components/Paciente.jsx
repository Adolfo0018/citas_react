const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha , sintomas, id} = paciente

  const handleEliminar = () =>{
    const respuesta = confirm('Desea eliminar este paciente')

    if(respuesta){
        eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-10 py-5 rounded-xl">
        <p className="font-bold mt-3 text-gray-700 uppercase">Nombre:{' '}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mt-3 text-gray-700 uppercase">Propietario:{' '}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mt-3 text-gray-700 uppercase">Email:{' '}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mt-3 text-gray-700 uppercase">Fecha Alta:{' '}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mt-3 text-gray-700 uppercase">Sintomas:{' '}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-around">
            <button type="button" className="py-2 px-10 mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
            onClick={() => setPaciente(paciente)}>Editar</button>

            <button type="button" className="py-2 px-10 mt-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
            onClick={handleEliminar}>Eliminar</button>

            <button type="button" className="py-2 px-10 mt-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">Historial</button>

        </div>

    </div>
  )
}

export default Paciente