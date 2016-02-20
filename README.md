# Hidemyass Public Proxy List Retriever

Hidemyass uses a lot of JS/CSS tricks to make public proxy list crawling difficult. Long time ago I wrote a Perl script to handle it.  

## Requirements
Install phantomjs with:

```
npm install -g phantomjs
```

## Usage

Edit script to alter phantomjs path or hidemyass proxy list URL if necessary.

Just run without any arguments. Results stored in `proxies.txt` file:
```
./hidemyass-proxy.pl
```
