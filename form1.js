function validateForm() {
    let name = document.getElementById('name').value;
    let roll = document.getElementById('rollno').value;
    let gen = document.getElementById('gen').value;
    let year = document.getElementById('years').value;
    let dep = document.getElementById('dept').value;
    let sec = document.getElementById('sec').value;
    let num = document.getElementById('num').value;
    let mail = document.getElementById('mail').value;
    let add = document.getElementById('add').value;
    let city = document.getElementById('city').value;
    let coun = document.getElementById('coun').value;
    let pin = document.getElementById('pin').value;

    let namerejex = /^[A-Za-z]+$/;
    let rollrejex = /^[0-9]{9}$/;
    let mnumrejex = /^[0-9]{10}$/;
    let mailrejex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let pinrejex = /^[0-9]{6}$/;

    let n = document.getElementById('name1');
    let r = document.getElementById('roll1');
    let g = document.getElementById('gen1');
    let y = document.getElementById('year1');
    let d = document.getElementById('dept1');
    let s = document.getElementById('sec1');
    let mn = document.getElementById('mnum1');
    let e = document.getElementById('mail1');
    let ad = document.getElementById('add1');
    let c = document.getElementById('city1');
    let co = document.getElementById('coun1');
    let p = document.getElementById('pin1');

    if (!namerejex.test(name)) {
        n.innerHTML = "Enter Valid name";
        return false;
    }
    else{
        n.innerHTML = "";
    }
    if (!rollrejex.test(roll)) {
        r.innerHTML = "Enter valid roll no";
        return false;
    }
    else{
        r.innerHTML = "";
    }
    if (gen === "" || gen === null) {
        g.innerHTML = "select value";
        return false;
    }
    else{
        g.innerHTML = "";
    }
    if (year === "" || year === null) {
        y.innerHTML = "select year";
        return false;
    }
    else{
        y.innerHTML = "";
    }
    if (dep === "" || dep === null) {
        d.innerHTML = "select dep";
        return false;
    }
    else{
        d.innerHTML = "";
    }
    if (sec === "" || sec === null) {
        s.innerHTML = "select section";
        return false;
    }
    else{
        s.innerHTML = "";
    }
    if (!mnumrejex.test(num)) {
        mn.innerHTML = "Enter Mobile number";
        return false;
    }
    else{
        mn.innerHTML = "";
    }
    if (!mailrejex.test(mail)) {
        e.innerHTML = "Enter valid mail Id";
        return false;
    }
    else{
        e.innerHTML = "";
    }
    if (add === "" || add === null) {
        ad.innerHTML = "Enter valid address";
        return false;
    }
    else{
        ad.innerHTML = "";
    }
    if (city === "" || city === null) {
        c.innerHTML = "Enter city name";
        return false;
    }
    else{
        c.innerHTML = "";
    }
    if (coun === "" || coun === null) {
        co.innerHTML = "Enter country name";
        return false;
    }
    else{
        co.innerHTML = "";
    }
    if (!pinrejex.test(pin)) {
        p.innerHTML = "Enter valid Pin code";
        return false;
    }
    else{
        p.innerHTML = "";
    }
    return true;
}
