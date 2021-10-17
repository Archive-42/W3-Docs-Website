[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.1 \[Use of Color\]](visual-audio-contrast-without-color.html "Understanding SC  1.4.1 [Use of Color]")
-   [**Next:** SC 1.4.3 \[Contrast (Minimum)\]](visual-audio-contrast-contrast.html "Understanding SC  1.4.3 [Contrast (Minimum)]")

On this page:

-   [Intent](#visual-audio-contrast-dis-audio-intent-head)
-   [Examples](#visual-audio-contrast-dis-audio-examples-head)
-   [Techniques & Failures](#visual-audio-contrast-dis-audio-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="visual-audio-contrast-dis-audio"></span> **Audio Control**<span class="screenreader">:</span> Understanding SC 1.4.2
==============================================================================================================================

> **[1.4.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#visual-audio-contrast-dis-audio) Audio Control:** If any audio on a Web page plays automatically for more than 3 seconds, either a <a href="#mechanismdef" class="termref">mechanism</a> is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. (Level A)
>
> Note: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#cc5)*.

Intent of this Success Criterion
--------------------------------

Individuals who use screen reading software can find it hard to hear the speech output if there is other audio playing at the same time. This difficulty is exacerbated when the screen reader's speech output is software based (as most are today) and is controlled via the same volume control as the sound. Therefore, it is important that the user be able to turn off the background sound. Note: Having control of the volume includes being able to reduce its volume to zero.

Note: Playing audio automatically when landing on a page may affect a screen reader user's ability to find the mechanism to stop it because they navigate by listening and automatically started sounds might interfere with that navigation. Therefore, we discourage the practice of automatically starting sounds (especially if they last more than 3 seconds), and encourage that the sound be *started* by an action initiated by the user after they reach the page, rather than requiring that the sound be *stopped* by an action of the user after they land on the page.

See also *[Understanding Success Criterion 1.4.7 Low or No Background Audio](visual-audio-contrast-noaudio.html)*.

### Specific Benefits of Success Criterion 1.4.2:

-   Individuals who use screen reading technologies can hear the screen reader without other sounds playing. This is especially important for those who are hard of hearing and for those whose screen readers use the system volume (so they cannot turn sound down and screen reader up).

-   This Success Criterion also benefits people who have difficulty focusing on visual content (including text) when audio is playing.

Examples of Success Criterion 1.4.2
-----------------------------------

-   An audio file begins playing automatically when a page is opened. However, the audio can be stopped by the user by selecting a "silent" link at the top of the page.

-   A Flash splash page with sound that plays and then stops in less than 3 seconds.

-   A Flash splash page with sound that plays automatically includes a control at the top that allows users to turn the sound off.

Techniques and Failures for Success Criterion 1.4.2 - Audio Control
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G60: Playing a sound that turns off automatically within three seconds](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G60)

2.  [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G170)

3.  [G171: Playing sounds only on user request](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G171)

### Additional Techniques (Advisory) for 1.4.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing a site-wide preference to turn off audio in addition to providing a control near the top of the Web page that turns off sounds that play automatically (future link)

### Common Failures for SC 1.4.2

The following are common mistakes that are considered failures of Success Criterion 1.4.2 by the WCAG Working Group.

-   [F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F23)

Key Terms
---------

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">process</a> or technique for achieving a result

Note 1: The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technologies</a>.

Note 2: The mechanism needs to meet all success criteria for the conformance level claimed.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.1 \[Use of Color\]](visual-audio-contrast-without-color.html "Understanding SC  1.4.1 [Use of Color]")
-   [**Next:** SC 1.4.3 \[Contrast (Minimum)\]](visual-audio-contrast-contrast.html "Understanding SC  1.4.3 [Contrast (Minimum)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
