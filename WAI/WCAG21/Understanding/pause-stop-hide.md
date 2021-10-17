-   [Contents](. "Table of Contents")
-   [GL: Enough Time](enough-time)
-   [Previous SC: Timing Adjustable](timing-adjustable)
-   [Next SC: No Timing](no-timing)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.2.2: Pause, Stop, Hide
========================================================

> Success Criterion [2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/WCAG21/#pause-stop-hide) (Level A): For moving, [blinking](#dfn-blinking), scrolling, or auto-updating information, all of the following are true:
>
> Moving, blinking, scrolling  
> For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to [pause](#dfn-paused), stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is [essential](#dfn-essential); and
>
> Auto-updating  
> For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.
>
> For requirements related to flickering or flashing content, refer to [Guideline 2.3](https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions).
>
> Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5).
>
> Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.
>
> An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.

Intent
------

The intent of this Success Criterion is to avoid distracting users during their interaction with a Web page.

"Moving, blinking and scrolling" refers to content in which the visible content conveys a sense of motion. Common examples include motion pictures, synchronized media presentations, animations, real-time games, and scrolling stock tickers. "Auto-updating" refers to content that updates or disappears based on a preset time interval. Common time-based content includes audio, automatically updated weather information, news, stock price updates, and auto-advancing presentations and messages. The requirements for moving, blinking and scrolling content and for auto-updating content are the same except that:

-   authors have the option of providing the user with a means to control the frequency of updates when content is auto-updating and
-   there is no five second exception for auto-updating since it makes little sense to auto-update for a few seconds and then stop

Content that moves or auto-updates can be a barrier to anyone who has trouble reading stationary text quickly as well as anyone who has trouble tracking moving objects. It can also cause problems for screen readers.

Moving content can also be a severe distraction for some people. Certain groups, particularly those with attention deficit disorders, find blinking content distracting, making it difficult for them to concentrate on other parts of the Web page. Five seconds was chosen because it is long enough to get a user's attention, but not so long that a user cannot wait out the distraction if necessary to use the page.

Content that is paused can either resume in real-time or continue playing from the point in the presentation where the user left off.

1.  Pausing and resuming where the user left off is best for users who want to pause to read content and works best when the content is not associated with a real-time event or status.

    Note

    See [2.2.1: Timing Adjustable](timing-adjustable) for additional requirements related to time-limits for reading.

2.  Pausing and jumping to current display (when pause is released) is better for information that is real-time or "status" in nature. For example, weather radar, a stock ticker, a traffic camera, or an auction timer, would present misleading information if a pause caused it to display old information when the content was restarted.

    Note

    Hiding content would have the same result as pausing and jumping to current display (when pause is released).

For a mechanism to be considered "a mechanism for the user to pause," it must provide the user with a means to pause that does not tie up the user or the focus so that the page cannot be used. The word "pause" here is meant in the sense of a "pause button" although other mechanisms than a button can be used. Having an animation stop only so long as a user has focus on it (where it restarts as soon as the user moves the focus away) would not be considered a "mechanism for the user to pause" because it makes the page unusable in the process and would not meet this SC.

It is important to note that the terms "blinking" and "flashing" can sometimes refer to the same content.

-   "Blinking" refers to content that causes a distraction problem. Blinking can be allowed for a short time as long as it stops (or can be stopped)
-   "Flashing" refers to content that can trigger a seizure (if it is more than 3 per second and large and bright enough). This cannot be allowed even for a second or it could cause a seizure. And turning the flash off is also not an option since the seizure could occur faster than most users could turn it off.
-   Blinking usually does not occur at speeds of 3 per second or more, but it can. If blinking occurs faster than 3 per second, it would also be considered a flash.

Benefits
--------

-   Providing content that stops blinking after five seconds or providing a mechanism for users to stop blinking content allows people with certain disabilities to interact with the Web page.
-   One use of content that blinks is to draw the visitor's attention to that content. Although this is an effective technique for all users with vision, it can be a problem for some users if it persists. For certain groups, including people with low literacy, reading and intellectual disabilities, and people with attention deficit disorders, content that blinks may make it difficult or even impossible to interact with the rest of the Web page.

Examples
--------

-   **An essential animation can be paused without affecting the activity**

    A Web site helps users understand 'how things work' through animations that demonstrate processes. Animations have "pause" and "restart" buttons.

-   **A stock ticker**

    A stock ticker has "pause" and "restart" buttons. Pausing the ticker causes it to pause on the currently displayed stock. Restarting causes the ticker to resume from the stopped point but with a notice that the display is delayed. Since the intent of the stock ticker is usually to provide realtime information, there might also be a button that would advance the ticker to the most recently traded stock.

-   **A game is designed so that users take turns rather than competing in real-time**

    One party can pause the game without invalidating the competitive aspect of it.

-   **A Web advertisement**

    An advertisement blinks to get viewers attention but stops after 5 seconds

-   **A form prompt**

    A form blinks an arrow near the submit button if a user finishes filling out the form but does not activate the submit button. The blinking stops after 5 seconds.

-   **An animation**

    An animation runs in the upper portion of the page but has a "freeze animation" button near the bottom of the animation.

-   **A "loading" animation**

    A preloader animation is shown on a page which requires a certain percentage of a large file to be downloaded before playback can begin. The animation is the only content on the page and instructs the user to please wait while the video loads. Because the moving content is not presented in parallel with other content, no mechanism to pause, stop or hide it needs to be provided, even though the animation may run for more than 5 seconds for users with slower connections.

-   **A full-page advertisement**

    A site requires that all users view a 15 second advertisement before they can access free content available from their site. Because viewing the advertisement is a requirement for all users and because it is not presented in parallel with other content, no mechanism to pause, stop or hide it needs to be provided.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G4" class="general">G4: Allowing the content to be paused and restarted from where it was paused</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL11" class="silverlight">SL11: Pausing or Stopping A Decorative Silverlight Animation</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL12" class="silverlight">SL12: Pausing, Stopping, or Playing Media in Silverlight MediaElements</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR33" class="script">SCR33: Using script to scroll content, and providing a mechanism to pause it</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G11" class="general">G11: Creating content that blinks for less than 5 seconds</a>
6.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G187" class="general">G187: Using a technology to include blinking content that can be turned off via the user agent</a>
7.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G152" class="general">G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)</a>
8.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR22" class="script">SCR22: Using scripts to control blinking and stop it in five seconds or less</a>
9.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G186" class="general">G186: Using a control in the Web page that stops moving, blinking, or auto-updating content</a>
10. <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G191" class="general">G191: Providing a link, button, or other mechanism that reloads the page without any blinking content</a>
11. <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL24" class="silverlight">SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F16" class="failure">F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F47" class="failure">F47: Failure of Success Criterion 2.2.2 due to using the blink element</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F4" class="failure">F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F50" class="failure">F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F7" class="failure">F7: Failure of Success Criterion 2.2.2 due to an object or applet for more than five seconds</a>

Key Terms
---------

blinking

switch back and forth between two visual states in a way that is meant to draw attention

Note

See also [flash](#dfn-flash). It is possible for something to be large enough and blink brightly enough at the right frequency to be also classified as a flash.

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

flash

a pair of opposing changes in [relative luminance](#dfn-relative-luminance) that can cause seizures in some people if it is large enough and in the right frequency range

Note

See [general flash and red flash thresholds](#dfn-general-flash-and-red-flash-thresholds) for information about types of flash that are not allowed.

Note

See also [blinking](#dfn-blinking).

general flash and red flash thresholds

a [flash](#dfn-flash) or rapidly changing image sequence is below the threshold (i.e., content **passes**) if any of the following are true:

1.  there are no more than three **general flashes** and / or no more than three **red flashes** within any one-second period; or
2.  the combined area of flashes occurring concurrently occupies no more than a total of .006 steradians within any 10 degree visual field on the screen (25% of any 10 degree visual field on the screen) at typical viewing distance

where:

-   A **general flash** is defined as a pair of opposing changes in [relative luminance](#dfn-relative-luminance) of 10% or more of the maximum relative luminance where the relative luminance of the darker image is below 0.80; and where "a pair of opposing changes" is an increase followed by a decrease, or a decrease followed by an increase, and
-   A **red flash** is defined as any pair of opposing transitions involving a saturated red

*Exception:* Flashing that is a fine, balanced, pattern such as white noise or an alternating checkerboard pattern with "squares" smaller than 0.1 degree (of visual field at typical viewing distance) on a side does not violate the thresholds.

Note

For general software or Web content, using a 341 x 256 pixel rectangle anywhere on the displayed screen area when the content is viewed at 1024 x 768 pixels will provide a good estimate of a 10 degree visual field for standard screen sizes and viewing distances (e.g., 15-17 inch screen at 22-26 inches). (Higher resolutions displays showing the same rendering of the content yield smaller and safer images so it is lower resolutions that are used to define the thresholds.)

Note

A transition is the change in relative luminance (or relative luminance/color for red flashing) between adjacent peaks and valleys in a plot of relative luminance (or relative luminance/color for red flashing) measurement against time. A flash consists of two opposing transitions.

Note

The current working definition in the field for **"pair of opposing transitions involving a saturated red"** is where, for either or both states involved in each transition, R/(R+ G + B) &gt;= 0.8, and the change in the value of (R-G-B)x320 is &gt; 20 (negative values of (R-G-B)x320 are set to zero) for both transitions. R, G, B values range from 0-1 as specified in “relative luminance” definition. \[\[HARDING-BINNIE\]\]

Note

Tools are available that will carry out analysis from video screen capture. However, no tool is necessary to evaluate for this condition if flashing is less than or equal to 3 flashes in any one second. Content automatically passes (see \#1 and \#2 above).

paused

stopped by user request and not resumed until requested by user

relative luminance

the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white

Note

For the sRGB colorspace, the relative luminance of a color is defined as L = 0.2126 \* **R** + 0.7152 \* **G** + 0.0722 \* **B** where **R**, **G** and **B** are defined as:

-   if RsRGB &lt;= 0.03928 then **R** = RsRGB/12.92 else **R** = ((RsRGB+0.055)/1.055) ^ 2.4
-   if GsRGB &lt;= 0.03928 then **G** = GsRGB/12.92 else **G** = ((GsRGB+0.055)/1.055) ^ 2.4
-   if BsRGB &lt;= 0.03928 then **B** = BsRGB/12.92 else **B** = ((BsRGB+0.055)/1.055) ^ 2.4

and RsRGB, GsRGB, and BsRGB are defined as:

-   RsRGB = R8bit/255
-   GsRGB = G8bit/255
-   BsRGB = B8bit/255

The "^" character is the exponentiation operator. (Formula taken from \[\[sRGB\]\] and \[\[IEC-4WD\]\]).

Note

Almost all systems used today to view Web content assume sRGB encoding. Unless it is known that another color space will be used to process and display the content, authors should evaluate using sRGB colorspace. If using other color spaces, see [Understanding Success Criterion 1.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast).

Note

If dithering occurs after delivery, then the source color value is used. For colors that are dithered at the source, the average values of the colors that are dithered should be used (average R, average G, and average B).

Note

Tools are available that automatically do the calculations when testing contrast and flash.

Note

A [MathML version of the relative luminance definition](relative-luminance.xml) is available.
