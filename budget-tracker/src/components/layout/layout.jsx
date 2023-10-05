import PropTypes from 'prop-types';
import classes from './layout.module.css';

function Layout(props) {
  return (
    <main className={classes.main}>
      {props.children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
