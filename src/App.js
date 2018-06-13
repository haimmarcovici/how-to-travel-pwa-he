/* jshint esversion:6 */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Guide from './Guide';
import data from './guides';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="app">
        <Route exact path="/" render={() => {
          return (
            <div>
            {data.map(section => {
              return (
                <div key={section.id} className="section">
                  <h4>{section.title}</h4>
                  <div className="guides">
                    {section.guides.map(guide => {
                      return (
                        <Link className="link" key={guide.id} to={`/guide/${guide.id}/${0}/`}>
                         <div className="guide">
                          <div className="iconContainer">
                            <img className="icon" src={guide.icon} />
                          </div>
                          <div className="separator" />
                          <div className="titleContainer">
                            <h5>{guide.title}</h5>
                            <p>{guide.subtitle}</p>
                          </div>
                         </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            </div>
          )}} />
          <Route path='/guide/:id/:step' component={Guide} />
        </div>
      </div>
    );
  }
}

export default App;
