# Pro Sticky Notes

#### Video URL: https://youtu.be/6qnsXkLXEpA

#### Description
My project is *Sticky Notes App* where you can add notes and keep them on the page  and access them at any time you wish.I used local storage to save  notes. So even if you close the tab or refresh the page they will not be deleted. You can add as many notes as you want.It is possible to edit or totaly remove any of them.I used flex-wrap to make them nisely layout on the page having line between each other.The notes also responsive for any size of the screen. I included markdown library in the text input.It is very siple to use.
You can check the syntax of markdown library if you wish to modify your text with it.

Since there are a lot of similar projects out there I've desided to add some features to make this sticky notes special and useful.
I started this project when I was on week 8. Having learned front end development along with this cousrse I came up with the ideas to modify my project.I checked out other sticky note apps to see what I could do something special to make this web app helpful and easy to use. And I noticed that most of them do not have voise recognition in the notes directly you will have to call it outside of the sticky note.Other thing I noticed is they do not  use drawing feature for sticky notes. I found if I implement this idea it might be very useful to draw in the note your ideas which you can translate into a text note just by clicking add note button. It is also possible to have draw sticky note and text one on the page at the same time. Bellow I described some of the features I added for my pro sticky notes app.


First feature I added to make this sticky notes special is that you can use *voise recognition* to translate your speech into text.This will be very useful for many businesses to increase their productivity such as healthcare industries. 
I created an event handler triggered whenever the user clicks on the Start button to start recognizing. When this happens, the recognition API is begun and will listen for input from the user.
When you press the button, your browser will request permission to use your microphone.
I added the onerror event handler triggered when an error occurs while transcribing the speech or if there is no input from  microphone. If any error occurs during this process, our application will inform the user via the instruction box.


Second feature you might find helpful is possibility to switch to the *night mode* which will hopefully decrease eye strain in the night. For this feature I  made a nice button with hower effects.By toggling the button you can switch from light to night mode and back. I fixed this button on the top of the page and added z-index so you do not have to scroll your page up if you decide to switch mode.

Third feature is that you can also have *drawing sticky note* on your page where you can draw some of your ideas and schemes. Having draw note on the page will help you to improve creativity  which you can translate into a text note.Your draw note also will be saved to the local storage. You can open your draw sticky note just by clicking the marker button where you can edit your draw or completely erase it if you like. I also added size buttons and color palette in the draw note where you can adjust your marker size and by clicking button pallete  you can select the color of the marker as well.

Another cool thing in the app is *randomly color change* of your text just by clicking palette button. For this feature I make a JavaScript function where I added almost all possible RGB color from 1 to 255 which will be randomly choosed and outputed when you click the color button.The same feature you can find in the draw sticky note, but having chance *select color* of your choise where I used input type color.


***My project files***
- HTML
- CSS
- JavaScript
- Images

***Libraries***
- Jquery
- Marked syntax
- Font Awesome

My *HTML* file includes Jquery, Marked and Font Awesome links to use their syntax. I  have button tags, heading with app name and image welcoming guests. For buttons I included font awesome icons for nice look. For my canvas I specify the height and width in the HTML to avoid mouse move problems when drawing in it. In the bottom of the body I linked my HTML file to Javascript and Jquery to avoid slow loading of the page.

My *CSS* file includes style of my web app. Cool  colors of my page background,buttons and text. I used flex-wrap to make all sticky notes go to the next line as well as have them to be responsive.Because colors have the unique ability to influence our moods and change our behavior. I spent a lot of time choosing the colors for my web app.And since this is a  notes up I desided to go with light blue and yellow colors.The reason I choosed those colors because I found out that they represent confidence,respect,trust and stability.And they are the favorite colors of most people.

My *JavaScript* have code which  make this web app interactive.Drawing sticky note,local storage save,voise recognition,night mode switch it's all have done with vanila JavaScript. My 
My *Images* file includes image that I used with my web app title name. It is disappear when you add your notes to the page and appear back when the page is empty.