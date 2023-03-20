import { styles } from "../styles";
import {facebook, github, instagram, linkedin, twitter} from "../assets";
const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto py-4 px-6 text-white pt-10 pb-10">
                <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                    <div>
                        <h3 className="font-bold text-xl text-[#915EFF]">Antoine Quarroz</h3>
                        <p className="opacity-60 pt-1">Médiamaticien</p>
                        <div className="flex space-x-4 pt-2">
                            <img src={github} alt="github" className="w-[24px] h-[24px] object-contain hover:opacity-60" onClick={"https://github.com/antoinequarroz"} />
                            <img src={linkedin} alt={"Linkedin"} className="w-[24px] h-[24px] object-contain hover:opacity-60" onClick={"https://www.linkedin.com/in/antoine-quarroz-376020187/"} />
                            <img src={instagram} alt={"Instagram"} className="w-[24px] h-[24px] object-contain hover:opacity-60" onClick={"https://www.instagram.com/antoinequarroz/"} />
                            <img src={facebook} alt={"Facebook"} className="w-[24px] h-[24px] object-contain hover:opacity-60" onClick={"https://www.facebook.com/AntoineQuarroz"} />
                            <img src={twitter} alt={"Twitter"} className="w-[24px] h-[24px] object-contain hover:opacity-60" onClick={"https://twitter.com/antoinequarroz"} />
                        </div>
                        <br/>
                        <p className="text-sm opacity-60">&copy; 2023 Tous droits réservés.</p>
                    </div>
                    <div className="flex space-x-52 pt-3">
                        <div>
                            <p className="opacity-60">Adresse</p>
                            <div className="pt-2">
                                <p>Rue de l'Evouette 5</p>
                                <p>1969 Saint-Martin VS</p>
                            </div>
                        </div>

                        <div>
                            <p className="opacity-60">Téléphone</p>
                            <div className="pt-2">
                                <a href="tel:+4179 157 64 50" className="hover:opacity-60">+41 79 157 64 50</a>
                            </div>
                        </div>

                        <div>
                            <p className="opacity-60">Email</p>
                            <div className="pt-2">
                                <a href="mailto:info@antoinequarroz.ch" className="hover:opacity-60"> info@antoinequarroz.ch </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;