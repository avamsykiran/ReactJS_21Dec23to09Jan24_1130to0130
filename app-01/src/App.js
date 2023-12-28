import React  from 'react';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      "title": "My First ReactJS SPA",
      "authors":["Vamsy","Rahul","Komal","Shrukh"],
      "likes":50
    };
  }

  render() {

    let {title,authors,likes} = this.state;

    return (
      <section>
        <h2>{title}</h2>
        {
          (authors && authors.length>0) ? (
            <ol>
              { authors.map( a => <li>{a}</li>) }
            </ol>
          ) : (
            <p>
              <strong>No Friends Found</strong>
            </p>
          )
        }

        <p>
          <strong>
            I like 
              <button type="button" onClick={ event => this.setState({likes:likes-1}) } >--</button> 
                {likes} % 
              <button type="button" onClick={ event => this.setState({likes:likes+1}) } >++</button> 
            of ReactJS Concepts.
          </strong>
        </p>
      </section>
    );
  }

}

export default App;
