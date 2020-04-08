# Build Log

Started this log after getting the Weasley Clock feature
complete. Should have started from the beginning. Entry prior to April
2020 are written retrospectively.


## TODO 

Much of this could be pieced together from the changelog of this
GitHub repo, but writing out my design choices would be better.

Write up major design process and decisions:
 * location tracking: life360 vs iphone
 * servos vs stepper motor vs motor and encoder
 * soldering servo HAT
 * finding nesting brass rods and mounting hubs
 * clock body
 * mounting the hands
 * creating hands

Document software
 * homeassistant
 * MQTT
 * python daemon


## 2020-04-04 MOTD

Added a Harry Potter Themed message of the day.

![Message of the day](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/Weasleyclock_motd.png)

## 2020-04-05 Feature Complete!

Thanks to my son's CAD design work for the clock hands, I now have a
fully working Weasley clock. The clock is now installed in the kitchen.

## 2020-04-06 Garden Isn't Accurate

Because the WiFi Access Point that I have reserved for outside is
still inside near the front door, the clock will oscillate a person
between 'Gaarden' and 'Home' if they walk through the front of the
house. I needed to install the AP outside, near the garden. I've been
putting this off as it wasn't on the critical path, until now.

Today I got up on a ladder and installed the Unifi AP AC Pro outside
near the garden. I thought that the AP AC Pro had pass-through POE, so
I stole the POE connection for one of the Unifi G3 POE cameras to run
the AP. Then I just daisy chained the G3 camera to the AP. Turns out,
it's just a regular Ethernet port, no POE. I'll need to run another
Cat6 cable to get the camera running again.

Also started a new project on GitHub to [operate the grandfather clock
chimes](https://github.com/randomstring/WeasleyChimes).

## 2020-04-07 More Cat6, MQTT Scripting

Ran another Cat 6 cable to power the Unifi G3 camera. I managed to get
the custom Cat 6 cable crimped correctly on the first try. One
Ethernet jack was crimped while standing on a ladder. #winning

Started writing 'mqtt_script.py' a python program to send a scripted
sequence of MQTT messages. I plan to use this to create demonstrations
of what the Weasley Clock can do. The script should have other uses as
well since it is not project specific and can send arbitrary MQTT
messages.

