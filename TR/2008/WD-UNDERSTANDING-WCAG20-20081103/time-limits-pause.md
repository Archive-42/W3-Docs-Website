[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.2.1 \[Timing Adjustable\]](time-limits-required-behaviors.html "Understanding SC  2.2.1 [Timing Adjustable]")
-   [**Next:** SC 2.2.3 \[No Timing\]](time-limits-no-exceptions.html "Understanding SC  2.2.3 [No Timing]")

On this page:

-   [Intent](#time-limits-pause-intent-head)
-   [Examples](#time-limits-pause-examples-head)
-   [Related Resources](#time-limits-pause-resources-head)
-   [Techniques & Failures](#time-limits-pause-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="time-limits-pause"></span> **Pause, Stop, Hide**<span class="screenreader">:</span> Understanding SC 2.2.2
====================================================================================================================

> **[2.2.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#time-limits-pause) Pause, Stop, Hide:** For moving, <a href="#blinksdef" class="termref">blinking</a>, scrolling, or auto-updating information, all of the following are true: (Level A)
>
> -   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to <a href="#pauseddef" class="termref">pause</a>, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is <a href="#essentialdef" class="termref">essential</a>; and
>
> -   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.
>
> Note 1: For requirements related to flickering or flashing content, refer to *[Guideline 2.3](seizure.html)*.
>
> Note 2: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#cc5)*.
>
> Note 3: Content that is updated periodically by software, or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.
>
> Note 4: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users, and if not indicating progress could confuse users or cause them to think that content was frozen or broken.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to avoid distracting users during their interaction with a Web page.

"Moving, blinking and scrolling" refers to content in which the visible content conveys a sense of motion. Common examples include motion pictures, synchronized media presentations, animations, real-time games, and scrolling stock tickers. "Auto-updating" refers to content that updates or disappears based on a preset time interval. Common time-based content includes audio, automatically updated weather information, news, stock price updates, and auto-advancing presentations and messages. The requirements for moving, blinking and scrolling content and for auto-updating content are the same except that:

-   authors have the option of providing the user with a means to control the frequency of updates when content is auto-updating and

-   there is no three second exception for auto-updating since it makes little sense to auto-update for just three seconds and then stop

Content that moves or auto-updates can be a barrier to anyone who has trouble reading stationary text quickly as well as anyone who has trouble tracking moving objects. It can also cause problems for screen readers.

Moving content can also be a severe distraction for some people. Certain groups, particularly those with attention deficit disorders, find blinking content distracting, making it difficult for them to concentrate on other parts of the Web page. Five seconds was chosen because it is long enough to get a user's attention, but not so long that a user cannot wait out the distraction if necessary to use the page.

Content that is paused can either resume in real-time or continue playing from the point in the presentation where the user left off.

1.  Pausing and resuming where the user left off is best for users who want to pause to read content and works best when the content is not associated with a real-time event or status.

    Note: See *[Understanding Success Criterion 2.2.1 Timing Adjustable](time-limits-required-behaviors.html)* for additional requirements related to time-limits for reading.

2.  Pausing and jumping to current display (when pause is released) is better for information that is real-time or "status" in nature. For example, weather radar, a stock ticker, a traffic camera, or an auction timer, would present misleading information if a pause caused it to display old information when the content was restarted.

    Note: Hiding content would have the same result as pausing and jumping to current display (when pause is released).

Note: The terms "blinking" and "flashing" can sometimes refer to the same content.

-   "Blinking" refers to content that causes a distraction problem. Blinking can be allowed for a short time as long as it stops (or can be stopped)

-   "Flashing" refers to content that can trigger a seizure (if it is more than 3 per second and large and bright enough). This cannot be allowed even for a second or it could cause a seizure. And turning the flash off is also not an option since the seizure could occur faster than most users could turn it off.

-   Blinking usually does not occur at speeds of 3 per second or more, but it can. If blinking occurs faster than 3 per second, it would also be considered a flash.

### Specific Benefits of Success Criterion 2.2.2:

-   Providing content that stops blinking after five seconds or providing a mechanism for users to stop blinking content allows people with certain disabilities to interact with the Web page.

-   One use of content that blinks is to draw the visitor's attention to that content. Although this is an effective technique for all users with vision, it can be a problem for some users if it persists. For certain groups, including people with low literacy, reading and intellectual disabilities, and people with attention deficit disorders, content that blinks may make it difficult or even impossible to interact with the rest of the Web page.

Examples of Success Criterion 2.2.2
-----------------------------------

-   **An essential animation can be paused without effecting the activity**

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

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 2.2.2 - Pause, Stop, Hide
-----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G4: Allowing the content to be paused and restarted from where it was paused](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G4)

2.  [SCR33: Using script to scroll content, and providing a mechanism to pause it](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR33) (Scripting)

3.  [G11: Creating content that blinks for less than 5 seconds](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G11)

4.  [G187: Using a technology to include blinking content that can be turned off via the user agent](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G187)

5.  [G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G152)

6.  [SCR22: Using scripts to control blinking and stop it in five seconds or less](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR22) (Scripting)

7.  [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G186)

8.  [G191: Providing a link, button, or other mechanism that reloads the page without blinking any content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G191)

### Additional Techniques (Advisory) for 2.2.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing a mechanism to stop all content that blinks within a Web page (future link)

-   Providing the user with a means to stop moving content even if it stops automatically within 5 seconds (future link)

### Common Failures for SC 2.2.2

The following are common mistakes that are considered failures of Success Criterion 2.2.2 by the WCAG Working Group.

-   [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F16)

-   [F47: Failure of Success Criterion 2.2.2 due to using the blink element](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F47)

-   [F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F4)

-   [F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F50)

-   [F7: Failure of Success Criterion 2.2.2 due to an object or applet, such as Java or Flash, that has blinking content without a mechanism to pause the content that blinks for more than five seconds](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F7)

Key Terms
---------

 <span id="blinksdef"></span> blinking  
switch back and forth between two visual states in a way that is meant to draw attention

Note: See also <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#flash-def" class="termref">flash</a>. It is possible for something to be large enough and blink brightly enough at the right frequency to be also classified as a flash.

 <span id="essentialdef"></span> essential  
if removed, would fundamentally change the information or functionality of the content, **and** information and functionality can not be achieved in another way that would conform

 <span id="pauseddef"></span> paused  
stopped by user request and not resumed until requested by user

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.2.1 \[Timing Adjustable\]](time-limits-required-behaviors.html "Understanding SC  2.2.1 [Timing Adjustable]")
-   [**Next:** SC 2.2.3 \[No Timing\]](time-limits-no-exceptions.html "Understanding SC  2.2.3 [No Timing]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
