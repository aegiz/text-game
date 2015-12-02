var etapes = [];
var compteur = 0;
var recap = [];
var lastVal = "";

$(function() {
	var progress = {
		0: "25",
		1: "35",
		2: "50",
		3: "53",
		4: "69",
		5: "80",
		6: "90",
		7: "95",
		8: "100"
	};

	var str = "------<br><br>Crack!$<br><br>You wake up suddenly.€<br>On your right, a big door apparently closed.€<br>On the ground, a plain dark wood flooring. Nothings on the walls and no apparent exit.€<br>After some time you also notice a small window at the back of the room. Outside, the night is falling and it's getting very dark in here.€<br><br>- To progress in the adventure type an * Action verb *. For example: \"Sing\".<br>- Type \"Inventory\" to view your supply<br>- Type \"Help\" to get some help€<br><br>------<br><br><b>Well, what do you decide to do now?</b><br><br>",
		i = 0,
		text;

	var typeIntro = function() {
			text = str.slice(0, ++i);
			if (text === str){
				$(".monInput")
						.fadeTo("fast", 1)
						.focus();
				$(".progression").fadeTo("fast", 1);
				return;
			}
			$(".pastInputs").html(text.replace(/[$€]/gi, ''));
			switch (text.slice(-1)) {
				case "<" :
					return typeIntro();
				break;
				case ">" :
					setTimeout(typeIntro, 35);
				break;
				case "$" :
					setTimeout(typeIntro, 2000);
				break;
				case "€" :
					setTimeout(typeIntro, 500);
				break;
				default:
					setTimeout(typeIntro, 30);
			}
		},

		typeGame = function() {
			text = str.slice(0, ++i);
			if (text === str){
				$(".textOutput").last().html(text);
				return;
			}
			$(".textOutput").last().html(text);
			$('.inputContainer').scrollTop(1E10);
			setTimeout(typeGame, 10);
		},

		incrementCounter = function(newVal) {
			var progression = $(".progression"),
				textCounter = progression.find("span"),
				i = parseInt(textCounter.html()),
				timer = setInterval(function(){
					i++;
					if(i > parseInt(newVal)) {
						clearInterval(timer);
					} else {
						textCounter.html(i);
					}
				}, 30);
				progression.addClass("increment");
				setTimeout(function(){
					progression.removeClass("increment");
				}, 2000);
		},

		displayText = function(monObj) {
			if(monObj.role === "winner") {
				$(".textInput").last().html( "<span class='winner'>&#10148; </span>" + $(".textInput").last().html());
			}
			switch(monObj.type) {
				case "pic+text":
					showImg(monObj);
					if(monObj.role === "winner") {
						compteur++
						writeEntry(monObj.text + etapes[compteur].story);
						incrementCounter(progress[compteur]);
						if(compteur === 8) {
							$(".monInput").animate({"opacity": 0}, 1000);
						}
					} else {
						writeEntry(monObj.text);
					}
				break;
				case "singleText":
					if(monObj.role === "winner") {
						compteur++
						writeEntry(monObj.text + etapes[compteur].story);
						incrementCounter(progress[compteur]);
						if(compteur === 8) {
							$(".monInput").animate({"opacity": 0}, 1000);
						}
					} else {
						writeEntry(monObj.text);
					}
				break;
				case "doubleText":
					if(monObj.role === "winner") {
						compteur++
						writeEntry(monObj.secondPart + etapes[compteur].story);
						incrementCounter(progress[compteur]);
						if(compteur === 8) {
							$(".monInput").animate({"opacity": 0}, 1000);
						}
					} else {
						writeEntry(monObj.secondPart);
					}
				break;
			}
		},

		checkType = function(monObj, verb, noun) {
			if(monObj.type === "multiOptions") {
				if(typeof(monObj.options[noun]) !== "undefined") {
					displayText(monObj.options[noun]);
				} else {
					if(noun) {
						writeEntry("The verb exist but the second word is not correct (type \"" + verb + "\" followed by valid a noun)");
					} else {
						writeEntry("... Try to be a bit more precise (type \"" + verb + "\" followed by a noun)");
					}
				}
			} else {
				// clear second (and useless second word)
				$(".textInput").last().html($(".textInput").last().html().split(" ")[0]);
				displayText(monObj);
			}
		},

		writeEntry = function(text) {
			str = text;
			i=0;
			$(".pastInputs").append("<span class='textOutput'></span>");
			typeGame();
		},

		showImg = function(obj) {
			var imgContainer = $(".img-container");
			$(".greyBG").addClass("reveal");
			imgContainer.find("img")
				.attr("src", "img/" + obj.picture);
			imgContainer.addClass("reveal");
			imgContainer.find("p").html(obj.text);
		},

		hideIMG = function() {
			$(".img-container").removeClass("reveal");
			$(".greyBG").removeClass("reveal");
			$(".monInput").focus();
		},

		sendObject = function(val) {
			recap.push("step:" + (compteur + 1) + "-" + val);
		};

	$(".close").on("click", function(){
		hideIMG();
	});
	
	// INIT
	var ref = new Firebase("https://textgame.firebaseio.com/");
		ref.once('value', function(snapshot) {
			etapes = $.map(snapshot.val(), function(value, index) {
				return [value];
			});
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	setTimeout(typeIntro, 500);


	$(document).keypress(function(e) {
		if(e.which == 13) {
			if($(".greyBG").hasClass("reveal")) {
				hideIMG();
			}
			var val = $(".monInput").val().trim(),
				nombreEspace = val.split(" ").length - 1;
			lastVal = val;
			if(val === "") {
				return;
			}
			$(".monInput").val("");
			$(".pastInputs").append("<span class='textInput'>" + val + "</span>");
			if(nombreEspace > 1) {
				writeEntry("Sorry, you typed more than two words. Try using only one or two words.");
			} else {
				sendObject(val);
				// Un seul mot
				if(nombreEspace === 0) {
					var cleanVal = val.slice(0,1).toUpperCase() + val.slice(1,val.length);
					// Help + Inventory 
					if(cleanVal === "Help") {
						writeEntry(etapes[compteur].help);
					} else if(cleanVal === "Inventory") {
						writeEntry(etapes[compteur].inventory);
					} else {
						// Verbs
						if(typeof(etapes[compteur].keys[cleanVal]) !== "undefined") {
							checkType(etapes[compteur].keys[cleanVal], cleanVal);
						} else {
							writeEntry("Sorry, this verb does not exist");
						}
					}
				}
				// Plusieurs mots
				if(nombreEspace === 1) {
					var doubleVal = val.split(" ");
					var verb = doubleVal[0].slice(0,1).toUpperCase() + doubleVal[0].slice(1,doubleVal[0].length);
					var noun = doubleVal[1].slice(0,1).toUpperCase() + doubleVal[1].slice(1,doubleVal[1].length);
					if(typeof(etapes[compteur].keys[verb]) !== "undefined") {
						checkType(etapes[compteur].keys[verb], verb, noun);
					} else {
						writeEntry("Sorry, this verb does not exist");
					}
				}
			}
		}
	});
	$('.monInput').bind('keydown',function (e) {
		if(e.keyCode === 38) {
			e.preventDefault();
			$("input:text").attr("value",lastVal);
			var el = $("input:text").get(0);
			var elemLen = el.value.length;
			el.selectionStart = elemLen;
			el.selectionEnd = elemLen;
			el.focus();
		}
	});
});