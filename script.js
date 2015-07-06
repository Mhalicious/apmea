var w = window.innerWidth;
var h = window.innerHeight;


function slide()
{

	console.log("slide");

	var popup = document.getElementById("slide");
	popup.style.visibility = "visible";

	popup.style.height = divheight;


	var x = -800;
	// var maxX = 200;
	var divheight = 50;
	var maxHeight = 250;
	var timer = setInterval(function() {
	   x += 5;
	   popup.style.left = x + "px";

	   if (x >= 200)
	   {
	   	   //popup.style.left = maxX + "px";

		  //  var innerTimer = setInterval(function()
		  //  {
		  //     divheight += 5;
		  //     popup.style.height = divheight + "px";
			//
		  //     if (divheight >= maxHeight)
		  //     {
		  //         popup.style.height = maxHeight + "px";
			//       clearInterval(innerTimer);
		  //     }
		  //  }, 10);

		   clearInterval(timer);
	   }
	}, 5);

}

function time()
{
	console.log("time");

	window.setTimeout("slide()",4000);
}
