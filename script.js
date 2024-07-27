/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, set, get, child, update } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
            apiKey: "AIzaSyD-DM0yFWbFpeIGF3eTSpDo8gOEvitRXkM",
            authDomain: "pruebahackathon-eea94.firebaseapp.com",
            projectId: "pruebahackathon-eea94",
            storageBucket: "pruebahackathon-eea94.appspot.com",
            messagingSenderId: "743812823032",
            appId: "1:743812823032:web:0d105ab1c5f02d52e6480d"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);*/

function iniciarCuestionario(){
    let botonRespuestaUsuario=document.getElementById('boton-respuesta')
    botonRespuestaUsuario.addEventListener('click', seleccionarRespuesta)
}
function seleccionarRespuesta(){
    let pregunta1, pregunta2, pregunta3, pregunta4, pregunta5
    let puntaje = 20
    let usuario = document.getElementById("usuario").value
    let inputrespuestauno=document.getElementById('1')
    let inputrespuestados=document.getElementById('2')
    let inputrespuestatres=document.getElementById('3')
    let inputrespuestacuatro=document.getElementById('4')
    let inputrespuestadosuno=document.getElementById('21')
    let inputrespuestadosdos=document.getElementById('22')
    let inputrespuestadostres=document.getElementById('23')
    let inputrespuestadoscuatro=document.getElementById('24')
    let inputrespuestatresuno=document.getElementById('31')
    let inputrespuestatresdos=document.getElementById('32')
    let inputrespuestatrestres=document.getElementById('33')
    let inputrespuestatrescuatro=document.getElementById('34')
    let inputrespuestacuatrouno=document.getElementById('41')
    let inputrespuestacuatrodos=document.getElementById('42')
    let inputrespuestacuatrotres=document.getElementById('43')
    let inputrespuestacuatrocuatro=document.getElementById('44')
    let inputrespuestacincouno=document.getElementById('51')
    let inputrespuestacincodos=document.getElementById('52')
    let inputrespuestacincotres=document.getElementById('53')
    let inputrespuestacincocuatro=document.getElementById('54')
    if (usuario === ""){
        alert("Ingresa un nombre de usuario")
        return;
    } else {
        if (inputrespuestauno.checked) {
            document.getElementById("correcta1").style.background = "#8aff7ace"
            pregunta1 = 1
        } else if (inputrespuestados.checked) {
            document.getElementById("correcta1").style.background = "#8aff7ace"
            pregunta1 = 1
        } else if (inputrespuestatres.checked) {
            puntaje = puntaje + 16
            pregunta1 = 1
        } else if (inputrespuestacuatro.checked) {
            document.getElementById("correcta1").style.background = "#8aff7ace"
            pregunta1 = 1
        } else {
            alert("Responde la pregunta 1")
        }
        if (inputrespuestadosuno.checked) {
            document.getElementById("correcta2").style.background = "#8aff7ace"
            pregunta2 = 1
        } else if (inputrespuestadosdos.checked) {
            puntaje = puntaje + 16
            pregunta2 = 1
        } else if (inputrespuestadostres.checked) {
            document.getElementById("correcta2").style.background = "#8aff7ace"
            pregunta2 = 1
        } else if (inputrespuestadoscuatro.checked) {
            document.getElementById("correcta2").style.background = "#8aff7ace"
            pregunta2 = 1
        } else {
            alert("Responde la pregunta 2")
        }
        if (inputrespuestatresuno.checked) {
            puntaje = puntaje + 16
            pregunta3 = 1
        } else if (inputrespuestatresdos.checked) {
            document.getElementById("correcta3").style.background = "#8aff7ace"
            pregunta3 = 1
        } else if (inputrespuestatrestres.checked) {
            document.getElementById("correcta3").style.background = "#8aff7ace"
            pregunta3 = 1
        } else if (inputrespuestatrescuatro.checked) {
            document.getElementById("correcta3").style.background = "#8aff7ace"
            pregunta3 = 1
        } else {
            alert("Responde la pregunta 3")
        }
        if (inputrespuestacuatrouno.checked) {
            document.getElementById("correcta4").style.background = "#8aff7ace"
            pregunta4 = 1
        } else if (inputrespuestacuatrodos.checked) {
            document.getElementById("correcta4").style.background = "#8aff7ace"
            pregunta4 = 1
        } else if (inputrespuestacuatrotres.checked) {
            puntaje = puntaje + 16
            pregunta4 = 1
        } else if (inputrespuestacuatrocuatro.checked) {
            document.getElementById("correcta4").style.background = "#8aff7ace"
            pregunta4 = 1
        } else {
            alert("Responde la pregunta 4")
        }
        if (inputrespuestacincouno.checked) {
            document.getElementById("correcta5").style.background = "#8aff7ace"
            pregunta5 = 1
        } else if (inputrespuestacincodos.checked) {
            document.getElementById("correcta5").style.background = "#8aff7ace"
            pregunta5 = 1
        } else if (inputrespuestacincotres.checked) {
            document.getElementById("correcta5").style.background = "#8aff7ace"
            pregunta5 = 1
        } else if (inputrespuestacincocuatro.checked) {
            puntaje = puntaje + 16
            pregunta5 = 1
        } else {
            alert("Responde la pregunta 5")
        }
        if (pregunta1 == 1 && pregunta2 == 1 && pregunta3 == 1 && pregunta4 == 1 && pregunta5 == 1 ){
            alert("¡" + usuario + " has obtenido un puntaje de " + puntaje + "!")
        } else {
            document.getElementById("correcta1").style.background = "#f0e8da"
            document.getElementById("correcta2").style.background = "#f0e8da"
            document.getElementById("correcta3").style.background = "#f0e8da"
            document.getElementById("correcta4").style.background = "#f0e8da"
            document.getElementById("correcta5").style.background = "#f0e8da"
        }
    }
}

window.addEventListener('load', iniciarCuestionario)