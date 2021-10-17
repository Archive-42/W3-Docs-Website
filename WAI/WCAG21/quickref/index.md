<span id="top"></span>

[![W3C](/WAI/WCAG21/quickref/img/w3c.svg)](https://w3.org/)<a href="https://w3.org/WAI/" class="wai"><img src="/WAI/WCAG21/quickref/img/wai.svg" alt="Web Accessibility Initiative" /></a>

How to Meet WCAG (Quick Reference)
==================================

A customizable quick reference to Web Content Accessibility Guidelines (WCAG) 2 requirements (success criteria) and techniques.

Show

Hide About & How to Use

About

This tool provides a customizable view of WCAG 2 resources:

-   Web Content Accessibility Guidelines web standard — [WCAG 2.1](https://www.w3.org/TR/WCAG21/), [WCAG 2.0](https://www.w3.org/TR/WCAG20/)
-   Techniques for WCAG 2 implementation guidance
-   Understanding WCAG 2 supporting information

Background on these resources is provided in the [WCAG Overview](https://www.w3.org/WAI/standards-guidelines/wcag/) and [The WCAG 2 documents](https://www.w3.org/WAI/standards-guidelines/wcag/docs/). For important information about techniques, see [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques.html#understanding-techniques).

How to Use

Select the “Filter” tab in the main menu to customize:

-   **Tags:** Shows only success criteria associated with the selected tags.
-   **Levels:** Shows only success criteria for the selected levels.
-   **Technologies:** Shows only techniques for the selected technologies.
-   **Techniques:** Shows only the types of techniques and/or failures selected.

The **Share this view** button provides a link to this tool with the filters you have set. The SHARE buttons provide links to individual success criteria.

Show

Hide in-page navigation and filter options

-   Hide
-   Contents
-   Filter

-   <a href="#principle1" class="principle"><strong><span>1.</span></strong> <span>Perceivable</span></a>
    -   [**1.1** Text Alternatives](#text-alternatives)
        -   [**1.1.1** Non-text Content](#non-text-content)
    -   [**1.2** Time-based Media](#time-based-media)
        -   [**1.2.1** Audio-only and Video-only (Prerecorded)](#audio-only-and-video-only-prerecorded)
        -   [**1.2.2** Captions (Prerecorded)](#captions-prerecorded)
        -   [**1.2.3** Audio Description or Media Alternative (Prerecorded)](#audio-description-or-media-alternative-prerecorded)
        -   [**1.2.4** Captions (Live)](#captions-live)
        -   [**1.2.5** Audio Description (Prerecorded)](#audio-description-prerecorded)
        -   [**1.2.6** Sign Language (Prerecorded)](#sign-language-prerecorded)
        -   [**1.2.7** Extended Audio Description (Prerecorded)](#extended-audio-description-prerecorded)
        -   [**1.2.8** Media Alternative (Prerecorded)](#media-alternative-prerecorded)
        -   [**1.2.9** Audio-only (Live)](#audio-only-live)
    -   [**1.3** Adaptable](#adaptable)
        -   [**1.3.1** Info and Relationships](#info-and-relationships)
        -   [**1.3.2** Meaningful Sequence](#meaningful-sequence)
        -   [**1.3.3** Sensory Characteristics](#sensory-characteristics)
        -   [**1.3.4** Orientation](#orientation)
        -   [**1.3.5** Identify Input Purpose](#identify-input-purpose)
        -   [**1.3.6** Identify Purpose](#identify-purpose)
    -   [**1.4** Distinguishable](#distinguishable)
        -   [**1.4.1** Use of Color](#use-of-color)
        -   [**1.4.2** Audio Control](#audio-control)
        -   [**1.4.3** Contrast (Minimum)](#contrast-minimum)
        -   [**1.4.4** Resize text](#resize-text)
        -   [**1.4.5** Images of Text](#images-of-text)
        -   [**1.4.6** Contrast (Enhanced)](#contrast-enhanced)
        -   [**1.4.7** Low or No Background Audio](#low-or-no-background-audio)
        -   [**1.4.8** Visual Presentation](#visual-presentation)
        -   [**1.4.9** Images of Text (No Exception)](#images-of-text-no-exception)
        -   [**1.4.10** Reflow](#reflow)
        -   [**1.4.11** Non-text Contrast](#non-text-contrast)
        -   [**1.4.12** Text Spacing](#text-spacing)
        -   [**1.4.13** Content on Hover or Focus](#content-on-hover-or-focus)
-   <a href="#principle2" class="principle"><strong><span>2.</span></strong> <span>Operable</span></a>
    -   [**2.1** Keyboard Accessible](#keyboard-accessible)
        -   [**2.1.1** Keyboard](#keyboard)
        -   [**2.1.2** No Keyboard Trap](#no-keyboard-trap)
        -   [**2.1.3** Keyboard (No Exception)](#keyboard-no-exception)
        -   [**2.1.4** Character Key Shortcuts](#character-key-shortcuts)
    -   [**2.2** Enough Time](#enough-time)
        -   [**2.2.1** Timing Adjustable](#timing-adjustable)
        -   [**2.2.2** Pause, Stop, Hide](#pause-stop-hide)
        -   [**2.2.3** No Timing](#no-timing)
        -   [**2.2.4** Interruptions](#interruptions)
        -   [**2.2.5** Re-authenticating](#re-authenticating)
        -   [**2.2.6** Timeouts](#timeouts)
    -   [**2.3** Seizures and Physical Reactions](#seizures-and-physical-reactions)
        -   [**2.3.1** Three Flashes or Below Threshold](#three-flashes-or-below-threshold)
        -   [**2.3.2** Three Flashes](#three-flashes)
        -   [**2.3.3** Animation from Interactions](#animation-from-interactions)
    -   [**2.4** Navigable](#navigable)
        -   [**2.4.1** Bypass Blocks](#bypass-blocks)
        -   [**2.4.2** Page Titled](#page-titled)
        -   [**2.4.3** Focus Order](#focus-order)
        -   [**2.4.4** Link Purpose (In Context)](#link-purpose-in-context)
        -   [**2.4.5** Multiple Ways](#multiple-ways)
        -   [**2.4.6** Headings and Labels](#headings-and-labels)
        -   [**2.4.7** Focus Visible](#focus-visible)
        -   [**2.4.8** Location](#location)
        -   [**2.4.9** Link Purpose (Link Only)](#link-purpose-link-only)
        -   [**2.4.10** Section Headings](#section-headings)
    -   [**2.5** Input Modalities](#input-modalities)
        -   [**2.5.1** Pointer Gestures](#pointer-gestures)
        -   [**2.5.2** Pointer Cancellation](#pointer-cancellation)
        -   [**2.5.3** Label in Name](#label-in-name)
        -   [**2.5.4** Motion Actuation](#motion-actuation)
        -   [**2.5.5** Target Size](#target-size)
        -   [**2.5.6** Concurrent Input Mechanisms](#concurrent-input-mechanisms)
-   <a href="#principle3" class="principle"><strong><span>3.</span></strong> <span>Understandable</span></a>
    -   [**3.1** Readable](#readable)
        -   [**3.1.1** Language of Page](#language-of-page)
        -   [**3.1.2** Language of Parts](#language-of-parts)
        -   [**3.1.3** Unusual Words](#unusual-words)
        -   [**3.1.4** Abbreviations](#abbreviations)
        -   [**3.1.5** Reading Level](#reading-level)
        -   [**3.1.6** Pronunciation](#pronunciation)
    -   [**3.2** Predictable](#predictable)
        -   [**3.2.1** On Focus](#on-focus)
        -   [**3.2.2** On Input](#on-input)
        -   [**3.2.3** Consistent Navigation](#consistent-navigation)
        -   [**3.2.4** Consistent Identification](#consistent-identification)
        -   [**3.2.5** Change on Request](#change-on-request)
    -   [**3.3** Input Assistance](#input-assistance)
        -   [**3.3.1** Error Identification](#error-identification)
        -   [**3.3.2** Labels or Instructions](#labels-or-instructions)
        -   [**3.3.3** Error Suggestion](#error-suggestion)
        -   [**3.3.4** Error Prevention (Legal, Financial, Data)](#error-prevention-legal-financial-data)
        -   [**3.3.5** Help](#help)
        -   [**3.3.6** Error Prevention (All)](#error-prevention-all)
-   <a href="#principle4" class="principle"><strong><span>4.</span></strong> <span>Robust</span></a>
    -   [**4.1** Compatible](#compatible)
        -   [**4.1.1** Parsing](#parsing)
        -   [**4.1.2** Name, Role, Value](#name-role-value)
        -   [**4.1.3** Status Messages](#status-messages)

Changing filters will change the listed Success Criteria and Techniques.

WCAG Version WCAG 2.1 WCAG 2.0 Only 2.1 Added Success Criteria

Note: Clear Filters will not change the selected version.

Tags

Clear tags

Developing

only

Interaction Design

only

Content Creation

only

Visual Design

only

animation

audio

auto complete

autoplay

blinking

buttons

captcha

captions

carousels

changing content

color

components

consistent experience

content

contrast

controls

errors

events

flashing

focus

forms

graphical objects

headings

hidden content

hover

icons

iframes

images

images of text

interaction

keyboard

labels

language

layout

links

live stream

markup

media queries

menus

messaging

meta tag

mobile

modals

moving content

navigation

notifications

orientation

page title

pop up

progress steps

readability

reflow

refow

regions

screen size

skip to content

streaming

structure

tab order

tables

text

text alternatives

time limits

user interface

video

viewport

visual cues

zoom

Show all tags

Levels

Select all

<span class="small"></span>

Level A

only

Level AA

only

Level AAA

only

Techniques

Select all

<span class="small"></span>

Sufficient Techniques

only

Advisory Techniques

only

Failures

only

Technologies

Select all

<span class="small"></span>

HTML

only

CSS

only

ARIA

only

Client-side Scripting

only

Server-side Scripting

only

SMIL

only

PDF

only

Flash

only

Silverlight

only

Show Sidebar

<span class="sr-only loading">Loading</span> <span class="sr-only loaded">Loaded</span>

<span id="status" aria-live="polite" aria-atomic="true">Selected Filters: **WCAG 2.1:** <span class="sc">all success criteria</span> and <span class="tech">all techniques.</span></span> <a href="#hiddensc" id="hiddennav">(What did the filter remove?)</a>

Clear filters

Expand **all** sections

Share

Link to this view, with the filters you have selected: Shortcut to copy the link: ctrl+C *or* ⌘C

Close

**Principle 1** – Perceivable
-----------------------------

Information and user interface components must be presentable to users in ways they can perceive.

### Guideline **1.1** – Text Alternatives

Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.

#### **1.1.1** Non-text Content

<span class="level-a">Level A</span>

All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.

------------------------------------------------------------------------

-   **Controls, Input:** If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Success Criterion 4.1.2 for additional requirements for controls and content that accepts user input.)
-   **Time-Based Media:** If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)
-   **Test:** If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.
-   **Sensory:** If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.
-   **CAPTCHA:** If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.
-   **Decoration, Formatting, Invisible:** If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.

Understanding 1.1.1

Show

Hide techniques and failures for 1.1.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.1.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If a short description can serve the same purpose and present the same information as the non-text content:

-   [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94.html)

    Short text alternative techniques for Situation A:

    -   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
    -   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
    -   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
    -   [FLASH1: Setting the name property for a non-text object](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH1.html)
    -   [FLASH5: Combining adjacent image and text buttons for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH5.html)
    -   [FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH28.html)
    -   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
    -   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
    -   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
    -   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
    -   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)
    -   [PDF1: Applying text alternatives to images with the Alt entry in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1.html)
    -   [SL5: Defining a Focusable Image Class for Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL5.html)

###### Situation B: If a short description can not serve the same purpose and present the same information as the non-text content (e.g., a chart or diagram):

-   [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95.html)

    Short text alternative techniques for Situation B:

    -   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
    -   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
    -   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
    -   [FLASH1: Setting the name property for a non-text object](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH1.html)
    -   [FLASH5: Combining adjacent image and text buttons for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH5.html)
    -   [FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH28.html)
    -   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
    -   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
    -   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
    -   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
    -   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)
    -   [PDF1: Applying text alternatives to images with the Alt entry in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1.html)
    -   [SL5: Defining a Focusable Image Class for Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL5.html)

    Long text alternative techniques for Situation B:

    -   [ARIA15: Using aria-describedby to provide descriptions of images](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA15.html)
    -   [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G73.html)
    -   [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](https://www.w3.org/WAI/WCAG21/Techniques/general/G74.html)
    -   [G92: Providing long description for non-text content that serves the same purpose and presents the same information](https://www.w3.org/WAI/WCAG21/Techniques/general/G92.html)
    -   [FLASH2: Setting the description property for a non-text object in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH2.html)
    -   [FLASH11: Providing a longer text description of an object](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH11.html)
    -   [H45: Using longdesc](https://www.w3.org/WAI/WCAG21/Techniques/html/H45.html)
    -   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
    -   [SL8: Displaying HelpText in Silverlight User Interfaces](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL8.html)

###### Situation C: If non-text content is a control or accepts user input:

-   [G82: Providing a text alternative that identifies the purpose of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G82.html)

    Text alternative techniques for controls and input for Situation C:

    -   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
    -   [ARIA9: Using aria-labelledby to concatenate a label from several text nodes](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9.html)
    -   [FLASH6: Creating accessible hotspots using invisible buttons](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH6.html)
    -   [FLASH25: Labeling a form control by setting its accessible name](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH25.html)
    -   [FLASH27: Providing button labels that describe the purpose of a button](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH27.html)
    -   [FLASH29: Setting the label property for form components](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH29.html)
    -   [FLASH30: Specifying accessible names for image buttons](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH30.html)
    -   [FLASH32: Using auto labeling to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH32.html)
    -   [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG21/Techniques/html/H24.html)
    -   [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html)
    -   [H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H36.html)
    -   [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html)
    -   [H65: Using the title attribute to identify form controls when the label element cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html)
    -   [SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL18.html)
    -   [SL26: Using LabeledBy to Associate Labels and Targets in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL26.html)
    -   [SL30: Using Silverlight Control Compositing and AutomationProperties.Name](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL30.html)

###### Situation D: If non-text content is time-based media (including live video-only and live audio-only); a test or exercise that would be invalid if presented in text; or primarily intended to create a specific sensory experience:

-   Providing a descriptive label

    Short text alternative techniques for Situation D:

    -   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
    -   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
    -   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
    -   [FLASH1: Setting the name property for a non-text object](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH1.html)
    -   [FLASH5: Combining adjacent image and text buttons for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH5.html)
    -   [FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH28.html)
    -   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
    -   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
    -   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
    -   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
    -   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)
    -   [PDF1: Applying text alternatives to images with the Alt entry in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1.html)
    -   [SL5: Defining a Focusable Image Class for Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL5.html)

-   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
-   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
-   [G68: Providing a short text alternative that describes the purpose of live audio-only and live video-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G68.html)

    Short text alternative techniques for Situation D:

    -   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
    -   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
    -   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
    -   [FLASH1: Setting the name property for a non-text object](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH1.html)
    -   [FLASH5: Combining adjacent image and text buttons for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH5.html)
    -   [FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH28.html)
    -   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
    -   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
    -   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
    -   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
    -   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)
    -   [PDF1: Applying text alternatives to images with the Alt entry in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1.html)
    -   [SL5: Defining a Focusable Image Class for Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL5.html)

-   [G100: Providing a short text alternative which is the accepted name or a descriptive name of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G100.html)

    Short text alternative techniques for Situation D:

    -   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6.html)
    -   [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10.html)
    -   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196.html)
    -   [FLASH1: Setting the name property for a non-text object](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH1.html)
    -   [FLASH5: Combining adjacent image and text buttons for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH5.html)
    -   [FLASH28: Providing text alternatives for ASCII art, emoticons, and leetspeak in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH28.html)
    -   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
    -   [H35: Providing text alternatives on applet elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H35.html)
    -   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37.html)
    -   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
    -   [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak](https://www.w3.org/WAI/WCAG21/Techniques/html/H86.html)
    -   [PDF1: Applying text alternatives to images with the Alt entry in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1.html)
    -   [SL5: Defining a Focusable Image Class for Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL5.html)

###### Situation E: If non-text content is a CAPTCHA:

-   <span class="filter-tech-general"> [G143: Providing a text alternative that describes the purpose of the CAPTCHA](https://www.w3.org/WAI/WCAG21/Techniques/general/G143.html) **AND**</span> <span class="filter-tech-general"> [G144: Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality](https://www.w3.org/WAI/WCAG21/Techniques/general/G144.html) </span>

###### Situation F: If the non-text content should be ignored by assistive technology:

-   Implementing or marking the non-text content so that it will be ignored by assistive technology

    Techniques to indicate that text alternatives are not required for Situation F:

    -   [C9: Using CSS to include decorative images](https://www.w3.org/WAI/WCAG21/Techniques/css/C9.html)
    -   [FLASH3: Marking objects in Flash so that they can be ignored by AT](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH3.html)
    -   [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG21/Techniques/html/H67.html)
    -   [PDF4: Hiding decorative images with the Artifact tag in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF4.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.1.1</span>

-   [H46: Using noembed with embed](https://www.w3.org/WAI/WCAG21/Techniques/html/H46.html)
-   [C18: Using CSS margin and padding rules instead of spacer images for layout design](https://www.w3.org/WAI/WCAG21/Techniques/css/C18.html)
-   [SL19: Providing User Instructions With AutomationProperties.HelpText in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL19.html)

##### Failures <span class="sr-only">for Success Criterion 1.1.1</span>

-   [F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information](https://www.w3.org/WAI/WCAG21/Techniques/failures/F3.html)
-   [F13: Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image](https://www.w3.org/WAI/WCAG21/Techniques/failures/F13.html)
-   [F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur](https://www.w3.org/WAI/WCAG21/Techniques/failures/F20.html)
-   [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html)
-   [F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them](https://www.w3.org/WAI/WCAG21/Techniques/failures/F38.html)
-   [F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology](https://www.w3.org/WAI/WCAG21/Techniques/failures/F39.html)
-   [F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"](https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html)
-   [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information](https://www.w3.org/WAI/WCAG21/Techniques/failures/F67.html)
-   [F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative](https://www.w3.org/WAI/WCAG21/Techniques/failures/F71.html)
-   [F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative](https://www.w3.org/WAI/WCAG21/Techniques/failures/F72.html)

Back to top

### Guideline **1.2** – Time-based Media

Provide alternatives for time-based media.

#### **1.2.1** Audio-only and Video-only (Prerecorded)

<span class="level-a">Level A</span>

For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:

------------------------------------------------------------------------

-   **Prerecorded Audio-only:** An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.
-   **Prerecorded Video-only:** Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.

Understanding 1.2.1

Show

Hide techniques and failures for 1.2.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If the content is prerecorded audio-only:

-   [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G158.html)
-   [SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17.html)

###### Situation B: If the content is prerecorded video-only:

-   [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G159.html)
-   [G166: Providing audio that describes the important video content and describing it as such](https://www.w3.org/WAI/WCAG21/Techniques/general/G166.html)
-   [SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.2.1</span>

-   [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96.html)

##### Failures <span class="sr-only">for Success Criterion 1.2.1</span>

-   [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html)
-   [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information](https://www.w3.org/WAI/WCAG21/Techniques/failures/F67.html)

Back to top

#### **1.2.2** Captions (Prerecorded)

<span class="level-a">Level A</span>

Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.

Understanding 1.2.2

Show

Hide techniques and failures for 1.2.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G93.html)
-   [G87: Providing closed captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G87.html)
-   [G87: Providing closed captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G87.html)
    -   [SM11: Providing captions through synchronized text streams in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11.html)
    -   [SM12: Providing captions through synchronized text streams in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12.html)
    -   [H95: Using the track element to provide captions](https://www.w3.org/WAI/WCAG21/Techniques/html/H95.html)
    -   [FLASH9: Applying captions to prerecorded synchronized media](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH9.html)
    -   [SL16: Providing Script-Embedded Text Captions for MediaElement Content](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL16.html)
    -   [SL28: Using Separate Text-Format Text Captions for MediaElement Content](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL28.html)

##### Failures <span class="sr-only">for Success Criterion 1.2.2</span>

-   [F8: Failure of Success Criterion 1.2.2 due to captions omitting some dialogue or important sound effects](https://www.w3.org/WAI/WCAG21/Techniques/failures/F8.html)
-   [F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page](https://www.w3.org/WAI/WCAG21/Techniques/failures/F75.html)
-   [F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative](https://www.w3.org/WAI/WCAG21/Techniques/failures/F74.html)

Back to top

#### **1.2.3** Audio Description or Media Alternative (Prerecorded)

<span class="level-a">Level A</span>

An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.

Understanding 1.2.3

Show

Hide techniques and failures for 1.2.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G69: Providing an alternative for time based media](https://www.w3.org/WAI/WCAG21/Techniques/general/G69.html)
    -   [G58: Placing a link to the alternative for time-based media immediately next to the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G58.html)
    -   [SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17.html)
-   Linking to the alternative for time-based media using one of the following techniques
    -   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)
-   [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G78.html)
-   <span class="filter-tech-general"> [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G78.html) **AND**</span> <span class="filter-tech-sl"> [SL1: Accessing Alternate Audio Tracks in Silverlight Media](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL1.html) </span>
-   [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G173.html)
    -   [SM6: Providing audio description in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6.html)
    -   [SM7: Providing audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7.html)
    -   [FLASH26: Applying audio descriptions to Flash video](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH26.html)
    -   [SL1: Accessing Alternate Audio Tracks in Silverlight Media](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL1.html)
    -   Using any player that supports audio and video
-   [G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G8.html)
    -   [SM1: Adding extended audio description in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM1.html)
    -   [SM2: Adding extended audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2.html)
    -   [FLASH26: Applying audio descriptions to Flash video](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH26.html)
    -   [SL1: Accessing Alternate Audio Tracks in Silverlight Media](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL1.html)
    -   Using any player that supports audio and video
-   [G203: Using a static text alternative to describe a talking head video](https://www.w3.org/WAI/WCAG21/Techniques/general/G203.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.2.3</span>

-   [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96.html)

Back to top

#### **1.2.4** Captions (Live)

<span class="level-aa">Level AA</span>

Captions are provided for all live audio content in synchronized media.

Understanding 1.2.4

Show

Hide techniques and failures for 1.2.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   <span class="filter-tech-general"> [G9: Creating captions for live synchronized media](https://www.w3.org/WAI/WCAG21/Techniques/general/G9.html) **AND**</span> <span class="filter-tech-general"> [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G93.html) </span>
-   <span class="filter-tech-general"> [G9: Creating captions for live synchronized media](https://www.w3.org/WAI/WCAG21/Techniques/general/G9.html) **AND**</span> <span class="filter-tech-general"> [G87: Providing closed captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G87.html) </span>
-   <span class="filter-tech-general"> [G9: Creating captions for live synchronized media](https://www.w3.org/WAI/WCAG21/Techniques/general/G9.html) </span>
    -   [SM11: Providing captions through synchronized text streams in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11.html)
    -   [SM12: Providing captions through synchronized text streams in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12.html)

    **AND** <span class="filter-tech-general"> [G87: Providing closed captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G87.html) </span>
    -   [SM11: Providing captions through synchronized text streams in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11.html)
    -   [SM12: Providing captions through synchronized text streams in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12.html)

Back to top

#### **1.2.5** Audio Description (Prerecorded)

<span class="level-aa">Level AA</span>

Audio description is provided for all prerecorded video content in synchronized media.

Understanding 1.2.5

Show

Hide techniques and failures for 1.2.5

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.5</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G78.html)
-   <span class="filter-tech-general"> [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G78.html) **AND**</span> <span class="filter-tech-sl"> [SL1: Accessing Alternate Audio Tracks in Silverlight Media](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL1.html) </span>
-   [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G173.html)
    -   [SM6: Providing audio description in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6.html)
    -   [SM7: Providing audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7.html)
    -   [FLASH26: Applying audio descriptions to Flash video](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH26.html)
    -   Using any player that supports audio and video
-   [G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G8.html)
    -   [SM1: Adding extended audio description in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM1.html)
    -   [SM2: Adding extended audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2.html)
    -   [FLASH26: Applying audio descriptions to Flash video](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH26.html)
    -   Using any player that supports audio and video
-   [G203: Using a static text alternative to describe a talking head video](https://www.w3.org/WAI/WCAG21/Techniques/general/G203.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.2.5</span>

-   [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96.html)

Back to top

#### **1.2.6** Sign Language (Prerecorded)

<span class="level-aaa">Level AAA</span>

Sign language interpretation is provided for all prerecorded audio content in synchronized media.

Understanding 1.2.6

Show

Hide techniques and failures for 1.2.6

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.6</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G54: Including a sign language interpreter in the video stream](https://www.w3.org/WAI/WCAG21/Techniques/general/G54.html)
-   [G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player](https://www.w3.org/WAI/WCAG21/Techniques/general/G81.html)
    -   [SM13: Providing sign language interpretation through synchronized video streams in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM13.html)
    -   [SM14: Providing sign language interpretation through synchronized video streams in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM14.html)

Back to top

#### **1.2.7** Extended Audio Description (Prerecorded)

<span class="level-aaa">Level AAA</span>

Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.

Understanding 1.2.7

Show

Hide techniques and failures for 1.2.7

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.7</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G8.html)
    -   [SM1: Adding extended audio description in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM1.html)
    -   [SM2: Adding extended audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2.html)
    -   Using any player that supports audio and video

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.2.7</span>

-   [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/html/H96.html)

Back to top

#### **1.2.8** Media Alternative (Prerecorded)

<span class="level-aaa">Level AAA</span>

An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.

Understanding 1.2.8

Show

Hide techniques and failures for 1.2.8

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.8</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If the content is prerecorded synchronized media:

-   [G69: Providing an alternative for time based media](https://www.w3.org/WAI/WCAG21/Techniques/general/G69.html)
    -   [G58: Placing a link to the alternative for time-based media immediately next to the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G58.html)
    -   [SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17.html)
-   Linking to the alternative for time-based media using one of the following techniques
    -   [H53: Using the body of the object element](https://www.w3.org/WAI/WCAG21/Techniques/html/H53.html)

###### Situation B: If the content is prerecorded video-only:

-   [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G159.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.2.8</span>

-   [H46: Using noembed with embed](https://www.w3.org/WAI/WCAG21/Techniques/html/H46.html)

##### Failures <span class="sr-only">for Success Criterion 1.2.8</span>

-   [F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative](https://www.w3.org/WAI/WCAG21/Techniques/failures/F74.html)

Back to top

#### **1.2.9** Audio-only (Live)

<span class="level-aaa">Level AAA</span>

An alternative for time-based media that presents equivalent information for live audio-only content is provided.

Understanding 1.2.9

Show

Hide techniques and failures for 1.2.9

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.2.9</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G151: Providing a link to a text transcript of a prepared statement or script if the script is followed](https://www.w3.org/WAI/WCAG21/Techniques/general/G151.html)
-   [G150: Providing text based alternatives for live audio-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G150.html)
-   [G157: Incorporating a live audio captioning service into a Web page](https://www.w3.org/WAI/WCAG21/Techniques/general/G157.html)

Back to top

### Guideline **1.3** – Adaptable

Create content that can be presented in different ways (for example simpler layout) without losing information or structure.

#### **1.3.1** Info and Relationships

<span class="level-a">Level A</span>

Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

Understanding 1.3.1

Show

Hide techniques and failures for 1.3.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.3.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:

-   [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11.html)
-   [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12.html)
-   [ARIA13: Using aria-labelledby to name regions and landmarks](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13.html)
-   [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16.html)
-   [ARIA17: Using grouping roles to identify related form controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17.html)
-   [ARIA20: Using the region role to identify a region of the page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA20.html)
-   <span class="filter-tech-general"> [G115: Using semantic elements to mark up structure](https://www.w3.org/WAI/WCAG21/Techniques/general/G115.html) **AND**</span> <span class="filter-tech-html"> [H49: Using semantic markup to mark emphasized or special text](https://www.w3.org/WAI/WCAG21/Techniques/html/H49.html) </span>
-   [G117: Using text to convey information that is conveyed by variations in presentation of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G117.html)
-   [G140: Separating information and structure from presentation to enable different presentations](https://www.w3.org/WAI/WCAG21/Techniques/general/G140.html)
-   [ARIA24: Semantically identifying a font icon with role="img"](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA24.html)
-   Making information and relationships conveyed through presentation programmatically determinable using the following techniques:
    -   [G138: Using semantic markup whenever color cues are used](https://www.w3.org/WAI/WCAG21/Techniques/general/G138.html)
    -   [H51: Using table markup to present tabular information](https://www.w3.org/WAI/WCAG21/Techniques/html/H51.html)
    -   [PDF6: Using table elements for table markup in PDF Documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF6.html)
    -   [PDF20: Using Adobe Acrobat Pro's Table Editor to repair mistagged tables](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF20.html)
    -   [H39: Using caption elements to associate data table captions with data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H39.html)
    -   [FLASH31: Specifying caption text for a DataGrid](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH31.html)
    -   [H73: Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H73.html)
    -   [FLASH23: Adding summary information to a DataGrid](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH23.html)
    -   [H63: Using the scope attribute to associate header cells and data cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H63.html)
    -   [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43.html)
    -   [FLASH21: Using the DataGrid component to associate column headers with cells](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH21.html)
    -   [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html)
    -   [H65: Using the title attribute to identify form controls when the label element cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html)
    -   [PDF10: Providing labels for interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html)
    -   [PDF12: Providing name, role, value information for form fields in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12.html)
    -   [FLASH32: Using auto labeling to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH32.html)
    -   [FLASH29: Setting the label property for form components](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH29.html)
    -   [FLASH25: Labeling a form control by setting its accessible name](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH25.html)
    -   [H71: Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H71.html)
    -   [SL20: Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL20.html)
    -   [SL26: Using LabeledBy to Associate Labels and Targets in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL26.html)
    -   [H85: Using OPTGROUP to group OPTION elements inside a SELECT](https://www.w3.org/WAI/WCAG21/Techniques/html/H85.html)
    -   [H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html)
    -   [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42.html)
    -   [PDF9: Providing headings by marking content with heading tags in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9.html)
    -   [SCR21: Using functions of the Document Object Model (DOM) to add content to a page](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR21.html)
    -   [PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11.html)
    -   [PDF17: Specifying consistent page numbering for PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF17.html)
    -   [PDF21: Using List tags for lists in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF21.html)
    -   [H97: Grouping related links using the nav element](https://www.w3.org/WAI/WCAG21/Techniques/html/H97.html)

###### Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:

-   [G117: Using text to convey information that is conveyed by variations in presentation of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G117.html)
-   [FLASH8: Adding a group name to the accessible name of a form control](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH8.html)
-   Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques:
    -   [T1: Using standard text formatting conventions for paragraphs](https://www.w3.org/WAI/WCAG21/Techniques/text/T1.html)
    -   [T2: Using standard text formatting conventions for lists](https://www.w3.org/WAI/WCAG21/Techniques/text/T2.html)
    -   [T3: Using standard text formatting conventions for headings](https://www.w3.org/WAI/WCAG21/Techniques/text/T3.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.3.1</span>

-   [C22: Using CSS to control visual presentation of text](https://www.w3.org/WAI/WCAG21/Techniques/css/C22.html)
-   [G162: Positioning labels to maximize predictability of relationships](https://www.w3.org/WAI/WCAG21/Techniques/general/G162.html)
-   [ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1.html)
-   [ARIA2: Identifying a required field with the aria-required property](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2.html)
-   [G141: Organizing a page using headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G141.html)

##### Failures <span class="sr-only">for Success Criterion 1.3.1</span>

-   [F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text](https://www.w3.org/WAI/WCAG21/Techniques/failures/F2.html)
-   [F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F33.html)
-   [F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F34.html)
-   [F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links](https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html)
-   [F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F43.html)
-   [F46: Failure of Success Criterion 1.3.1 due to using th elements, layout tables](https://www.w3.org/WAI/WCAG21/Techniques/failures/F46.html)
-   [F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information](https://www.w3.org/WAI/WCAG21/Techniques/failures/F48.html)
-   [F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87.html)
-   [F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/WAI/WCAG21/Techniques/failures/F90.html)
-   [F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers](https://www.w3.org/WAI/WCAG21/Techniques/failures/F91.html)
-   [F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information](https://www.w3.org/WAI/WCAG21/Techniques/failures/F92.html)

Back to top

#### **1.3.2** Meaningful Sequence

<span class="level-a">Level A</span>

When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

Understanding 1.3.2

Show

Hide techniques and failures for 1.3.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.3.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G57: Ordering the content in a meaningful sequence](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html)
-   <span class="filter-tech-text"> Marking sequences in the content as meaningful **AND**</span> <span class="filter-tech-general"> [G57: Ordering the content in a meaningful sequence](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html) </span>
    -   [H34: Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline](https://www.w3.org/WAI/WCAG21/Techniques/html/H34.html)
    -   [H56: Using the dir attribute on an inline element to resolve problems with nested directional runs](https://www.w3.org/WAI/WCAG21/Techniques/html/H56.html)
    -   [C6: Positioning content based on structural markup](https://www.w3.org/WAI/WCAG21/Techniques/css/C6.html)
    -   [C8: Using CSS letter-spacing to control spacing within a word](https://www.w3.org/WAI/WCAG21/Techniques/css/C8.html)
-   [C27: Making the DOM order match the visual order](https://www.w3.org/WAI/WCAG21/Techniques/css/C27.html)
-   [FLASH15: Using the tabIndex property to specify a logical reading order and a logical tab order in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH15.html)
-   [PDF3: Ensuring correct tab and reading order in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3.html)
-   [SL34: Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL34.html)

##### Failures <span class="sr-only">for Success Criterion 1.3.2</span>

-   [F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F34.html)
-   [F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F33.html)
-   [F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word](https://www.w3.org/WAI/WCAG21/Techniques/failures/F32.html)
-   [F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized](https://www.w3.org/WAI/WCAG21/Techniques/failures/F49.html)
-   [F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS](https://www.w3.org/WAI/WCAG21/Techniques/failures/F1.html)

Back to top

#### **1.3.3** Sensory Characteristics

<span class="level-a">Level A</span>

Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.

*Note 1:* For requirements related to color, refer to Guideline 1.4.

Understanding 1.3.3

Show

Hide techniques and failures for 1.3.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.3.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](https://www.w3.org/WAI/WCAG21/Techniques/general/G96.html)

##### Failures <span class="sr-only">for Success Criterion 1.3.3</span>

-   [F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location](https://www.w3.org/WAI/WCAG21/Techniques/failures/F14.html)
-   [F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information](https://www.w3.org/WAI/WCAG21/Techniques/failures/F26.html)

Back to top

#### **1.3.4** Orientation

<span class="level-aa">Level AA</span><span class="newin21">(Added in 2.1)</span>

Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.

Understanding 1.3.4

Show

Hide techniques and failures for 1.3.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.3.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   Using CSS to set the orientation to allow both landscape and portrait.
-   Use of show/hide controls to allow access to content in different orientations.

##### Failures <span class="sr-only">for Success Criterion 1.3.4</span>

-   [F97: Failure due to locking the orientation to landscape or portrait view](https://www.w3.org/WAI/WCAG21/Techniques/failures/F97.html)

Back to top

#### **1.3.5** Identify Input Purpose

<span class="level-aa">Level AA</span><span class="newin21">(Added in 2.1)</span>

The purpose of each input field collecting information about the user can be programmatically determined when:

------------------------------------------------------------------------

-   The input field serves a purpose identified in the Input Purposes for User Interface Components section; and
-   The content is implemented using technologies with support for identifying the expected meaning for form input data.

Understanding 1.3.5

Back to top

#### **1.3.6** Identify Purpose

<span class="level-aaa">Level AAA</span><span class="newin21">(Added in 2.1)</span>

In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.

Understanding 1.3.6

Show

Hide techniques and failures for 1.3.6

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.3.6</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11.html)
-   Using microdata to markup user interface components (future link)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.3.6</span>

-   Enable user agents to find the version of the content that best fits their needs.
-   Using semantics to identify important features (coga-simplification="simplest").
-   Use of aria-invalid and aria-required.

Back to top

### Guideline **1.4** – Distinguishable

Make it easier for users to see and hear content including separating foreground from background.

#### **1.4.1** Use of Color

<span class="level-a">Level A</span>

Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

*Note 1:* This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.

Understanding 1.4.1

Show

Hide techniques and failures for 1.4.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If the color of particular words, backgrounds, or other content is used to indicate information:

-   [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/WAI/WCAG21/Techniques/general/G14.html)
-   [G205: Including a text cue for colored form control labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G205.html)
-   [G182: Ensuring that additional visual cues are available when text color differences are used to convey information](https://www.w3.org/WAI/WCAG21/Techniques/general/G182.html)
-   [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](https://www.w3.org/WAI/WCAG21/Techniques/general/G183.html)

###### Situation B: If color is used within an image to convey information:

-   [G111: Using color and pattern](https://www.w3.org/WAI/WCAG21/Techniques/general/G111.html)
-   [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/WAI/WCAG21/Techniques/general/G14.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.1</span>

-   [C15: Using CSS to change the presentation of a user interface component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)

##### Failures <span class="sr-only">for Success Criterion 1.4.1</span>

-   [F13: Failure of Success Criterion 1.1.1 and 1.4.1 due to having a text alternative that does not include information that is conveyed by color differences in the image](https://www.w3.org/WAI/WCAG21/Techniques/failures/F13.html)
-   [F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision](https://www.w3.org/WAI/WCAG21/Techniques/failures/F73.html)
-   [F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only](https://www.w3.org/WAI/WCAG21/Techniques/failures/F81.html)

Back to top

#### **1.4.2** Audio Control

<span class="level-a">Level A</span>

If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.

*Note 1:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

Understanding 1.4.2

Show

Hide techniques and failures for 1.4.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G60: Playing a sound that turns off automatically within three seconds](https://www.w3.org/WAI/WCAG21/Techniques/general/G60.html)
-   [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](https://www.w3.org/WAI/WCAG21/Techniques/general/G170.html)
-   [G171: Playing sounds only on user request](https://www.w3.org/WAI/WCAG21/Techniques/general/G171.html)
-   [SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL24.html)
-   [FLASH18: Providing a control to turn off sounds that play automatically in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH18.html)
-   [FLASH34: Turning off sounds that play automatically when an assistive technology is detected](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH34.html)
-   [SL3: Controlling Silverlight MediaElement Audio Volume](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL3.html)

##### Failures <span class="sr-only">for Success Criterion 1.4.2</span>

-   [F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off](https://www.w3.org/WAI/WCAG21/Techniques/failures/F23.html)
-   [F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays](https://www.w3.org/WAI/WCAG21/Techniques/failures/F93.html)

Back to top

#### **1.4.3** Contrast (Minimum)

<span class="level-aa">Level AA</span>

The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

------------------------------------------------------------------------

-   **Large Text:** Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
-   **Incidental:** Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
-   **Logotypes:** Text that is part of a logo or brand name has no contrast requirement.

Understanding 1.4.3

Show

Hide techniques and failures for 1.4.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: text is less than 18 point if not bold and less than 14 point if bold

-   [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html)
-   [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](https://www.w3.org/WAI/WCAG21/Techniques/general/G148.html)
-   [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](https://www.w3.org/WAI/WCAG21/Techniques/general/G174.html)
-   [SL13: Providing A Style Switcher To Switch To High Contrast](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL13.html)

###### Situation B: text is at least 18 point if not bold and at least 14 point if bold

-   [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145.html)
-   [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](https://www.w3.org/WAI/WCAG21/Techniques/general/G148.html)
-   [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](https://www.w3.org/WAI/WCAG21/Techniques/general/G174.html)
-   [SL13: Providing A Style Switcher To Switch To High Contrast](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL13.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.3</span>

-   [G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G156.html)

##### Failures <span class="sr-only">for Success Criterion 1.4.3</span>

-   [F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa](https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html)
-   [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83.html)

Back to top

#### **1.4.4** Resize text

<span class="level-aa">Level AA</span>

Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

Understanding 1.4.4

Show

Hide techniques and failures for 1.4.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G142: Using a technology that has commonly-available user agents that support zoom](https://www.w3.org/WAI/WCAG21/Techniques/general/G142.html)
-   [SL22: Supporting Browser Zoom in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL22.html)
-   [SL23: Using A Style Switcher to Increase Font Size of Silverlight Text Elements](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL23.html)
-   Ensuring that text containers resize when the text resizes AND using measurements that are relative to other measurements in the content by using one or more of the following techniques:
    -   [C28: Specifying the size of text containers using em units](https://www.w3.org/WAI/WCAG21/Techniques/css/C28.html)
    -   Techniques for relative measurements
        -   [C12: Using percent for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C12.html)
        -   [C13: Using named font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C13.html)
        -   [C14: Using em units for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C14.html)
    -   Techniques for text container resizing
        -   [SCR34: Calculating size and position in a way that scales with text size](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR34.html)
        -   [G146: Using liquid layout](https://www.w3.org/WAI/WCAG21/Techniques/general/G146.html)
-   [G178: Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent](https://www.w3.org/WAI/WCAG21/Techniques/general/G178.html)
-   [G179: Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width](https://www.w3.org/WAI/WCAG21/Techniques/general/G179.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.4</span>

-   [C17: Scaling form elements which contain text](https://www.w3.org/WAI/WCAG21/Techniques/css/C17.html)
-   [C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized](https://www.w3.org/WAI/WCAG21/Techniques/css/C20.html)
-   [C22: Using CSS to control visual presentation of text](https://www.w3.org/WAI/WCAG21/Techniques/css/C22.html)

##### Failures <span class="sr-only">for Success Criterion 1.4.4</span>

-   [F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured](https://www.w3.org/WAI/WCAG21/Techniques/failures/F69.html)
-   [F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%](https://www.w3.org/WAI/WCAG21/Techniques/failures/F80.html)
-   [F94: Failure of Success Criterion 1.4.4 due to text sized in viewport units](https://www.w3.org/WAI/WCAG21/Techniques/failures/F94.html)

Back to top

#### **1.4.5** Images of Text

<span class="level-aa">Level AA</span>

If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:

------------------------------------------------------------------------

-   **Customizable:** The image of text can be visually customized to the user's requirements;
-   **Essential:** A particular presentation of text is essential to the information being conveyed.

*Note 1:* Logotypes (text that is part of a logo or brand name) are considered essential.

Understanding 1.4.5

Show

Hide techniques and failures for 1.4.5

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.5</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [C22: Using CSS to control visual presentation of text](https://www.w3.org/WAI/WCAG21/Techniques/css/C22.html)
-   [SL31: Using Silverlight Font Properties to Control Text Presentation](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL31.html)
-   [C30: Using CSS to replace text with images of text and providing user interface controls to switch](https://www.w3.org/WAI/WCAG21/Techniques/css/C30.html)
-   [G140: Separating information and structure from presentation to enable different presentations](https://www.w3.org/WAI/WCAG21/Techniques/general/G140.html)
-   [PDF7: Performing OCR on a scanned PDF document to provide actual text](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF7.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.5</span>

-   [C12: Using percent for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C12.html)
-   [C13: Using named font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C13.html)
-   [C14: Using em units for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C14.html)
-   [C8: Using CSS letter-spacing to control spacing within a word](https://www.w3.org/WAI/WCAG21/Techniques/css/C8.html)
-   [C6: Positioning content based on structural markup](https://www.w3.org/WAI/WCAG21/Techniques/css/C6.html)

Back to top

#### **1.4.6** Contrast (Enhanced)

<span class="level-aaa">Level AAA</span>

The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following:

------------------------------------------------------------------------

-   **Large Text:** Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;
-   **Incidental:** Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
-   **Logotypes:** Text that is part of a logo or brand name has no contrast requirement.

Understanding 1.4.6

Show

Hide techniques and failures for 1.4.6

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.6</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: text is less than 18 point if not bold and less than 14 point if bold

-   [G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G17.html)
-   [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](https://www.w3.org/WAI/WCAG21/Techniques/general/G148.html)
-   [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](https://www.w3.org/WAI/WCAG21/Techniques/general/G174.html)
-   [SL13: Providing A Style Switcher To Switch To High Contrast](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL13.html)

###### Situation B: text is as least 18 point if not bold and at least 14 point if bold

-   [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html)
-   [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](https://www.w3.org/WAI/WCAG21/Techniques/general/G148.html)
-   [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](https://www.w3.org/WAI/WCAG21/Techniques/general/G174.html)
-   [SL13: Providing A Style Switcher To Switch To High Contrast](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL13.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.6</span>

-   [G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G156.html)

##### Failures <span class="sr-only">for Success Criterion 1.4.6</span>

-   [F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa](https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html)
-   [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83.html)

Back to top

#### **1.4.7** Low or No Background Audio

<span class="level-aaa">Level AAA</span>

For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:

------------------------------------------------------------------------

-   **No Background:** The audio does not contain background sounds.
-   **Turn Off:** The background sounds can be turned off.
-   **20 dB:** The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds. Per the definition of "decibel," background sound that meets this requirement will be approximately four times quieter than the foreground speech content.

Understanding 1.4.7

Show

Hide techniques and failures for 1.4.7

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.7</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G56: Mixing audio files so that non-speech sounds are at least 20 decibels lower than the speech audio content](https://www.w3.org/WAI/WCAG21/Techniques/general/G56.html)

Back to top

#### **1.4.8** Visual Presentation

<span class="level-aaa">Level AAA</span>

For the visual presentation of blocks of text, a mechanism is available to achieve the following:

------------------------------------------------------------------------

1.  Foreground and background colors can be selected by the user.
2.  Width is no more than 80 characters or glyphs (40 if CJK).
3.  Text is not justified (aligned to both the left and the right margins).
4.  Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.
5.  Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.

Understanding 1.4.8

Show

Hide techniques and failures for 1.4.8

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.8</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### First Requirement: Techniques to ensure foreground and background colors can be selected by the user

-   [C23: Specifying text and background colors of secondary content such as banners, features and navigation in CSS while not specifying text and background colors of the main content](https://www.w3.org/WAI/WCAG21/Techniques/css/C23.html) OR
-   [C25: Specifying borders and layout in CSS to delineate areas of a Web page while not specifying text and text-background colors](https://www.w3.org/WAI/WCAG21/Techniques/css/C25.html) OR
-   [G156: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G156.html) OR
-   [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](https://www.w3.org/WAI/WCAG21/Techniques/general/G148.html) OR
-   [G175: Providing a multi color selection tool on the page for foreground and background colors](https://www.w3.org/WAI/WCAG21/Techniques/general/G175.html) OR

###### Second Requirement: Techniques to ensure width is no more than 80 characters or glyphs (40 if CJK)

-   [G204: Not interfering with the user agent's reflow of text as the viewing window is narrowed](https://www.w3.org/WAI/WCAG21/Techniques/general/G204.html) OR
-   [C20: Using relative measurements to set column widths so that lines can average 80 characters or less when the browser is resized](https://www.w3.org/WAI/WCAG21/Techniques/css/C20.html)

###### Third Requirement: Techniques to ensure text is not justified (aligned to both the left and the right margins)

-   [C19: Specifying alignment either to the left OR right in CSS](https://www.w3.org/WAI/WCAG21/Techniques/css/C19.html) OR
-   [G172: Providing a mechanism to remove full justification of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G172.html) OR
-   [G169: Aligning text on only one side](https://www.w3.org/WAI/WCAG21/Techniques/general/G169.html)

###### Fourth Requirement: Techniques to ensure line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing

-   [G188: Providing a button on the page to increase line spaces and paragraph spaces](https://www.w3.org/WAI/WCAG21/Techniques/general/G188.html) OR
-   [C21: Specifying line spacing in CSS](https://www.w3.org/WAI/WCAG21/Techniques/css/C21.html)

###### Fifth Requirement: Techniques to ensure text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window

-   Not interfering with the user agent's reflow of text as the viewing window is narrowed
-   [G146: Using liquid layout](https://www.w3.org/WAI/WCAG21/Techniques/general/G146.html) AND using measurements that are relative to other measurements in the content by
    -   [C12: Using percent for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C12.html) OR
    -   [C13: Using named font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C13.html) OR
    -   [C14: Using em units for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C14.html) OR
    -   [C24: Using percentage values in CSS for container sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C24.html) OR
    -   [FLASH33: Using relative values for Flash object dimensions](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH33.html) OR
    -   [SCR34: Calculating size and position in a way that scales with text size](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR34.html)
-   [G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G206.html)

##### Failures <span class="sr-only">for Success Criterion 1.4.8</span>

-   [F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without specifying background colors or vice versa](https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html)
-   [F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F88.html)

Back to top

#### **1.4.9** Images of Text (No Exception)

<span class="level-aaa">Level AAA</span>

Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.

*Note 1:* Logotypes (text that is part of a logo or brand name) are considered essential.

Understanding 1.4.9

Show

Hide techniques and failures for 1.4.9

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.9</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [C22: Using CSS to control visual presentation of text](https://www.w3.org/WAI/WCAG21/Techniques/css/C22.html)
-   [SL31: Using Silverlight Font Properties to Control Text Presentation](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL31.html)
-   [C30: Using CSS to replace text with images of text and providing user interface controls to switch](https://www.w3.org/WAI/WCAG21/Techniques/css/C30.html)
-   [G140: Separating information and structure from presentation to enable different presentations](https://www.w3.org/WAI/WCAG21/Techniques/general/G140.html)
-   [PDF7: Performing OCR on a scanned PDF document to provide actual text](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF7.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.9</span>

-   [C12: Using percent for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C12.html)
-   [C13: Using named font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C13.html)
-   [C14: Using em units for font sizes](https://www.w3.org/WAI/WCAG21/Techniques/css/C14.html)
-   [C8: Using CSS letter-spacing to control spacing within a word](https://www.w3.org/WAI/WCAG21/Techniques/css/C8.html)
-   [C6: Positioning content based on structural markup](https://www.w3.org/WAI/WCAG21/Techniques/css/C6.html)

Back to top

#### **1.4.10** Reflow

<span class="level-aa">Level AA</span><span class="newin21">(Added in 2.1)</span>

Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:

------------------------------------------------------------------------

-   Vertical scrolling content at a width equivalent to 320 CSS pixels;
-   Horizontal scrolling content at a height equivalent to 256 CSS pixels;

Except for parts of the content which require two-dimensional layout for usage or meaning.

Understanding 1.4.10

Show

Hide techniques and failures for 1.4.10

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.10</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [C32: Using media queries and grid CSS to reflow columns](https://www.w3.org/WAI/WCAG21/Techniques/css/C32.html)
-   [C31: Using CSS Flexbox to reflow content](https://www.w3.org/WAI/WCAG21/Techniques/css/C31.html)
-   [C33: Allowing for Reflow with Long URLs and Strings of Text](https://www.w3.org/WAI/WCAG21/Techniques/css/C33.html)
-   [C38: Using CSS width, max-width and flexbox to fit labels and inputs](https://www.w3.org/WAI/WCAG21/Techniques/css/C38.html)
-   [SCR34: Calculating size and position in a way that scales with text size](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR34.html)
-   [G206: Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text](https://www.w3.org/WAI/WCAG21/Techniques/general/G206.html)
-   @@ New: Using PDF/UA when creating PDFs.

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.10</span>

-   [C34: Using media queries to un-fixing sticky headers / footers](https://www.w3.org/WAI/WCAG21/Techniques/css/C34.html)
-   [C37: Using CSS max-width and height to fit images](https://www.w3.org/WAI/WCAG21/Techniques/css/C37.html)
-   @@ CSS, Reflowing simple data tables.
-   @@ CSS, Fitting data cells within the width of the viewport.
-   @@ Mechanism to allow mobile view at any time

##### Failures <span class="sr-only">for Success Criterion 1.4.10</span>

-   @@ Using fixed sized containers and fixed position content (CSS)
-   @@ (HTML) Using preformatted text or excluding preformatting text as an exception to no two dimensional scrolling.

Back to top

#### **1.4.11** Non-text Contrast

<span class="level-aa">Level AA</span><span class="newin21">(Added in 2.1)</span>

The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):

------------------------------------------------------------------------

-   **User Interface Components:** Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;
-   **Graphical Objects:** Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.

Understanding 1.4.11

Show

Hide techniques and failures for 1.4.11

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.11</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### User Interface Component contrast

-   [G195: Using an author-supplied, highly visible focus indicator](https://www.w3.org/WAI/WCAG21/Techniques/general/G195.html)

###### Graphics with sufficient contrast

-   [G207: Ensuring that a contrast ratio of 3:1 is provided for icons](https://www.w3.org/WAI/WCAG21/Techniques/general/G207.html)
-   [G209: Provide sufficient contrast at the boundaries between adjoining colors](https://www.w3.org/WAI/WCAG21/Techniques/general/G209.html)

###### Text in or over graphics

-   @@ Include labels and values with the graphic (TBD)
-   [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html)
-   [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145.html)
-   [G174: Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast](https://www.w3.org/WAI/WCAG21/Techniques/general/G174.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.11</span>

-   [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](https://www.w3.org/WAI/WCAG21/Techniques/general/G183.html)

##### Failures <span class="sr-only">for Success Criterion 1.4.11</span>

-   [F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator](https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html)

Back to top

#### **1.4.12** Text Spacing

<span class="level-aa">Level AA</span><span class="newin21">(Added in 2.1)</span>

In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:

------------------------------------------------------------------------

-   Line height (line spacing) to at least 1.5 times the font size;
-   Spacing following paragraphs to at least 2 times the font size;
-   Letter spacing (tracking) to at least 0.12 times the font size;
-   Word spacing to at least 0.16 times the font size.

Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.

Understanding 1.4.12

Show

Hide techniques and failures for 1.4.12

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.12</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [C36: Allowing for text spacing override](https://www.w3.org/WAI/WCAG21/Techniques/css/C36.html)
-   [C35: Allowing for text spacing without wrapping](https://www.w3.org/WAI/WCAG21/Techniques/css/C35.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 1.4.12</span>

-   [C8: Using CSS letter-spacing to control spacing within a word](https://www.w3.org/WAI/WCAG21/Techniques/css/C8.html)
-   [C21: Specifying line spacing in CSS](https://www.w3.org/WAI/WCAG21/Techniques/css/C21.html)
-   [C28: Specifying the size of text containers using em units](https://www.w3.org/WAI/WCAG21/Techniques/css/C28.html)

##### Failures <span class="sr-only">for Success Criterion 1.4.12</span>

-   Failure of Success Criterion 1.4.12 due to not allowing for spacing override. (Future technique)

Back to top

#### **1.4.13** Content on Hover or Focus

<span class="level-aa">Level AA</span><span class="newin21">(Added in 2.1)</span>

Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:

------------------------------------------------------------------------

-   **Dismissible:** A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;
-   **Hoverable:** If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;
-   **Persistent:** The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.

Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.

Understanding 1.4.13

Show

Hide techniques and failures for 1.4.13

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 1.4.13</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   @@ ARIA: Using role="tooltip"
-   @@ CSS: Using hover and focus pseudo classes

##### Failures <span class="sr-only">for Success Criterion 1.4.13</span>

-   [F95: Failure of Success Criterion 1.4.13 due to content shown on hover not being hoverable](https://www.w3.org/WAI/WCAG21/Techniques/failures/F95.html)
-   @@ Failure to make content dismissable without moving pointer hover or keyboard focus
-   @@ Failure to meet by content on hover or focus not remaining visible until dismissed or invalid

Back to top

**Principle 2** – Operable
--------------------------

User interface components and navigation must be operable.

### Guideline **2.1** – Keyboard Accessible

Make all functionality available from a keyboard.

#### **2.1.1** Keyboard

<span class="level-a">Level A</span>

All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

*Note 1:* This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.

*Note 2:* This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.

Understanding 2.1.1

Show

Hide techniques and failures for 2.1.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.1.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G202.html)
-   Ensuring keyboard control by using one of the following techniques.
    -   [H91: Using HTML form controls and links](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html)
    -   [PDF3: Ensuring correct tab and reading order in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3.html)
    -   [PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11.html)
    -   [PDF23: Providing interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF23.html)
    -   [SL15: Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL15.html)
-   [G90: Providing keyboard-triggered event handlers](https://www.w3.org/WAI/WCAG21/Techniques/general/G90.html)
    -   [SCR20: Using both keyboard and other device-specific functions](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR20.html)
    -   [SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR35.html)
    -   [SCR2: Using redundant keyboard and mouse event handlers](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR2.html)
    -   [SL9: Handling Key Events to Enable Keyboard Functionality in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL9.html)
    -   [SL14: Providing Custom Control Key Handling for Keyboard Functionality in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL14.html)
-   [FLASH17: Providing keyboard access to a Flash object and avoiding a keyboard trap](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH17.html)
    -   [FLASH22: Adding keyboard-accessible actions to static elements](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH22.html)
    -   [FLASH16: Making actions keyboard accessible by using the click event on standard components](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH16.html)
    -   [FLASH14: Using redundant keyboard and mouse event handlers in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH14.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.1.1</span>

-   [SCR29: Adding keyboard-accessible actions to static HTML elements](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR29.html)

##### Failures <span class="sr-only">for Success Criterion 2.1.1</span>

-   [F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function](https://www.w3.org/WAI/WCAG21/Techniques/failures/F54.html)
-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html)
-   [F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links](https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html)

Back to top

#### **2.1.2** No Keyboard Trap

<span class="level-a">Level A</span>

If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

*Note 1:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

Understanding 2.1.2

Show

Hide techniques and failures for 2.1.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.1.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG21/Techniques/general/G21.html)
-   [FLASH17: Providing keyboard access to a Flash object and avoiding a keyboard trap](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH17.html)

##### Failures <span class="sr-only">for Success Criterion 2.1.2</span>

-   [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG21/Techniques/failures/F10.html)

Back to top

#### **2.1.3** Keyboard (No Exception)

<span class="level-aaa">Level AAA</span>

All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.

Understanding 2.1.3

Back to top

#### **2.1.4** Character Key Shortcuts

<span class="level-a">Level A</span><span class="newin21">(Added in 2.1)</span>

If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:

------------------------------------------------------------------------

-   **Turn off:** A mechanism is available to turn the shortcut off;
-   **Remap:** A mechanism is available to remap the shortcut to include one or more non-printable keyboard keys (e.g., Ctrl, Alt);
-   **Active only on focus:** The keyboard shortcut for a user interface component is only active when that component has focus.

Understanding 2.1.4

Show

Hide techniques and failures for 2.1.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.1.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   Users have a way to turn off single-key shortcuts.
-   A mechanism is provided to allow users to change character-key shortcuts. The remapping mechanism includes non-printing characters. The alternative shortcuts could be longer strings of up to 25 characters that would directly serve as native speech commands for any speech engine.

##### Failures <span class="sr-only">for Success Criterion 2.1.4</span>

-   Failure of Success Criteria 2.1.4 due to a webpage or web app that includes single-key shortcuts not including a control that allows users to turn the shortcuts off or a control that allows users to change the shortcuts to key combinations that include keys that are not upper or lower-case letters, punctuation, number, or symbol characters.

Back to top

### Guideline **2.2** – Enough Time

Provide users enough time to read and use content.

#### **2.2.1** Timing Adjustable

<span class="level-a">Level A</span>

For each time limit that is set by the content, at least one of the following is true:

------------------------------------------------------------------------

-   **Turn off:** The user is allowed to turn off the time limit before encountering it; or
-   **Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or
-   **Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or
-   **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
-   **Essential Exception:** The time limit is essential and extending it would invalidate the activity; or
-   **20 Hour Exception:** The time limit is longer than 20 hours.

Understanding 2.2.1

Show

Hide techniques and failures for 2.2.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.2.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If there are session time limits:

-   [G133: Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit](https://www.w3.org/WAI/WCAG21/Techniques/general/G133.html)
-   [G198: Providing a way for the user to turn the time limit off](https://www.w3.org/WAI/WCAG21/Techniques/general/G198.html)

###### Situation B: If a time limit is controlled by a script on the page:

-   [G198: Providing a way for the user to turn the time limit off](https://www.w3.org/WAI/WCAG21/Techniques/general/G198.html)
-   [G180: Providing the user with a means to set the time limit to 10 times the default time limit](https://www.w3.org/WAI/WCAG21/Techniques/general/G180.html)
-   <span class="filter-tech-scr"> [SCR16: Providing a script that warns the user a time limit is about to expire](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR16.html) **AND**</span> <span class="filter-tech-scr"> [SCR1: Allowing the user to extend the default time limit](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR1.html) </span>
-   [FLASH19: Providing a script that warns the user a time limit is about to expire and provides a way to extend it](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH19.html)
-   [FLASH24: Allowing the user to extend the default time limit](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH24.html)
-   [SL21: Replacing A Silverlight Timed Animation With a Nonanimated Element](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL21.html)

###### Situation C: If there are time limits on reading:

-   [G4: Allowing the content to be paused and restarted from where it was paused](https://www.w3.org/WAI/WCAG21/Techniques/general/G4.html)
-   [G198: Providing a way for the user to turn the time limit off](https://www.w3.org/WAI/WCAG21/Techniques/general/G198.html)
-   [SCR33: Using script to scroll content, and providing a mechanism to pause it](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR33.html)
-   [SCR36: Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR36.html)

##### Failures <span class="sr-only">for Success Criterion 2.2.1</span>

-   [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](https://www.w3.org/WAI/WCAG21/Techniques/failures/F40.html)
-   [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page](https://www.w3.org/WAI/WCAG21/Techniques/failures/F41.html)
-   [F58: Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out](https://www.w3.org/WAI/WCAG21/Techniques/failures/F58.html)

Back to top

#### **2.2.2** Pause, Stop, Hide

<span class="level-a">Level A</span>

For moving, blinking, scrolling, or auto-updating information, all of the following are true:

------------------------------------------------------------------------

-   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and
-   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

*Note 1:* For requirements related to flickering or flashing content, refer to Guideline 2.3.

*Note 2:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

*Note 3:* Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.

*Note 4:* An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.

Understanding 2.2.2

Show

Hide techniques and failures for 2.2.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.2.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G4: Allowing the content to be paused and restarted from where it was paused](https://www.w3.org/WAI/WCAG21/Techniques/general/G4.html)
-   [SL11: Pausing or Stopping A Decorative Silverlight Animation](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL11.html)
-   [SL12: Pausing, Stopping, or Playing Media in Silverlight MediaElements](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL12.html)
-   [SCR33: Using script to scroll content, and providing a mechanism to pause it](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR33.html)
-   [FLASH35: Using script to scroll Flash content, and providing a mechanism to pause it](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH35.html)
-   [G11: Creating content that blinks for less than 5 seconds](https://www.w3.org/WAI/WCAG21/Techniques/general/G11.html)
-   [G187: Using a technology to include blinking content that can be turned off via the user agent](https://www.w3.org/WAI/WCAG21/Techniques/general/G187.html)
-   [G152: Setting animated gif images to stop blinking after n cycles (within 5 seconds)](https://www.w3.org/WAI/WCAG21/Techniques/general/G152.html)
-   [SCR22: Using scripts to control blinking and stop it in five seconds or less](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR22.html)
-   [FLASH36: Using scripts to control blinking and stop it in five seconds or less](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH36.html)
-   [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content](https://www.w3.org/WAI/WCAG21/Techniques/general/G186.html)
-   [G191: Providing a link, button, or other mechanism that reloads the page without any blinking content](https://www.w3.org/WAI/WCAG21/Techniques/general/G191.html)
-   [SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL24.html)

##### Failures <span class="sr-only">for Success Criterion 2.2.2</span>

-   [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F16.html)
-   [F47: Failure of Success Criterion 2.2.2 due to using the blink element](https://www.w3.org/WAI/WCAG21/Techniques/failures/F47.html)
-   [F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds](https://www.w3.org/WAI/WCAG21/Techniques/failures/F4.html)
-   [F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less](https://www.w3.org/WAI/WCAG21/Techniques/failures/F50.html)
-   [F7: Failure of Success Criterion 2.2.2 due to an object or applet, such as Java or Flash, for more than five seconds](https://www.w3.org/WAI/WCAG21/Techniques/failures/F7.html)

Back to top

#### **2.2.3** No Timing

<span class="level-aaa">Level AAA</span>

Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.

Understanding 2.2.3

Show

Hide techniques and failures for 2.2.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.2.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G5: Allowing users to complete an activity without any time limit](https://www.w3.org/WAI/WCAG21/Techniques/general/G5.html)

Back to top

#### **2.2.4** Interruptions

<span class="level-aaa">Level AAA</span>

Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.

Understanding 2.2.4

Show

Hide techniques and failures for 2.2.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.2.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G75: Providing a mechanism to postpone any updating of content](https://www.w3.org/WAI/WCAG21/Techniques/general/G75.html)
-   [G76: Providing a mechanism to request an update of the content instead of updating automatically](https://www.w3.org/WAI/WCAG21/Techniques/general/G76.html)
-   [SCR14: Using scripts to make nonessential alerts optional](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR14.html)

##### Failures <span class="sr-only">for Success Criterion 2.2.4</span>

-   [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](https://www.w3.org/WAI/WCAG21/Techniques/failures/F40.html)
-   [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page](https://www.w3.org/WAI/WCAG21/Techniques/failures/F41.html)

Back to top

#### **2.2.5** Re-authenticating

<span class="level-aaa">Level AAA</span>

When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.

Understanding 2.2.5

Show

Hide techniques and failures for 2.2.5

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.2.5</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   Providing options to continue without loss of data using one of the following techniques:
    -   [G105: Saving data so that it can be used after a user re-authenticates](https://www.w3.org/WAI/WCAG21/Techniques/general/G105.html)
    -   [G181: Encoding user data as hidden or encrypted data in a re-authorization page](https://www.w3.org/WAI/WCAG21/Techniques/general/G181.html)

##### Failures <span class="sr-only">for Success Criterion 2.2.5</span>

-   [F12: Failure of Success Criterion 2.2.5 due to having a session time limit without a mechanism re-authentication](https://www.w3.org/WAI/WCAG21/Techniques/failures/F12.html)

Back to top

#### **2.2.6** Timeouts

<span class="level-aaa">Level AAA</span><span class="newin21">(Added in 2.1)</span>

Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.

Understanding 2.2.6

Show

Hide techniques and failures for 2.2.6

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.2.6</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   Setting a session timeout to occur following at least 20 hours of inactivity.
-   Store user data for more than 20 hours.
-   Provide a warning of the duration of user inactivity at the start of a process.

Back to top

### Guideline **2.3** – Seizures and Physical Reactions

Do not design content in a way that is known to cause seizures or physical reactions.

#### **2.3.1** Three Flashes or Below Threshold

<span class="level-a">Level A</span>

Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.

*Note 1:* Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference.

Understanding 2.3.1

Show

Hide techniques and failures for 2.3.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.3.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](https://www.w3.org/WAI/WCAG21/Techniques/general/G19.html)
-   [G176: Keeping the flashing area small enough](https://www.w3.org/WAI/WCAG21/Techniques/general/G176.html)
-   [G15: Using a tool to ensure that content does not violate the general flash threshold or red flash threshold](https://www.w3.org/WAI/WCAG21/Techniques/general/G15.html)

Back to top

#### **2.3.2** Three Flashes

<span class="level-aaa">Level AAA</span>

Web pages do not contain anything that flashes more than three times in any one second period.

Understanding 2.3.2

Show

Hide techniques and failures for 2.3.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.3.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G19: Ensuring that no component of the content flashes more than three times in any 1-second period](https://www.w3.org/WAI/WCAG21/Techniques/general/G19.html)

Back to top

#### **2.3.3** Animation from Interactions

<span class="level-aaa">Level AAA</span><span class="newin21">(Added in 2.1)</span>

Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.

Understanding 2.3.3

Show

Hide techniques and failures for 2.3.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.3.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [C39: Using the CSS reduce-motion query to prevent motion](https://www.w3.org/WAI/WCAG21/Techniques/css/C39.html)
-   Gx: Allowing users to set a preference that prevents animation.

Back to top

### Guideline **2.4** – Navigable

Provide ways to help users navigate, find content, and determine where they are.

#### **2.4.1** Bypass Blocks

<span class="level-a">Level A</span>

A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.

Understanding 2.4.1

Show

Hide techniques and failures for 2.4.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   Creating links to skip blocks of repeated material using one of the following techniques:
    -   [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1.html)
    -   [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123.html)
    -   [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124.html)
    -   [SL25: Using Controls and Programmatic Focus to Bypass Blocks of Content in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL25.html)
-   Grouping blocks of repeated material in a way that can be skipped, using one of the following techniques:
    -   [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11.html)
    -   [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69.html)
    -   [PDF9: Providing headings by marking content with heading tags in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9.html)
    -   <span class="filter-tech-html"> [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG21/Techniques/html/H70.html) **AND**</span> <span class="filter-tech-html"> [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64.html) </span>
    -   [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28.html)
    -   [SL29: Using Silverlight "List" Controls to Define Blocks that can be Bypassed](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL29.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.4.1</span>

-   [C6: Positioning content based on structural markup](https://www.w3.org/WAI/WCAG21/Techniques/css/C6.html)

Back to top

#### **2.4.2** Page Titled

<span class="level-a">Level A</span>

Web pages have titles that describe topic or purpose.

Understanding 2.4.2

Show

Hide techniques and failures for 2.4.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88.html)
    -   [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25.html)
    -   [PDF18: Specifying the document title using the Title entry in the document information dictionary of a PDF document](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF18.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.4.2</span>

-   [G127: Identifying a Web page's relationship to a larger collection of Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G127.html)

##### Failures <span class="sr-only">for Success Criterion 2.4.2</span>

-   [F25: Failure of Success Criterion 2.4.2 due to the title of a Web page not identifying the contents](https://www.w3.org/WAI/WCAG21/Techniques/failures/F25.html)

Back to top

#### **2.4.3** Focus Order

<span class="level-a">Level A</span>

If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

Understanding 2.4.3

Show

Hide techniques and failures for 2.4.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G59: Placing the interactive elements in an order that follows sequences and relationships within the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G59.html)
-   Giving focus to elements in an order that follows sequences and relationships within the content using one of the following techniques:
    -   [H4: Creating a logical tab order through links, form controls, and objects](https://www.w3.org/WAI/WCAG21/Techniques/html/H4.html)
    -   [FLASH15: Using the tabIndex property to specify a logical reading order and a logical tab order in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH15.html)
    -   [C27: Making the DOM order match the visual order](https://www.w3.org/WAI/WCAG21/Techniques/css/C27.html)
    -   [PDF3: Ensuring correct tab and reading order in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3.html)
    -   [SL34: Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL34.html)
-   Changing a Web page dynamically using one of the following techniques:
    -   [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR26.html)
    -   [SCR37: Creating Custom Dialogs in a Device Independent Way](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR37.html)
    -   [SCR27: Reordering page sections using the Document Object Model](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR27.html)

##### Failures <span class="sr-only">for Success Criterion 2.4.3</span>

-   [F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability](https://www.w3.org/WAI/WCAG21/Techniques/failures/F44.html)
-   [F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order](https://www.w3.org/WAI/WCAG21/Techniques/failures/F85.html)

Back to top

#### **2.4.4** Link Purpose (In Context)

<span class="level-a">Level A</span>

The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.

Understanding 2.4.4

Show

Hide techniques and failures for 2.4.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html)
-   [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html)
-   [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG21/Techniques/html/H24.html)
-   [FLASH27: Providing button labels that describe the purpose of a button](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH27.html)
-   Allowing the user to choose short or long link text using one of the techniques below:
    -   [G189: Providing a control near the beginning of the Web page that changes the link text](https://www.w3.org/WAI/WCAG21/Techniques/general/G189.html)
    -   [SCR30: Using scripts to change the link text](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR30.html)
    -   [FLASH7: Using scripting to change control labels](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH7.html)
-   [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](https://www.w3.org/WAI/WCAG21/Techniques/general/G53.html)
-   Providing a supplemental description of the purpose of a link using one of the following techniques:
    -   [H33: Supplementing link text with the title attribute](https://www.w3.org/WAI/WCAG21/Techniques/html/H33.html)
    -   [C7: Using CSS to hide a portion of the link text](https://www.w3.org/WAI/WCAG21/Techniques/css/C7.html)
-   Identifying the purpose of a link using link text combined with programmatically determined link context using one of the following techniques:
    -   [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7.html)
    -   [ARIA8: Using aria-label for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8.html)
    -   [H77: Identifying the purpose of a link using link text combined with its enclosing list item](https://www.w3.org/WAI/WCAG21/Techniques/html/H77.html)
    -   [H78: Identifying the purpose of a link using link text combined with its enclosing paragraph](https://www.w3.org/WAI/WCAG21/Techniques/html/H78.html)
    -   [H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells](https://www.w3.org/WAI/WCAG21/Techniques/html/H79.html)
    -   [H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested](https://www.w3.org/WAI/WCAG21/Techniques/html/H81.html)
-   [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html)
    -   [PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11.html)
    -   [PDF13: Providing replacement text using the /Alt entry for links in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF13.html)
    -   [SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL18.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.4.4</span>

-   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
-   [FLASH5: Combining adjacent image and text buttons for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH5.html)
-   [H80: Identifying the purpose of a link using link text combined with the preceding heading element](https://www.w3.org/WAI/WCAG21/Techniques/html/H80.html)

##### Failures <span class="sr-only">for Success Criterion 2.4.4</span>

-   [F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link](https://www.w3.org/WAI/WCAG21/Techniques/failures/F63.html)
-   [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link](https://www.w3.org/WAI/WCAG21/Techniques/failures/F89.html)

Back to top

#### **2.4.5** Multiple Ways

<span class="level-aa">Level AA</span>

More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.

Understanding 2.4.5

Show

Hide techniques and failures for 2.4.5

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.5</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   Using two or more of the following techniques:
    -   [G125: Providing links to navigate to related Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G125.html)
    -   [G64: Providing a Table of Contents](https://www.w3.org/WAI/WCAG21/Techniques/general/G64.html)
    -   [PDF2: Creating bookmarks in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF2.html)
    -   [G63: Providing a site map](https://www.w3.org/WAI/WCAG21/Techniques/general/G63.html)
    -   [G161: Providing a search function to help users find content](https://www.w3.org/WAI/WCAG21/Techniques/general/G161.html)
    -   [G126: Providing a list of links to all other Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G126.html)
    -   [G185: Linking to all of the pages on the site from the home page](https://www.w3.org/WAI/WCAG21/Techniques/general/G185.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.4.5</span>

-   [H59: Using the link element and navigation tools](https://www.w3.org/WAI/WCAG21/Techniques/html/H59.html)

Back to top

#### **2.4.6** Headings and Labels

<span class="level-aa">Level AA</span>

Headings and labels describe topic or purpose.

Understanding 2.4.6

Show

Hide techniques and failures for 2.4.6

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.6</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G130.html)
-   [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131.html)

Back to top

#### **2.4.7** Focus Visible

<span class="level-aa">Level AA</span>

Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

Understanding 2.4.7

Show

Hide techniques and failures for 2.4.7

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.7</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G149: Using user interface components that are highlighted by the user agent when they receive focus](https://www.w3.org/WAI/WCAG21/Techniques/general/G149.html)
-   [C15: Using CSS to change the presentation of a user interface component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
-   [G165: Using the default focus indicator for the platform so that high visibility default focus indicators will carry over](https://www.w3.org/WAI/WCAG21/Techniques/general/G165.html)
-   [G195: Using an author-supplied, highly visible focus indicator](https://www.w3.org/WAI/WCAG21/Techniques/general/G195.html)
-   @@@ Using a change of contrast ratio to provide a visible focus indicator
-   [SCR31: Using script to change the background color or border of the element with focus](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR31.html)
-   [FLASH20: Reskinning Flash components to provide highly visible focus indication](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH20.html)
-   [SL2: Changing The Visual Focus Indicator in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL2.html)
-   [SL7: Designing a Focused Visual State for Custom Silverlight Controls](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL7.html)

##### Failures <span class="sr-only">for Success Criterion 2.4.7</span>

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html)
-   [F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator](https://www.w3.org/WAI/WCAG21/Techniques/failures/F78.html)

Back to top

#### **2.4.8** Location

<span class="level-aaa">Level AAA</span>

Information about the user's location within a set of Web pages is available.

Understanding 2.4.8

Show

Hide techniques and failures for 2.4.8

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.8</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G65: Providing a breadcrumb trail](https://www.w3.org/WAI/WCAG21/Techniques/general/G65.html)
-   [G63: Providing a site map](https://www.w3.org/WAI/WCAG21/Techniques/general/G63.html)
-   [G128: Indicating current location within navigation bars](https://www.w3.org/WAI/WCAG21/Techniques/general/G128.html)
-   [G127: Identifying a Web page's relationship to a larger collection of Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G127.html)
    -   [H59: Using the link element and navigation tools](https://www.w3.org/WAI/WCAG21/Techniques/html/H59.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.4.8</span>

-   [PDF14: Providing running headers and footers in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF14.html)
-   [PDF17: Specifying consistent page numbering for PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF17.html)

Back to top

#### **2.4.9** Link Purpose (Link Only)

<span class="level-aaa">Level AAA</span>

A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.

Understanding 2.4.9

Show

Hide techniques and failures for 2.4.9

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.9</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [ARIA8: Using aria-label for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8.html)
-   [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html)
-   [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html)
-   [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG21/Techniques/html/H24.html)
-   [FLASH27: Providing button labels that describe the purpose of a button](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH27.html)
-   Allowing the user to choose short or long link text using one of the techniques below:
    -   [G189: Providing a control near the beginning of the Web page that changes the link text](https://www.w3.org/WAI/WCAG21/Techniques/general/G189.html)
    -   [SCR30: Using scripts to change the link text](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR30.html)
    -   [FLASH7: Using scripting to change control labels](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH7.html)
-   Providing a supplemental description of the purpose of a link using one of the following techniques:
    -   [C7: Using CSS to hide a portion of the link text](https://www.w3.org/WAI/WCAG21/Techniques/css/C7.html)
-   Semantically indicating links using one of the following techniques:
    -   [PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11.html)
    -   [PDF13: Providing replacement text using the /Alt entry for links in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF13.html)
    -   [SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL18.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.4.9</span>

-   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2.html)
-   [FLASH5: Combining adjacent image and text buttons for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH5.html)
-   [H33: Supplementing link text with the title attribute](https://www.w3.org/WAI/WCAG21/Techniques/html/H33.html)

##### Failures <span class="sr-only">for Success Criterion 2.4.9</span>

-   [F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.](https://www.w3.org/WAI/WCAG21/Techniques/failures/F84.html)
-   [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link](https://www.w3.org/WAI/WCAG21/Techniques/failures/F89.html)

Back to top

#### **2.4.10** Section Headings

<span class="level-aaa">Level AAA</span>

Section headings are used to organize the content.

*Note 1:* "Heading" is used in its general sense and includes titles and other ways to add a heading to different types of content.

*Note 2:* This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2.

Understanding 2.4.10

Show

Hide techniques and failures for 2.4.10

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.4.10</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G141: Organizing a page using headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G141.html)
-   [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69.html)

Back to top

### Guideline **2.5** – Input Modalities

Make it easier for users to operate functionality through various inputs beyond keyboard.

#### **2.5.1** Pointer Gestures

<span class="level-a">Level A</span><span class="newin21">(Added in 2.1)</span>

All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.

Understanding 2.5.1

Show

Hide techniques and failures for 2.5.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.5.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   GXXX: Do not rely on path-based gestures
-   GXXX: Do not rely on multipoint gestures
-   GXXX: Provide controls that do not require complex gestures and perform the same function as complex gestures
-   GXXX: Single-point activation for spatial positioning and manipulation

##### Failures <span class="sr-only">for Success Criterion 2.5.1</span>

-   Functionality can be operated by pointer input but not with single-point activation alone

Back to top

#### **2.5.2** Pointer Cancellation

<span class="level-a">Level A</span><span class="newin21">(Added in 2.1)</span>

For functionality that can be operated using a single pointer, at least one of the following is true:

------------------------------------------------------------------------

-   **No Down-Event:** The down-event of the pointer is not used to execute any part of the function;
-   **Abort or Undo:** Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;
-   **Up Reversal:** The up-event reverses any outcome of the preceding down-event;
-   **Essential:** Completing the function on the down-event is essential.

Understanding 2.5.2

Show

Hide techniques and failures for 2.5.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.5.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G210: Ensuring that drag-and-drop actions can be cancelled](https://www.w3.org/WAI/WCAG21/Techniques/general/G210.html)
-   [G211: Matching the accessible name to the visible label](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html)
-   @@ Touch events are only triggered when touch is removed from a control.

##### Failures <span class="sr-only">for Success Criterion 2.5.2</span>

-   @@ Failure of SC 2.5.3 due to activating a button on initial touch location rather than the final touch location.

Back to top

#### **2.5.3** Label in Name

<span class="level-a">Level A</span><span class="newin21">(Added in 2.1)</span>

For user interface components with labels that include text or images of text, the name contains the text that is presented visually.

Understanding 2.5.3

Show

Hide techniques and failures for 2.5.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.5.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG21/Techniques/general/G208.html)
-   [G211: Matching the accessible name to the visible label](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.5.3</span>

-   @@ If an icon has no accompanying text, consider using its hover text as its accessible name

##### Failures <span class="sr-only">for Success Criterion 2.5.3</span>

-   [F96: Failure due to the accessible name not containing the visible label text](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96.html)
-   @@ Accessible name contains the visible label text, but the words of the visible label are not in the same order as they are in the visible label text
-   @@ Accessible name contains the visible label text, but one or more other words are interspersed in the label

Back to top

#### **2.5.4** Motion Actuation

<span class="level-a">Level A</span><span class="newin21">(Added in 2.1)</span>

Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:

------------------------------------------------------------------------

-   **Supported Interface:** The motion is used to operate functionality through an accessibility supported interface;
-   **Essential:** The motion is essential for the function and doing so would invalidate the activity.

Understanding 2.5.4

Show

Hide techniques and failures for 2.5.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.5.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G213: Provide conventional controls and an application setting for motion activated input](https://www.w3.org/WAI/WCAG21/Techniques/general/G213.html)
-   GXXX: Supporting system level features which allow the user to disable motion actuation

##### Failures <span class="sr-only">for Success Criterion 2.5.4</span>

-   FXXX: Failure of Success Criterion 2.5.4 due to functionality that can only be activated via devicemotion events (e.g., shaking or tilting)
-   FXXX: Failure of Success Criterion 2.5.4 due to an inability to disable motion actuation
-   FXXX: Failure of Success Criterion 2.5.4 due to disrupting or disabling system level features which allow the user to disable motion actuation

Back to top

#### **2.5.5** Target Size

<span class="level-aaa">Level AAA</span><span class="newin21">(Added in 2.1)</span>

The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:

------------------------------------------------------------------------

-   **Equivalent:** The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;
-   **Inline:** The target is in a sentence or block of text;
-   **User Agent Control:** The size of the target is determined by the user agent and is not modified by the author;
-   **Essential:** A particular presentation of the target is essential to the information being conveyed.

Understanding 2.5.5

Show

Hide techniques and failures for 2.5.5

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.5.5</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   Ensuring that touch targets are at least 44 by 44 CSS pixels.
-   Providing a mechanism to change the size of the target independent of magnification.

##### Advisory Techniques <span class="sr-only">for Success Criterion 2.5.5</span>

-   Ensuring inline links provide sufficiently large activation target.

##### Failures <span class="sr-only">for Success Criterion 2.5.5</span>

-   Failure of success criterion 2.5.3 due to target size being less than 44 by 44 CSS pixels.
-   Failure of success criterion 2.5.3 due to target size of a paragraph that is also a link being less than 44 x 44 CSS pixels.

Back to top

#### **2.5.6** Concurrent Input Mechanisms

<span class="level-aaa">Level AAA</span><span class="newin21">(Added in 2.1)</span>

Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.

Understanding 2.5.6

Show

Hide techniques and failures for 2.5.6

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 2.5.6</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   @@ Only using high-level, input-agnostic event handlers (focus, blur, click) in Javascript (operating systems/UAs fire these events for all input mechanisms).

##### Failures <span class="sr-only">for Success Criterion 2.5.6</span>

-   [F98: Failure due to interactions being limited to touch-only on touchscreen devices](https://www.w3.org/WAI/WCAG21/Techniques/failures/F98.html)

Back to top

**Principle 3** – Understandable
--------------------------------

Information and the operation of the user interface must be understandable.

### Guideline **3.1** – Readable

Make text content readable and understandable.

#### **3.1.1** Language of Page

<span class="level-a">Level A</span>

The default human language of each Web page can be programmatically determined.

Understanding 3.1.1

Show

Hide techniques and failures for 3.1.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.1.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html)
-   [FLASH13: Using HTML language attributes to specify language in Flash content](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH13.html)
-   [PDF16: Setting the default language using the /Lang entry in the document catalog of a PDF document](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF16.html)
-   [PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF19.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.1.1</span>

-   [SVR5: Specifying the default language in the HTTP header](https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR5.html)

Back to top

#### **3.1.2** Language of Parts

<span class="level-aa">Level AA</span>

The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.

Understanding 3.1.2

Show

Hide techniques and failures for 3.1.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.1.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58.html)
-   [FLASH13: Using HTML language attributes to specify language in Flash content](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH13.html)
-   [PDF19: Specifying the language for a passage or phrase with the Lang entry in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF19.html)
-   [SL4: Declaring Discrete Silverlight Objects to Specify Language Parts in the HTML DOM](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL4.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.1.2</span>

-   [SL27: Using Language/Culture Properties as Exposed by Silverlight Applications and Assistive Technologies](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL27.html)

Back to top

#### **3.1.3** Unusual Words

<span class="level-aaa">Level AAA</span>

A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.

Understanding 3.1.3

Show

Hide techniques and failures for 3.1.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.1.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If the word or phrase has a unique meaning within the Web page:

-   [G101: Providing the definition of a word or phrase used in an unusual or restricted way](https://www.w3.org/WAI/WCAG21/Techniques/general/G101.html)
    -   [G55: Linking to definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G55.html)
        -   [H40: Using description lists](https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html)
        -   [H60: Using the link element to link to a glossary](https://www.w3.org/WAI/WCAG21/Techniques/html/H60.html)
    -   [G112: Using inline definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G112.html)
        -   [H54: Using the dfn element to identify the defining instance of a word](https://www.w3.org/WAI/WCAG21/Techniques/html/H54.html)
-   [G101: Providing the definition of a word or phrase used in an unusual or restricted way](https://www.w3.org/WAI/WCAG21/Techniques/general/G101.html)
    -   [G55: Linking to definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G55.html)
        -   [H40: Using description lists](https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html)
        -   [H60: Using the link element to link to a glossary](https://www.w3.org/WAI/WCAG21/Techniques/html/H60.html)
    -   [G62: Providing a glossary](https://www.w3.org/WAI/WCAG21/Techniques/general/G62.html)
    -   [G70: Providing a function to search an online dictionary](https://www.w3.org/WAI/WCAG21/Techniques/general/G70.html)

###### Situation B: If the word or phrase means different things within the same Web page:

-   [G101: Providing the definition of a word or phrase used in an unusual or restricted way](https://www.w3.org/WAI/WCAG21/Techniques/general/G101.html)
    -   [G55: Linking to definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G55.html)
        -   [H40: Using description lists](https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html)
        -   [H60: Using the link element to link to a glossary](https://www.w3.org/WAI/WCAG21/Techniques/html/H60.html)
    -   [G112: Using inline definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G112.html)
        -   [H54: Using the dfn element to identify the defining instance of a word](https://www.w3.org/WAI/WCAG21/Techniques/html/H54.html)

Back to top

#### **3.1.4** Abbreviations

<span class="level-aaa">Level AAA</span>

A mechanism for identifying the expanded form or meaning of abbreviations is available.

Understanding 3.1.4

Show

Hide techniques and failures for 3.1.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.1.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If the abbreviation has only one meaning within the Web page:

-   [G102: Providing the expansion or explanation of an abbreviation](https://www.w3.org/WAI/WCAG21/Techniques/general/G102.html)
    -   [G97: Providing the first use of an abbreviation immediately before or after the expanded form](https://www.w3.org/WAI/WCAG21/Techniques/general/G97.html)
    -   [G55: Linking to definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G55.html)
    -   [H28: Providing definitions for abbreviations by using the abbr element](https://www.w3.org/WAI/WCAG21/Techniques/html/H28.html)
    -   [PDF8: Providing definitions for abbreviations via an E entry for a structure element](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF8.html)
-   [G102: Providing the expansion or explanation of an abbreviation](https://www.w3.org/WAI/WCAG21/Techniques/general/G102.html)
    -   [G55: Linking to definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G55.html)
    -   [G62: Providing a glossary](https://www.w3.org/WAI/WCAG21/Techniques/general/G62.html)
    -   [H60: Using the link element to link to a glossary](https://www.w3.org/WAI/WCAG21/Techniques/html/H60.html)
    -   [G70: Providing a function to search an online dictionary](https://www.w3.org/WAI/WCAG21/Techniques/general/G70.html)
    -   [H28: Providing definitions for abbreviations by using the abbr element](https://www.w3.org/WAI/WCAG21/Techniques/html/H28.html)
    -   [PDF8: Providing definitions for abbreviations via an E entry for a structure element](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF8.html)

###### Situation B: If the abbreviation means different things within the same Web page:

-   [G102: Providing the expansion or explanation of an abbreviation](https://www.w3.org/WAI/WCAG21/Techniques/general/G102.html)
    -   [G55: Linking to definitions](https://www.w3.org/WAI/WCAG21/Techniques/general/G55.html)
    -   [H28: Providing definitions for abbreviations by using the abbr element](https://www.w3.org/WAI/WCAG21/Techniques/html/H28.html)
    -   [PDF8: Providing definitions for abbreviations via an E entry for a structure element](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF8.html)

Back to top

#### **3.1.5** Reading Level

<span class="level-aaa">Level AAA</span>

When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.

Understanding 3.1.5

Show

Hide techniques and failures for 3.1.5

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.1.5</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G86: Providing a text summary that can be understood by people with lower secondary education level reading ability](https://www.w3.org/WAI/WCAG21/Techniques/general/G86.html)
-   [G103: Providing visual illustrations, pictures, and symbols to help explain ideas, events, and processes](https://www.w3.org/WAI/WCAG21/Techniques/general/G103.html)
-   [G79: Providing a spoken version of the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G79.html)
-   [G153: Making the text easier to read](https://www.w3.org/WAI/WCAG21/Techniques/general/G153.html)
-   [G160: Providing sign language versions of information, ideas, and processes that must be understood in order to use the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G160.html)

Back to top

#### **3.1.6** Pronunciation

<span class="level-aaa">Level AAA</span>

A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.

Understanding 3.1.6

Show

Hide techniques and failures for 3.1.6

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.1.6</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G120: Providing the pronunciation immediately following the word](https://www.w3.org/WAI/WCAG21/Techniques/general/G120.html)
-   [G121: Linking to pronunciations](https://www.w3.org/WAI/WCAG21/Techniques/general/G121.html)
-   [G62: Providing a glossary](https://www.w3.org/WAI/WCAG21/Techniques/general/G62.html)
-   [G163: Using standard diacritical marks that can be turned off](https://www.w3.org/WAI/WCAG21/Techniques/general/G163.html)
-   [H62: Using the ruby element](https://www.w3.org/WAI/WCAG21/Techniques/html/H62.html)

Back to top

### Guideline **3.2** – Predictable

Make Web pages appear and operate in predictable ways.

#### **3.2.1** On Focus

<span class="level-a">Level A</span>

When any user interface component receives focus, it does not initiate a change of context.

Understanding 3.2.1

Show

Hide techniques and failures for 3.2.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.2.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G107: Using "activate" rather than "focus" as a trigger for changes of context](https://www.w3.org/WAI/WCAG21/Techniques/general/G107.html)

<!-- -->

-   *Note:* A change of content is not always a change of context. This success criterion is automatically met if changes in content are not also changes of context.

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.2.1</span>

-   [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html)
-   [G201: Giving users advanced warning when opening a new window](https://www.w3.org/WAI/WCAG21/Techniques/general/G201.html)

##### Failures <span class="sr-only">for Success Criterion 3.2.1</span>

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html)

Back to top

#### **3.2.2** On Input

<span class="level-a">Level A</span>

Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.

Understanding 3.2.2

Show

Hide techniques and failures for 3.2.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.2.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G80: Providing a submit button to initiate a change of context](https://www.w3.org/WAI/WCAG21/Techniques/general/G80.html)
    -   [H32: Providing submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H32.html)
    -   [H84: Using a button with a select element to perform an action](https://www.w3.org/WAI/WCAG21/Techniques/html/H84.html)
    -   [FLASH4: Providing submit buttons in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH4.html)
    -   [PDF15: Providing submit buttons with the submit-form action in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF15.html)
    -   [SL10: Implementing a Submit-Form Pattern in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL10.html)
-   [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](https://www.w3.org/WAI/WCAG21/Techniques/general/G13.html)
-   [SCR19: Using an onchange event on a select element without causing a change of context](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR19.html)

<!-- -->

-   *Note:* A change of content is not always a change of context. This success criterion is automatically met if changes in content are not also changes of context.

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.2.2</span>

-   [G201: Giving users advanced warning when opening a new window](https://www.w3.org/WAI/WCAG21/Techniques/general/G201.html)

##### Failures <span class="sr-only">for Success Criterion 3.2.2</span>

-   [F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and given a value](https://www.w3.org/WAI/WCAG21/Techniques/failures/F36.html)
-   [F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed](https://www.w3.org/WAI/WCAG21/Techniques/failures/F37.html)

Back to top

#### **3.2.3** Consistent Navigation

<span class="level-aa">Level AA</span>

Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

Understanding 3.2.3

Show

Hide techniques and failures for 3.2.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.2.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G61: Presenting repeated components in the same relative order each time they appear](https://www.w3.org/WAI/WCAG21/Techniques/general/G61.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.2.3</span>

-   [PDF14: Providing running headers and footers in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF14.html)
-   [PDF17: Specifying consistent page numbering for PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF17.html)

##### Failures <span class="sr-only">for Success Criterion 3.2.3</span>

-   [F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages](https://www.w3.org/WAI/WCAG21/Techniques/failures/F66.html)

Back to top

#### **3.2.4** Consistent Identification

<span class="level-aa">Level AA</span>

Components that have the same functionality within a set of Web pages are identified consistently.

Understanding 3.2.4

Show

Hide techniques and failures for 3.2.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.2.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   <span class="filter-tech-general"> [G197: Using labels, names, and text alternatives consistently for content that has the same functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G197.html) </span>

<!-- -->

-   *Note 1:* Text alternatives that are “consistent” are not always “identical.” For instance, you may have an graphical arrow at the bottom of a Web page that links to the next Web page. The text alternative may say “Go to page 4.” Naturally, it would not be appropriate to repeat this exact text alternative on the next Web page. It would be more appropriate to say “Go to page 5”. Although these text alternatives would not be identical, they would be consistent, and therefore would satisfy this Success Criterion.
-   *Note 2:* A single non-text-content-item may be used to serve different functions. In such cases, different text alternatives are necessary and should be used. Examples can be commonly found with the use of icons such as check marks, cross marks, and traffic signs. Their functions can be different depending on the context of the Web page. A check mark icon may function as “approved”, “completed”, or “included”, to name a few, depending on the situation. Using “check mark” as text alternative across all Web pages does not help users understand the function of the icon. Different text alternatives can be used when the same non-text content serves multiple functions.

##### Failures <span class="sr-only">for Success Criterion 3.2.4</span>

-   [F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages](https://www.w3.org/WAI/WCAG21/Techniques/failures/F31.html)

Back to top

#### **3.2.5** Change on Request

<span class="level-aaa">Level AAA</span>

Changes of context are initiated only by user request or a mechanism is available to turn off such changes.

Understanding 3.2.5

Show

Hide techniques and failures for 3.2.5

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.2.5</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If the Web page allows automatic updates:

-   [G76: Providing a mechanism to request an update of the content instead of updating automatically](https://www.w3.org/WAI/WCAG21/Techniques/general/G76.html)

###### Situation B: If automatic redirects are possible:

-   [SVR1: Implementing automatic redirects on the server side instead of on the client side](https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR1.html)
-   [G110: Using an instant client-side redirect](https://www.w3.org/WAI/WCAG21/Techniques/general/G110.html)
    -   [H76: Using meta refresh to create an instant client-side redirect](https://www.w3.org/WAI/WCAG21/Techniques/html/H76.html)

###### Situation C: If the Web page uses pop-up windows:

-   Including pop-up windows using one of the following techniques:
    -   [H83: Using the target attribute to open a new window on user request and indicating this in link text](https://www.w3.org/WAI/WCAG21/Techniques/html/H83.html)
    -   [SCR24: Using progressive enhancement to open new windows on user request](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR24.html)

###### Situation D: If using an onchange event on a select element:

-   [SCR19: Using an onchange event on a select element without causing a change of context](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR19.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.2.5</span>

-   [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html)

##### Failures <span class="sr-only">for Success Criterion 3.2.5</span>

-   [F60: Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field](https://www.w3.org/WAI/WCAG21/Techniques/failures/F60.html)
-   [F61: Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content](https://www.w3.org/WAI/WCAG21/Techniques/failures/F61.html)
-   [F9: Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element](https://www.w3.org/WAI/WCAG21/Techniques/failures/F9.html)
-   [F22: Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user](https://www.w3.org/WAI/WCAG21/Techniques/failures/F22.html)
-   [F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded](https://www.w3.org/WAI/WCAG21/Techniques/failures/F52.html)
-   [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page](https://www.w3.org/WAI/WCAG21/Techniques/failures/F41.html)

Back to top

### Guideline **3.3** – Input Assistance

Help users avoid and correct mistakes.

#### **3.3.1** Error Identification

<span class="level-a">Level A</span>

If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.

Understanding 3.3.1

Show

Hide techniques and failures for 3.3.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.3.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If a form contains fields for which information from the user is mandatory.

-   [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83.html)
-   [ARIA21: Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html)
-   [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18.html)
-   [PDF5: Indicating required form controls in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5.html)
-   [SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35.html)

###### Situation B: If information provided by the user is required to be in a specific data format or of certain values.

-   [ARIA18: Using aria-alertdialog to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18.html)
-   [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19.html)
-   [ARIA21: Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html)
-   [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG21/Techniques/general/G84.html)
-   [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85.html)
-   [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18.html)
-   [SCR32: Providing client-side validation and adding error text via the DOM](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32.html)
-   [FLASH12: Providing client-side validation and adding error text via the accessible description](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH12.html)
-   [PDF22: Indicating when user input falls outside the required format or values in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22.html)
-   [SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.3.1</span>

-   [G139: Creating a mechanism that allows users to jump to errors](https://www.w3.org/WAI/WCAG21/Techniques/general/G139.html)
-   [G199: Providing success feedback when data is submitted successfully](https://www.w3.org/WAI/WCAG21/Techniques/general/G199.html)

Back to top

#### **3.3.2** Labels or Instructions

<span class="level-a">Level A</span>

Labels or instructions are provided when content requires user input.

Understanding 3.3.2

Show

Hide techniques and failures for 3.3.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.3.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131.html)
    -   [ARIA1: Using the aria-describedby property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1.html)
    -   [ARIA9: Using aria-labelledby to concatenate a label from several text nodes](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9.html)
    -   [ARIA17: Using grouping roles to identify related form controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17.html)
    -   [G89: Providing expected data format and example](https://www.w3.org/WAI/WCAG21/Techniques/general/G89.html)
    -   [G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](https://www.w3.org/WAI/WCAG21/Techniques/general/G184.html)
    -   [G162: Positioning labels to maximize predictability of relationships](https://www.w3.org/WAI/WCAG21/Techniques/general/G162.html)
    -   [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83.html)
    -   [H90: Indicating required form controls using label or legend](https://www.w3.org/WAI/WCAG21/Techniques/html/H90.html)
    -   [FLASH10: Indicating required form controls in Flash](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH10.html)
    -   [PDF5: Indicating required form controls in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5.html)
-   [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html)
-   [FLASH32: Using auto labeling to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH32.html)
-   [FLASH29: Setting the label property for form components](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH29.html)
-   [FLASH25: Labeling a form control by setting its accessible name](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH25.html)
-   [PDF10: Providing labels for interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html)
-   [SL26: Using LabeledBy to Associate Labels and Targets in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL26.html)
-   [H71: Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H71.html)
-   [FLASH8: Adding a group name to the accessible name of a form control](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH8.html)
-   [SL8: Displaying HelpText in Silverlight User Interfaces](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL8.html)
-   [G167: Using an adjacent button to label the purpose of a field](https://www.w3.org/WAI/WCAG21/Techniques/general/G167.html)

<!-- -->

-   *Note:* The techniques at the end of the above list should be considered “last resort” and only used when the other techniques cannot be applied to the page. The earlier techniques are preferred because they increase accessibility to a wider user group.

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.3.2</span>

-   [G13: Describing what will happen before a change to a form control that causes a change of context to occur is made](https://www.w3.org/WAI/WCAG21/Techniques/general/G13.html)
-   [SL19: Providing User Instructions With AutomationProperties.HelpText in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL19.html)

##### Failures <span class="sr-only">for Success Criterion 3.3.2</span>

-   [F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label](https://www.w3.org/WAI/WCAG21/Techniques/failures/F82.html)

Back to top

#### **3.3.3** Error Suggestion

<span class="level-aa">Level AA</span>

If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.

Understanding 3.3.3

Show

Hide techniques and failures for 3.3.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.3.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If a mandatory field contains no information:

-   [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83.html)
-   [ARIA2: Identifying a required field with the aria-required property](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2.html)
-   [PDF5: Indicating required form controls in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5.html)
-   [SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35.html)

###### Situation B: If information for a field is required to be in a specific data format:

-   [ARIA18: Using aria-alertdialog to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18.html)
-   [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85.html)
-   [G177: Providing suggested correction text](https://www.w3.org/WAI/WCAG21/Techniques/general/G177.html)
-   [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18.html)
-   [SCR32: Providing client-side validation and adding error text via the DOM](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32.html)
-   [FLASH12: Providing client-side validation and adding error text via the accessible description](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH12.html)
-   [PDF22: Indicating when user input falls outside the required format or values in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22.html)

###### Situation C: Information provided by the user is required to be one of a limited set of values:

-   [ARIA18: Using aria-alertdialog to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18.html)
-   [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG21/Techniques/general/G84.html)
-   [G177: Providing suggested correction text](https://www.w3.org/WAI/WCAG21/Techniques/general/G177.html)
-   [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18.html)
-   [SCR32: Providing client-side validation and adding error text via the DOM](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32.html)
-   [FLASH12: Providing client-side validation and adding error text via the accessible description](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH12.html)
-   [PDF22: Indicating when user input falls outside the required format or values in PDF forms](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.3.3</span>

-   [G139: Creating a mechanism that allows users to jump to errors](https://www.w3.org/WAI/WCAG21/Techniques/general/G139.html)
-   [G199: Providing success feedback when data is submitted successfully](https://www.w3.org/WAI/WCAG21/Techniques/general/G199.html)
-   [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18.html)

Back to top

#### **3.3.4** Error Prevention (Legal, Financial, Data)

<span class="level-aa">Level AA</span>

For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:

------------------------------------------------------------------------

-   **Reversible:** Submissions are reversible.
-   **Checked:** Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
-   **Confirmed:** A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

Understanding 3.3.4

Show

Hide techniques and failures for 3.3.4

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.3.4</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If an application causes a legal transaction to occur, such as making a purchase or submitting an income tax return:

-   [G164: Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request](https://www.w3.org/WAI/WCAG21/Techniques/general/G164.html)
-   [G98: Providing the ability for the user to review and correct answers before submitting](https://www.w3.org/WAI/WCAG21/Techniques/general/G98.html)
-   [G155: Providing a checkbox in addition to a submit button](https://www.w3.org/WAI/WCAG21/Techniques/general/G155.html)

###### Situation B: If an action causes information to be deleted:

-   [G99: Providing the ability to recover deleted information](https://www.w3.org/WAI/WCAG21/Techniques/general/G99.html)
-   [G168: Requesting confirmation to continue with selected action](https://www.w3.org/WAI/WCAG21/Techniques/general/G168.html)
-   [G155: Providing a checkbox in addition to a submit button](https://www.w3.org/WAI/WCAG21/Techniques/general/G155.html)

###### Situation C: If the Web page includes a testing application:

-   [G98: Providing the ability for the user to review and correct answers before submitting](https://www.w3.org/WAI/WCAG21/Techniques/general/G98.html)
-   [G168: Requesting confirmation to continue with selected action](https://www.w3.org/WAI/WCAG21/Techniques/general/G168.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.3.4</span>

-   [SCR18: Providing client-side validation and alert](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18.html)
-   [SL35: Using the Validation and ValidationSummary APIs to Implement Client Side Forms Validation in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL35.html)
-   [G199: Providing success feedback when data is submitted successfully](https://www.w3.org/WAI/WCAG21/Techniques/general/G199.html)

Back to top

#### **3.3.5** Help

<span class="level-aaa">Level AAA</span>

Context-sensitive help is available.

Understanding 3.3.5

Show

Hide techniques and failures for 3.3.5

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 3.3.5</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If a form requires text input:

-   [G71: Providing a help link on every Web page](https://www.w3.org/WAI/WCAG21/Techniques/general/G71.html)
-   [G193: Providing help by an assistant in the Web page](https://www.w3.org/WAI/WCAG21/Techniques/general/G193.html)
-   [G194: Providing spell checking and suggestions for text input](https://www.w3.org/WAI/WCAG21/Techniques/general/G194.html)
-   [G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](https://www.w3.org/WAI/WCAG21/Techniques/general/G184.html)

###### Situation B: If a form requires text input in an expected data format:

-   [G89: Providing expected data format and example](https://www.w3.org/WAI/WCAG21/Techniques/general/G89.html)
-   [G184: Providing text instructions at the beginning of a form or set of fields that describes the necessary input](https://www.w3.org/WAI/WCAG21/Techniques/general/G184.html)

##### Advisory Techniques <span class="sr-only">for Success Criterion 3.3.5</span>

-   [H89: Using the title attribute to provide context-sensitive help](https://www.w3.org/WAI/WCAG21/Techniques/html/H89.html)

Back to top

#### **3.3.6** Error Prevention (All)

<span class="level-aaa">Level AAA</span>

For Web pages that require the user to submit information, at least one of the following is true:

------------------------------------------------------------------------

-   **Reversible:** Submissions are reversible.
-   **Checked:** Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
-   **Confirmed:** A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

Understanding 3.3.6

Back to top

**Principle 4** – Robust
------------------------

Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.

### Guideline **4.1** – Compatible

Maximize compatibility with current and future user agents, including assistive technologies.

#### **4.1.1** Parsing

<span class="level-a">Level A</span>

In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

*Note 1:* Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

Understanding 4.1.1

Show

Hide techniques and failures for 4.1.1

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 4.1.1</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

-   [G134: Validating Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G134.html)
-   [G192: Fully conforming to specifications](https://www.w3.org/WAI/WCAG21/Techniques/general/G192.html)
-   [H88: Using HTML according to spec](https://www.w3.org/WAI/WCAG21/Techniques/html/H88.html)
-   Ensuring that Web pages can be parsed by using one of the following techniques:
    -   <span class="filter-tech-html"> [H74: Ensuring that opening and closing tags are used according to specification](https://www.w3.org/WAI/WCAG21/Techniques/html/H74.html) **AND**</span> <span class="filter-tech-html"> [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG21/Techniques/html/H93.html) **AND**</span> <span class="filter-tech-html"> [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/WAI/WCAG21/Techniques/html/H94.html) </span>
    -   [H75: Ensuring that Web pages are well-formed](https://www.w3.org/WAI/WCAG21/Techniques/html/H75.html)
-   [SL33: Using Well-Formed XAML to Define a Silverlight User Interface](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL33.html)

##### Failures <span class="sr-only">for Success Criterion 4.1.1</span>

-   [F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup](https://www.w3.org/WAI/WCAG21/Techniques/failures/F70.html)
-   [F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID](https://www.w3.org/WAI/WCAG21/Techniques/failures/F77.html)

Back to top

#### **4.1.2** Name, Role, Value

<span class="level-a">Level A</span>

For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.

*Note 1:* This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.

Understanding 4.1.2

Show

Hide techniques and failures for 4.1.2

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 4.1.2</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If using a standard user interface component in a markup language (e.g., HTML):

-   [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14.html)
-   [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16.html)
-   [G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes](https://www.w3.org/WAI/WCAG21/Techniques/general/G108.html)
    -   [H91: Using HTML form controls and links](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html)
    -   [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44.html)
    -   [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64.html)
    -   [H65: Using the title attribute to identify form controls when the label element cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/html/H65.html)
    -   [H88: Using HTML according to spec](https://www.w3.org/WAI/WCAG21/Techniques/html/H88.html)

###### Situation B: If using script or code to re-purpose a standard user interface component in a markup language:

-   Exposing the names and roles, allowing user-settable properties to be directly set, and providing notification of changes using one of the following techniques:
    -   [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16.html)

###### Situation C: If using a standard user interface component in a programming technology:

-   [G135: Using the accessibility API features of a technology to expose names and notification of changes](https://www.w3.org/WAI/WCAG21/Techniques/general/G135.html)
    -   [FLASH32: Using auto labeling to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH32.html)
    -   [FLASH29: Setting the label property for form components](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH29.html)
    -   [FLASH30: Specifying accessible names for image buttons](https://www.w3.org/WAI/WCAG21/Techniques/flash/FLASH30.html)
    -   [PDF10: Providing labels for interactive form controls in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html)
    -   [PDF12: Providing name, role, value information for form fields in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12.html)
    -   [SL26: Using LabeledBy to Associate Labels and Targets in Silverlight](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL26.html)
    -   [SL32: Using Silverlight Text Elements for Appropriate Accessibility Role](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL32.html)

###### Situation D: If creating your own user interface component in a programming language:

-   [G10: Creating components using a technology that supports the accessibility notification of changes](https://www.w3.org/WAI/WCAG21/Techniques/general/G10.html)
    -   [ARIA4: Using a WAI-ARIA role to expose the role of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4.html)
    -   [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5.html)
    -   [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16.html)
    -   [SL6: Defining a UI Automation Peer for a Custom Silverlight Control](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL6.html)
    -   [SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL18.html)
    -   [SL20: Relying on Silverlight AutomationPeer Behavior to Set AutomationProperties.Name](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL20.html)
    -   [SL30: Using Silverlight Control Compositing and AutomationProperties.Name](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL30.html)

##### Failures <span class="sr-only">for Success Criterion 4.1.2</span>

-   [F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control](https://www.w3.org/WAI/WCAG21/Techniques/failures/F59.html)
-   [F15: Failure of Success Criterion 4.1.2 due to implementing custom controls that do not use an accessibility API for the technology, or do so incompletely](https://www.w3.org/WAI/WCAG21/Techniques/failures/F15.html)
-   [F20: Failure of Success Criterion 1.1.1 and 4.1.2 due to not updating text alternatives when changes to non-text content occur](https://www.w3.org/WAI/WCAG21/Techniques/failures/F20.html)
-   [F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name](https://www.w3.org/WAI/WCAG21/Techniques/failures/F68.html)
-   [F79: Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available](https://www.w3.org/WAI/WCAG21/Techniques/failures/F79.html)
-   [F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number](https://www.w3.org/WAI/WCAG21/Techniques/failures/F86.html)
-   [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link](https://www.w3.org/WAI/WCAG21/Techniques/failures/F89.html)

Back to top

#### **4.1.3** Status Messages

<span class="level-aa">Level AA</span><span class="newin21">(Added in 2.1)</span>

In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.

Understanding 4.1.3

Show

Hide techniques and failures for 4.1.3

Sufficient Advisory Failures

##### Sufficient Techniques <span class="sr-only">for Success Criterion 4.1.3</span>

Note: Other techniques may also be sufficient if they meet the success criterion. See <a href="https://www.w3.org/TR/2014/NOTE-UNDERSTANDING-WCAG20-20140916/understanding-techniques.html#understanding-techniques" class="abouttech">Understanding Techniques.</a>

###### Situation A: If a status message advises on the success or results of an action, or the state of an application:

-   [ARIA22: Using role=status to present status messages](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22.html)
    -   [G199: Providing success feedback when data is submitted successfully](https://www.w3.org/WAI/WCAG21/Techniques/general/G199.html)

###### Situation B: If a status message conveys a suggestion, or a warning on the existence of an error:

-   [ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19.html)
    -   [G83: Providing text descriptions to identify required fields that were not completed](https://www.w3.org/WAI/WCAG21/Techniques/general/G83.html)
    -   [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG21/Techniques/general/G84.html)
    -   [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85.html)
    -   [G177: Providing suggested correction text](https://www.w3.org/WAI/WCAG21/Techniques/general/G177.html)
    -   [G194: Providing spell checking and suggestions for text input](https://www.w3.org/WAI/WCAG21/Techniques/general/G194.html)

###### Situation C: If a status message conveys information on the progress of a process:

-   [ARIA23: Using role=log to identify sequential information updates](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23.html)
-   Using role="progressbar" (future link)
-   <span class="filter-tech-wai-aria"> [ARIA22: Using role=status to present status messages](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22.html) **AND**</span> <span class="filter-tech-general"> [G193: Providing help by an assistant in the Web page](https://www.w3.org/WAI/WCAG21/Techniques/general/G193.html) </span>

##### Advisory Techniques <span class="sr-only">for Success Criterion 4.1.3</span>

-   Using aria-live regions with chat clients (future link)
-   Using role="marquee" (future link)
-   Using role="timer" (future link)
-   [ARIA18: Using aria-alertdialog to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18.html)
-   [SCR14: Using scripts to make nonessential alerts optional](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR14.html)

##### Failures <span class="sr-only">for Success Criterion 4.1.3</span>

-   Using role="alert" or aria-live="assertive" on content which is not important and time-sensitive (future link)
-   Using a visibilitychange event to hide or display a document without switching the document's live regions between active and inactive (future link)

Back to top

------------------------------------------------------------------------

Contribute

We welcome feedback and suggestions:

-   This resource — [report bugs](https://github.com/w3c/wai-wcag-quickref/issues/) and contribute directly to the [Github repository](https://github.com/w3c/wai-wcag-quickref)
-   Techniques — contribute [new WCAG techniques](https://www.w3.org/WAI/GL/WCAG20/TECHS-SUBMIT/)
-   Other — contribute corrections, updates, or new information related to techniques, failures, or other WCAG documentation, per the [instructions for commenting](https://www.w3.org/WAI/WCAG20/comments/)

------------------------------------------------------------------------

Document Information
--------------------

**Status:** Updated 04 Oct 2019. Version 3.5.1.  
Lead Developer: [Eric Eggert](https://www.w3.org/People/yatil/) (W3C). Project Lead: [Shadi Abou-Zahra](https://www.w3.org/People/shadi/) (W3C).  
Previous editors and developers: Gregg Vanderheiden, Loretta Guarino Reid, Ben Caldwell, [Shawn Lawton Henry](https://www.w3.org/People/Shawn/), Gez Lemon.  
The 2019 redesign was developed by the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/)) and the Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/)), with support from the [WAI-DEV project](https://www.w3.org/WAI/DEV/), a project of the European Commission IST Programme.

-   [WAI Site Map](https://www.w3.org/WAI/sitemap.html)
-   [Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)
-   [Search](https://www.w3.org/WAI/search.php)
-   [Contacting WAI](/WAI/contacts)

**Feedback welcome to [wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=QuickRef_Redesign)** (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

Copyright © 2019 W3C <sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
