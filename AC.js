Status = "";
AC_image = "";

function preload() {
    AC_image = loadImage("AC.avif");
}

function setup() {
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);

    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log(modelLoaded);
    Status = true;
    object_detector.Detect(AC_image, gotResults);
}

function gotResults(results, error) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(AC_image, 0, 0, 640, 350);
}