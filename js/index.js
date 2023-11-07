
alert("Bienvenido a Clinica Salud,  La seguridad y el bienestar de nuestros pacientes y el personal son nuestra principal prioridad, clic en Aceptar para continuar ")

let nombre;
let actividad;

do {
    nombre = prompt("Ingrese su nombre").toLowerCase()
    email = prompt("Ingrese su email registrado")
    pass = prompt("Ingrese su contraseña")
    confirmar = confirm("Ingreso sus datos correctos, clic en Aceptar si es correcto")
} while (confirmar == false);

console.log(`Bienvenido ${nombre} Clinica Salud,  La seguridad y el bienestar de nuestros pacientes y el personal son nuestra principal prioridad `);


do {
    actividad = parseInt(prompt('Digite la opcion que desea realizar \n1.SEPARAR CITA MEDICA \n2.COMPRAR MEDICAMENTOS \n3.CALCULAR SU IMC'
    ))
} while (actividad == 0 || actividad > 3 || isNaN(actividad))

console.log(actividad);

switch (actividad) {
    case 1:
        do {
            especilidad = parseInt(prompt("ELIJA LA ESPECIALIDAD EN LA CUAL DESEA ATENDERSE \n1.Cardiologia \n2.Nutricion \n3.Dermatologia \n4.Pediatria \n5.Medicina Fisica"))
        } while (especilidad == 0 || especilidad > 5 || isNaN(especilidad))

        if (especilidad == 1) {
            nombreDoctor = prompt("Escriba el nombre del doctor con el cual desea atenderse \n1.Maria Nieves Quevedo \n2.Andreu Cantos \n3.Antonio Francisco Nogales \n4.Maria Begoña Pastor")
            nombreEspecialidad = "Cardiologia";
        } else if (especilidad == 2) {
            nombreDoctor = prompt("Escriba el nombre del doctor con el cual desea atenderse \n1.Salvadora Soto \n2.Leire Candela \n3.Ane Mariño \n4.Erika Merino")
            nombreEspecialidad = "Nutricion";
        } else if (especilidad === 3) {
            nombreDoctor = prompt("Escriba el nombre del doctor con el cual desea atenderse \n1.Baltasar Sabater \n2.Modesta Casal \n3.Pascual Franco \n4.Maria Rosa Adan")
            nombreEspecialidad = "Dermatologia";
        } else if (especilidad == 4) {
            nombreDoctor = prompt("Escriba el nombre del doctor con el cual desea atenderse \n1.Jose Alejandro Gamero \n2.Jennifer da Silva \n3.Vera Gomez \n4.Abdelkader Cuenca")
            nombreEspecialidad = "Pediatria";
        } else {
            nombreDoctor = prompt("Escriba el nombre del doctor con el cual desea atenderse \n1.Fernando Jose Pérez \n2.Dominga Aguirre \n3.Sandra Llopis \n4.Lluc Baños")
            nombreEspecialidad = "Medicina Fisica";
        }
        horario = prompt("Ingrese un rango de horario para su atencion (horario de 8:00am - 9:00pm)")
        nombreCompleto = prompt("Ingrese su nombre completo")
        identificacion = parseInt(prompt("Ingrese su DNI (carne de indentificacion)"))
        telefono = parseInt(parseInt(prompt("Ingrese su número telefonico")))
        metodoPago = prompt("Elija el metodo de pago \n1.Tarjeta \n2.Yape \n3.Plin \n4.Efectivo")

        function ImprimirCita() {
            console.log("IMPRIMIENDO CITA MEDICA");
            console.log("********************************");
            console.log("********************************");
            console.log(`Especialidad elegida : ${nombreEspecialidad}`);
            console.log(`Nombre del doctor: ${nombreDoctor}`);
            console.log(`Hoarario elegido: ${horario}`);
            console.log(`Nombre y Apellido: ${nombreCompleto}`);
            console.log(`Telefono: ${telefono}`);
            console.log(`Metodo de pago: ${metodoPago}`);

        }
        ImprimirCita()
        break;
    case 2:
        do {
            medicamento = parseInt(prompt("Lista de medicamentos disponibles, Digite el que comprara \n1.Aspirina \n2.Omeprazol \n3.Paracetamol \n4.Salbutamol \n5.Levotiroxina \n6.Atorvastatina"))
        } while (medicamento == 0 || medicamento > 6 || isNaN(medicamento))
        let cantidad = parseInt(prompt("Cantidad que comprara"))
        let IGV = 0.18;
        let precioUnidad;
        let precioTotal;
        let descuento;
        let precioPagar;

        function calcularPagoFinal(precioUnidad) {
            if (cantidad > 0 && cantidad < 5) {
                descuento = 0.3;
                precioTotal = precioUnidad * cantidad + precioUnidad * cantidad * IGV;
                precioPagar = precioTotal - precioTotal * descuento;

            } else {
                descuento = 0.5;
                precioTotal = precioUnidad * cantidad + precioUnidad * cantidad * IGV;
                precioPagar = precioTotal - precioTotal * descuento;
            }
        }
        if (medicamento == 1) {
            precioUnidad = 5
            calcularPagoFinal(precioUnidad)
            nombreMedicamento = "Aspirina";
        } else if (medicamento == 2) {
            precioUnidad == 4
            calcularPagoFinal(precioUnidad)
            nombreMedicamento = "Omeprazol";
        } else if (medicamento == 3) {
            precioUnidad == 6
            calcularPagoFinal(precioUnidad)
            nombreMedicamento = "Paracetamol";
        } else if (medicamento == 4) {
            precioUnidad == 2
            calcularPagoFinal(precioUnidad)
            nombreMedicamento = "Salbutamol";
        } else if (medicamento == 5) {
            precioUnidad == 8
            calcularPagoFinal(precioUnidad)
            nombreMedicamento = "Levotiroxina";
        } else {
            precioUnidad == 7
            calcularPagoFinal(precioUnidad)
            nombreMedicamento = "Atorvastatina";
        }
        function ImprimirBoleta() {
            console.log("IMPRIMIENDO MEDICAMENTO");
            console.log("********************************");
            console.log("********************************");
            console.log(`Nombre del medicamento : ${nombreMedicamento}`);
            console.log(`Precio Unitario: S/. ${precioUnidad}`);
            console.log(`Cantidad: ${cantidad}`);
            console.log(`Precio sin descuento: S/. ${precioTotal}`);
            console.log(`Precio con descuento: S/. ${precioPagar}`);
        }
        ImprimirBoleta()
        break;
    case 3:
        estatura = parseFloat(prompt("Ingrese su estarua en metros"))
        peso = parseFloat(prompt("Ingrese su peso en KG"))
        let imc;
        function calcularIMC() {
            return imc = peso / Math.pow(estatura, 2)
        }
        if (calcularIMC() < 18.5) {
            indiceMasa = "Bajo en peso"
        } else if (calcularIMC() >= 18.5 && calcularIMC() <= 24.9) {
            indiceMasa = "Peso Normal"
        } else if (calcularIMC >= 25 && calcularIMC() <= 29.9) {
            indiceMasa = "Sobrepeso"
        } else {
            indiceMasa = "Obesidad"
        }
        function ImprimirIMC() {
            console.log("IMPRIMIENDO IMC");
            console.log("********************************");
            console.log("********************************");
            console.log(`Su estatura es : ${estatura} metros`);
            console.log(`Su peso es: ${peso} KG`);
            console.log(`Su IMC: ${calcularIMC()}`);
            console.log(`Su indice de masa es: S/. ${indiceMasa}`);
        }
        ImprimirIMC()
        break;
    default:
        break;
}

