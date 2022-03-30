function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);

    vid=createCapture(VIDEO);
    vid.hide();
    color="";
}
function draw(){
    image(vid, 0, 0, 640, 480);
    tint(color);
}

 function apply(){
     color=document.getElementById("filter").value;
 }

 function take_snapshot() {
     save('filter-snapshot.png');
 }