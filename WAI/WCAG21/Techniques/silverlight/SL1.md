-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SVR5](../server-side-script/SVR5)
-   [Next Technique: SL2](SL2)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Accessing Alternate Audio Tracks in Silverlight Media
=====================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Microsoft Silverlight, versions 3 and greater
-   Silverlight managed programming model and Silverlight XAML

Note

Microsoft has stopped updating and distributing Silverlight, and authors are encouraged to use HTML for accessible web content.

This technique relates to:

-   [Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded) (Sufficient, together with [G78: Providing a second, user-selectable, audio track that includes audio descriptions](../general/G78))
-   [Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded) (Sufficient when used with [G173: Providing a version of a movie with audio descriptions](../general/G173))
-   [Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded) (Sufficient when used with [G8: Providing a movie with extended audio descriptions](../general/G8))
-   [Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded) (Sufficient, together with [G78: Providing a second, user-selectable, audio track that includes audio descriptions](../general/G78))

Description
-----------

The objective of this technique is to show how to access an alternate audio channel in a prepared media file that is played in a Silverlight `MediaElement`.

Silverlight supports media file formats that contains additional audio channels in synchronization, beyond the two tracks for stereo audio that are used by typical media player defaults. Silverlight provides a dedicated `AudioStreamIndex` API on `MediaElement`, so that the Silverlight application author can use Silverlight programming techniques to select which audio channel to play for the user. Silverlight control authors might label a UI control with text such as "Activate this button to listen to an audio-only version of the media presentation" so that the purpose of the media element control interface is clear to the user. That way the same media control can be used to present the media either as audio-video or as audio-only with alternate track depending on user preference at run time.

The media formats that are supported by Silverlight are documented on [MSDN](https://msdn.microsoft.com/en-us/library/cc189080(VS.95).aspx).

### Media encoding

The process of encoding the media with additional audio channels is not described in this technique because configuring and encoding audio channels for media formats is a technique for any usage of media in a computer application, not just a Silverlight-specific technique or a Web technology technique. For more information on one possible procedure for encoding the media in WMV format, see [Microsoft Expression Encoder Overview](http://go.microsoft.com/fwlink/?LinkID=321498). Often, Silverlight authors will receive the media from a third party, such as a video production facility, and are not directly involved with the encoding process. Silverlight authors should verify that the media they are using has alternate audio tracks encoded in it. If such tracks exist, Silverlight authors will need a track listing from the media producer to know which of the audio tracks is intended as the alternate audio. Other tracks might exist in the encoded media that provide language translations of the default audio, or that serve other purposes.

Examples
--------

### Example 1: Changing AudioStreamIndex

This example has a UI definition in XAML and interaction logic in C\#. In addition to the typical Play/Pause/Stop controls, this interface includes a Play Full-Description Audio button. Activating the button invokes a function that swaps the audio channels and plays an alternative synchronized audio channel that contains a composite full-description audio track.

The following is the basic UI in XAML. This example is deliberately simple and does not include `AutomationProperties`. Audio streams are identified by an index in a collection.

          <Grid x:Name="LayoutRoot" Background="White">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*"/>
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="*" />
                <RowDefinition Height="Auto" />
                <RowDefinition Height="20" />
            </Grid.RowDefinitions>
            <MediaElement x:Name="media" Source="/combined.wmv"
               Width="300" Height="300" 
               Grid.Column="0" Grid.Row="0" Grid.ColumnSpan="3"
               AutoPlay="false"
            />
            <Button Click="StopMedia" 
         Grid.Column="0" Grid.Row="1" Content="Stop" />
            <Button Click="PauseMedia" 
         Grid.Column="1" Grid.Row="1" Content="Pause" />
            <Button Click="PlayMedia" 
         Grid.Column="2" Grid.Row="1" Content="Play" />
            <Button Name="AltAudioBtn" Grid.Row="2" HorizontalAlignment="Left" Grid.ColumnSpan="2" 
            Click="AltAudioBtn_Click">Play Full-Description Audio</Button>
        </Grid>

The following is the C\# logic.

            private void AltAudioBtn_Click(object sender, RoutedEventArgs e)
            {
                if (media.AudioStreamCount > 1)
                {
                    if (media.AudioStreamIndex == 1)
                    {
                        media.AudioStreamIndex = 0;
                        (sender as Button).Content = "Play full-description audio";
                    } else {
                        media.AudioStreamIndex = 1;
                       (sender as Button).Content = "Play default audio";
                    }
                }
                else
                {
                    (sender as Control).IsEnabled = false;
                }
            }
            private void StopMedia(object sender, RoutedEventArgs e)
            {
                media.Stop();
            }
            private void PauseMedia(object sender, RoutedEventArgs e)
            {
                media.Pause();
            }
            private void PlayMedia(object sender, RoutedEventArgs e)
            {
                media.Play();
            }

This example is shown in operation in the [working example of Alternative Audio Channel](../../working-examples/silverlight-alternative-audio-channel/). If using the test file, the test contains test audio tones rather than actual audio description, but the pitch of the tones is indicative of which of the channels is selected and played.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Audio and Video Overview](https://msdn.microsoft.com/en-us/library/cc189078(VS.95).aspx)
-   [MediaElement Class](https://msdn.microsoft.com/en-us/library/system.windows.controls.mediaelement%28VS.95%29.aspx)
-   [AudioStreamIndex Property](https://msdn.microsoft.com/en-us/library/system.windows.controls.mediaelement.audiostreamindex%28VS.95%29.aspx)

Tests
-----

### Procedure

1.  Open the HTML page for a Silverlight application, where that application plays media and the media is expected to support an alternate audio track for the video.
2.  Verify that the application user interface presents a control that enables the user to cause the media to play with an alternate audio track.
3.  Activate that control. Verify that the audio portion of the media player output as played through the computer's audio system is now playing the alternate audio track.

### Expected Results

\#2 and \#3 are true.
