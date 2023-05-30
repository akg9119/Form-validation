function DisplayForm() {
    var name = document.getElementById('name').value;
    var mobileNo = document.getElementById('mobileNo').value;
    var email = document.getElementById('email').value;
    var pincode = document.getElementById('pincode').value;

    if (name.trim() === '' || !name.match(/^[a-zA-Z\s]+$/)) {
        alert('Please enter your name correctly.');
        return false;
    }

    if (mobileNo.trim() === '' || isNaN(mobileNo) || !mobileNo.match(/^\d{1,10}$/) ) {
        alert('Please enter a valid mobile number correctly.');
        return false;
    }

    if (email.trim() === '' || !email.match(/^[a-zA-Z0-9._%+-]$/)) {
        alert('Please enter your email address correctly.');
        return false;
    }

    if (pincode.trim() === '' || isNaN(pincode) || !pincode.match( /^\d{1,9}$/)) {
        alert('Please enter a valid pincode correctly.');
        return false;
    }

    return true;
}