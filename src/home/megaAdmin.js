import '../App.css';
 
let list=[];
let contador=1; 

function entrar(){
  let id1= document.getElementById("id1").value;
  let id2= document.getElementById("id2").value;
  list.push(contador);
  list.push(id1);
  list.push(id2);
  list.push("\n");
  window.localStorage.setItem("listado",list);
  contador++;
  if (id1==="Admin" && id2==="Admin") {
    window.location.replace('/AdminH');
  }
  
}

function megaAdmin() {
  
  return (
      
        <div className="field"> 
          <div class="container">
            <div class="notification is-link has-text-centered">
                Este es mi <strong>Login de Administrador</strong> para exponer
            </div>
          </div>
          <div class="container is-max-desktop">
          <label class="label">Usuario</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-link" type="text" id="id1" placeholder="Ingrese su usuario" value="Admin"></input>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>

          </div>
          <label class="label">Contraseña</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="password" id="id2"  placeholder="Ingrese su contraseña" value="Admin" ></input>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>

          </div>
          <br></br>
          <div class="container is-max-desktop">
            <div class="field">
              <p class="control">
                <button class="button is-success" onClick={entrar} >
                  Login
                </button>
              </p>
            </div>
          </div>

          </div>

         

          



        </div>

        

    
  );
}

export default megaAdmin;
