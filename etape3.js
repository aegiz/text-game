var etape3;

$(function() {
	etape3 = {
		story : "",
		help: "As said before there is something inside the bottle. Did you try grabing it?",
		inventory: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs",
		keys : {
			"Smell" : {
				type: "singleText",
				role: "const",
				text: "A delicious cookie smell floats in the air",
			},
			"Say" : {
				type: "pic+text",
				role: "const",
				text: "\"Ohh this game is soo cool!\"",
				picture: "dodgedog.jpg"
			},
			"Free": {
				type: "singleText",
				role: "const",
				text: "... your mind. You are now meditating in the room. Ahhh you are feeling better... But unfortunately you are always trapped."
			},
			"Use" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything.",
			},
			"Take" : {
				type: "doubleText",
				role: "winner",
				firstPart: "... Key",
				secondPart: "Boom! Key in da pocket! It's's a very cute golden object. Mhm I am wondering what could you open with it?"
			},
			"Search" : {
				type: "doubleText",
				role: "winner",
				firstPart: "... Key",
				secondPart: "... Inside the bottle! Boom key in da pocket! It's's a very cute golden object. Mhm I am wondering what could you open with it?"
			},
			"Get" : {
				type: "doubleText",
				role: "winner",
				firstPart: "... Key",
				secondPart: "Boom! Key in da pocket! It's's a very cute golden object. Mhm I am wondering what could you open with it?"
			},
			"Seize" : {
				type: "doubleText",
				role: "winner",
				firstPart: "... Key",
				secondPart: "Boom! Key in da pocket! It's's a very cute golden object. Mhm I am wondering what could you open with it?"
			},
			"Collect" : {
				type: "doubleText",
				role: "winner",
				firstPart: "... Key",
				secondPart: "Boom! Key in da pocket! It's's a very cute golden object. Mhm I am wondering what could you open with it?"
			},
			"Grab" : {
				type: "doubleText",
				role: "winner",
				firstPart: "... Key",
				secondPart: "Boom! Key in da pocket! It's's a very cute golden object. Mhm I am wondering what could you open with it?"
			},
			"Catch" : {
				type: "doubleText",
				role: "winner",
				firstPart: "... Key",
				secondPart: "Boom! Key in da pocket! It's's a very cute golden object. Mhm I am wondering what could you open with it?"
			},
			"Pick" : {
				type: "singleText",
				role: "winner",
				text: "... up key! It's's a very cute golden object. Mhm I am wondering what could you open with it?",
			},
			"Breathe" : {
				type: "singleText",
				role: "const",
				text: "A delicious cookie smell floats in the air",
			},
			"Inhale" : {
				type: "singleText",
				role: "const",
				text: "A delicious cookie smell floats in the air",
			},
			"Sniff": {
				type: "singleText",
				role: "const",
				text: "A delicious cookie smell floats in the air",
			},
			"Save": {
				type: "singleText",
				role: "const",
				text: "You?  <span>&#175;\\_(&#12484;)_/&#175;</span>",
			},
			"Sing": {
				type: "singleText",
				role: "const",
				text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
			},
			"Go": {
				type: "singleText",
				role: "const",
				text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
			},
			"Walk": {
				type: "singleText",
				role: "const",
				text: "In circles... Very interesting.",
			},
			"Run": {
				type: "singleText",
				role: "const",
				text: "out of time? That's okay you have plenty of time",
			},
			"Sleep": {
				type: "singleText",
				role: "const",
				text: ".... with me? And do **$^p¨¨^and *$$$$$#@ in ¨¨Q¨¨¨? ... Cool!",
			},
			"Cry": {
				type: "singleText",
				role: "const",
				text: ".... oooh boooh boooh! ;-)",
			},
			"Call": {
				type: "singleText",
				role: "const",
				text: "Mother? .... oooh boooh boooh! ;-)",
			},
			"Burn": {
				type: "pic+text",
				role: "const",
				text: "BURN IT WITH FIRE",
				picture: "burnitwithfire.gif"
			},
			"Adrien": {
				type: "pic+text",
				role: "const",
				text: "Welcome",
				picture: "adrien.jpg"
			},
			"Kirsten": {
				type: "pic+text",
				role: "const",
				text: "Meeeoww",
				picture: "kirsten.jpg"
			},
			"Escape": {
				type: "pic+text",
				role: "const",
				text: "No time to explain!",
				picture: "notimeTo.jpg"
			},
			"Fly": {
				type: "singleText",
				role: "const",
				text: "I believe I can flyyyyyyyy",
			},
			"Hello": {
				type: "singleText",
				role: "const",
				text: "... World? :-)",
			},
			"Shout": {
				type: "singleText",
				role: "const",
				text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
			},
			"Yell": {
				type: "singleText",
				role: "const",
				text: "Let it goooo, let it goooOOOOOO, this cheered you up but unfortunately no one is here to see you dance",
			},
			"Fuck": {
				type: "singleText",
				role: "const",
				text: "Oh yeah, such a beautiful word ;-)"
			},
			"Suck": {
				type: "singleText",
				role: "const",
				text: "Oh yeah, such a beautiful word ;-)"
			},
			"Smoke": {
				type: "singleText",
				role: "const",
				text: "Pots? Wooooot everything is sooooooo shinyyyyyy now"
			},
			"Knock": {
				type: "singleText",
				role: "const",
				text: "Knock knock knock* Penny?"
			},
			"Shit": {
				type: "singleText",
				role: "const",
				text: "Oh yeah, such a beautiful word ;-)"
			},
			"Dance": {
				type: "singleText",
				role: "const",
				text: "Oh yeah shake shake shake your body ;-)"
			},
			"123": {
				type: "singleText",
				role: "const",
				text: "456?"
			},
			"Cheat": {
				type: "singleText",
				role: "const",
				text: "Ah ah nope nope and nope.",
			},
			"Jump": {
				type: "singleText",
				role: "const",
				text: "Coool you are now jumping!",
			},
			"Play": {
				type: "singleText",
				role: "const",
				text: "... Video games. Not possible at the moment sorry (geeek!)",
			},
			"Find": {
				type: "singleText",
				role: "const",
				text: "... Wally? Mhm apparently he is not here",
			},
			"Stare": {
				type: "singleText",
				role: "const",
				text: "... At walls? Supercooooool! ;-)",
			},
			"Comtemplate": {
				type: "singleText",
				role: "const",
				text: "... walls? Supercooooool! ;-)",
			},
			"Dream": {
				type: "singleText",
				role: "const",
				text: "Inception incoming!!",
			},
			"Listen": {
				type: "singleText",
				role: "const",
				text: "Everything is silent",
			},
			"Think": {
				type: "pic+text",
				role: "const",
				text: "Waaaw such a cooool game!",
				picture: "dodgedog.jpg"
			},
			"Remember": {
				type: "singleText",
				role: "facilit",
				text: "... Where is the key? Just in front of you in the bottle!"
			},
			"Talk": {
				type: "singleText",
				role: "const",
				text: "... To yourself? Houston we have a problem."
			},
			"Inspect": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Ground": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Ground.",
						secondPart: "There is an empty bottle with something inside."
					}, 
					"Floor": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Floor.",
						secondPart: "There is an empty bottle with something inside."
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Bottle": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Bottle.",
						secondPart: "It's a little orange bottle. On the label you can read this mention : Contains traces of candies' woodstick, risk of allergies to ice-creams. What about looking inside now?",
					}
				}
			},
			"Check": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Ground": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Ground.",
						secondPart: "There is an empty bottle with something inside."
					}, 
					"Floor": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Floor.",
						secondPart: "There is an empty bottle with something inside."
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Bottle": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Bottle.",
						secondPart: "It's a little orange bottle. On the label you can read this mention : Contains traces of candies' woodstick, risk of allergies to ice-creams. What about looking inside now?",
					},
					"Inside": {
						type: "doubleText",
						role: "winner",
						firstPart: "... the bottle.",
						secondPart: "You got the key! Mhm I am wondering what could you open with it?",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs",
					},
				}
			},
			"Look": {
				type: "multiOptions",
				options: {
					"Around": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Around",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Sky": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Sky",
						secondPart: "Sooo poetic ;-) ...",
					},
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Ground": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Ground.",
						secondPart: "There is an empty bottle with something inside."
					}, 
					"Floor": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Floor.",
						secondPart: "There is an empty bottle with something inside."
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... at the door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Bottle": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Bottle.",
						secondPart: "It's a little orange bottle. On the label you can read this mention : Contains traces of candies' woodstick, risk of allergies to ice-creams. What about looking inside now?",
					},
					"Inside": {
						type: "doubleText",
						role: "winner",
						firstPart: "... the bottle.",
						secondPart: "You got the key! Mhm I am wondering what could you open with it?",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... At inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs",
					},
				}
			},
			"See": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Ground": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Ground.",
						secondPart: "There is an empty bottle with something inside."
					}, 
					"Floor": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Floor.",
						secondPart: "There is an empty bottle with something inside."
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Bottle": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Bottle.",
						secondPart: "It's a little orange bottle. On the label you can read this mention : Contains traces of candies' woodstick, risk of allergies to ice-creams. What about looking inside now?",
					},
					"Inside": {
						type: "doubleText",
						role: "winner",
						firstPart: "... the bottle.",
						secondPart: "You got the key! Mhm I am wondering what could you open with it?",
					}
				}
			},
			"Watch": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Ground": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Ground.",
						secondPart: "There is an empty bottle with something inside."
					}, 
					"Floor": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Floor.",
						secondPart: "There is an empty bottle with something inside."
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Bottle": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Bottle.",
						secondPart: "It's a little orange bottle. On the label you can read this mention : Contains traces of candies' woodstick, risk of allergies to ice-creams. What about looking inside now?",
					},
					"Inside": {
						type: "doubleText",
						role: "winner",
						firstPart: "... the bottle.",
						secondPart: "You got the key! Mhm I am wondering what could you open with it?",
					}
				}
			},
			"Examine": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Ground": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Ground.",
						secondPart: "There is an empty bottle with something inside."
					}, 
					"Floor": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Floor.",
						secondPart: "There is an empty bottle with something inside."
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Bottle": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Bottle.",
						secondPart: "It's a little orange bottle. On the label you can read this mention : Contains traces of candies' woodstick, risk of allergies to ice-creams. What about looking inside now?",
					},
				}
			},
			"Observe": {
				type: "multiOptions",
				options: {
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Ground": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Ground.",
						secondPart: "There is an empty bottle with something inside."
					}, 
					"Floor": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Floor.",
						secondPart: "There is an empty bottle with something inside."
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "You can see some windmills outside (Oh holland <3). Unfortunately the window is still locked.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to inspect big white walls. Unfortunately there are no apparent gap",
					},
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Bottle": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Bottle.",
						secondPart: "It's a little orange bottle. On the label you can read this mention : Contains traces of candies' woodstick, risk of allergies to ice-creams. What about looking inside now?",
					},
				}
			},
			"Touch": {
				type: "multiOptions",
				options: {
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "A door made of metal",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "This window is made of glass and does not seem breakable.",
					},
					"Bottle": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Bottle.",
						secondPart: "My preciouuuuus.",
					}
				}
			},
			"View": {
				type: "multiOptions",
				options: {
					"Outside": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Outside.",
						secondPart: "Lightning are striking the sky brrrr I would rather be under the blanket with you at the moment.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "A door made of metal",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "This window is made of glass and does not seem breakable.",
					},
					"Bottle": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Bottle.",
						secondPart: "It's a little orange bottle. On the label you can read this mention : Contains traces of candies' woodstick, risk of allergies to ice-creams.",
					},
					"Inside": {
						type: "doubleText",
						role: "winner",
						firstPart: "... the bottle.",
						secondPart: "You got the key! Mhm I am wondering what could you open with it?",
					}
				}
			},
			"Push": {
				type: "singleText",
				role: "justText",
				text: "... Window. Knock, knock penny?"
			},
			"Force": {
				type: "multiOptions",
				options: {
					"Window": {
						type: "singleText",
						role: "justText",
						text: "... Window. I would not do that if I were you."
					},
					"Bottle": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Bottle.",
						secondPart: "Boom key in da pocket! Hm I am wondering what this key could open ;-).",
					},
				}				
			},
			"Crack": {
				type: "singleText",
				role: "justText",
				text: "... the door. Locked unfortunately. But there must be another way out somewhere."
			},
			"Kick": {
				type: "singleText",
				role: "justText",
				text: "... Walls. Houston we have a problem!"
			},
			"Destroy": {
				type: "singleText",
				role: "justText",
				text: "... Walls. Houston we have a problem!"
			},
			"Hit": {
				type: "singleText",
				role: "justText",
				text: "... Walls. Houston we have a problem!"
			},
			"Put": {
				type: "singleText",
				role: "justText",
				text: "... your hands in the air. Funny but a bit useless in this situation ;-)"
			},
			"Move": {
				type: "singleText",
				role: "justText",
				text: "... I like to move it, move it!"
			},
			"Do": {
				type: "singleText",
				role: "justText",
				text: "... the monkey dance. Houston we have a problem!"
			},
			"Draw": {
				type: "singleText",
				role: "justText",
				text: "... on walls. Waaw that's beautiful but it doesn't help."
			},
			"Drink": {
				type: "singleText",
				role: "facilit",
				text: "... bottle. There is nothing to drink anymore. Just grab this effing key!",
			},
			"Break": {
				type: "doubleText",
				role: "winner",
				firstPart: "... bottle.",
				secondPart: "Inside, a cute tiny key! Hm I am wondering what this key could open ;-).",
			},
			"Empy": {
				type: "doubleText",
				role: "justText",
				firstPart: "... bottle.",
				secondPart: "Ok it's now empty and there is a key inside",
			},
			"Open": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... door.",
						secondPart: "Locked. There must be another way out somewhere.",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... window.",
						secondPart: "Locked, as the door...",
					},
					"Bottle": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Bottle.",
						secondPart: "Inside, a cute tiny key! Hm I am wondering what this key could open ;-).",
					}
				}
			}
		}
	};
});