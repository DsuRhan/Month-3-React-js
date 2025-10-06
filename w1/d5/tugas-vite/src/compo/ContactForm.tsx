import { useState } from "react";
import type { ChangeEvent } from "react";

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
}

export default function ContactForm() {
  const [contact, setContact] = useState<Contact>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <h2>Contact Form</h2>
      <input name="firstName" placeholder="Nama Depan" onChange={handleChange} />
      <input name="lastName" placeholder="Nama Belakang" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <p>
        {contact.firstName} {contact.lastName} - {contact.email}
      </p>
    </div>
  );
}
