import { useState } from "react";
import axios from "axios";

export default function RegisterUser() {
  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/",
        form
      );
      console.log("Sucesso:", response.data);
    } catch (error) {
      console.log("Erro:", error.response?.data || error.message);
    }
  };

}