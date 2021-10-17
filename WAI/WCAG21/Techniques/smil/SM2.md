-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SM1](SM1)
-   [Next Technique: SM6](SM6)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Adding extended audio description in SMIL 2.0
=============================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Applies whenever SMIL 2.0 player is available

This technique relates to:

-   [Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded) (Sufficient when used with [G8: Providing a movie with extended audio descriptions](../general/G8))
-   [Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded) (Sufficient when used with [G8: Providing a movie with extended audio descriptions](../general/G8))
-   [Success Criterion 1.2.7: Extended Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded) (Sufficient when used with [G8: Providing a movie with extended audio descriptions](../general/G8))

Description
-----------

The purpose of this technique is to allow there to be more audio description than will fit into the gaps in the dialogue of the audio-visual material.

With SMIL 2.0 it is possible to specify that particular audio files be played at particular times, and that the program be frozen (paused) while the audio file is being played.

The effect is that the video appears to play through from end to end but freezes in places while a longer audio description is provided. It then continues automatically when the audio description is complete.

To turn the extended audio description on and off one could use script to switch back and forth between two SMIL scripts, one with and one without the extended audio description lines. Or script could be used to add or remove the extended audio description lines from the SMIL file so that the film clips would just play uninterrupted.

If scripting is not available then two versions of the SMIL file could be provided, one with and one without extended audio description.

Examples
--------

### Example 1: Video with extended audio description.

    <smil xmlns="https://www.w3.org/2001/SMIL20/Language"> 
    <head> 
    <layout> 
    <root-layout backgroundColor="black" height="266" width="320"/> 
    <region id="video" backgroundColor="black" top="26" left="0" 
    height="144" width="320"/> 
    </layout> 
    </head> 
    <body>     
    <excl> 
    <priorityClass peers="pause"> 
    <video src="movie.rm" region="video" title="video" alt="video" /> 
    <audio src="desc1.rm" begin="12.85s" alt="Description 1" /> 
    <audio src="desc2.rm" begin="33.71s" alt="Description 2" /> 
    <audio src="desc3.rm" begin="42.65s" alt="Description 3" /> 
    <audio src="desc4.rm" begin="59.80s" alt="Description 4" /> 
    </priorityClass> 
    </excl> 
    </body> 
         </smil> 

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Synchronized Multimedia Integration Language (SMIL 2.0)](https://www.w3.org/TR/SMIL/)
-   [Accessibility Features of SMIL](https://www.w3.org/TR/SMIL-access/)
-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)

Related Techniques
------------------

-   [G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player](https://www.w3.org/WAI/WCAG21/Techniques/general/G81)
-   [SM7: Providing audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7)
-   [SM11: Providing captions through synchronized text streams in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11)

Tests
-----

### Procedure

1.  Play file with extended audio description
2.  Check whether video freezes in places and plays extended audio description

### Expected Results

-   \#2 is true
