"use client";
import Image from "next/image";
import { useState } from "react";
import Todo from "./Components/Todo";
export default function Home() {
  const [formData, setFormDaata] = useState({
    title: "",
    description: "",
  });

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormDaata((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };
  const handleSubmit = (e)=>{
    e.preventDefault
    try{

    }catch(e){

    }

  }
  return (
    <>
      <form
        onChange={handleSubmit}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
        action=""
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
          onChange={handleOnchange}
        />
        <textarea
          name="description"
          value={formData.description}
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
          onChange={handleOnchange}
        ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo title={formData.title} />
            <Todo description={formData.description} />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}
