var etape4;

$(function() {
	etape4 = {
		story : "",
		help: "Ok you have a key. As a key is supposed to open stuff. I guess my question is : what do you want to open?",
		inventory: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs<br>-a golden key",
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
				role: "winner",
				text: "... the window! And voooila! Clic Clac, the windows just opened. So what now?"
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
				role: "facilit",
				text: "out ? Unfortunately the door is still locked was about trying the window?",
			},
			"Exit": {
				type: "singleText",
				role: "facilit",
				text: "Unfortunately the door is still locked was about trying the window?",
			},
			"Flee": {
				type: "singleText",
				role: "facilit",
				text: "Unfortunately the door is still locked was about trying the window?",
			},
			"Escape": {
				type: "singleText",
				role: "facilit",
				text: "Unfortunately the door is still locked was about trying the window?",
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
			"Explore": {
				type: "singleText",
				role: "facilit",
				text: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed. But maybe with your key you can open something?",
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
			"Drink": {
				type: "singleText",
				role: "facilit",
				text: "Yep there is something to drink somewhere. But what could it be ... Maybe looking at the floor would help?"
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
			"Search": {
				type: "singleText",
				role: "facilit",
				text: "What to open? Yep that's your mission right now",
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
				text: "... Walls? Supercooooool! ;-)",
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
				role: "const",
				text: "Sri Lanka? Yup that's such a cool memory! ;-)"
			},
			"Talk": {
				type: "singleText",
				role: "const",
				text: "... To yourself? Houston we have a problem."
			},
			"Use": {
				type: "singleText",
				role: "facilit",
				text: "... Key? Great idea, but be more accurate: what do you want to open with this key?"
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
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window full of dust. But you can see a tiny hole perfect for a little key like yours.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else",
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
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window full of dust. But you can see a tiny hole perfect for a little key like yours.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs<br>-a golden key",
					}
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
					"Room": {
						type: "doubleText",
						role: "justTex",
						firstPart: "... Room.",
						secondPart: "Around you some large bare white walls. A massive door and a tiny window. Apparently everything is securely closed.",
					},
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window full of dust. But you can see a tiny hole perfect for a little key like yours.",
					},
					"Walls": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Sky": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Sky",
						secondPart: "Sooo poetic ;-) ...",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... At inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs<br>-a golden key",
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
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window full of dust. But you can see a tiny hole perfect for a little key like yours.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else",
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
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window full of dust. But you can see a tiny hole perfect for a little key like yours.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else",
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
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window full of dust. But you can see a tiny hole perfect for a little key like yours.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else",
					}
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
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window full of dust. But you can see a tiny hole perfect for a little key like yours.",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. But keep going and continue to explore the room to find what to open with the key.",
					},
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else",
					}
				}
			},
			"Touch": {
				type: "multiOptions",
				options: {
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. But keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. But keep going and continue to explore the room.",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "A door made of metal",
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
						firstPart: "... Door.",
						secondPart: "A door made of metal",
					}
				}
			},
			"Push": {
				type: "singleText",
				role: "justText",
				text: "... Window. Knock, knock penny?"
			},
			"Force": {
				type: "singleText",
				role: "winner",
				text: "... the window. Ok ok, calm down just using the key will open the window. Wait....... Here we are! So what now"
			},
			"Crack": {
				type: "singleText",
				role: "winner",
				text: "... the window. Ok ok, calm down just using the key will open the window. Wait....... Here we are! So what now"
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
				type: "singleText",
				role: "justText",
				text: "... the window? Ok ok, calm down just using the key will open the window.",
			},
			"Open": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else.",
					},
					"Window": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Window.",
						secondPart: "And voooila! Clic Clac, the windows just opened. So what now? ",
					}
				}
			},
			"Unlock": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Door.",
						secondPart: "Ahh! So close. Unfortunately it would have been too easy. Try again on something else.",
					},
					"Window": {
						type: "doubleText",
						role: "winner",
						firstPart: "... Window.",
						secondPart: "And voooila! Clic Clac, the windows just opened. So what now?",
					}
				}
			},
		}
	};
});