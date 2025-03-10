import "../Components/cssComponents/inputbar.css";

function Username(){
    return(
    <div className="inputbar">
        <label>Username</label>
        <input type="text" id="username" name="username" placeholder="Masukkan Username"/>
    </div>
    );
}

export default Username;