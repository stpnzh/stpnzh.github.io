import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';
import LinkSVG from '../svg/link.inline.svg';

const Recipes = () => {
  return (
    <div>
      <h4>Recipes.</h4>
      <p>
        Not so basic recipes in a semi-basic recipes app.
      </p>
      <p>
        Built with React & Bootstrap.
      </p>
      <span>
        <Link href='https://github.com/stpnzh/recipes'>
          <GithubSVG style={{ marginRight: `1rem`}}/>
        </Link>
        <Link href='https://stpnzh.github.io/recipes/'>
          <LinkSVG />
        </Link>
      </span>
    </div>
  )
}

export default Recipes;