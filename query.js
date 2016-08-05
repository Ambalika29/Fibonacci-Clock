(function(event){
	var app = {
		getCurrentTime: function(event){
			var date = new Date();
			var hours = date.getHours();
			if(hours>12){
				hours -= 12;
			}
			var minutes = date.getMinutes();
			$("#currentTime").val(hours + ":" + minutes);
			app.showClock(hours, minutes);
		},

		showClock: function(hours, minutes){
			var box5 = $("#box5");
			var box3 = $("#box3");
			var box2 = $("#box2");
			var box1t = $("#topOne");
			var box1b = $("#bottomOne");

			var iterator = [5,3,2,1,1];
			var display = [{box:box5, isHour: false, isMin: false},
						   {box:box3, isHour: false, isMin: false},
						   {box:box2, isHour: false, isMin: false},
						   {box:box1t, isHour: false, isMin: false},
						   {box:box1b, isHour: false, isMin: false},
						  ];

			//clear all previous colour
			$(".container").children("div").css("background-color" , "white");
			// console.log(hours " + " minutes);

			//calculate hour
			var i = 0;
			while(hours>0 && i < 5){
				if(hours >= iterator[i]){
					hours -= iterator[i]
					display[i].isHour = true;
				}
				i++;
			}

			// calculate minutes
			i = 0;
			

			var remainder = Math.abs(minutes)%5;
			if(remainder>2){
				var digit = Math.ceil(minutes/5);
				console.log(digit);
			}else{
				digit = Math.floor(minutes/5);
				console.log(digit);
			}

			while(digit>0 && i < 5){
				if(digit >= iterator[i]){
					digit -= iterator[i]
					display[i].isMin = true;
				}
				i++;
			}

			//Show colors
			for(i = 0; i<5; i++){
				if(display[i].isHour && display[i].isMin){
					display[i].box.css("background-color" , "blue");
				}else if(display[i].isHour){
					display[i].box.css("background-color" , "red");
				}else if(display[i].isMin){
					display[i].box.css("background-color" , "green");
				}
			}
		}
	};
	$(document).ready(function(event){
		app.getCurrentTime();
	});
})();