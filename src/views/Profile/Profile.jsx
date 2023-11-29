import React from 'react'

const Profile = () => {
    return (
        <div>
            <h1>Profil</h1>
            <div className="containerDetailsProduct">
                <img className="w-8 h-8" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" />
                <input type="text" id="firstName" name="firstName" placeholder="firstName" />
                <input type="text" id="lastName" name="lastName" placeholder="lastName" />
                <input type="text" id="numberStreet" name="numberStreet" placeholder="N° de rue" />
                <input type="text" id="nameStreet" name="nameStreet" placeholder="Nom de rue" />
                <input type="text" id="postalCode" name="postalCode" placeholder="code postal" />
                <input type="text" id="city" name="city" placeholder="ville" />
                <input type="email" id="email" name="email" placeholder="email" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae cum deserunt dolore ea eaque eius exercitationem explicabo ipsum mollitia nostrum pariatur praesentium quae quod sed sint soluta, veritatis voluptatibus?
            </div>
        </div>
    )
}
export default Profile
