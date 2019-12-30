let user = prompt('Write your email!');
let n5 = 5;
let n6 = 6;

if (!user || user.trim() === '') {
    alert('Canceled');
} else {
    user = user.trim();
    if (user.length < n5) {
        alert('I don\'t know any emails having name length less than 5 symbols');
    } else if ( user !== 'user@gmail.com' && user !== 'admin@gmail.com'){        
        alert('I don’t know you');
    } else {
        let password = prompt('Write your password!');
        if (!password || password.trim() === ''){
            alert('Canceled');            
        } else if (user === 'user@gmail.com' && password === 'UserPass') {            
            let changePassword = confirm('Do you want to change your password?');
            if (changePassword) {
                let oldPass = prompt('Write old password');
                if (oldPass === 'UserPass') {
                    let newPassword = prompt('Write new password');
                    if (!newPassword || newPassword.trim() === '') {
                        alert('Canceled');
                    } else if (newPassword.length < n6){
                        alert('It’s too short password. Sorry.');
                    } else {
                        let confirmPassword = prompt('Confirm your password.');
                        if (confirmPassword === newPassword){
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                } else {
                    alert('Canceled');
                }             
            } else {
                alert('You have failed the change.');
            }    
        } else if (user === 'admin@gmail.com' && password === 'AdminPass') {  
            let changePassword = confirm('Do you want to change your password?');
            if (changePassword) {
                let oldPass = prompt('Write old password');
                if (oldPass === 'AdminPass') {
                    let newPassword = prompt('Write new password');
                    if (!newPassword || newPassword.trim() === '') {
                        alert('Canceled');
                    } else if (newPassword.length < n6){
                        alert('It’s too short password. Sorry.');
                    } else {
                        let confirmPassword = prompt('Confirm your password.');
                        if (confirmPassword === newPassword){
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                } else {
                    alert('Canceled');
                }  
            } else {
                alert('You have failed the change.');
            }        
        } else {
            alert('Wrong password');
        }
    }
}