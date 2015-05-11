# Slight-Ghost

This can also be found on my blog (proudly powered by Ghost) at Silvenga.com (https://silvenga.com/slight-ghost). 

## Introduction 

I believe that upgrades should be simple, as such, I really hate dealing with zips and messing around in Ghost's core directory just to get the thing updated. Being the lazy developer that I am, I created this mini-project called Slight Ghost - a simple scaffolding for a Ghost blog, optimised for streamlined updates. 

## Install

Make sure `git` and `node` is installed before attempting to install `slight-ghost`
```
# Ubuntu
sudo add-apt-repository ppa:chris-lea/node.js 
sudo apt-get update
sudo apt-get install git node
```
Installing is as simple as a `git clone`. First clone the scaffolding.
```
cd /var/www/ 
git clone https://github.com/Silvenga/Slight-Ghost.git ghost
cd ghost
```
Clone the default theme. 
```
git submodule update --init --recursive
```
Install Ghost and its dependencies.
```
npm install

```
Copy the sample configuration file. 
```
cp config.sample.js config.js

```
And edit config.js for your own needs. 
```
nano config.js
```
**Note**: Make sure to include the `paths.contentPath` directive. 

Done! Checkout the Upgrade section for information on how to upgrade. 

## Run

Run `slight-ghost` just like the normal installation of Ghost. I recommend using Upstart to keep Ghost running (https://silvenga.com/power-ghost-with-upstart/).
```
node index.js
```
**Note**:  `index.js` will automatically set Ghost into `production` mode. An `export NODE_ENV=production` is not needed. 

**Note**: Make sure to change the permissions of the content directory!

## Upgrade

Update the base scaffolding and the default theme using `git`.
```
git pull --recurse-submodules
git submodule update --remote --merge
```
Updated and install any new dependencies using `npm`.
```
npm install
```
Done! Ghost has been updated to the latest stable revision - no need to deal with those pesky zips. 

## Advance

Update the `content` directory.  *This is normally not required.* 

Switch the repository to a scratch branch. 
```
git checkout ghost
```
Get the latest stable version of Ghost to base the scaffolding off of. 
```
git pull https://github.com/TryGhost/Ghost.git stable
```
Switch back to our original branch. 
```
git checkout master
```
Merge the `content` directory to the scaffolding. 
```
git checkout ghost -- content
```
Done! The `content` directory should now be updated to the latest version of Ghost. 

## License

This project is under the MIT license, fork away!

> The MIT License (MIT)
> 
> Copyright (c) 2014 Mark Lopez
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

