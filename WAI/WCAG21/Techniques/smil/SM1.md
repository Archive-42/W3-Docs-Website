-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SL35](../silverlight/SL35)
-   [Next Technique: SM2](SM2)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Adding extended audio description in SMIL 1.0
=============================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Applies whenever SMIL 1.0 player is available

This technique relates to:

-   [Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded) (Sufficient when used with [G8: Providing a movie with extended audio descriptions](../general/G8))
-   [Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded) (Sufficient when used with [G8: Providing a movie with extended audio descriptions](../general/G8))
-   [Success Criterion 1.2.7: Extended Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded) (Sufficient when used with [G8: Providing a movie with extended audio descriptions](../general/G8))

Description
-----------

The purpose of this technique is to allow there to be more audio description than will fit into the gaps in the dialogue of the audio-visual material.

With SMIL 1.0 there is no easy way to do this but it can be done by breaking the audio and video files up into a series of files that are played sequentially. Additional audio description is then played while the audio-visual program is frozen. The last frame of the video file is frozen so that it remains on screen while the audio file plays out.

The effect is that the video appears to play through from end to end but freezes in places while a longer audio description is provided. It then continues automatically when the audio description is complete.

To turn the extended audio description on and off one could use script to switch back and forth between two SMIL scripts, one with and one without the extended audio description lines. Or script could be used to add or remove the extended audio description lines from the SMIL file so that the film clips would just play sequentially.

If scripting is not available then two versions of the video could be provided, one with and one without extended audio descriptions.

Examples
--------

### Example 1: SMIL 1.0 Video with audio descriptions that pause the main media in 4 locations to allow extended audio description

       
    <?xml version="1.0" encoding="UTF-8"?>
    <smil xmlns:qt="http://www.apple.com/quicktime/resources/smilextensions" 
    xmlns="https://www.w3.org/TR/REC-smil" qt:time-slider="true">
      <head>
        <layout>
          <root-layout background-color="black" height="266" width="320"/>
          <region id="videoregion" background-color="black" top="26" left="0" 
          height="144" width="320"/>
        </layout>
      </head>
      <body>
      <par>
       <seq>
         <par>
           <video src="video.rm" region="videoregion" clip-begin="0s" clip-end="5.4" 
           dur="8.7" fill="freeze" alt="videoalt"/>   
           <audio src="no1.wav" begin="5.4" alt="audio alt"/>
         </par>
         <par>
           <video src="video.rm" region="videoregion" clip-begin="5.4" clip-end="24.1" 
           dur="20.3" fill="freeze" alt="videoalt"/>
           <audio src="no2.wav" begin="18.7" alt="audio alt"/>
         </par>
         <par>
           <video src="video.rm" region="videoregion" clip-begin="24.1" clip-end="29.6" 
           dur="7.7" fill="freeze" alt="videoalt"/>
           <audio src="no3.wav" begin="5.5" alt="audio alt"/>
         </par>
         <par>
           <video src="video.rm" region="videoregion" clip-begin="29.6" clip-end="34.5" 
           dur="5.7" fill="freeze" alt="videoalt"/>
           <audio src="no4.wav" begin="4.9" alt="audio alt"/>
         </par>
         <par>
           <video src="video.rm" region="videoregion" clip-begin="77.4" alt="video alt"/>
         </par>
       </seq>
      </par>
    </body>
    </smil>

The markup above is broken into five &lt;par&gt; segments. In each, there is a &lt;video&gt; and an &lt;audio&gt; tag (the last &lt;par&gt; has no &lt;audio&gt; tag intentionally). The convention with extended audio descriptions is that the main media pauses during the description. The way to make this happen in SMIL 1.0 is to set a "clip-begin" and "clip-end" which dictate the start and end of the video clip, and to set a duration for the clip that is longer than what is defined by the "clip-begin" and "clip-end". The fill="freeze" holds the last frame of the video during the extended description. The &lt;audio&gt; tag has a "`begin`" attribute with a value that is equal to the "clip-end" value of the preceding &lt;video&gt; tag.

To determine the values for "clip-begin," "clip-end", and "dur", find the start and end time of the portion of the video being described, and find out the total length of the extended audio description. The "clip-begin" and "clip-end" define their own values, but the "`dur`" value is the sum of the length of the extended description and the clip defined by the "clip-begin" and "clip-end". In the first &lt;par&gt;, the video clip starts at 0 seconds, ends at 5.4 seconds, and the description length is 3.3 seconds, so the "`dur`" value is 5.4s + 3.3s = 8.7s.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Synchronized Multimedia Integration Language (SMIL) 1.0](https://www.w3.org/TR/REC-smil/)
-   [Synchronized Multimedia Integration Language (SMIL 2.0)](https://www.w3.org/TR/SMIL/)
-   [Accessibility Features of SMIL](https://www.w3.org/TR/SMIL-access/)
-   [NCAM Rich Media Accessibility, Accessible SMIL Templates](http://ncam.wgbh.org/invent_build/web_multimedia/accessible-digital-media-guide/guideline-h-multimedia#techH12)

Related Techniques
------------------

-   [SM2: Adding extended audio description in SMIL 2.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2)
-   [SM6: Providing audio description in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6)
-   [G81: Providing a synchronized video of the sign language interpreter that can be displayed in a different viewport or overlaid on the image by the player](https://www.w3.org/WAI/WCAG21/Techniques/general/G81)
-   [SM11: Providing captions through synchronized text streams in SMIL 1.0](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11)

Tests
-----

### Procedure

1.  Play file with extended audio descriptions
2.  Play file with audio description
3.  Check whether video freezes in places and plays extended audio description

### Expected Results

-   \#3 is true
