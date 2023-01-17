import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log(`Welcome, ${firstName} ${lastName}.`);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
                <label className="form-label" htmlFor="firstName">
                    First Name
                </label>
                <br />

                <input
                    className="form-control"
                    type="text"
                    name="Name"
                    id="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="lastName">
                    Last Name
                </label>
                <br />

                <input
                    className="form-control"
                    type="text"
                    name="Name"
                    id="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="email">
                    Email Address
                </label>
                <br />
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="password">
                    Password
                </label>
                <br />
                <input
                    className="form-control"
                    type="text"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password
                </label>
                <br />
                <input
                    className="form-control"
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
            </div>

            <div className="d-flex justify-content-end">
                <input className="btn btn-primary" type="submit" value="Create User" />
            </div>
        </form>
    );
};

export default UserForm;
