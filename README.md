# Weasley Clock

Build a working physical [Weasley
Clock](https://harrypotter.fandom.com/wiki/Weasley_Clock) from Harry
Potter.

Photo album of the build: <https://photos.app.goo.gl/7yxiuzpsFReUh5Yy5>

Details of the build can be found in my [Build Log](BuildLog.md).

## Design

![Weasley Clock Flow Diagram](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/WeasleyClockDiagram.png)


1. Track location of family members
   using [Life360](http://life360.com/). This service allows for
   real-time updates of each family member's location and speed.

2. Use [Home Assistant](https://www.home-assistant.io/) as a clearing
   house for family member location and movement within and around
   home. Home assistant is hosted on a Raspberry Pi
   running [Hass.io](https://www.home-assistant.io/hassio/).

3. Custom Home Assistant rules to calculate the Weasley Clock
   state for each family member. Each state is visible from the Home
   Assistant dashboard. Changes in clock state are transmitted to the
   physical clock using the MQTT protocol over the network.

4. [Custom software](https://github.com/randomstring/weasleyclockd) 
   running on a Raspberry Pi that monitors the MQTT message stream for
   changes in clock state and updates the physical clock hands to
   match. This software also adds some flare to hand movement. For
   example, the placement of the hand within each clock face sector
   will be determined by the person's distance from home. This way,
   you can tell if someone is far or near to home at a glance. You
   might even be able to notice the progress of the person's dial
   progressing towards home.

5. A physical clock with four hands. The clock is mounted into
   an old Grandfather clock. The face of the clock is divided into
   eight equal sectors, each has a location/situations label. These
   labels are: Home, Mortal Peril, Quidditch, Work, School, Garden, In
   Transit, and Lost.

6. The next phase will be to reuse the chimes that came with the
   original clock. The chimes can be alerts to noteworthy changes in
   the clock's state. Say announce someone's arrival back home. The
   current plan is to use a stepper motor to drive the existing chime
   mechanism.

## Clock Face and Meaning of Sectors

![Weasley Clock Face](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/demo3.gif)

What each sector of the clock face means:

* **Home** The home state is triggered by the Home Assistant Life360
  integration. I have a defined geo-fenced area that when we are inside
  that region, we are considered home. I also use the Home Assistant
  Unifi integration to identify when members of the family are
  connected to the home WiFi network. Additionally, I can identify
  which WiFi access points (APs) they are connected to. This provides
  some granularity as to where on the property they are. The system
  can tell if someone is in the shop, in the main house, or outside in
  the garden. In fact, I use the clockwise half of the Home sector to
  indicate someone is in the main house and the counter-clockwise half
  to indicate someone is in the shop.

* **Lost** This is a catch-all state for when someone is stationary,
  not at home, and is not at one of the named locations of School or
  Work. The clock hand varies its location within the sector
  depending on how far from home they are. The closer to home, the
  closer the hand inches towards the Home sector. The position within
  the the Lost sector varies on a logarithmic scale to give a finer
  grain detail when closer to home.

* **In Transit** This indicates the family member is on the move.

* **Garden** This sector is triggered when connecting to the WiFi
  access point outside, near the garden.

* **School** Triggered when at a Life360 location labeled as "school."

* **Work** Triggered when at a Life360 location labeled as "work."

* **Quidditch** Triggered when someone is bicycling. I have this
  triggered in two ways. First, by a complex set of rules about low
  speed movement, faster than walking and slower than
  driving. Secondly, I detect when someone is currently active on
  [Zwift](https://zwift.com/), an VR indoor cycling app.

* **Mortal Peril** This is triggered if Life360 measures someone's
  speed as greater than 75mph. With teenagers on the verge of driving
  age, I will be watching this one closely.


## Case Design

I decided to reuse an old grandfather/grandmother clock instead of
building a new case. I got lucky and found a perfect case at a thrift
shop. I needed the dimensions of the face to match the artwork I have
and the depth of the case needed to hold the servos and new clockwork.

## Clock Hands

Hands are 3D printed with the name of each family member on the hands,
just like in the Harry Potter movies. The bottom of each hand has the
person's initial. 

I spent a long time trying to figure out how to secure the hands to
the brass tube axles. I considered clamping hubs (too bulky), collets
(metal connectors traditional clock hands use), glue, and hot glue
(this works well). In the end, by making the holes in the 3D printed
hands strategical smaller, I was able to expand the holes with a file
so that they just fit. They were on tight enough to be secure. I did
remove too much material from one of the hands and resorted to glue
(E-6000) to keep it in place.

Here are the [fonts](fonts/Fonts.md) I evaluated for use on the hands.

## Related Projects and Inspiration

Over the course of this build I spent a fair amount of time
researching how others have attempted to build a Weasley Clock. The
most complete and authentic build I've found is by [Printable
Props](https://www.instagram.com/printableprops/).

-   <https://www.instructables.com/id/Build-Your-Own-Weasley-Location-Clock/>
-   <https://printableprops.jimdo.com/en/harry-potter/weasley-clock/>
-   <https://www.facebook.com/PrintableProps/>
-   <https://www.instagram.com/printableprops/>
-   <https://fourierinformationsir.wordpress.com/2015/11/09/weasley-clock-update/>
-   <https://twitter.com/wbtourlondon/status/765398939910627328>
-   <https://www.youtube.com/playlist?list=PL86twtxo_L9TMY4A5TcG2nJcsyFx2CWhb>
-   <https://magicclock.de/>
-   <http://www.brettoliver.org.uk/Longcase_Clock/Longcase_Clock.htm>

## Artwork

I looked around on the internet and there are two styles of faces for
the Weasley clock that appear in the Harry Potter movies. The first
style comes up more often, and it is easier to replicate. It also has
some sectors like "Prison" that I hope to never need.

![Weasley Clock Style 1](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/Weasley_clock_style1.gif)

I prefer the second style.

![Weasley Clock Style 1](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/Weasley_clock_style2.jpg)

As luck would have it, [Minalima](https://minalima.com/), the artists of this style, sell officially licensed [posters of the Weasley Clock](https://minalima.com/product/the-weasley-family-clock/).

## Chimes

The grandmother/grandfather clock came with a set of chimes. I plan to
integrate them once I have the clock mechanism finished. I started a new project to research and docuent this build: [Weasley Chimes](https://github.com/randomstring/WeasleyChimes/).
   

## Home Assistant

I am using [Home Assistant](<https://www.home-assistant.io/>) for
tracking and transmitting the location of my family members. To do
this I am using the [Life360
integration](<https://www.home-assistant.io/integrations/life360/>) for
detailed location tracking. For tracking finer locations around the
house I am using the [Unifi
integration](<https://www.home-assistant.io/integrations/unifi>) to
monitor which WiFi access point each family member is closest to.

![Home Assistant Weasley Clock](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/homeassistant.png)

I'm including example Home Assistant YAML configuration code creating
a Weasley Clock sensor. This sensor will track a given user's Weasley
Clock states:  home, garden, school, work, intransit, mortalperil, lost, error.

Example Home Assistant configurations can be found in the
homeassistant directory. 
 * [automations.yaml](homeassistant/automations.yaml)
 * [sensors.yaml](homeassistant/sensors.yaml)
 

## Software

I need a daemon running on the Raspberry Pi that controls the clock
servos. For this I
wrote [weasleyclockd](https://github.com/randomstring/weasleyclockd)
that monitors the MQTT messages from Home Assistant and manages the
physical clock movement.


## CAD Models of Parts

Most of the parts from ServoCity.com have CAD models that can be found
here: <https://www.servocity.com/step-files>

CAD model of the HS-785HB Servo can be found here:
<https://grabcad.com/library/servo-motor-hitec-hs-785hb-1>

Custom CAD files for the clock supports and hands are in the
[CAD](CAD) sub-directory. 

The CAD for the clockworks support structures were created by my
father-in-law, Ron. He also handled all the 3D printing for this
project.

My son, Alex, did the CAD for the clock hands. And generated a CAD
rendering of the clockworks:

![CAD View](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/CAD_Clock_Assembly.PNG)
![CAD Front View](https://raw.githubusercontent.com/randomstring/WeasleyClock/master/images/CAD_Clock_Assembly_Front.PNG)


## Mounting poster to plywood

I used 3M Super 77 Spray Adhesive for mounting the clock face artwork. 

I had considered using [Mod
Podge](https://www.amazon.com/Mod-Podge-CS11303-Waterbase-Sealer/dp/B0009ILH8C/)
and went so far as experiment mounting some other posters to plywood
using Mod Podge. 

3M Super 77 leaves the face surface smoother, and doesn't require
coating the front of the art to get good adhesion. Super 77 sets up
really quickly, so watch some videos on how to use it and get a buddy
to help keep the poster straight as you lay it down.


# Shopping list

## Raspberry Pi

-   standard set of Raspberry pi requirements. Pi, power supply, SD card, case

## Servo Hat

-   Raspberry Pi servo hat: <https://www.adafruit.com/product/2327>
    -   requires soldering
-   Servo power, one of:
    -   5V 2A should be enough if motors aren't overloaded simultaneously <https://www.adafruit.com/product/276>
    -   5V 4A to hedge bets, or if you run more servos <https://www.adafruit.com/product/1466>

## Shopping list from Servo City

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="right" />

<col  class="left" />

<col  class="right" />
</colgroup>
<thead>
<tr>
<th scope="col" class="right">Count</th>
<th scope="col" class="left">Description</th>
<th scope="col" class="right">SKU</th>
</tr>
</thead>

<tbody>
<tr>
<td class="right">4</td>
<td class="left">HS-785HB SERVO</td>
<td class="right">33785S</td>
</tr>


<tr>
<td class="right">3</td>
<td class="left">32T, 0.250" (1/4) Bore 32P Shaft Mount Pinion Gear</td>
<td class="right">615254</td>
</tr>


<tr>
<td class="right">1</td>
<td class="left">32P, 32 Tooth, 24T C1 Spline Servo Mount Gear (Metal)</td>
<td class="right">615290</td>
</tr>


<tr>
<td class="right">3</td>
<td class="left">C1 SPLINE SERVO TO 1/4" SHAFT COUPLER (SET SCREW)</td>
<td class="right">525134</td>
</tr>


<tr>
<td class="right">3</td>
<td class="left">0.250" (1/4") X 2.50" (2-1/2") STAINLESS STEEL D-SHAFTING</td>
<td class="right">634074</td>
</tr>


<tr>
<td class="right">4</td>
<td class="left">32 Pitch, 64 Tooth (.50" Bore) Aluminum Hub Gear</td>
<td class="right">615194</td>
</tr>


<tr>
<td class="right">2</td>
<td class="left">6mm (0.770") Clamping Hub</td>
<td class="right">545616</td>
</tr>


<tr>
<td class="right">2</td>
<td class="left">5mm (0.770") Clamping Hub</td>
<td class="right">545612</td>
</tr>


<tr>
<td class="right">2</td>
<td class="left">4MM (0.770") Clamping Hub</td>
<td class="right">545608</td>
</tr>


<tr>
<td class="right">2</td>
<td class="left">3MM (0.770") Clamping Hub</td>
<td class="right">545604</td>
</tr>
</tbody>
</table>

## Shopping list from Hobbylinc

-   <https://www.hobbylinc.com/htm/k+s/k+s9821.htm>
-   NOTE: checked items are a good set for a 4 hand clock. Theoretically
    possible to create a 6 hand clock with all of the sizes. However,
    servocity doesn't sell clamping hubs for size 2mm and 7mm.
-   parts:
    -   [ ] 2mm x 300mm Round Brass Tube .45mm Wall (4) k+s9820 Item # K+S9820
    -   [X] 3mm x 300mm Round Brass Tube .45mm Wall (4) k+s9821 Item # K+S9821
    -   [X] 4mm x 300mm Round Brass Tube .45mm Wall (3) k+s9822 Item # K+S9822
    -   [X] 5mm x 300mm Round Brass Tube .45mm Wall (3) k+s9823 Item # K+S9823
    -   [X] 6mm x 300mm Round Brass Tube .45mm Wall (2) k+s9824 Item # K+S9824
    -   [ ] 7mm x 300mm Round Brass Tube .45mm Wall (2) k+s9825 Item # K+S9825

