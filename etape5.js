var etape5;

$(function() {
	etape5 = {
		story : "",
		help: "The window is opened and you are still trapped. But did you try looking at the window closely?",
		inventory: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs",
		keys : {
			"Smell" : {
				type: "singleText",
				role: "const",
				text: "A wonderful smell of rainy ground emanates from the outside.",
			},
			"Say" : {
				type: "pic+text",
				role: "const",
				text: "\"Ohh this game is soo cool!\"",
				picture: "dodgedog.jpg"
			},
			"Free": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately this window is definitely too small to escape. You can hardly pass your arm through it! But wait, maybe there is something to catch?"
			},
			"Escape": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately this window is definitely too small to escape. You can hardly pass your arm through it! But wait, maybe there is something to catch?"
			},
			"Leave": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately this window is definitely too small to escape. You can hardly pass your arm through it! But wait, maybe there is something to catch?"
			},
			"Evade": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately this window is definitely too small to escape. You can hardly pass your arm through it! But wait, maybe there is something to catch?"
			},
			"Use" : {
				type: "singleText",
				role: "facilit",
				text: "Accio, ACCIO!! Damn Harry Potter's books were lying you didn't get anything. But what about looking at the ground?",
			},
			"Take": {
				type: "singleText",
				role: "winner",
				text: "... A hurricane lamp! Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Catch": {
				type: "singleText",
				role: "winner",
				text: "... A hurricane lamp! Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Flee": {
				type: "singleText",
				role: "facilit",
				text: "... Unfortunately this window is definitely too small to escape. You can hardly pass your arm through it! But wait, maybe there is something to catch?"
			},
			"Breathe" : {
				type: "singleText",
				role: "const",
				text: "A wonderful smell of rainy ground emanates from the outside.",
			},
			"Inhale" : {
				type: "singleText",
				role: "const",
				text: "A wonderful smell of rainy ground emanates from the outside.",
			},
			"Sniff": {
				type: "singleText",
				role: "const",
				text: "A wonderful smell of rainy ground emanates from the outside.",
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
				text: "out ? Unfortunately it's a really narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
			},
			"Exit": {
				type: "singleText",
				role: "facilit",
				text: "Unfortunately it's a really narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
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
				role: "winner",
				text: "... A hurricane lamp! Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Discover": {
				type: "singleText",
				role: "winner",
				text: "... A hurricane lamp! Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Take" : {
				type: "singleText",
				role: "winner",
				text: "... A hurrican lamp. Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Get" : {
				type: "singleText",
				role: "winner",
				text: "... A hurrican lamp. Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Seize" : {
				type: "singleText",
				role: "winner",
				text: "... A hurrican lamp. Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Collect" : {
				type: "singleText",
				role: "winner",
				text: "... A hurrican lamp. Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Grab" : {
				type: "singleText",
				role: "winner",
				text: "... A hurrican lamp. Bingo! By exploring the edges of the window you just found a lamp! However, the lamp is off."
			},
			"Pick" : {
				type: "singleText",
				role: "winner",
				text: "... up a hurricane lamp! By exploring the edges of the window you just found a lamp! However, the lamp is off.",
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
				text: "You can hear the soft sound of the rain falling outside.",
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
						secondPart: "It's a narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
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
						secondPart: "It's a narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Inventory": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Inventory.",
						secondPart: "- a bridge's deck of cards<br>- a matchbox<br>- some handkerchiefs",
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
						secondPart: "It's a narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
					},
					"Sky": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Sky",
						secondPart: "Sooo poetic ;-) ...",
					},
					"Walls": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Wall": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... At the door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					}, 
					"Outside": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Outside",
						secondPart: "Oh wait, there is a hurricane lamp outside! Try to grab it ;-)",
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
					"Window": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Window.",
						secondPart: "It's a narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Outside",
						secondPart: "Oh wait, there is a hurricane lamp outside! Try to grab it ;-)",
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
						secondPart: "It's a narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Outside",
						secondPart: "Oh wait, there is a hurricane lamp outside! Try to grab it ;-)",
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
						secondPart: "It's a narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
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
						secondPart: "It's a narrow window. You can hardly pass your arm through it! But wait, maybe there is something to catch?",
					},
					"Walls": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to observe big white walls. Unfortunately there are no apparent gaps. What about looking outside instead?",
					},
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ...",
					},
					"Outside": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Outside",
						secondPart: "Oh wait, there is a hurricane lamp outside! Try to grab it ;-)",
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
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
					},
					"Wall": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Walls.",
						secondPart: "I know it's really exciting to touch walls. Unfortunately there are no apparent gap. So keep going and continue to explore the room.",
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
					},
					"Outside": {
						type: "doubleText",
						role: "facilit",
						firstPart: "... Outside",
						secondPart: "Oh wait, there is a hurricane lamp outside! Try to grab it ;-)",
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
				role: "facilit",
				text: "... the window. Ok ok, calm down it's open now ;-). But wait, maybe there is something to catch?"
			},
			"Crack": {
				type: "singleText",
				role: "justText",
				text: "... the window. Ok ok, calm down it's open now ;-). But wait, maybe there is something to catch?"
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
			"Break": {
				type: "singleText",
				role: "justText",
				text: ".. the window. Ok ok, calm down it's open now ;-). But wait, maybe there is something to catch?",
			},
			"Open": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ....",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Window.",
						secondPart: "It's already open. But wait, maybe there is something to catch?",
					}
				}
			},
			"Unlock": {
				type: "multiOptions",
				options: {
					"Door": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Door.",
						secondPart: "The essence of your problem ... An armored door firmly locked, without handle or any holes ....",
					},
					"Window": {
						type: "doubleText",
						role: "justText",
						firstPart: "... Window.",
						secondPart: "It's already open. But wait, maybe there is something to catch?",
					}
				}
			},
		}
	};
});