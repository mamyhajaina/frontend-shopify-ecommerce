import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { RxAvatar } from 'react-icons/rx';


const ShopCreate = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState();
    const [avatar, setAvatar] = useState();
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = { headers: { "Content-Type": "multipart/form-data" } };
        // meaning of uper line is that we are creating a new object with the name of config and the value of config is {headers:{'Content-Type':'multipart/form-data'}}  

        const newForm = new FormData();
        // meaning of uper line is that we are creating a new form data object and we are sending it to the backend with the name of newForm and the value of newForm is new FormData()
        newForm.append("file", avatar);
        // meanin of newForm.append("file",avatar) is that we are sending a file to the backend with the name of file and the value of the file is avatar
        newForm.append("name", name);
        newForm.append("email", email);
        newForm.append("password", password);
        newForm.append("zipCode", zipCode);
        newForm.append("address", address);
        newForm.append("phoneNumber", phoneNumber);

        axios
            .post(`${server}/shop/create-shop`, newForm, config)
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setPassword("");
                setAvatar();
                setZipCode();
                setAddress("");
                setPhoneNumber();

            })

            .catch((error) => {
                toast.error(error.response.data.message);
            });
        navigate("/login")
        window.location.reload();



    }
    // File upload
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
    <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Inscription en tant que vendeur
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">Rejoignez-nous et commencez à vendre vos produits à un large public !</p>
    </div>
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' onSubmit={handleSubmit} >
                {/* Nom de la boutique */}
                <div>
                    <label htmlFor="name"
                        className='block text-sm font-medium text-gray-700'
                    >
                        Nom de la boutique
                    </label>
                    <p className="text-xs text-gray-500 mt-1">Ce nom sera visible par vos clients.</p>
                    <div className='mt-1'>
                        <input type="text"
                            name='name'
                            required
                            placeholder="Entrez le nom de votre boutique"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                        />
                    </div>
                </div>
                {/* Numéro de téléphone */}
                <div>
                    <label htmlFor="phone-number"
                        className='block text-sm font-medium text-gray-700'
                    >
                        Numéro de téléphone
                    </label>
                    <div className='mt-1 relative'>
                        <input
                            type="tel"
                            name='phone-number'
                            autoComplete='tel'
                            required
                            placeholder="Entrez votre numéro de téléphone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Adresse e-mail
                    </label>
                    <div className="mt-1">
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            placeholder="Entrez votre adresse e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                {/* Adresse */}
                <div>
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Adresse
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="address"
                            required
                            placeholder="Entrez l'adresse de votre boutique"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                {/* Code postal */}
                <div>
                    <label
                        htmlFor="zipcode"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Code postal
                    </label>
                    <div className="mt-1">
                        <input
                            type="number"
                            name="zipcode"
                            required
                            placeholder="Entrez votre code postal"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

                {/* Mot de passe */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Mot de passe
                    </label>
                    <div className="mt-1 relative">
                        <input
                            type={visible ? "text" : "password"}
                            name="password"
                            autoComplete="current-password"
                            required
                            placeholder="Entrez un mot de passe sécurisé"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {visible ? (
                            <AiOutlineEye
                                className="absolute right-2 top-2 cursor-pointer"
                                size={25}
                                onClick={() => setVisible(false)}
                            />
                        ) : (
                            <AiOutlineEyeInvisible
                                className="absolute right-2 top-2 cursor-pointer"
                                size={25}
                                onClick={() => setVisible(true)}
                            />
                        )}
                    </div>
                </div>

                {/* Avatar */}
                <div>
                    <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                    ></label>
                    <div className="mt-2 flex items-center">
                        <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                            {avatar ? (
                                <img
                                    src={URL.createObjectURL(avatar)}
                                    alt="avatar"
                                    className="h-full w-full object-cover rounded-full"
                                />
                            ) : (
                                <RxAvatar className="h-8 w-8" />
                            )}
                        </span>
                        <label
                            htmlFor="file-input"
                            className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <span>Upload une image de profil pour votre boutique</span>
                            <input
                                type="file"
                                name="avatar"
                                id="file-input"
                                onChange={handleFileInputChange}
                                className="sr-only"
                            />
                        </label>
                    </div>
                </div>

                {/* Bouton de soumission */}
                <div>
                    <button
                        type='submit'
                        className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                    >
                        Soumettre
                    </button>
                </div>

                {/* Lien pour se connecter */}
                <div className={`${styles.noramlFlex} w-full`}>
                    <h4>Vous avez déjà un compte ? Connectez-vous maintenant !</h4>
                    <Link to="/login" className="text-blue-600 pl-2">
                        Se connecter
                    </Link>
                </div>
            </form>
        </div>
    </div>
</div>

    )
}

export default ShopCreate





