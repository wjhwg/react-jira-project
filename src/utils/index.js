export const isFalsy = (value) => (value === 0 ? false : !value);

export const isVoid = (value) => value === undefined || value === null || value === "";

export const cleanObject = (object) => {
    if(!object){
        return {};
    }
    const result = {...object};
    Object.keys(object).forEach((key) =>{
        const value = result[key];
        if(isFalsy(value)) {
            delete result[key];
        }
    });
    return result;
}