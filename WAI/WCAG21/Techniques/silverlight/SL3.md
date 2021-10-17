-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SL2](SL2)
-   [Next Technique: SL4](SL4)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Controlling Silverlight MediaElement Audio Volume
=================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

-   Microsoft Silverlight, versions 3 and greater
-   Silverlight managed programming model and Silverlight XAML

Note

Microsoft has stopped updating and distributing Silverlight, and authors are encouraged to use HTML for accessible web content.

This technique relates to [Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control) (Sufficient).

Description
-----------

The objective of this technique is to adjust the volume for media that is played in Silverlight applications, as implemented through incorporating the Silverlight `MediaElement` object. By default, a `MediaElement` will start playing its media as soon as the UI loads completely AND the media source file is downloaded. For details, see [](#SL24).

At any given time, a Silverlight `MediaElement` is associated with exactly one media source as specified by the `Source` property URI value. That source might be audio-only, or audio-video. The [Volume](https://msdn.microsoft.com/en-us/library/system.windows.controls.mediaelement.volume%28VS.95%29.aspx) property of `MediaElement` affects the audio playback volume of that particular source when it is playing. The Silverlight plug-in does not have a user option that adjusts the volume of ALL Silverlight applications as run within it, or a standardized user interface that is always present for all uses of `MediaElement`. Therefore it is the responsibility of Silverlight application authors to provide an adequate set of user interface controls, including volume adjustment, whenever the Silverlight application plays media that has an audio component.

Examples
--------

### Example 1: Providing a volume control and a Mute control as part of a set of user interface controls that go with a MediaElement

In addition to the Play Pause Stop controls, application authors can also provide a dedicated control that changes the `Volume` property of the `MediaElement`. The typical control for setting a discrete volume is `Slider`, because `Slider` is designed for input of discrete values from a range. Adjusting `Volume` with a data bound `Slider` changes the volume of any actively playing media, independent of the system volume or of any other audio source controlled by Silverlight. For `Volume` as set with the `Slider`, the `Binding` in XAML declares the interaction between the control and the `MediaElement`, without requiring an event handler. However, not all users will be able to interact quickly with a `Slider`, particularly if they are not using a mouse. To help these users, application authors should also include a "Mute" control. Rather than setting `Volume` to 0, application authors should instead set `IsMuted` to true. Note that `Volume` and `IsMuted` values are not directly related; if `IsMuted` is set to true, that does not set `Volume` to 0, nor does setting `Volume` to zero cause `IsMuted` to be set true.

    <UserControl x:Class="MediaElementControls.MainPage"
       xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
       xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      >
       <Grid x:Name="LayoutRoot">
           <StackPanel>
               <MediaElement x:Name="media" Source="/xbox.wmv"
              Width="300" Height="300" 
              AutomationProperties.Name="Video of new Fable game for XBox"           
           />
               <Grid Name="UIControls">
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
                   <Button Click="StopMedia" 
        Grid.Column="0" Grid.Row="1" Content="Stop" />
                   <Button Click="PauseMedia" 
        Grid.Column="1" Grid.Row="1" Content="Pause" />
                   <Button Click="PlayMedia" 
        Grid.Column="2" Grid.Row="1" Content="Play" />
                   <Button Click="MuteMedia" 
       Grid.Row="2" Grid.Column="0" Content="Mute" />
                   <TextBlock Name="VolumeLabel" Grid.Row="2" Grid.Column="1" HorizontalAlignment="Right">Volume</TextBlock>
                   <Slider Height="20"
               Value="{Binding Volume, Mode=TwoWay, ElementName=media}"
               Minimum="0" Maximum="1"
               Grid.Row="2" Grid.Column="2" Grid.ColumnSpan="2"
                   AutomationProperties.LabeledBy="{Binding ElementName=VolumeLabel}"/>
               </Grid>
           </StackPanel>
       </Grid>
    </UserControl>

The following is the C\# logic.

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
     private void MuteMedia(object sender, RoutedEventArgs e)
     {
        Button target = sender as Button;
        // mute if not muted, unmute if already muted, in either case make sure the button content for text and accessibility info is updated
        if (!media.IsMuted)
        {
           media.IsMuted = true;
           target.Content = "Unmute";
        }
        else
        {
            media.IsMuted = false;
            target.Content = "Mute";
        }
     }

This example is shown in operation in the [working example of Media Element Controls](../../working-examples/silverlight-media-element-controls/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Volume](https://msdn.microsoft.com/en-us/library/system.windows.controls.mediaelement.volume%28VS.95%29.aspx)
-   [Audio and Video Overview](https://msdn.microsoft.com/en-us/library/cc189078(VS.95).aspx)
-   [Silverlight Media Framework](http://smf.codeplex.com/) - a framework and a media player control implementation that incorporates many of the Silverlight techniques related to `MediaElement`

Related Techniques
------------------

-   [SL17: Providing Static Alternative Content for Silverlight Media Playing in a MediaElement](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL17)
-   [SL24: Using AutoPlay to Keep Silverlight Media from Playing Automatically](https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL24)

Tests
-----

### Procedure

1.  Using a browser that supports Silverlight, open an HTML page that references a Silverlight application through an object tag. It is expected that the application incorporates a `MediaElement`.
2.  Check that a control is available for controlling volume and that the Volume control controls the volume of the playing media, independently from system volume.
3.  Check that control is available for muting, and that the Mute control mutes the volume of the playing media, independently from system volume.

### Expected Results

\#2 OR \#3 is true.
