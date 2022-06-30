const aa = 2
const bb = 3
const cc = 5
const d ="5"
const e = 2

const AmayorB = aa>bb //false
const AmenorB = aa<bb //true

const AmayorigualB = aa>=bb//false
const AmenorigualB = aa<=bb//true

const AmayorigualE = aa>=e//true
const AmenorigualE = aa<=e//true

//IGUALDAD ESTRICTA

const AigualB = aa===bb //false
const AigualE = aa===e //true

//IGUALDAD ABSTRACTA
const CigualD = cc==d//true porque la igualdad abstracta convierte ambas variables al mismo tipo y las compara 

//DESIGUALDAD ESTRICTA
const CdesigualD = cc!==d//true porque son de distinto tipo

//DESIGUALDAD ABSTRACTA 
const CdesigualAbsD = cc!=d//false porque las convierte en variables del mismo tipo y compara.