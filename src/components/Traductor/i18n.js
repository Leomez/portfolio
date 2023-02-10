import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es:{
        translation:{
            proyects_link: "Proyectos",
            about_me_link: "Sobre Mi",
            contact_link: "Contacto",
            app: "App en español",
            saludo: "Hola, Soy Leonardo Meza.",
            presentacionP1: "Soy Desarrollador Web Full Stack, aunque por gustos personales me inclino mas hacia el frontend.",
            presentacionP2_1: "Te invito a que conozcas",
            presentacionP2_2: "mis trabajos",
            presentacionP2_3: "y un poco mas",
            presentacionP2_4: "sobre mi",
            contactame: "Contactame",
            text_linkedin1: "Conocé mi perfil en linkedin",
            text_linkedin2: "...y accedé a mi red de contactos.",
            text_github1: "Puedés ver mis proyectos",
            text_github2: "...y profundizar en el código.",
            text_gmail: "Enviame un correo a",
            quien_soy: "¿Quien soy?",
            quien_soy_text: "Conocí la programación en la universidad mientras estudiaba Bioingenieria. Me gusto tanto que decidi cambiarme de carrera. Hoy estudio ingeniería en informática y soy Desarrollador Web Full Stack graduado de Henry. Trabajo como Help Desk en un centro médico pero mi sueño es ser un nómada digital y poder trabajar de lo que me gusta desde cualquier parte del mundo."            
        }
    },
    en:{
        translation:{
            proyects_link: "Proyects",
            about_me_link: "About me",
            contact_link: "Contact",
            app: "App in english",
            saludo: "Hi, i'm Leonardo Meza.",
            presentacionP1: "I am a Full Stack Web Developer, although due to personal preferences I lean more towards the frontend.",
            presentacionP2_1: "I invite you to get to know",
            presentacionP2_2: "my work",
            presentacionP2_3: "and a little more",
            presentacionP2_4: "about me",
            contactame: "Contact",
            text_linkedin1: "Know my profile on Linkedin",
            text_linkedin2: "...and I accessed my network of contacts.",
            text_github1: "You can see my projects",
            text_github2: "...and dig into the code.",
            text_gmail: "Send me an email at",
            quien_soy: "Who i am?",
            quien_soy_text: "I was introduced to programming at university while studying Bioengineering. I liked it so much that I decided to change careers. Today I study computer engineering and I am a Full Stack Web Developer graduated from Henry. I work as a Help Desk in a medical center but my dream is to be a digital nomad and be able to do what I like from anywhere in the world.",
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

