export const saveSesionInStorage = (sesionData) =>{
    sessionStorage.setItem('sigafSesionToken',JSON.stringify(sesionData));
};

export const loadSessionFromStorage = () =>{
    let data = JSON.parse(window.sessionStorage.sigafSesionToken);
    if(data !== null && data !== undefined){
        return(data);
    }
    else{
        return false;
    }
}

export const removeSesionFromStorage = () =>{
    sessionStorage.removeItem('sigafSesionToken');
}