// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

// run in the console:
q1()

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// run in the console:
q22()
q2()
q22()

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// run in the console:
q3()
q32()

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// run in the console:
q4()

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);