import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es:{
        translation:{
            proyects_link: "Proyectos",
            about_me_link: "Sobre Mi",
            contact_link: "Contacto",
            app: "App en español",
            saludo: "Hola, Soy Leonardo Meza."
        }
    },
    en:{
        translation:{
            proyects_link: "Proyects",
            about_me_link: "About me",
            contact_link: "Contact",
            app: "App in english",
            saludo: "Hi, i'm Leonardo Meza."            
        }
    }
}


i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
  
    keySeparator: false,
  
    interpolation: {
      escapeValue: false,
    },
  });
  
  export default i18n;

