How I installed ubuntu on ASUS K501 LB. After installation instructions (Part 0)
################################################################################

:date: 2016-10-30 23:50
:tags: ubuntu, linux, asus, notebook
:category: Linux
:slug: how-i-installed-ubuntu-on-asus-laptop
:authors: Anton Prokhorov
:summary: Detailed process of installation ubuntu on ASUS laptop and issues, with which you can faced

I have owned my laptop since January of 2016. And when I have bought it, windows have been installed on it.
I have satisfied by this, while I was a student. But when I have applied on my job as python programmer, I have had to
work with linux. There are a few critical reasons:

- There is a pain to work with geospatial data from windows (Almost all our projects works with geodata). To make
  python work with PostGIS (Postgres extension to work with geolocation), you should install GDAL library, which too
  hard to install because, there are to little number of binaries in the internet, and its have old versions. Compiling
  something under windows platform is very painful for me. Also I read somewhere, there is a real pain to install redis
  python library

- There is a pain to work with docker on windows. Docker is able to work only in virtual machine. If you have pro
  version, you could obtain "Official Docker Support", however it's the same as docker toolbox, difference is using
  hyper-v instead virtualbox (or something else) (native virtualization), but it's virtualization

- Zsh is really awesome. There are a lots of plugins for zsh, like git and other cool stuff (something like oh-my-zsh)

- Linux is more friendly for python developer. Just because there are lot's of libraries, which you just can install by
  :code:`pip install <something>` and there is a very little probability that some error occurs. However, if error
  occurs, you can simply fix it by :code:`sudo apt install <something-which-needs-to-install-something>`. It's very
  easy and I don't see reasons why you don't use linux as OS for python development

- Ssh client out of box. Just type :code:`ssh <server>` and through config file you already have a connection. Awesome
  thing.

- And many another benefits of using linux like a desktop OS

Touchpad
********
However, there are lots of hardware-incompatibility issues with Linux install on laptops. The one of these is touchpad
driver issue. When lid is closed, after is opened, touchpad stops to work. This is a
`bug <https://bugzilla.kernel.org/show_bug.cgi?id=107971>`_ in kernel bugzilla. This bug related with self-test, which
kernel performs after exit from suspending. A few month earlier I need to manually apply patch to the kernel and build
it. There was a pain, when new version releases. I had to recompile kernel every release. However, on the moment of post
writing, this bug have been fixed in `4.8.5 <https://goo.gl/sVOMbx>`_ stable kernel version. I have taken part in
bugfixing of ASUS K501LB touchpad :). To install this kernel, just download and install these
`debs <http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.8.5/>`_. After reboot, touchpad shouldn't die after suspend.

Combo port
**********
By default ubuntu doesn't recognize external microphone of headphones, which connected in combo-port (one port for audio
instead 2 (for mic and headphones)). To enable it, should follow the next instructions:

1. Install :code:`pavucontrol` by :code:`apt install pavucontrol`
2. Open :code:`pavucontrol`, and open "Input Devices" tab. You should see only one choice in port ("Internal
   microphone", image above is the screen where external mic already have worked)

.. image:: /images/pavucontrol.png
    :alt: Pavucontrol

3. Now, you need to install :code:`hdajackretask` by installing :code:`alsa-tools-gui`
4. Run :code:`hdajackretask` and configure, like on image above:

.. image:: /images/hdajackretask.png
    :alt: HdaJackRetask

All changes, which have been described below in result will make your system is almost working. Thing, which won't work
anyway, is :code:`fn+f5`, :code:`fn+f6` hotkeys for the brightness control. But this is not a critical issue. There are
many ways to hack this and not use hotkeys while this bug will not fixed. In the next part of this post, I will speak
about automating stuff for power saving.
