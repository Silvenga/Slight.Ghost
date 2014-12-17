# Slight-Ghost
---------------------

## Introduction 

A simple scaffolding for a Ghost blog, optimised for streamlined updates on a server like platform.

## Install

```
# Clone the scaffolding.
git clone https://github.com/Silvenga/Slight-Ghost.git ghost

# Move the current directory. 
cd ghost

# Clone the default theme. 
git submodule update --init --recursive

# Install Ghost and its dependencies.
npm install

# Copy the sample configuration file. 
cp config.sample.js config.js

# And edit config.js for your own needs. 
nano config.js
```

## Run

```
node index.js
```

## Upgrade

```
# Update the base scaffolding and the default theme. 
git pull --recurse-submodules

# Updated and install any new dependencies. 
npm install
```

## License

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

