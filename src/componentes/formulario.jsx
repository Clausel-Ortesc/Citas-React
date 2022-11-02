const Formulario = () => {
    return (
        <div className="md:w-1/2 mx-5 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className="mt-5 text-center text-lg mb-10">Añade pacientes <span className="text-indigo-400 font-bold">Administrarlos</span></p>

            <form className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md" onSubmit={ev => {
                ev.preventDefault();
            }}>
                <div>
                    <label htmlFor="mascota" className="block uppercase font-bold text-gray-700">Nombre del Paciente</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota.."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    />
                </div>


                <div>
                    <label htmlFor="email">Correo electronico</label><br />
                    <input
                        id="name"
                        name="email"
                        type="email"
                        placeholder="Correo electronico.."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    />
                </div>

                <div>

                    <label htmlFor="alta">Alta</label><br />
                    <input
                        id="alta"
                        name="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    />
                </div>
                <div>

                    <label>Sintomas</label>
                    <textarea
                        id="sintomas"
                        name="sintomas"
                        placeholder="Sintomas que presenta.."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    />
                </div>


            </form>
        </div>
    )
}

export default Formulario