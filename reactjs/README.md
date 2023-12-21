ReactJS
----------------------------------------------------------------------------------------------------

    Pre-Requisites
        html 5
        css 3
        JavaScript (ES6)
    
    Lab Setup
        NodeJS      https://nodejs.org
        VSCode      https://code.visualstudio.com/download

    NodeJS
        node --version

        is a javascript runtime. 
        App Dev
            Compose                 VSCode IDE
            Build it and Pack       Need a Build Tool - npm (node package manager)
            Test                    Testing Tools - jasmine, arko ..etc.,
            Deploy ...etc.,

        NodeJS will be the development platform to support tools like npm, jasmine ..etc.,
        in the process of developing our application.

    ReactJS
        is a javascript based SPA - UI Library.

        Web Applications Evolution
            WebSites        (static website) - is a folder published on a http server
                                                and that folder contians .html,.js,.css,graphics files ..etc,

            Dynamic Web Application

                Web Server                                      Web Client (Browser)

                    Server Side Programs                <---REQ---
                    (like asp,aspx,jsp,servlet,php) 
                                            Generate html
                                            content on the fly
                                                ---- html content (RESP) --->

            Single Page Application

                Web Server                                      Web Client (Browser)

                    spa-bundle                  <----REQ --------
                    (index.html + .js + .css)
                                            ------spa-bundle-------> spa-bundle

                                                                index.html and its assocaited JS will be loaded in to the browser.

                                                                any event or form submition, or link are all
                                                                handled by the JavaScript on the client itself.

                                                                when any of thee events occur, the javascript on 
                                                                the client will generate needed html content
                                                                on the client itself and replace the index.html
                                                                content with the newly generated content.


                    rest-api        <---------Data Related Req-----
                                    --------data.json/data.xml----> 

    
