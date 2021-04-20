import './App.css';
 
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
  if ((id1==="Admin" && id2==="Admin") || (id1==="root" && id2==="root") ) {
    window.location.replace('/AdminH');
  }
  if(id1==="David" && id2==="Rivera"){
    window.location.replace('/User');
  }
}

function App() {
  
  return (
      
        <div className="field"> 
         {console.log("https://github.com/ArtemisaF/login/blob/master/README.md")}
          <div class="container">
            <div class="notification is-link has-text-centered">
                Este es mi <strong>Login</strong> para exponer
            </div>
          </div>
          <div class="container is-max-desktop">
          <label class="label">Usuario</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-link" type="text" id="id1" placeholder="Ingrese su usuario" ></input>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>

          </div>
          <label class="label">Contraseña</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="password" id="id2"  placeholder="Ingrese su contraseña" ></input>
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

export default App;
