class myDemoAppLLoginPage{
    get usernameInput(){
        return $('//android.widget.EditText[@content-desc="Username input field"]')
    }

    get passwordInput(){
        return $('//android.widget.EditText[@content-desc="Password input field"]')
    }

    get loginButton(){
        return $('//android.widget.Button[@content-desc="Login button"]')
    }

    async login(username, password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }   

}
export default new myDemoAppLoginPage();