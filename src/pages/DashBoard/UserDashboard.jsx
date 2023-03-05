import React from "react";
import "./UserDashboard.css";
import Mark from "../../assets/Images/markenderes.jpg"

export default function UserDashboard() {
    return (
        <main className="dashboard__ctn">

            <section className="dashboard__ctn-info">
                <div className="dashboard__ctn-info-prof">
                    <div className="dashboard__ctn-info-img">
                        <img src={Mark} alt="" />
                        <input type="button" value="" />
                    </div>
                    <div className="dashboard__ctn-info-text">
                        <h1>Mark Enderess</h1>
                        <h2>+91 123 - 456 -7890</h2>
                        <h3>mark.enderess@mail.com</h3>
                    </div>
                </div>
                <div className="dashboard__ctn-info-select">
                    <p>Profile</p>
                    <p>Bookings</p>
                </div>
            </section>
            <section className="dashboard__ctn-edit">
                <div className="dashboard__ctn-edit1">
                    <div className="dashboard__ctn-info-edit1-title">
                        <h1>Profile</h1>
                        <input type="button" value="edit" />
                    </div>
                    <form action="">
                        <div className="dashboard__ctn-info-edit1-name">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" disabled="true" style={{border: "none"}} placeholder= "[NOMBRE BASE]" />
                        </div>
                        <div className="dashboard__ctn-info-edit1-birthday">
                            <label htmlFor="birthday">Birthday:</label>
                            <input type="date" name="birthday" id="birthday" />
                        </div>
                        <div className="gender">
                            <label htmlFor="dashboard__ctn-info-edit1-genero">Gender</label>
                            <select name="genero">
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>
                        <div className="dashboard__ctn-info-edit1-address">
                            <label htmlFor="address">Street Address</label>
                            <input type="text" name="address" id="address" />
                        </div>
                        <div className="dashboard__ctn-info-edit1-city">
                            <label htmlFor="city">City/State</label>
                            <input type="text" name="city" id="city"/>
                        </div>
                        <div className="zip">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" name="zip" id="zip" />
                        </div>
                    </form>
                </div>
                <div className="login-details">
                    <h1>Login Details
                        
                    </h1>
                    <form action="">
                        <div className="email">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" />
                            <input type="button" value="edit" />
                        </div>
                        <div className="phone">
                            <label htmlFor="phone">Phone No:</label>
                            <input type="tel" name="phone" id="phone" />
                            <input type="button" value="edit" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                            <input type="button" value="edit" />
                        </div>
                    </form>
                </div>
            </section>

        </main>
    );
}
