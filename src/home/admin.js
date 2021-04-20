import '../App.css';
import sw from 'sweetalert';

let final=window.localStorage.getItem("listado");
function volver(){
    window.location.replace('/')
}

function registros(){
 sw({
     title:"Estos son los registros",
     text: final,
     icon:"warning",
     button:"Aceptar"
 });
}

function admin(){
    return (
        <div class="conatainer is-max-desktop">
            <section class="hero is-warning">
             <div class="hero-body">
                <p class="title has-text-centered">
                    Soy un usario <strong>Administrador</strong>
                </p>
                <p class="subtitle has-text-centered">
                    Aqui tengo beneficios
                </p>
            </div>
            </section>
            <br></br>
            <div class="container is-max-desktop">
            <div class="field">
              <p class="control">
                <button class="button" onClick={registros}  >
                  Registros
                </button>
              </p>
            </div>
            <br></br>
            <div class="field">
              <p class="control">
                <button class="button is-danger" onClick={volver} >
                  Volver
                </button>
              </p>
            </div>
          </div>
        </div>
    );
}
export default admin;