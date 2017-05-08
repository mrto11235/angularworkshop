import {Greeter} from "./app/greeter";

const greeter = new Greeter("world");

document.body.innerHTML = greeter.getGreeting();