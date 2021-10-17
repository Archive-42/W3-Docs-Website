[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.1 \[Use of Color\]](visual-audio-contrast-without-color.html "Understanding SC  1.4.1 [Use of Color]")
-   [**Next:** SC 1.4.3 \[Contrast (Minimum)\]](visual-audio-contrast-contrast.html "Understanding SC  1.4.3 [Contrast (Minimum)]")

On this page:

-   [Intent](#visual-audio-contrast-dis-audio-intent-head)
-   [Examples](#visual-audio-contrast-dis-audio-examples-head)
-   [Related Resources](#visual-audio-contrast-dis-audio-resources-head)
-   [Techniques & Failures](#visual-audio-contrast-dis-audio-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="visual-audio-contrast-dis-audio"></span> **Audio Control**<span class="screenreader">:</span> Understanding SC 1.4.2
==============================================================================================================================

> **[1.4.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-dis-audio) Audio Control:** If any audio on a Web page plays automatically for more than 3 seconds, either a <a href="#mechanismdef" class="termref">mechanism</a> is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. (Level A)
>
> *Note:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#cc5)*.

Intent of this Success Criterion
--------------------------------

Individuals who use screen reading software can find it hard to hear the speech output if there is other audio playing at the same time. This difficulty is exacerbated when the screen reader's speech output is software based (as most are today) and is controlled via the same volume control as the sound. Therefore, it is important that the user be able to turn off the background sound. Note: Having control of the volume includes being able to reduce its volume to zero.

*Note:* Playing audio automatically when landing on a page may affect a screen reader user's ability to find the mechanism to stop it because they navigate by listening and automatically started sounds might interfere with that navigation. Therefore, we discourage the practice of automatically starting sounds (especially if they last more than 3 seconds), and encourage that the sound be *started* by an action initiated by the user after they reach the page, rather than requiring that the sound be *stopped* by an action of the user after they land on the page.

See also *[Understanding Success Criterion 1.4.7 Low or No Background Audio](visual-audio-contrast-noaudio.html)*.

### Specific Benefits of Success Criterion 1.4.2:

-   Individuals who use screen reading technologies can hear the screen reader without other sounds playing. This is especially important for those who are hard of hearing and for those whose screen readers use the system volume (so they cannot turn sound down and screen reader up).

-   This Success Criterion also benefits people who have difficulty focusing on visual content (including text) when audio is playing.

Examples of Success Criterion 1.4.2
-----------------------------------

-   An audio file begins playing automatically when a page is opened. However, the audio can be stopped by the user by selecting a "silent" link at the top of the page.

-   A Flash splash page with sound that plays and then stops in less than 3 seconds.

-   A Flash splash page with sound that plays automatically includes a control at the top that allows users to turn the sound off.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 1.4.2 - Audio Control
-------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G60" class="tech-ref">G60: Playing a sound that turns off automatically within three seconds</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G170" class="tech-ref">G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G171" class="tech-ref">G171: Playing sounds only on user request</a>

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL24" class="tech-ref">SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically</a> (Silverlight)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH18" class="tech-ref">FLASH18: Providing a control to turn off sounds that play automatically in Flash</a> (Flash)

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH34" class="tech-ref">FLASH34: Turning off sounds that play automatically when an assistive technology is detected</a> (Flash)

7.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL3" class="tech-ref">SL3: Controlling Silverlight MediaElement Audio Volume</a> (Silverlight)

### Additional Techniques (Advisory) for 1.4.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Providing a site-wide preference to turn off audio in addition to providing a control near the top of the Web page that turns off sounds that play automatically (future link)

### Common Failures for SC 1.4.2

The following are common mistakes that are considered failures of Success Criterion 1.4.2 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F23" class="tech-ref">F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F93" class="tech-ref">F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays</a>

Key Terms
---------

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#processdef" class="termref">process</a> or technique for achieving a result

*Note 1:* The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>.

*Note 2:* The mechanism needs to meet all success criteria for the conformance level claimed.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.4.1 \[Use of Color\]](visual-audio-contrast-without-color.html "Understanding SC  1.4.1 [Use of Color]")
-   [**Next:** SC 1.4.3 \[Contrast (Minimum)\]](visual-audio-contrast-contrast.html "Understanding SC  1.4.3 [Contrast (Minimum)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
