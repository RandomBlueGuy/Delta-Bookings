import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    birthday: "",
    gender: "",
    streetAddress: "",
    cityState: "",
    zip: "",
  });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      setData({
        name: "",
        birthday: "",
        gender: "",
        streetAddress: "",
        cityState: "",
        zip: "",
      });
    } catch {
      alert("No se pudo enviar los datos");
    }
  };

  const handleChange = (event) => {
    const { name, birthday, gender, streetAddress, cityState, zip } =
      event.target;

    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  console.log(data["name"]);

  const { name, birthday, gender, streetAddress, cityState, zip } = data;
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="profile">
          <h1>Profile</h1>
          <button>Edit</button>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(event) => handleChange(event)}
            value={name}
          />
        </div>

        <div>
          <label htmlFor="birthday">Birthday</label>
          <input
            id="birthday"
            name="birthday"
            type="date"
            onChange={(event) => handleChange(event)}
            value={birthday}
          />
        </div>

        <div className="gender">
          <label htmlFor="gender">Gender</label>
          <select 
            name="gender"
            value={gender}
            onChange={(event) => handleChange(event)}
          >
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="streetAddress">Street Address</label>
          <input
            id="streetAddress"
            name="streetAddress"
            type="text"
            onChange={(event) => handleChange(event)}
            value={streetAddress}
          />
        </div>
        
        <div>
          <label htmlFor="cityState">City/State</label>
          <input
            id="cityState"
            name="cityState"
            type="text"
            onChange={(event) => handleChange(event)}
            value={cityState}
          />
        </div>

        <div>
          <label htmlFor="zip">Zip</label>
          <input
            id="zip"
            name="zip"
            type="text"
            onChange={(event) => handleChange(event)}
            value={zip}
          />
        </div>

      </form>
    </React.Fragment>
  );
};

export default Form;
