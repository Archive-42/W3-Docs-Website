[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.2 \[Enough Time\]](time-limits.html "Understanding Guideline  2.2 [Enough Time]")
-   [**Next:** SC 2.2.2 \[Pause, Stop, Hide\]](time-limits-pause.html "Understanding SC  2.2.2 [Pause, Stop, Hide]")

On this page:

-   [Intent](#time-limits-required-behaviors-intent-head)
-   [Examples](#time-limits-required-behaviors-examples-head)
-   [Related Resources](#time-limits-required-behaviors-resources-head)
-   [Techniques & Failures](#time-limits-required-behaviors-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="time-limits-required-behaviors"></span> **Timing Adjustable**<span class="screenreader">:</span> Understanding SC 2.2.1
=================================================================================================================================

> **[2.2.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-required-behaviors) Timing Adjustable:** For each time limit that is set by the content, at least one of the following is true: (Level A)
>
> -   **Turn off:** The user is allowed to turn off the time limit before encountering it; or
>
> -   **Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or
>
> -   **Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or
>
> -   **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
>
> -   **Essential Exception:** The time limit is <a href="#essentialdef" class="termref">essential</a> and extending it would invalidate the activity; or
>
> -   **20 Hour Exception:** The time limit is longer than 20 hours.
>
> *Note:* This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-receive-focus" class="gl-ref">Success Criterion 3.2.1</a>, which puts limits on changes of content or context as a result of user action.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that users with disabilities are given adequate time to interact with Web content whenever possible. People with disabilities such as blindness, low vision, dexterity impairments, and cognitive limitations may require more time to read content or to perform functions such as filling out on-line forms. If Web functions are time-dependent, it will be difficult for some users to perform the required action before a time limit occurs. This may render the service inaccessible to them. Designing functions that are not time-dependent will help people with disabilities succeed at completing these functions. Providing options to disable time limits, customize the length of time limits, or request more time before a time limit occurs helps those users who require more time than expected to successfully complete tasks. These options are listed in the order that will be most helpful for the user. Disabling time limits is better than customizing the length of time limits, which is better than requesting more time before a time limit occurs.

Any process that happens without user initiation after a set time or on a periodic basis is a time limit. This includes partial or full updates of content (for example, page refresh), changes to content, or the expiration of a window of opportunity for a user to react to a request for input.

It also includes content that is advancing or updating at a rate beyond the user's ability to read and/or understand it. In other words, animated, moving or scrolling content introduces a time limit on a users ability to read content.

In some cases, however, it is not possible to change the time limit (for example, for an auction or other real-time event) and exceptions are therefore provided for those cases.

**Notes regarding server time limits**

-   Timed server redirects can be found below under Common Failures.

-   Non-timed server redirects (e.g., 3xx response codes) are not applicable because there is no time limit: they work instantly.

-   This Success Criterion applies only to time limits that are set by the content itself. For example, if a time limit is included in order to address security concerns, it would be considered to have been set by the content because it is designed to be part of the presentation and interaction experience for that content. Time limits set externally to content, such as by the user agent or by factors intrinsic to the Internet are not under the author's control and not subject to WCAG conformance requirements. Time limits set by Web servers should be under the author's/organization's control and are covered. (Success Criteria <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-no-exceptions" class="gl-ref">2.2.3</a>, <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-postponed" class="gl-ref">2.2.4</a> and <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-server-timeout" class="gl-ref">2.2.5</a> may also apply.)

-   Ten times the default was chosen based on clinical experience and other guidelines. For example, if 15 seconds is allowed for a user to respond and hit a switch, 150 seconds would be sufficient to allow almost all users to hit a switch even if they had trouble.

-   20 seconds was also based on clinical experience and other guidelines. 20 seconds to hit 'any switch' is sufficient for almost all users including those with spasticity. Some would fail, but some would fail all lengths of time. A reasonable period for requesting more time is required since an arbitrarily long time can provide security risks to all users, including those with disabilities, for some applications. For example, with kiosks or terminals that are used for financial transactions, it is quite common for people to walk away without signing off. This leaves them vulnerable to those walking up behind them. Providing a long period of inactivity before asking, and then providing a long period for the person to indicate that they are present can leave terminals open for abuse. If there is no activity the system should ask if the user is there. It should then ask for an indication that a person is there ('hit any key') and then wait long enough for almost anyone to respond. For "hit any key," 20 seconds would meet this. If the person indicates that they are still present, the device should return the user to the exact condition that existed before it asked the question.

-   20 hours was chosen as an upper limit because it is longer than a full waking day.

In cases where timing is not an intrinsic requirement but giving users control over timed events would invalidate the outcome, a third party can control the time limits for the user (for example, granting double time on a test).

See also *[Understanding Success Criterion 2.2.3 No Timing](time-limits-no-exceptions.html)*.

### Specific Benefits of Success Criterion 2.2.1:

-   People with physical disabilities often need more time to react, to type and to complete activities. People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls. People who have cognitive or language limitations need more time to read and to understand. People who are deaf and communicate in sign language may need more time to read information printed in text (which may be a second language for some).

-   In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.

-   People with reading disabilities, cognitive limitations, and learning disabilities who may need more time to read or comprehend information can have additional time to read the information by pausing the content.

Examples of Success Criterion 2.2.1
-----------------------------------

-   A Web site uses a client side time limit to help protect users who may step away from their computer. After a period of inactivity the Web page asks if the user needs more time. If it doesn't get a response – it times out.

-   A Web page has a field that automatically updates with the latest headlines in a rotating fashion. There is an interactive control that allows the user to extend the length of time between each update to as much as ten times the default. The control can be operated with either a mouse or a keyboard.

-   A Web page includes an animation which includes text that appears and disappears throughout. In some cases, the text is scrolling across the screen and in others, it is only displayed for a short time before it fades into the background. The page includes a pause button so that users who have trouble reading the text before it disappears can read it.

-   In an auction, there is a time limit on the amount of time a user has to submit a bid. Since the time limit applies to all users who want to bid on a particular item, it would be unfair to extend the time limit for any one particular user. Therefore, a time limit is required for this type of activity and no extension, adjustment, or deactivation of the time limit is required by this Success Criteria.

-   An on-line ticket-purchasing site gives the user two minutes to confirm a purchase before the seats are returned to the general pool. Because tickets on such sites can sell out quickly, holding a ticket longer than that may invalidate the nature of the site, so this is a case in which the timing is essential and cannot be extended without invalidating the activity. However, the site does move as much of the process out of the time-critical period as possible, for instance allowing users to provide necessary information like name, payment method, etc., before entering the time-critical stage.

-   A ticket-purchasing site allows the user two minutes to confirm purchase of selected seats, but warns the user when their time is almost out and allows the user to extend this time limit some number of times with a simple action such as clicking a "Extend time limit" button.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 2.2.1 - Timing Adjustable
-----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="time-limits-required-behaviors-situation-37-head"></span> Situation A: If there are session time limits:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G133" class="tech-ref">G133: Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G198" class="tech-ref">G198: Providing a way for the user to turn the time limit off</a>

#### <span id="time-limits-required-behaviors-situation-38-head"></span> Situation B: If a time limit is controlled by a script on the page:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G198" class="tech-ref">G198: Providing a way for the user to turn the time limit off</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G180" class="tech-ref">G180: Providing the user with a means to set the time limit to 10 times the default time limit</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR16" class="tech-ref">SCR16: Providing a script that warns the user a time limit is about to expire</a> (Scripting) **AND** <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR1" class="tech-ref">SCR1: Allowing the user to extend the default time limit</a> (Scripting)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH19" class="tech-ref">FLASH19: Providing a script that warns the user a time limit is about to expire and provides a way to extend it</a> (Flash)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH24" class="tech-ref">FLASH24: Allowing the user to extend the default time limit</a> (Flash)

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL21" class="tech-ref">SL21: Replacing A Silverlight Timed Animation With a Nonanimated Element</a> (Silverlight)

#### <span id="time-limits-required-behaviors-situation-39-head"></span> Situation C: If there are time limits on reading:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G4" class="tech-ref">G4: Allowing the content to be paused and restarted from where it was paused</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G198" class="tech-ref">G198: Providing a way for the user to turn the time limit off</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR33" class="tech-ref">SCR33: Using script to scroll content, and providing a mechanism to pause it</a> (Scripting)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR36" class="tech-ref">SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area</a> (Scripting)

### Additional Techniques (Advisory) for 2.2.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using a script to poll the server and notify a user if a time limit is present (future link) (Scripting)

-   Using sounds to focus user's attention (future link)

### Common Failures for SC 2.2.1

The following are common mistakes that are considered failures of Success Criterion 2.2.1 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F40" class="tech-ref">F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F41" class="tech-ref">F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F58" class="tech-ref">F58: Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out</a>

Key Terms
---------

 <span id="essentialdef"></span> essential  
if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.2 \[Enough Time\]](time-limits.html "Understanding Guideline  2.2 [Enough Time]")
-   [**Next:** SC 2.2.2 \[Pause, Stop, Hide\]](time-limits-pause.html "Understanding SC  2.2.2 [Pause, Stop, Hide]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
