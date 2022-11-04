export function registerValidateName(input) {
    let nombreMax = 60
    let emailMax = 100
  
    let errors = {}
   
    
    if(!input.name){
      errors.name = "error"
    }else{
      errors.name = ""
    }
    if(input.name.legth === 0){
      errors.name = "error"
    }
    if(input.name < nombreMax) {
      errors.name= ""
    }
    else{
      errors.name = "error"
    }
    if(/[A-Za-z0-9]/.test(input.name)){
      errors.name = ""
    }
    else{
      errors.name = "error"
    }
    
    if(!input.password){
      errors.password = "error"
    }else{
      errors.password = ""
    }
    if(input.password.length <= 6){
      errors.password ="error"
     }else{
      errors.password = ""
     }
    return errors
  }

  export function registerValidateEmail(input){

    let emailMax = 100
  
    let errors = {}
   
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email)){
      errors.email = ""
      if(input.mail < emailMax){
            errors.email = ""
          }
         
        if(!input.email){
              errors.email = "error"
            }
            
    }else{
      errors.email = "error"
    }
    return errors
  }