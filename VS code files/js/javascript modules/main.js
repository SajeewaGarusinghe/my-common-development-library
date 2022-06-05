import { author, sayHi as Hi } from './modules.js';
import Vehicle from "./cars.js";


console.log(author);
Hi();

const honda = new Vehicle('Honda');
console.log(honda.brand);
