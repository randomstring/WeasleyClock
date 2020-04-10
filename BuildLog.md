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


## Why Home Assistant?

I started using [Home Assistant](https://www.home-assistant.io/) when
I was looking at home automation choices. What started this was my
purchase from [Konnected](https://konnected.io/), a system that
converts an old wired alarm system to a modern IoT integration.

Home Assistant is open source and strives to keep all control local
(and private) to your home network.

After over a year of tinkering with Home Assistant, I feel like I've
only scratched the surface of what it's capable of.

## Why Life360

I tried the Home Assistant Apple iCloud integration first. The iClould
API does not seem to be a fully supprted and endorsed API. The Home
Assistant integration broke for me at least twice. Once when Apple
changed some details in their authentication.

The Life360 integration has been quite stable and has features
designed around tracking family members. I also managed to get buy-in
from all my family members to use it. Which makes all of this possible. 

Another point is that it works on both iPhones and Andoid phones.

## Why MQTT

MQTT is fairly easy to use, can generate arbitrary messages (I use
JSON for the payload), and has extensive support in Home Assistant.

Using python the [Paho MQTT](https://pypi.org/project/paho-mqtt/)
module.

## Clock Body

I reused the original wood where possible to keep the aged look of the
clock. When I needed to use new wood I stained it to match.

I tried to use as much brass hardware as possible.

# Diary

## 2019-10-24 Thrift Store Gold!

I had been thinking (and worrying) about how I was going to enclose
the Wheasley Clock. I was thinking of building a custom housing for it
and mount it to the wall. This would have required improving my crude
woodworking skills.

Then I spotted this Grandfather clock in a thrift store in Langley,
Washington. I had actually spotted this exact clock two months prior
on a visit to Widbey Island. At the time, I didn't have the
measurements for the artwork and no way to tell if everything would
fit. I was also traveling with my wife, for whom the clock was a
suprise presant, so I chose to be descrete and not start measuring the
clock on the spot.

Apon returning home, I measure the clockwork and artwork so I could
identify old clocks that would fit. I did some searching on eBay.com
for possible candidates, however working clocks were expensive and
virtually all could not be shipped. Finding the perfect clock in
Florida avaiable for pick up only wasn't an option.

Fate had me returning to Langley two months later and I went straight
to the thrift shop. The clock was still there, and the price had come
down $85. A few quick measurements later and I was positive I had a
good fit.

My wife was currious at my need to purchase the clock, but kept her
curiosity in check as she knew it had something to with a surprise for
her.

Grandmother clock by Colonial MFG Co, Model 1866 $165 in a thrift store.


## 2020-04-01 Magic Wands

Had the thought that I could create a replica Harry Potter magic wand
with a strong magnet in the tip and install a few magnetic reed
switches inside the clock. I coul then pull out the want and tap the
clock to trigger events. This would be a cool way to trigger a `Demo
Mode`.

## 2020-04-04 MOTD

Added a Harry Potter Themed message of the day.

![Message of the day](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/Weasleyclock_motd.png)

## 2020-04-05 Feature Complete!

Thanks to my son's CAD design work for the clock hands, I now have a
fully working Weasley clock. The clock is now installed in the kitchen.

## 2020-04-06 Make Garden Accurate

Because the WiFi Access Point that I have reserved for outside is
still inside near the front door, the clock will oscillate a person
between `Garden` and `Home` if they walk through the front of the
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

Started writing `mqtt_script.py` a python program to send a scripted
sequence of MQTT messages. I plan to use this to create demonstrations
of what the Weasley Clock can do. The script should have other uses as
well since it is not project specific and can send arbitrary MQTT
messages.

## 2020-04-09 Zwift Integration & Documentation

Added the [Zwift](https://zwift.com/) integration to Home Assistant
<https://pypi.org/project/zwift-client/>. This required installing the
[HACS](https://hacs.xyz/) community software store to Home
Assistant. I need to look at HACS some more to see about adding and
testing my own features.

The clock now registers me in the state Quidditch whenever I'm
actively riding on Zwift.

Worked on cleaning up documentation.

# TODO

* test painting hands with metalic paint
* create code/algorithm to reliably detect when people ar bicycling for the Quidditch state


# Specification

Assorted measurements and specifications for parts. Pulling this out
of the README to reduce clutter in the README.

## Clock Hand Dimensions

Clock hands dimensions:

- center-to-point: 88-92mm (so that the point does not obscure text)
- width: 12-14mm (can vary, allow room for names)
- thickness: 3mm (2mm was a little too thin)
- max thickness around center hole: 4mm

## Clockwork Dimentions

- clockwork depth: 4.125" (behind the face)
- clockwork width: 6.625"
- clockwork height: 3"
- hands depth:     2"     (with 0.125" clearance from glass)


## Clock Hand Ideas

This section is a collection of ideas on other ways to create custom
hands or make use of antique clock hands.

Goals
- mounting could be with 3D printing with a collet (clip)
- Something like the metallic scissors w/ engraved names
- clock hands could either be 3D printed or possibly laser cut from metal

Resources:
- https://www.bearwood.com/clock-hands-for-purchase.html
- https://www.ebay.com/str/JRCLOCKER-Watches-and-Clocks
- https://www.walnuthollow.com/store/clock-making/hands/
- https://www.cmi-hermle.com/category/40-handnuts-hand-bushes
- https://www.cmi-hermle.com/category/38-hands-mechanical
- https://www.clockworks.com/clock-parts/clock-parts.html
- https://www.mcmaster.com/flanged-bushings Flanged for mounting flat clock hands
- https://timesavers.com/c-325673-clock-repair-replacement-parts-hands-related-hand-bushings.html
- https://perrinwatchparts.com/collections/clock-hand-nuts/products/clock-parts-740191?variant=39071940047
- The clips to connect hands to the shaft are called collets
- http://www.m-p.co.uk/muk/parts/hands-collets.htm

## Fonts

Here are the [fonts](fonts/Fonts.md) I evaluated for use on the hands.
