# Build Log

I started this log after getting the Weasley Clock feature complete. I
should have started from the beginning. Entries prior to April 2020
are written retrospectively.

## TODO: Build/Code

* create code/algorithm to reliably detect when people are bicycling for the Quidditch state
* better document Zwift integration, post example home assistant configuration

## Why Home Assistant?

I started using [Home Assistant](https://www.home-assistant.io/) when
I was looking at home automation choices. What started this was my
purchase from [Konnected](https://konnected.io/), a system that
converts an old wired alarm system to a modern IoT integration.

Home Assistant is open source and strives to keep all control local
(and private) to your home network.

After over a year of tinkering with Home Assistant, I feel like I've
only scratched the surface of what it's capable of.

I published [example configuration
templates](https://github.com/randomstring/WeasleyClock/tree/master/homeassistant)
for integrating into Home Assistant.

## Why Life360?

I tried the Home Assistant Apple iCloud integration first. The iCloud
API does not seem to be a fully supported and endorsed API. The Home
Assistant integration broke for me at least twice. Once when Apple
changed some details in their authentication.

The Life360 integration has been quite stable and has features
designed around tracking family members. I also managed to get buy-in
from all my family members to use it. Which makes all of this possible. 

Another point is that it works on both iPhones and Android phones.

Life360 allows for setting up several geo-fenced regions and giving
them labels. For instance I have a geo-fence region for each school.
Home Assistant also has this feature, so this can be done in Home
Assistant just using the latitude and longitude provided by Life360.

## Why MQTT?

MQTT is fairly easy to use, can generate arbitrary messages (I use
JSON for the payload), and has extensive support in Home Assistant.

Using python the [Paho MQTT](https://pypi.org/project/paho-mqtt/)
module.

I implemented the MQTT the Weasley Clock Server/Client in a stand
alone repo called
[weasleyclockd](https://github.com/randomstring/weasleyclockd).

The other obvious choice would have been to use an HTTP and RESTful
API. I haven't ruled out adding one. 

## Monolithic Approach

Alternatively, I could have just implemented a direct integration with
Life360 on the Raspberry Pi. This would have taken the form of a
single daemon running on the Weasley Clock that would poll Life360 and
do all the state calculations.

This would have been less complicated, removing the need for Home
Assistant and the MQTT broker. There are a couple downsides to this
approach. First, I would need to keep the Life360 API up to date in the
event the API or the authentication scheme changed. If Life360 goes
away for some reason, I can switch to some other location tracking
system supported by Home Assistant. Secondly, I can leverage the Unifi
Home Assistant integration to track which Wi-Fi AP people are connected
to. AP level locations allow figuring out when someone is in the Shop
or outside in the Garden.

## Clock Body Details

I reused the original wood where possible to keep the aged look of the
clock. When I needed to use new wood I stained it to match.

I tried to use as much brass hardware as possible.

## Why Servos ? What other options?

I used servos, because when I was looking at rotational control, this
was what I found ready made solutions for first. I found  multi
rotation "sail" servos and the Pi Servo HAT solution first.

Since then I've done some programming on robots. I think a motor with
an encoder to track the location would be a better solution. The
position control could be more precise and it would give the option of
using PID and motion profiling to customize the hand movement.

Maybe I'll make another version of the clockwork using motors and
encoders.

A third option would be to use stepper motors. I purchased a raspberry
pi motor controller hat to test controlling stepper motors.

Below are some seeds for future research. 

I found this possible motor and encoder combination:
<https://wiki.dfrobot.com/DC_Motor_Driver_HAT_SKU_DFR059>
<https://wiki.dfrobot.com/12V_DC_Motor_122_rpm_w_Encoder_SKU__FIT0403>

Another encoder option:
<https://www.youtube.com/watch?v=RLCPKa9SoF0>
<https://www.superdroidrobots.com/shop/item.aspx/quadruple-ls7366r-quadrature-encoder-buffer/2418/>

Stepper motor with encoder:
<https://www.digikey.com/product-detail/en/cui-devices/NEMA14-10-04D-AMT112S/102-4710-ND/9477637>

Possible motor from ServoCity.com:
<https://www.servocity.com/76-rpm-spur-gear-motor-w-encoder>
<https://www.servocity.com/encoder-breakout-cable-4-pos-jst-xh-mh-fc-to-4-x-1-pos-tjc8-fh-mc-300mm-length>


## Notes on parts

-   <https://www.servocity.com/32p-24t-c1-spline-servo-mount-gears-metal>
    NOTE: The 32 tooth gears don't fully clear the servo body. This
    means that to use more than one servo, we need to use a shaft so
    that central 64 tooth gears don't hit/interfere with the servos.
-   Using 64 tooth gears mounted to the brass tubes. This gives a clean
    1:2 ration from the servos.
-   HS-785HB Servo
    -   specs <https://www.robotshop.com/media/files/pdf/hs-785hb.pdf>
    -   Grabcad model <https://grabcad.com/library/hitec-hs-785hb-winch-servo-1>
    -   The HS-785HB Servos have a claimed 8 full rotations. I only need
        2 full rotations to get the full range of motion of the clock
        hands. Having more than 360 degrees of motion allows for a little
        **flair** when positioning the hands. I'm going to use just 6 full
        rotations of the servo (so 3 full rotations of the hands) to
        avoid using the extremes of the PWM signals to the servos.
    -   Stall current for HS-785HB is 1500mA. Max current 6A (at 5V?)
    -   No load current for HS-785HB is 230mA
    -   Idle current for HS-785HB is 9mA
-   possible screws for attaching to clamping hubs? 6-32
    -   SKU 91771A145  length 0.3125" (5/16")  <  0.333" = 0.25" (hub width) + 0.083" (screw head depth)
    -   <https://www.servocity.com/6-32-flat-head-phillips-machine-screws>


## Why only 4 hands?

When I first conceived of the idea, I expected to find a number of
commercial multi-hand clockworks to choose from. There are plenty of 3
hand clocks out there (hour, minute, seconds) and some are kits that
would be hackable. I did not find any 4 or more clock hand solutions.

Four was the minimum number I needed, as that was the size of my
immediate family. I wanted to do more, ideally 7. That posed several
problems. I was able to find a set of 7 consecutive nesting brass
tubes 2, 3, 4, 5, 6, 7, and 8 mm. However I could not find clamping
hubs in for 2mm, or 7mm sizes. Another challenge was fitting more than
4 servos around the central shaft. Finally, the depth of the clockwork
would be almost double, making fitting it into a case more difficult.

These are just problems to be overcome. 

# Diary

## 2019-02-07 Pi Servo HAT

Ordered the [Adafruit 16-Channel PWM / Servo HAT for Raspberry
Pi](https://www.adafruit.com/product/2327) to start experimenting with
running servos. 

The servo HAT requires soldering on the headers. I watched a few
YouTube videos like this one to learn how
<https://www.youtube.com/watch?v=t9LOtOBOTb0> 

I got the larger capacity [5V 4A (4000mA) switching power
supply](https://www.adafruit.com/product/1466) that can power more
servos. This 4 Amps, might be overkill but at the time I didn't know
which and how many servos I would need to drive.

## 2019-03-07 Brass Tubes

Order a set of nesting brass tubes from Hobbylinc. I order them in
metric whole millimeter sizes. The wall thickness on each is .45mm,
leaving 0.1mm of clearance for the next smaller size of tube.

Here is a link to the 4m size tube:
<http://www.hobbylinc.com/htm/k+s/k+s9822.htm>

I also get mounting hubs for attaching gears to the hubs
<https://www.servocity.com/770-clamping-hubs>.

## 2019-03-13 Order Servos and Gears

Made my first order from [Servo City](https://www.servocity.com/) for
a multi-turn "sail winch servo." Specifically the [HS
785hb](https://www.servocity.com/hs-785hb-servo) This is a servo that
has a range of motion more than 360 degrees. Most servos have a range
of less than 360 degree. 

I talk about other options for accurate rotation of for the clock
hands, but at this point I had done enough research to know this
should work.

## 2019-03-14 Thinking about Hands

So I'd been thinking about how I was going to design, make, and
ultimately attach clock hands. Of all the similar projects I found, by
far the best was by [Printable
Props](https://printableprops.jimdofree.com/en/harry-potter/weasley-clock/). I
messaged the creator, Pascal, hoping he might share the CAD for his
clock hands. He went full on authentic, artistically re-creating the
hands from the movie. Sadly I didn't hear back. 

My friend Ben suggested outsourcing the hands to
[Shapeways](https://www.shapeways.com/). I came pretty close to doing
that.

Thankfully, my son was enrolled in CAD and Advanced CAD at his high
school. By the time I really needed the hands done, he was able to use
his mad CAD skills to create custom hands in SolidWorks.


## 2019-06-19 Prototype Clockworks

I build the first prototype of the clockworks and some [custom code to
control the HS 785hb
servos](https://github.com/randomstring/weasleyclockd/blob/master/hs785hb_servo.py).


## 2019-10-24 Thrift Store Gold!

I had been thinking (and worrying) about how I was going to enclose
the Weasley Clock. I was thinking of building a custom housing for it
and mount it to the wall. This would have required improving my crude
woodworking skills.

Then I spotted this Grandfather clock in a thrift store in Langley,
Washington. I had actually spotted this exact clock three months prior
on a visit to Whidbey Island. At the time, I didn't have the
measurements for the artwork and no way to tell if everything would
fit. I was also traveling with my wife, for whom the clock was a
surprise present, so I chose to be discrete and not start measuring the
clock on the spot.

Upon returning home, I measure the clockwork and artwork so I could
identify old clocks that would fit. I did some searching on eBay.com
for possible candidates, however working clocks were expensive and
virtually all could not be shipped. Finding the perfect clock in
Florida available for pick up only wasn't an option.

Fate had me returning to Langley three months later and I went straight
to the thrift shop. The clock was still there, and the price had come
down $85. A few quick measurements later and I was positive I had a
good fit.

My wife was curious at my need to purchase the clock, but kept her
curiosity in check as she knew it had something to with a surprise for
her.

Grandmother clock by Colonial MFG Co, Model 1866 $165 in a thrift store.


## 2020-02-20 Plug It In

The pi and servos need power. The servos have their own power supply,
so I needed at least two outlets inside the clock to provide power. I
found this extension cord
<https://www.amazon.com/gp/product/B07BBGM5WH/> on Amazon. That fit
with my sense of aesthetics for the clock. And because it was a dark
gray, it's almost invisible inside the base of the clock. I also
purchased a black pi USB power
supply. <https://www.amazon.com/gp/product/B00MARDJZ4/>

I drilled a hole in the bottom of the clock big enough for the cable
and then voided the warranty on the cord by cutting it, feeding the
cable through and then splicing it back together. I didn't want to
make a huge hole to squeeze the plug through.

I ran the pair of black power cables for the pi and servos up the
back, inside corner of the case. They are discreet enough that you
don't see them, unless you're looking for them.

## 2020-04-01 Magic Wands

Had the thought that I could create a replica Harry Potter magic wand
with a strong magnet in the tip and install a few magnetic reed
switches inside the clock. I could then pull out the want and tap the
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

## 2020-04-11 Diagram

Spent the morning creating a pretty flow diagram for README.md.

Researched quadrature encoders for the raspberry pi.

## 2020-04-12 CAD

Add clock support CAD files. Remove ServoCity.com library CAD files,
as they are hosted at <https://www.servocity.com/step-files>.


## 2020-04-16 Painting and CAD

I spent the last few days experimenting with painting the clock
hands. The recipe I like is to clean up the 3D printed piece. Smooth
it with a file and then emery paper. Next a layer of primer to help
give it a smooth surface. Then paint with metallic nickle spray
paint. Then mask off the letters of the name with blue painters
tape. Then finish with a light, approximately 75% coverage of the hand
with flat black paint. This lets a bit of the silver nickle shine
through, but provides good contrast against the clock face. Final
step is to remove the masking tape to reveal the names in bright
silvery metallic nickle.

Now I need to remove the hands from the clock, paint the hands, and
then re-install them.

I hired my son to create CAD files in SolidWorks of example clock
hands with the Weasley family names from the Harry Potter movies. He
also created a CAD rendering of the clockwork.

I need to get those uploaded to GitHub and to Grabcad.

## 2020-04-17 Repaint

Removed the 3D printed hands from the clock and started painting
them. First primer coat applied.

## 2020-04-25 Finished painting

Finished painting and reinstalled. Back up and running! With COVID-19,
there isn't much movement other than people moving between "Home" and
"Garden."

## 2020-04-26

Worked on the MQTT script replay program to be able to demo various
features. In the process the MQTT broker on my Home Assistant went a
little wonky, I discovered that the broker I had installed was now
deprecated, migrated to the supported MQTT HA broker, and in the
process had no working MQTT for most of a day. It's all working now.

Turns out port 4883 is a non-standard MQTT over SSL port. Switched to
using port 8883.

Fine tuning
[demo2](https://github.com/randomstring/weasleyclockd/blob/master/demos/demo2.json)
to demonstrate what happens when someone is far from home and then
travels back home.

## 2020-05-01

Figured out why the hand placement was off for some of the edges of
some segments. I only just noticed that the the clock segments on the
artwork are not all equally sized. I had assumed that all 8 segments
were equal size and thus 45deg wide. Instead half of the segments are
40 degrees and half are 50 degrees. 

## 2020-05-05

Demo work. Improved demo scripts. Filmed stable video of demos. Made
animated GIFs of demos.

```
 ffmpeg -i IMG_7587.MOV -vf crop=1146:1080:387:0,scale=382:360,fps=6 demo2.gif
 ffmpeg -i IMG_7586.MOV -vf crop=1146:1080:387:0,scale=382:360,fps=6 demo3.gif
```

## 2020-05-10 

I just found <http://www.themagicclock.com/>. This person made many of
the same decisions I did, including using sail winch servos and
reusing an antique clock body. No location tracking, or at least not
when they last updated their webpage.

## 2020-05-17 3D Printed Gear Research

Shopping around for alternate build options. 

Not sure why I overlooked McMaster-Carr in the past.
https://www.mcmaster.com/shafts/copper-brass-and-bronze/system-of-measurement~metric/shape~round-tube/

Customizable Shaft Collar
https://www.thingiverse.com/thing:3694236

Examples of 3D printed shaft connectors.
https://howtomechatronics.com/projects/arduino-3d-wire-bending-machine/
https://howtomechatronics.com/projects/arduino-mecanum-wheels-robot/

3D printed motor mount and gears
http://lukemetz.com/mechanical-v2-base/

Quora Ideas on how to attach 3D printed gears to metal shafts
https://www.quora.com/What-is-the-best-way-to-secure-a-3D-printed-PLA-gear-to-a-metal-shaft

## 2020-05-19

Wrote a blog post about the project, focused more on the non-technical side. https://randomstring2.blogspot.com/2020/05/weasley-location-clock-project.html It's been 5 years since my last blog post. Given how terrible blogger is, it might be another 5 before the next one. 

This project got onto the Hacker News front page. It got as high as #12 (that I saw). https://news.ycombinator.com/item?id=23235807 Woot!

## 2020-06-01 Detect when Bicycling

This had been bothering me for a while. The Life360 moving state would
be too easy to confusing with driving or even walking. I could use a
range of speed that I assigned to be cycling. However, this would
require implementing an average speed sensor. Even with the average
speed, there are situations when I might be driving slowly (stuck in
traffic) or biking quickly (down a long descent) that would be outside
any fixed range. I could use geolocation to get street names and
figure out when I'm on a bike train or an interstate and set the
activity accordingly. I looked into ways to detect what device my
phone was paired with via Bluetooth. If my phone was paired with my
Garmin cycling computer, I would know I was cycling. I was starting to
think I was going to have to write a complicated state machine as a
custom plugin or script to make a reasonable guess at when I was
biking or not. This is why I was procrastinating this task...

In the end I took one last look at the Garmin LiveTrack feature. This
will send an email with a URL for tracking your ride in real time. I
use this email as a trigger when I start a ride and I use my return
home as a trigger that the ride is over. In the future I'll work on
actually pulling the URL fromthe email to detect when the ride is
over. Or just time out after 2 hours of being stationary.

Steps:
 - create a dummy gmail account to recieve notifications
 - turn on LiveTracking on my Garmin 530 and send notifications to new gmail account
 - enable email sensor on HA https://www.home-assistant.io/integrations/imap_email_content/
 - autoarchive new emails after 15 minutes
   see: https://medium.com/@fw3d/auto-archive-emails-in-gmail-after-2-days-1ebf0e076b1c
 - email sensor look for start of LiveTrack email, this signals start of ride
 - autoArchive script removes email after 15 min
 - end of ride when returning home


Still to do is to flag the end of the ride even when not at home. This
can be done by following the LiveTrack URL and monitor when the ride
is actually over. Would be nice if there were an API.

Strava used to have API access to the Strava Beacon feature, but it
seems to be gone in the current API version.

Alternatively, I can manually send an email to flag the end of a ride.

# Specification

Assorted measurements and specifications for parts. Pulling this out
of the README to reduce clutter in the README.

## Clock Hand Dimensions

Clock hands dimensions:

- center-to-point: 88-92mm (so that the point does not obscure text)
- width: 12-14mm (can vary, allow room for names)
- thickness: 3mm (2mm was a little too thin)
- max thickness around center hole: 4mm

## Clockwork Dimensions

- clockwork depth: 4.125" (behind the face)
- clockwork width: 6.625"
- clockwork height: 3"
- hands depth:     2"     (with 0.125" clearance from glass)

## Clock Face Dimensions

Clock face dimensions: 
    -   width 9.75"
    -   height of square face 9.5"
    -   total height 13.5"
    -   top semi-circle indentation: 1"
    -   top semi-circle height: 4"
    -   clock face radius: 4"

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


## Clock Hands Solution

My son, Alex, generated the 3D CAD models for the hands with some
artisitc input from myself. In particular I spent a fair amount of
time finding a good font to use. After a couple iterations they came
out great! He put in a little extra time to make his clock hand have
some extra flair.

I kept the production in house. My father-in-law ran the 3D printer to
print them.

Attaching them to the brass rods turned out not to be an issue at
all. The 3D hands were printed with slightly undersized holes. I filed
out the holes so that they would fit, but very securely. 

## Fonts

Here are the [fonts](fonts/Fonts.md) I evaluated for use on the hands.
