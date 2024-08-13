const inputs = document.querySelectorAll(".form__input")
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})

function showSignInForm() {
    document.getElementById('formContent').innerHTML = `
        <h1 style="font-size: var(--big-font-size); font-weight: 500; margin-bottom: 2rem;">New Warden Registration</h1>
        <div style="position: relative; display: grid; grid-template-columns: 7% 93%; margin-bottom: 3rem; padding: .25rem 0; border-bottom: 1px solid var(--text-color);">
            <div style="font-size: 1.5rem; color: var(--text-color); transition: .3s;">
                <i class='bx bx-user'></i>
            </div>
            <div style="position: relative;">
                <label style="display: block; position: absolute; left: .75rem; top: .25rem; font-size: var(--normal-font-size); color: var(--text-color); transition: .3s;">Name</label>
                <input type="text" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; outline: none; background: none; padding: .5rem .75rem; font-size: 1.2rem; color: var(--first-color); transition: .3s;">
            </div>
        </div>
        <div style="position: relative; display: grid; grid-template-columns: 7% 93%; margin-bottom: 30px; padding: .25rem 0; border-bottom: 1px solid var(--text-color);">
            <div style="font-size: 1.5rem; color: var(--text-color); transition: .3s;">
                <span class="material-symbols-outlined">call</span>
            </div>
            <div style="position: relative;">
                <label style="display: block; position: absolute; left: .75rem; top: .25rem; font-size: var(--normal-font-size); color: var(--text-color); transition: .3s;">Contact No</label>
                <input type="text" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; outline: none; background: none; padding: .5rem .75rem; font-size: 1.2rem; color: var(--first-color); transition: .3s;">
            </div>
        </div>
        <div style="position: relative; display: grid; grid-template-columns: 7% 93%; margin-bottom: 30px; padding: .25rem 0; border-bottom: 1px solid var(--text-color);">
            <div style="font-size: 1.5rem; color: var(--text-color); transition: .3s;">
                <span class="material-symbols-outlined">home</span>
            </div>
            <div style="position: relative;">
                <label style="display: block; position: absolute; left: .75rem; top: .25rem; font-size: var(--normal-font-size); color: var(--text-color); transition: .3s;">Address</label>
                <input type="text" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; outline: none; background: none; padding: .5rem .75rem; font-size: 1.2rem; color: var(--first-color); transition: .3s;">
            </div>
        </div>
        <div style="position: relative; display: grid; grid-template-columns: 7% 93%; margin-bottom: 30px; padding: .25rem 0; border-bottom: 1px solid var(--text-color);">
            <div style="font-size: 1.5rem; color: var(--text-color); transition: .3s;">
                <i class='bx bx-envelope'></i>
            </div>
            <div style="position: relative;">
                <label style="display: block; position: absolute; left: .75rem; top: .25rem; font-size: var(--normal-font-size); color: var(--text-color); transition: .3s;">Email</label>
                <input type="email" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; outline: none; background: none; padding: .5rem .75rem; font-size: 1.2rem; color: var(--first-color); transition: .3s;">
            </div>
        </div>
        <div style="position: relative; display: grid; grid-template-columns: 7% 93%; margin-bottom: 30px; padding: .25rem 0; border-bottom: 1px solid var(--text-color);">
            <div style="font-size: 1.5rem; color: var(--text-color); transition: .3s;">
                <i class='bx bx-lock'></i>
            </div>
            <div style="position: relative;">
                <label style="display: block; position: absolute; left: .75rem; top: .25rem; font-size: var(--normal-font-size); color: var(--text-color); transition: .3s;">Password</label>
                <input type="password" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; outline: none; background: none; padding: .5rem .75rem; font-size: 1.2rem; color: var(--first-color); transition: .3s;">
            </div>
        </div>
        <input type="button" value="Register" style="width: 100%; padding: 1rem; font-size: var(--normal-font-size); outline: none; border: none; margin-bottom: 3rem; background-color: var(--first-color); color: #fff; border-radius: .5rem; cursor: pointer; transition: .3s;">
        <p style="font-size: var(--normal-font-size); color: var(--text-color); text-align: center; margin-bottom: 1rem;">Already have an account?</p>
        <input type="button" value="Back to Login" onclick="showLoginForm()" style="width: 100%; padding: 1rem; font-size: var(--normal-font-size); outline: none; border: none; margin-bottom: 3rem; background-color: var(--first-color); color: #fff; border-radius: .5rem; cursor: pointer; transition: .3s;">
    `;
}

function showLoginForm() {
    document.getElementById('formContent').innerHTML = `
        <h1 style="font-size: var(--big-font-size); font-weight: 500; margin-bottom: 2rem;">Welcome To Phcet Hostel </h1>
        <div style="position: relative; display: grid; grid-template-columns: 7% 93%; margin-bottom: 3rem; padding: .25rem 0; border-bottom: 1px solid var(--text-color);">
            <div style="font-size: 1.5rem; color: var(--text-color); transition: .3s;">
                <i class='bx bx-user-circle'></i>
            </div>
            <div style="position: relative;">
                <label style="display: block; position: absolute; left: .75rem; top: .25rem; font-size: var(--normal-font-size); color: var(--text-color); transition: .3s;">Email</label>
                <input type="email" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; outline: none; background: none; padding: .5rem .75rem; font-size: 1.2rem; color: var(--first-color); transition: .3s;">
            </div>
        </div>
        <div style="position: relative; display: grid; grid-template-columns: 7% 93%; margin-bottom: 30px; padding: .25rem 0; border-bottom: 1px solid var(--text-color);">
            <div style="font-size: 1.5rem; color: var(--text-color); transition: .3s;">
                <i class='bx bx-lock' ></i>
            </div>
            <div style="position: relative;">
                <label style="display: block; position: absolute; left: .75rem; top: .25rem; font-size: var(--normal-font-size); color: var(--text-color); transition: .3s;">Password</label>
                <input type="password" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; outline: none; background: none; padding: .5rem .75rem; font-size: 1.2rem; color: var(--first-color); transition: .3s;">
            </div>
        </div>
        <input type="button" value="Login" style="width: 100%; padding: 1rem; font-size: var(--normal-font-size); outline: none; border: none; margin-bottom: 3rem; background-color: var(--first-color); color: #fff; border-radius: .5rem; cursor: pointer; transition: .3s;">
        <p style="font-size: var(--normal-font-size); color: var(--text-color); text-align: center; margin-bottom: 1rem;">New Student?</p>
        <input type="button" value="Sign In" onclick="showSignInForm()" style="width: 100%; padding: 1rem; font-size: var(--normal-font-size); outline: none; border: none; margin-bottom: 3rem; background-color: var(--first-color); color: #fff; border-radius: .5rem; cursor: pointer; transition: .3s;">
    `;
}