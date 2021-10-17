-   [Contents](. "Table of Contents")
-   [GL: Seizures and Physical Reactions](seizures-and-physical-reactions)
-   [Previous SC: Three Flashes](three-flashes)
-   [Next SC: Bypass Blocks](bypass-blocks)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.3.3: Animation from Interactions
==================================================================

> Success Criterion [2.3.3 Animation from Interactions](https://www.w3.org/TR/WCAG21/#animation-from-interactions) (Level AAA): [Motion animation](#dfn-motion-animation) triggered by interaction can be disabled, unless the animation is [essential](#dfn-essential) to the functionality or the information being conveyed.

Intent
------

The intent of this Success Criterion is to allow users to prevent animation from being displayed on Web pages. Some users experience distraction or nausea from animated content. For example, if scrolling a page causes elements to move (other than the essential movement associated with scrolling) it can trigger vestibular disorders. Vestibular (inner ear) disorder reactions include dizziness, nausea and headaches. Another animation that is often non-essential is parallax scrolling. Parallax scrolling occurs when backgrounds move at a different rate to foregrounds. Animation that is essential to the functionality or information of a web page is allowed by this Success Criterion.

"Animation from interactions" applies when a user’s interaction initiates non-essential animation. In contrast, [2.2.2 Pause, Stop, Hide](pause-stop-hide.html) applies when the web page initiates animation.

Note

The impact of animation on people with vestibular disorders can be quite severe. Triggered reactions include nausea, migraine headaches, and potentially needing bed rest to recover.

**How can a website reduce the chances of triggering a vestibular disorder?** Choose any one of the following solutions. Avoid using unnecessary animation. Provide a control for users to turn off non-essential animations from user interaction. Take advantage of the reduce motion feature in the user-agent or operating system.

**What about movement caused by a user scrolling a page?** Moving new content into the viewport is essential for scrolling. The user controls the essential scrolling movement so it is allowed. Only add non-essential animation to the scrolling interaction in a responsible way. Always give users the ability to turn off unnecessary movement.

Benefits
--------

-   **Vestibular Disorder**
    -   People with vestibular disorders need control over movement triggered by interactions. Non-essential movement can trigger vestibular disorder reactions. Vestibular (inner ear) disorder reactions include distraction, dizziness, headaches and nausea.
    -   Persona Quote: "Stop that extra movement! You are making me so dizzy I cannot concentrate. Now I have to turn off my computer and go lie down."

Examples
--------

-   **Parallax scrolling with option to turn off unnecessary motion globally:**
    -   A site includes extra animations when the user scrolls. Decorative elements move in and out of view horizontally when the essential page content is scrolled vertically. A control at the top of each page allows the user to turn off unnecessary animations. The ability to turn off non-essential animations is a site-wide setting.
-   **Transitions that support the reduce motion preference:**
    -   A site includes a non-essential transition when loading new content. The transition is a page-flipping animation that respects the reduce-motion CSS media query. When the user enables the reduce motion preference, the page-flipping animation is turned off.
-   **Essential animation:**
    -   A web application provides a feature to author animated sequences. As part of this tool the author needs to preview the animation.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Mozilla documentation for 'prefers-reduced-motion'](//developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
-   [Demonstration of 'prefers-reduced-motion' in Webkit](//webkit.org/blog-files/prefers-reduced-motion/prm.htm)
-   [An Introduction to the Reduced Motion Media Query](https://css-tricks.com/introduction-reduced-motion-media-query/)
-   [Designing Safer Web Animations for Motion Sensitivity](http://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
-   [**iOS:** Reduce Motion on iPhone, iPad or iPod touch](https://support.apple.com/en-gb/HT202655)
-   [**Mac:** Reduce Motion](https://apple.stackexchange.com/questions/253756/speed-up-mission-control-animations-in-macos-sierra)
-   [**Windows 10:** Reduce motion](//www.laptopmag.com/articles/disable-minimize-maximize-animations-windows-10)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   [C39: Using the CSS reduce-motion query to prevent motion](https://www.w3.org/WAI/WCAG21/Techniques/css/C39)
-   Gx: Allowing users to set a preference that prevents animation.

Key Terms
---------

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

motion animation

addition of steps between conditions to create the illusion of movement or to give a sense of a smooth transition

For example, an element which moves into place or changes size while appearing is considered to be animated. An element which appears instantly without transitioning is not using animation. Motion animation does not include changes of color, blurring or opacity.
