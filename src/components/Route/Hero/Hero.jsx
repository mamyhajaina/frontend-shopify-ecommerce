import React from 'react'
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";


const Hero = () => {
    return (
        <div
    className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    style={{
        backgroundImage:
            "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
    }}
>
    <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
            La meilleure collection pour <br /> la décoration de votre maison
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            Découvrez notre sélection de produits exceptionnels, soigneusement choisis pour embellir votre espace. Offrez à votre intérieur des touches uniques et élégantes qui ajouteront une ambiance chaleureuse et moderne.
            <br />
            Trouvez des objets qui fusionnent design et fonctionnalité pour une décoration qui vous ressemble.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Découvrez nos produits
                </span>
            </div>
        </Link>
    </div>
</div>
    )
}

export default Hero