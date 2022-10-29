export const generateUUID = ():string => {
    let template = 'XXXX-XXXX-XXXX-XXXX';
    const templateChars = [...template];
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for(let i = 0; i < template.length; i++){
        if (template[i] != '-'){
            templateChars[i] = chars[Math.floor(Math.random() * 62)];
        }
    }
    let output: string = templateChars.join('');
    return output;
}