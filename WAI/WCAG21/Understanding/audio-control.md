-   [Contents](. "Table of Contents")
-   [GL: Distinguishable](distinguishable)
-   [Previous SC: Use of Color](use-of-color)
-   [Next SC: Contrast (Minimum)](contrast-minimum)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 1.4.2: Audio Control
====================================================

> Success Criterion [1.4.2 Audio Control](https://www.w3.org/TR/WCAG21/#audio-control) (Level A): If any audio on a Web page plays automatically for more than 3 seconds, either a [mechanism](#dfn-mechanism) is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
>
> Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5).

Intent
------

Individuals who use screen reading software can find it hard to hear the speech output if there is other audio playing at the same time. This difficulty is exacerbated when the screen reader's speech output is software based (as most are today) and is controlled via the same volume control as the sound. Therefore, it is important that the user be able to turn off the background sound. Note: Having control of the volume includes being able to reduce its volume to zero.

Note

Playing audio automatically when landing on a page may affect a screen reader user's ability to find the mechanism to stop it because they navigate by listening and automatically started sounds might interfere with that navigation. Therefore, we discourage the practice of automatically starting sounds (especially if they last more than 3 seconds), and encourage that the sound be *started* by an action initiated by the user after they reach the page, rather than requiring that the sound be *stopped* by an action of the user after they land on the page.

See also [1.4.2: Low or No Background Audio](low-or-no-background-audio).

Benefits
--------

-   Individuals who use screen reading technologies can hear the screen reader without other sounds playing. This is especially important for those who are hard of hearing and for those whose screen readers use the system volume (so they cannot turn sound down and screen reader up).
-   This Success Criterion also benefits people who have difficulty focusing on visual content (including text) when audio is playing.

Examples
--------

-   An audio file begins playing automatically when a page is opened. However, the audio can be stopped by the user by selecting a "silent" link at the top of the page.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G60" class="general">G60: Playing a sound that turns off automatically within three seconds</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G170" class="general">G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G171" class="general">G171: Playing sounds only on user request</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL24" class="silverlight">SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically</a>
5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL3" class="silverlight">SL3: Controlling Silverlight MediaElement Audio Volume</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F23" class="failure">F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F93" class="failure">F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays</a>

Key Terms
---------

assistive technology

hardware and/or software that acts as a [user agent](#dfn-user-agent), or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

conformance

satisfying all the requirements of a given standard, guideline or specification

mechanism

[process](#dfn-process) or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be [relied upon](#dfn-relied-upon) to be provided by either the platform or by [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology).

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

relied upon

the content would not [conform](#dfn-conformance) if that [technology](#dfn-technology) is turned off or is not supported

technology

[mechanism](#dfn-mechanism) for encoding instructions to be rendered, played or executed by [user agents](#dfn-user-agent)

Note

As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

Note

Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
