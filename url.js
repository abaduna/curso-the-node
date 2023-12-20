const miURL = new URL(`https://www.ejemplo.org/curso/programacion?ordenar=vistas&nivel=1`)

console.log(miURL.hostname);//www.ejemplo.org

console.log(miURL.pathname);// /curso/programacion

console.log(miURL.searchParams); //{ 'ordenar' => 'vistas', 'nivel' => '1' } obj

console.log(miURL.searchParams.get(`ordenar`));

