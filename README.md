Slider on react.
<Slider />
The input is an array of "slides" of objects with the fields "img" - the path to the file and "text" - the caption to the picture.
The remaining parameters are optional.
"pagination" includes buttons and the ability to switch slides with these buttons.
"auto" - automatic slide switching, if you do not set "delay", the switching is triggered every 2.5 seconds.
"delay" - setting the interval for the timer.
"loop" - the ability to loop the playback of slides using the left or right buttons in the pagination.
"stopMouseHover" - disabling the timer when hovering the mouse over the image.


Example: 
<code>  &ltSlider 
      slides={slides} 
      pagination={true}
      auto={true}
      delay={1500}
      loop={true}
      stopMouseHover={true}
    /&gt </code> 
