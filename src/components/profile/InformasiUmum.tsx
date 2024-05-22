import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InformasiUmum = () => {
  const [initialData, setInitialData] = useState({
    whatsapp: 62812149316661,
    linkedin: "https://www.linkedin.com/in/salman4l/",
    education: "Institut Pertanian Bogor",
    major: "Teknologi Rekayasa Perangkat Lunak",
    year: new Date("2021")
  });

  const [formData, setFormData] = useState({ ...initialData });
  const [formChanged, setFormChanged] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormChanged(true);
  };

  const handleYearChange = (date: any) => {
    setFormData((prevData) => ({
      ...prevData,
      year: date,
    }));
    setFormChanged(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Kirim data ke backend
    setInitialData({ ...formData });
    setFormChanged(false);
  };

  const handleCancel = () => {
    setFormData({ ...initialData });
    setFormChanged(false);
  };

  return (
    <div className="mt-8 p-6 mb-10">
      <div className="flex items-center">
        <FaUserLarge className="text-[#4C2A76]"/>
        <h1 className="font-semibold ml-4">Informasi Umum</h1>
      </div>
      <hr className="w-[100%] mt-4 border-[1px] border-slate-300" />
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex flex-col">
          <label htmlFor="whatsapp" className="p-2">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            type="number"
            name="whatsapp"
            className="p-2 bg-[#eac8fc45] rounded-lg hover:border hover:border-black"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="linkedin" className="p-2">
            LinkedIn URL
          </label>
          <input
            id="linkedin"
            type="text"
            name="linkedin"
            className="p-2 bg-[#eac8fc45] rounded-lg hover:border hover:border-black"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="education" className="p-2">
            Last Education
          </label>
          <input
            id="education"
            type="text"
            name="education"
            className="p-2 bg-[#eac8fc45] rounded-lg hover:border hover:border-black"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="major" className="p-2">
            Major/Specialization
          </label>
          <input
            id="major"
            type="text"
            name="major"
            className="p-2 bg-[#eac8fc45] rounded-lg hover:border hover:border-black"
            value={formData.major}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="year" className="p-2">
            Year of Admission
          </label>
          <div className="p-2 pl-3 bg-[#eac8fc45] w-[60%] md:w-[20%] rounded-lg hover:border hover:border-black">
            <DatePicker
                id="year"
                name="year"
                selected={formData.year}
                onChange={handleYearChange}
                dateFormat="yyyy"
                showYearPicker
                className="w-full bg-transparent border-none"
            />
          </div>
        </div>
        <div className="flex justify-end">
          {formChanged && (
            <button type="button" onClick={handleCancel} className="button px-2 py-2 mt-6 mr-8  text-[#4C2A76]">
              Batalkan
            </button>
          )}
          {formChanged && (
            <button type="submit" className="button px-6 py-3 mt-6 bg-[#4C2A76] text-white rounded-[40px]">
              Simpan Perubahan
            </button>
          )}

        </div>
      </form>
    </div>
  );
};

export default InformasiUmum;
