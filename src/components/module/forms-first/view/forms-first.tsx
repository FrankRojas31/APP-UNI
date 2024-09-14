import React, { useState } from "react";
import SideBar from "../../Navigation/view/SideBar";

export default function FormsFirst() {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [isStudent, setIsStudent] = useState<boolean | null>(null);
  const [Form, setForm] = useState<boolean>(false);
  const [address, setAddress] = useState<string | null>(null);
  const [hobbies, setHobbies] = useState<string[] | null>([]);

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const name = (formdata.get("Name") as string) || null;
    setName(name);

    const ageValue = (formdata.get("Age") as string)|| null;
    const age = ageValue ? parseInt(ageValue) : null;
    setAge(age);

    const isStudent = formdata.has("IsStudent");
    setIsStudent(isStudent);
    const address = (formdata.get("Address") as string) || null;
    setAddress(address);

    const Hobbies = (formdata.get("Hobbies") as string) || null;

    let splitear = (Hobbies?.split(", ") as string[] || undefined);
    setHobbies(splitear)
    
    setForm(true);

    formdata.forEach((value, index) => {
      console.log(value)
    });
  };

  return (
    <>
      <SideBar>
        <div>
        <p className="uppercase text-center text-bold">Formulario usando UseState</p>
        <form className="basis-full" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              name="Name"
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              name="Age"
              type="number"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Edad
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <div className="flex items-center h-5">
              <input
                name="IsStudent"
                type="checkbox"
                className="mt-6 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Es Estudiante
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              name="Address"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Direccion
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              name="Hobbies"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Hobbies
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subir
          </button>
        </form>

            {Form && (
                <>
                    <p className="mt-10 uppercase">Visualizar Estados</p>
                    {name && <p>Nombre: {name}</p>}
                    {age !== null && <p>Edad: {age}</p>}
                    {isStudent !== null && (
                        <p>{isStudent ? "Es Estudiante" : "No es Estudiante"}</p>
                    )}
                    {address && <p>Dirección: {address}</p>}
                    {hobbies?.map((hobbie, index) => (
                      <li key={index}>{hobbie}</li>
                    ))}
                    </>
                )}
        </div>
      </SideBar>
    </>
  );
}
