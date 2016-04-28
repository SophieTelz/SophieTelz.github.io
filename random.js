
$("button").click(function draw(direction) {
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height); 
    var img = document.getElementById("cat");
    var pat = ctx.createPattern(img, direction);
    ctx.rect(0, 0, 150, 100);
    ctx.fillStyle = pat;
    ctx.fill();
    
}
);

$("body").css("background-color", "yellow");

var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

var currentimg = false;

for (var i = 0; i < 100; i++) {
    $("body").append("<div class='box'></div>");
};

$(".mybutton").click(function() {
    
    $(".box").each(function() {
    var randtop = Math.floor(Math.random() * 1000) + "px";
    var randleft = Math.floor(Math.random() * 1000) + "px";
    
   $(this).css("top", randtop);
   $(this).css("left", randleft);
  
});
    var randomimg = images[Math.floor(Math.random()*images.length)];
    
    while (randomimg == currentimg) {
        randomimg = images[Math.floor(Math.random()*images.length)];
    }
    
    currentimg = randomimg;
    
    $(".stage").html("<img src='img/" + randomimg + "'>");
});