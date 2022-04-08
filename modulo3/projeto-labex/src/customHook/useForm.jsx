import React, { useState } from "react";

export const useForm = (initialState) => {
  
const [form, setForm] = useState(initialState);

const onChangeForm =(ev) =>{
  setForm({
    ...form,
    [ev.target.name]: ev.target.value 
  })
}
return [form, onChangeForm]
}
