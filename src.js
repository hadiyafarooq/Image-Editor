//Hadiya Farooq
//20I-0579
//Assignment 2
//Section A

var check = "check";
var b =0;
var s =0;
var i= 0;
var  g = 0;

var add_b = 0;
var add_s = 0;
var add_i = 0;
var add_g = 0;
var bright = document.getElementById("brightness");

defalt();
chng();
document.getElementById("n").innerHTML= 'Brightness';
var satur = document.getElementById("saturation");
var inv = document.getElementById("inversion");
var gray = document.getElementById("grayscale");
var img = document.getElementById("image");
var left = document.getElementById("left");
var right = document.getElementById("right");
var rotate_lef = 0;
var rotate_righ= 0;
var flip_ver = 1;
var flip_hor = 1;

function defalt()
{
    bright.style.backgroundColor = "#5372F0";
    bright.style.color = "#fff";
    check = "bright";
}

function brightness()
{
    bright.style.backgroundColor = "#5372F0";
    bright.style.color = "#fff";
    
addEventListener("click",function onClick()
    {
        bright.style.backgroundColor = "#5372F0";
        bright.style.color = "#fff";
        satur.style.backgroundColor = "#fff";
        satur.style.color = "#6C757D";
        inv.style.backgroundColor = "#fff";
        inv.style.color = "#6C757D";
        gray.style.backgroundColor = "#fff";
        gray.style.color = "#6C757D";

        document.getElementById("n").innerHTML= 'Brightness';
        
    }
    
);
check = "bright";
}

function saturation()
{
    
    addEventListener("click",function onClick()
        {           
        satur.style.backgroundColor = "#5372F0";
        satur.style.color = "#fff";
        bright.style.backgroundColor = "#fff";
        bright.style.color = "#6C757D";
        inv.style.backgroundColor = "#fff";
        inv.style.color = "#6C757D";
        gray.style.backgroundColor = "#fff";
        gray.style.color = "#6C757D";
            
        document.getElementById("n").innerHTML = 'Saturation';
        
        }

    );
    check = "saturate";
}

function inversion()
{

addEventListener("click",function onClick()
    {    
        inv.style.backgroundColor = "#5372F0";
        inv.style.color = "#fff";
        satur.style.backgroundColor = "#fff";
        satur.style.color = "#6C757D";
        bright.style.backgroundColor = "#fff";
        bright.style.color = "#6C757D";
        gray.style.backgroundColor = "#fff";
        gray.style.color = "#6C757D";
        document.getElementById("n").innerHTML = 'Inversion';   
    }

);
check = "invert";
}

function grayscale()
{

addEventListener("click",function onClick()
    {
        gray.style.backgroundColor = "#5372F0";
        gray.style.color = "#fff";
        satur.style.backgroundColor = "#fff";
        satur.style.color = "#6C757D";
        inv.style.backgroundColor = "#fff";
        inv.style.color = "#6C757D";
        bright.style.backgroundColor = "#fff";
        bright.style.color = "#6C757D";
        
        document.getElementById("n").innerHTML = 'Grayscale';   
    }
);
check = "gray";
}

function flip_horizontal()
{
    switch(flip_hor){
        case 1:
            img.style.transform = "scaleX(-1)";
            flip_hor = -1;
            break;
            case -1:
                img.style.transform = "scaleX(1)";
                flip_hor = 1;
                break;
    }
}

function flip_vertical()
{
    switch(flip_ver){
        case 1:
            img.style.transform = "scaleY(-1)";
            flip_ver = -1;
            break;
            case -1:
                img.style.transform = "scaleY(1)";
                flip_ver = 1;
                break;
    }
}

function rotate_left()
{
    rotate_lef -= 90;
    img.style.transform = "rotate(" + rotate_lef + "deg)"; 
}

function rotate_right()
{

        rotate_righ += 90;
        img.style.transform = "rotate(" + rotate_righ + "deg)";
    
}

