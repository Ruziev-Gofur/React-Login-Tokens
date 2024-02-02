
import './App.css';

function App() {
  return (
    <main className="form-signin">
  <form>
    <h1 className="h3 mb-3 fw-normal">Welcome to Materio!</h1>

    <div className="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>
                                  
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
   
  </form>
</main>
  );
}

export default App;
