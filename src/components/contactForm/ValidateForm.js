

export default function ValidateForm(data, validarNombre, validarTelefono, validarEmail, validarMensaje){    
    const errors = {};
  
    if (!data.name.trim()) {
      errors.name = validarNombre;
    }
  
    if (!data.phone.trim()) {
      errors.phone = validarTelefono.a;
    } else if (!/^\d{7,14}$/.test(data.phone.trim())) {
      errors.phone = validarTelefono.b;
    }
  
    if (!data.email.trim()) {
      errors.email = validarEmail.a;
    } else if (!/\S+@\S+\.\S+/.test(data.email.trim())) {
      errors.email = validarEmail.b;
    }
  
    if (!data.message.trim()) {
      errors.message = validarMensaje;
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };
  