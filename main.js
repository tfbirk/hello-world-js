var myHeading = document.querySelector('h1');
myHeading.textContent = 'Howdy world!';

var video = document.querySelector('video');
var source = document.createElement('source');
source.setAttribute('src', "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v")
video.appendChild(source);

function myFunc()
{
    var myHeading = document.querySelector('h1').textContent = 'Hi, how are you?';
}
