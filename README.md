# Weasley Clock

Build a working physical Weasley Clock from Harry Potter. 

Photo album: <https://photos.app.goo.gl/7yxiuzpsFReUh5Yy5>

## Design

1. Track location of family members
   using [Life360](http://life360.com/). This service allows for
   realtime updates of each family member's location and speed.

2. Use [Home Assistant](https://www.home-assistant.io/) as a clearning
   house for family member location and movement within and around
   home. Home assistant is hosted on a Raspberry Pi
   running [Hass.io](https://www.home-assistant.io/hassio/).

3. Create custom Home Assistant rules to calculate the Weasley Clock
   state of each family member. Each state is visible from the Home
   Assistant dashboard. Changes in clock state are transmitted to the
   physical clock using the MQTT protocol over the network.

4. Write
   [custom software](https://github.com/randomstring/weasleyclockd) to
   run on a Raspberry Pi that will monitor the MQTT message stream for
   changes in clock state and update the physical clock hands to
   match. This software will also add some flare to hand movement. For
   example, the placement of the hand within each clock face sector
   will be determined by the person's distance from home. This way,
   you can tell if someone is far or near to home at a glance. You
   might even be able to notice the progress of the person's dial
   progressing towards home.

5. Build a the physical clock with four hands. The clock will be
   mounted into an old Grandfather clock. The face of the clock is
   divided into eight equal sectors, each has a location/situations
   label. These labels are: Home, Mortal Peril, Quidditch, Work,
   School, Garden, In Transit, and Lost.

6. Re-use the chimes that came with the original clock.

## Case Design

-   I decided to reuse an old grandfather/grandmother clock instead of
    building a new case. I got lucky and found a perfect case at a
    thrift shop. I needed the dimensions of the face to match the
    artwork I have and the depth of the case needed to hold the servos
    and new clockwork.

## Clock Hands

Clock hands dimentions:
- center-to-point: 88-92mm (so that the point does not obscure text)
- width: 12-14mm (can vary, allow room for names)
- thickness: 3mm (2mm was a little too thin)
- max thickness around center hole: 4mm

Goals
- Something like the metallic scissors w/ engraved names
- clock hands could either be 3D printed or possibly laser cut from metal
- mounting could be with 3D printing with a collet (clip)

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

## Related Projects and Inspiration

-   <https://www.instructables.com/id/Build-Your-Own-Weasley-Location-Clock/>
-   <https://printableprops.jimdo.com/en/harry-potter/weasley-clock/>
-   <https://www.facebook.com/PrintableProps/>
-   <https://www.instagram.com/printableprops/>
-   <https://fourierinformationsir.wordpress.com/2015/11/09/weasley-clock-update/>
-   <https://twitter.com/wbtourlondon/status/765398939910627328?lang=mr>
-   <https://www.youtube.com/playlist?list=PL86twtxo_L9TMY4A5TcG2nJcsyFx2CWhb>
-   <https://magicclock.de/>
-   <http://www.brettoliver.org.uk/Longcase_Clock/Longcase_Clock.htm>

## Artwork

-   <https://minalima.com/product/the-weasley-family-clock/>
-   clock face dimensions: 
    -   width 9.75"
    -   height of square face 9.5"
    -   total height 13.5"
    -   top semi-circle indentation: 1"
    -   top semi-circle height: 4"
    -   clock face radius: 4"

## Chimes

- The grandmother/grandfather clock came with a set of chimes. I plan
  to integrage them once I have the clock mechanism finished. I found
  an example implementation.
   - https://hackaday.io/project/10771-audible-notifications-by-a-grandfathers-clock
   - https://github.com/borazslo/GPIOChimes
   - https://www.theclockdepot.com/grandfather_clocks_manual.html
   - http://dhenshaw.net/art/judge/start.html
   - https://hackaday.com/2017/11/17/modernizing-a-170-year-old-antique-grandfather-clock/#more-281875
   - https://timesavers.com/c-1158662-clock-repair-replacement-parts-wheels-wheel-blanks-motion-works-fans-relate-center-wheels.html
   
### Hardware Mounting Ideas

Possibly drive with existing chime timing with a stepper
motor. Possible hardware for attachting a motor to the existing chime
mechanism.

 - [Stepper motor - NEMA-17 size - 200 steps/rev, 12V 350mA](https://www.adafruit.com/product/324)
 - [Stepper Motor Mount with Hardware - NEMA-17 Sized](https://www.adafruit.com/product/1297)
 - [Aluminum Flex Shaft Coupler - 5mm to 5mm](https://www.adafruit.com/product/1175)
 - [5mm Bore 32 Pitch, 16T Shaft Mount Pinion Gear](https://www.servocity.com/5mm-bore-32p-16t-shaft-mount-pinion-gears)
 - [More 32 Pitch Shaft Mount Options](https://www.servocity.com/motion-components/rotary-motion/gears/shaft-mount-pinion-gears/32-pitch-shaft-mount-pinion-gears)
 - [5mm Shaft Hub Mount](https://www.pololu.com/product/1203)
 - [Belt and Pully?](https://www.adafruit.com/product/1253)
 - [Brass Threaded Rod](https://www.mcmaster.com/threaded-rods)


## Clockwork

-   clockwork depth: 4.125" (behind the face)
-   clockwork width: 6.625"
-   clockwork height: 3"
-   hands depth:     2"     (with 0.125" clearance from glass)

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

-   home/school/work/lost/intransit/lost states are determined by life360 location
-   garden state is based on which of the home WiFi access points is being used
-   mortalperil is triggered by life360 detecting speeds over 75 mph
-   error is triggered if the life360 device tracker returns None type

Example Home Assistant configurations can be found in the
homeassistant/ directory.

## Software

I need a daemon running on the Raspberry Pi that controls the clock
servos. For this I
wrote [weasleyclockd](https://github.com/randomstring/weasleyclockd)
that monitors the MQTT messages from Home Assistant and manages the
physical clock movement.

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

## CAD Models of Parts

Most of the parts from ServoCity.com have CAD models. I found a CAD
model for the Servo on GrabCad.com (link above).

I have collected all the available [CAD Files](CAD/library) in the
[CAD](CAD) sub-directory. For all the ServoCity CAD files, check out
the [ServoCity.com website](<https://www.servocity.com/step-files>).

## Mounting poster to plywood

-   Use 3M Super 77 Spray Adhesive for mounting the clock face artwork. After some experimentation, I think

this will be better than using Mod Podge as I originally though. The
3M product does not get as wet, and doesn't have to saturate the paper
like the Mod Podge does. This leaves the face surface smoother, and
doesn't require coating the front of the art to get good adhesion.
-   Or use Mod Podge water based glue to tack the poster to the wood clock face  
    -   <https://www.amazon.com/Mod-Podge-CS11303-Waterbase-Sealer/dp/B0009ILH8C/>
    -   <https://www.youtube.com/watch?v=Fa5UyNZCnWU>
    -   <https://www.manmadediy.com/3409-how-to-mount-posters-and-art-to-plywood-for-an-affordable-modern-look>
-   The current clock body will allow me to hide the mounting screws
    and make interchanging the face possible.

## Clock Body

-   Grandmother clock by Colonial MFG Co, Model 1866 $165 in a thrift store.

