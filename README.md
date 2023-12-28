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

    ReactJS Introduction
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

        Creating a ReactJs Project
            npm i -g create-react-app
            create-react-app app-name

            or 

            npx create-react-app app-name

    ReactJs Components

        A component is the smallest unit of UI in a spa.

        the single page (index.html) is a group of these units called Components.

        ReactJs by default supports hirarchial UI design.

            index.html
                |- <body> .... </body>
                            |- <top-level-component> .... </top-level-component>
                                                    |- <ComponentA>...</ComponentA>
                                                                    |- ....
        
        Any UI/UX framework like ReactJS/Angular/VueJS ...etc., support
        html extendability, that means that the developer can create
        his own html-elements using the framework, and those html-elements
        are called Components.

        Three types of ReactJS Components
            1. Class Components 
            2. Function Components
            3. High Order Components
    
    ReactJS Class Components

        A class component is created through a javascript class.
        A class component must inhereit from React.Component class.
        From React.Component , each componet class in herits
            (a) state                   
            (b) render()
            (c) setState()
            (d) and a few life cycle methods.

            state                   
                is expected to hold all the data related to the component.
                it can be initialized only in the constructor and then it is immutable.
                each time the state is replaced , the render() method is invoked automatically.
                the state cna be partially or fully modified and replaced using setState() method.

            render()
                is expected to return an html-dom that gets displayed on the screen for the component.


        class Dashboard extends React.Component {
            constructor(){
                this.state = {
                    title:"",
                    author:"",
                    adminContact:""
                };
            }

            render(){
                return <h2>{this.state.title}</h2> ;
            }
        }

        <Dashboard></Dashboard>

    JSX - (JavaScript eXtended)

        JSX script is suported by react and JSX is a new that gets 
        htmla nd javascript written inline with one-another.

        jsx-rules
            html elements are directed detected as javascipt objects.
                let x = <h2></h2>;
                let y = <ol></ol>;
            
            all html elements must be lower in case
            'class' attriubte is not supposed to be used, instead 'className' attribute is to be used
            javascript-expression can be embeded into html by enclosing it in a pair of { }
            the 'render()' method must return one and only one html-element.

        javascript code
            let h2Obj = document.createElement("h2");
            h2Obj.innextHTML = this.state.title;
            return h2Obj;

        jsx code
            return <h2>{this.state.title}</h2> 

        javascript code
            let friends = ["Vamsy","Saga","Latha"];
            let resultantDom = null;
            if(friends && friends.length>0) {
                let olObj = document.createElement("ol");
                for(let f of friends){
                    let liObj = document.createElement("li");
                    liObj.innerText = f;
                    olObj.append(liObj);
                }
                resultantDom = olObj;
            }else {
                resultantDom = document.createElement("p");
                resultantDom.innerText = "No friends found";
            }

        jsx code
            let friends = ["Vamsy","Saga","Latha"];
            let resultantDom = 
                        (friends && friends.length>0) ? (
                            <ol>
                                { friends.map( f => <li>{f}</li> ) }
                            </ol>
                        ) : (
                            <p>No friends found</p>
                        ) ;
                         


        

