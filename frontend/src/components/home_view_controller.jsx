import React from "react";
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { HeaderVc } from "./header_view_controller";
import { Section } from "./section";
import { SearchBar } from "./search_bar";

import '../styles/home_view_controller';

export class HomeVc extends React.Component {
  render() {
    return (
      <div className="home-vc">
        <div className="logo-wrapper">
          <HeaderVc style={{backgroundColor: "black", opacity: .9}} />
        </div>
        <div className="home-content">
          <Paper className="hero">
            <div className="hero-text">
              <h1>
                Movie Minorities
              </h1>
              <h2>
                Dig Deeper into Demographics
              </h2>
            </div>
            <div className="search-wrapper">
              <SearchBar />
            </div>
          </Paper>
          <Section title="What is this?">
            <p>
              Movie Minorities is a web application that analyzes the inclusion of underrepresented and tokenized demographics in movies. For as many movies as possible, we will visualize statistics such as how much dialogue is distributed to males vs. females or white characters vs. characters of color, whether the movie passes the Bechdel test, the diversity of major and minor characters, and so on. Our end goal is for users to be able to search for movies of interest and determine, based on our visualizations, whether those movies meet their standards of good representation.
            </p>
          </Section>
        </div>
      </div>
    );
  }
}

HomeVc.propTypes = {
  router: PropTypes.objectOf(PropTypes.object),
};

HomeVc.defaultProps = {
  router: {},
};
