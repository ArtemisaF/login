import '../App.css';
 
function volver(){
    window.location.replace('/')
}
function user(){
    return (
        <div class="conatainer is-max-desktop">
            <section class="hero is-dark">
             <div class="hero-body">
                <p class="title has-text-centered">
                    Soy un usario <strong>Normal</strong>
                </p>
                <p class="subtitle has-text-centered">
                    Aqui estoy
                </p>
            </div>
            </section>
            <br></br>
            <div class="field">
              <p class="control">
                <button class="button is-danger" onClick={volver} >
                  Volver
                </button>
              </p>
            </div>
        </div>
    );
}
export default user;