//THIS FUNCTION IMPLEMENTS THE FILTERS
function chng()
{
    if(check == "bright")
    {
    b = document.getElementById("slide").value;
    document.getElementById("display").innerHTML = b + "%";
    document.getElementById("image").style.filter = "brightness(" + b + "%)";
    }

    if(check == "saturate")
    {
    s = document.getElementById("slide").value;
    document.getElementById("display").innerHTML = s + "%";
    document.getElementById("image").style.filter = "saturate("+ s +"%)";
    }

    if(check == "invert")
    {
    i = document.getElementById("slide").value;
    document.getElementById("display").innerHTML = i + "%";
    document.getElementById("image").style.filter = "invert(" + i +"%)";
    }
    
    if(check == "gray")
    {
    g = document.getElementById("slide").value;
    document.getElementById("display").innerHTML = g + "%";
    document.getElementById("image").style.filter = "grayscale("+ g +"%)";
    }

}

//THIS FUNCTION RESETS ALL THE VARIABLES, FILTERS AND POSITIONS 
function resetfilters()
{
    rotate_lef = 0;
    rotate_righ= 0;
    flip_ver = 1;
    flip_hor = 1;
    b = 0;
    s = 0;
    i = 0;
    g = 0;

    document.getElementById("image").style.transform = "scaleX(1)";
    document.getElementById("image").style.transform = "scaleY(1)";
    document.getElementById("image").style.transform = "rotate(0deg)";
    document.getElementById("image").style.filter = "none";
    defalt();
}

//FUNCTIONS TO UPLOAD AND DISPLAY IMAGE
function remv()
{
    document.querySelector(".container").classList.remove("disable");
    console.log("hi");
    // const choosebutton = document.getElementsByClassName("file-input");
    // const upload = document.getElementsByClassName("choose-img");
}

function choose()
{
    console.log("hi");
    // const choosebutton = document.getElementsByClassName("file-input");
    // const upload = document.getElementsByClassName("choose-img");
    document.querySelector(".file-input").click();
    
}

function show()
{
    console.log("hi");
    // const choosebutton = document.getElementsByClassName("file-input");
    // const upload = document.getElementsByClassName("choose-img");
    var showpic = document.querySelector(".file-input").files[0];
    if(!showpic)
    {
        return;
    }

    else
    {
        document.querySelector(".preview-img img").src = URL.createObjectURL(showpic);
        document.querySelector(".preview-img img").onload =remv();
    }
}

function additional_gray()
{

    add_b = document.getElementById("slide1").value;
    document.getElementById("disp1").innerHTML = add_b + "%";
    document.getElementById("image").style.filter = "grayscale(" + add_b + "%)";
}
function additional_blur()
{
    add_s = document.getElementById("slide2").value;
    document.getElementById("disp2").innerHTML = add_s + "%";
    document.getElementById("image").style.filter = "blur("+ add_s +"px)";
}

function additional_rot()
{
    add_i = document.getElementById("slide3").value;
    document.getElementById("disp3").innerHTML = add_i + "%";
    add_i += 1;
    document.getElementById("image").style.transform = "rotate("+ add_i +"deg)";
}

function additional_sep()
{
    add_g = document.getElementById("slide4").value;
    document.getElementById("disp4").innerHTML = add_g + "%";
    add_g += 1;
    document.getElementById("image").style.filter = "sepia("+ add_g +"%)";
}

    // if(document.getElementById("slide3").value)
    // {
    // add_i = document.getElementById("slide3").value;
    // //document.getElementById("display").innerHTML = i + "%";
    // document.getElementById("image").style.filter = "invert(" + add_i +"%)";
    // }
    
    // if(check == "gray")
    // {
    // g = document.getElementById("slide").value;
    // document.getElementById("display").innerHTML = g + "%";
    // document.getElementById("image").style.filter = "grayscale("+ g +"%)";
    // }

// upload.addEventListener("click",function(){
//     //document.querySelector("choose-img");
//     choosebutton.click();
// });

// function reset_brightness()
// {
//     document.getElementById("inversion").reset();
//     document.getElementById("grayscale").reset();
//     document.getElementById("saturation").reset();
// }

// function reset_saturation()
// {
//     document.getElementById("inversion").reset();
//     document.getElementById("grayscale").reset();
//     document.getElementById("brightness").reset();
// }

// function reset_inversion()
// {
//     document.getElementById("saturation").reset();
//     document.getElementById("grayscale").reset();
//     document.getElementById("brightness").reset();
// }
// function reset_grayscale()
// {
//     document.getElementById("inversion").reset();
//     document.getElementById("saturation").reset();
//     document.getElementById("brightness").reset();
// }
// function resetfilters()
// {
//     var img = document.getElementById("image");
//     img.innerHTML.
// }
//choosebutton.addEventListener("change",file-input);