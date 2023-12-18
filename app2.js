console.log(process.argv);


let suma = 0
for (let i = 2; i < process.argv.length; i++) {
    
    console.log( process.argv[i]);
    suma= suma + process.argv[i]
    
}
console.log(`suma es ${suma}`);
console.log(process.memoryUsage());