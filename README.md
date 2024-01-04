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
                         
    ReactJS Function Component

        Any javascript function that returns an html-dom-element.

        const Banner = () => <h2>This is my web app title</h2>

        <Banner></Banner>

        1. no access to state
        2. no access to the life cycle methods

        Function Components are also called as state-less components.

    Integrating Bootstrap with ReactJS

        npm i bootstrap --save

        import the bootstrap.css and bootstrap.js files into the index.js file.

    ReactJs 'props'

        'props' , shortcut for properties, is a predefined object of
        values passed from a parent component to a child component 
        through attributes.

    Shadow DOM / Virtual DOM

        Shadow DOM is a temporary DOM tree copy created and maintained by the React Scripts.
        Any render() will effect this shadow dom first and the final shadow dom is compared
        with the actual DOM Tree of the browser and the changes are detected. Only the detected
        changes are made on the DOM Tree to reduce the number of changes or complete regenertion of
        the actual DOM. This results in better performence. An attribute called 'key' is used on  the
        html elements to maintain a reference between records and html elements for the sake of
        detecting changes.

    ReactJS Forms

        UnControlled Form Components 

            Each 'input' element is linked with a 'ref' field of react.

            These 'ref' fields will give the data entered in form when needed.

            'ref' fields are very costly on the memory and they stay in the memory even if they are 
            not being used anymore.

            we do not recommend this approach.

        Controlled Form Components

            The state fields of the component are directly mapped to the 'input' element. Then the
            'input' element becems readoly as the state is immutable. To modify the data
            we have to handle 'onChange' event of the input element , receive the new-value
            and make changes to the state through 'setState' method.

    Assignement#1
        Inventory Management
            Item
                id
                name
                stock
                price
                unit    (ltr/kg/gra/packet) (Use Drop down to select the unit)

            Perform CRUD operation on thsi entity using a SPA.