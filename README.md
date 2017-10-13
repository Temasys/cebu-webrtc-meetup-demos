Milliseconds Matter: Creating Real-time Interactions With Temasys SDKs

### How to run this demo

1. You will need a Temasys App Key for this demo. You can signup for free and get one [HERE](https://console.temasys.io/register).

2. To create an app key, you can follow [THIS GUIDE](https://temasys.io/temasys-rtc-getting-started-web-sdk/) (specifically steps 1 to 4).
   IMPORTANT: Make sure to include `localhost` (or your server's IP address) in your CORS Url key settings. Otherwise, the demos wouldn't work.

3. In each demo folder, replace the `apiKey` with your new app key.

4. Run a webserver in the root directory of this repository. My personal favorites:

Ruby 2.x and above
```ruby
  ruby -run -ehttpd . -p8000
```

Python 2.x
```python
  python -m SimpleHTTPServer
``` 

Python 3.x
```python
  python -m http.server 8000
```

5. Visit `localhost:8000` in your browser and just click on each link to check out each demo!

6. You can find [more examples here!](https://github.com/Temasys/SkylinkJS/tree/0.6.x/master/demo)

NOTE: MCU functionality will not be available in the free plan, so the screensharing demo will not work if you have a free app key.


### Resources 

- [Getting Started Guide](https://temasys.com.sg/webrtc-getting-started-temasys-peer-connectivity/)
- [SDK Documentation](http://cdn.temasys.io/skylink/skylinkjs/latest/doc/classes/Skylink.html)
- [Support](http://support.temasys.com.sg/support/home)