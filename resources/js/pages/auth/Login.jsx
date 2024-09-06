import '../../../css/login.css'

export default function login(){
    return(
        <div>
            <form>
                <div class="login-container">
                    <h1 class="form-title">Login</h1>
                    <div class="form-section">
                        <label class="form-label">Username</label>
                        <input class="form-control" type="text" name="username" />
                    </div>
                    <div class="form-section">
                        <label class="form-label">Password</label>
                        <input class="form-control" type="password" name="password" />
                    </div>
                </div>
            </form>
        </div>
    )
}