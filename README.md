Email Client
=========================

A very simple mockup of an email client application. This
app manages a list of entered email messages and displays
them in date descending order.

Installation
------------

Clone this project onto your local system. Open a terminal window
and change the directory by entering
`$ cd desktop/newspaper-section-tracker`. In order to run the app,
start up a local web server. In a Mac OSX environment, enter
`$ python -m SimpleHTTPServer`in the terminal
window and navigate to *localhost:8000* in a web browser. In a
Windows OS environment, download a program such as
[Mongoose](http://cesanta.com/mongoose.shtml), copy it to the project
folder, and double-click it to launch a server. Finally, open the page
in a browser.

Of note, this app uses the Ember.js client-side MVC framework
version 1.10.0 and jQuery library version 1.10.2. Also, upon
running the app and starting up a local web server, all email message
data will be stored locally within your chosen web browser.

Usage
-----

Upon display of the home html page, all currently stored email
messages will be listed in date descending order. Click on the
Add Message button to add a new message. Upon completion of the
new message, click on the Send Message button to save the message
to local storage. When on the home All Mail page, click on any
listed message to display the detail. Any message may be deleted
by clicking on the Delete Message button within the message detail
page. Finally, within the navigation bar, either the Email Client
or All Mail link may be clicked on to return to the home page.

Known Bugs
----------

None as of 2015-03-06.

Author
------

Andy Uppendahl

License
-------

MIT license
