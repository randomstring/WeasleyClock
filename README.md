<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1. Weasly clock</a>
<ul>
<li><a href="#sec-1-1">1.1. Design Goals/Plans</a></li>
<li><a href="#sec-1-2">1.2. Case Design</a></li>
<li><a href="#sec-1-3">1.3. Clock hands</a></li>
<li><a href="#sec-1-4">1.4. Related Projects for Inspiration</a></li>
<li><a href="#sec-1-5">1.5. Artwork</a></li>
</ul>
</li>
<li><a href="#sec-2">2. Shoppting list</a>
<ul>
<li><a href="#sec-2-1">2.1. Raspberry Pi</a></li>
<li><a href="#sec-2-2">2.2. Servo Hat</a></li>
<li><a href="#sec-2-3">2.3. Shopping list from Servo City</a></li>
<li><a href="#sec-2-4">2.4. Shopping list from Hobbylinc</a></li>
<li><a href="#sec-2-5">2.5. Notes on parts</a></li>
</ul>
</li>
</ul>
</div>
</div>



# Weasly clock<a id="sec-1" name="sec-1"></a>

Build a working physical Weasley Clock from Harry Potter. 

## Design Goals/Plans<a id="sec-1-1" name="sec-1-1"></a>

-   use a Raspberry Pi to control clock via servos and servo hat
-   physical hands, each moving independently
-   four (4) physical hands, one for each family member
-   build my own clockwork
-   program in python
-   use live GPS data of family members
-   GPS updates from one or more of: iCloud, Owntracks, life360, local MQTT, and/or local network device scanning

## Case Design<a id="sec-1-2" name="sec-1-2"></a>

-   To be determined..
-   build a custom cabinet or reuse an old Clock body

## Clock hands<a id="sec-1-3" name="sec-1-3"></a>

-   goal is something like the metalic scissors w/ engraved names
-   mounting could be with 3D printing with a built in clamp
-   possibly use same Clamping Hubs as for the gears

## Related Projects for Inspiration<a id="sec-1-4" name="sec-1-4"></a>

-   <https://www.instructables.com/id/Build-Your-Own-Weasley-Location-Clock/>
-   <https://printableprops.jimdo.com/en/harry-potter/weasley-clock/>
-   <https://www.instagram.com/printableprops/>
-   <https://fourierinformationsir.wordpress.com/2015/11/09/weasley-clock-update/>
-   <https://twitter.com/wbtourlondon/status/765398939910627328?lang=mr>

## Artwork<a id="sec-1-5" name="sec-1-5"></a>

-   <https://minalima.com/product/the-weasley-family-clock/>

# Shoppting list<a id="sec-2" name="sec-2"></a>

## Raspberry Pi<a id="sec-2-1" name="sec-2-1"></a>

-   standard set of Raspberry pi requirements. Pi, power supply, SD card, case

## Servo Hat<a id="sec-2-2" name="sec-2-2"></a>

-   Raspberry Pi servo hat: <https://www.adafruit.com/product/2327>
    -   requires soldering
-   Servo power, one of:
    -   5V 2A should be enough if motors aren't overloaded simutaneously <https://www.adafruit.com/product/276>
    -   5V 4A to hedge bets, or if you run more servso <https://www.adafruit.com/product/1466>

## Shopping list from Servo City<a id="sec-2-3" name="sec-2-3"></a>

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
<td class="right">&#xa0;</td>
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
<td class="right">1</td>
<td class="left">6mm (0.770") Clamping Hub</td>
<td class="right">545616</td>
</tr>


<tr>
<td class="right">1</td>
<td class="left">5mm (0.770") Clamping Hub</td>
<td class="right">545612</td>
</tr>


<tr>
<td class="right">1</td>
<td class="left">4MM (0.770") CLAMPING HUB</td>
<td class="right">545608</td>
</tr>


<tr>
<td class="right">1</td>
<td class="left">3MM (0.770") CLAMPING HUB</td>
<td class="right">545604</td>
</tr>
</tbody>
</table>

## Shopping list from Hobbylinc<a id="sec-2-4" name="sec-2-4"></a>

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

## Notes on parts<a id="sec-2-5" name="sec-2-5"></a>

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
