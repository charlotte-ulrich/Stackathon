import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Login, Signup } from './AuthForm';
import Aos from 'aos';

export class Home extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    const { isLoggedIn, username } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <div className="banner">
              <div className="hero-text">
                <div className="welcome-text">
                  <h1>Welcome, {username}</h1>
                </div>
              </div>
            </div>
            <div className="definition-container">
              <div data-aos="fade-up">
                <div className="column">
                  <img
                    src="https://media.istockphoto.com/photos/female-rock-climber-wearing-safety-harness-picture-id477603724?k=6&m=477603724&s=612x612&w=0&h=e75yXhY2wo9dwF-rErVCaHEFIyqXeeBDSs9LpodlnGY="
                    className="home-image"
                    width="100%"
                    alt=""
                  />
                  <h3>Track Redpoints</h3>
                  <p>
                    The highest grade of your session that you completed, but
                    have worked on in the past.
                  </p>
                </div>
                <div className="column">
                  <img
                    src="https://media.istockphoto.com/photos/rockclimbing-shoes-picture-id120920207?k=6&m=120920207&s=612x612&w=0&h=9PlBbBDXvLxuZF_GAAwD8H8fqHSBShpKddXR3J8huvQ="
                    className="home-image"
                    width="100%"
                    alt=""
                  />
                  <h3>Track On-Sites</h3>
                  <p>
                    The highest grade of your session that you completed on your
                    first attempt.
                  </p>
                </div>
                <div className="column">
                  <img
                    src="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbWJpbmclMjByb3BlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    className="home-image"
                    width="100%"
                    alt=""
                  />
                  <h3>Track Projects</h3>
                  <p>
                    The highest grade of your session that you couldn't complete
                    today, but plan to work on in the future.
                  </p>
                </div>
              </div>
            </div>
            <div className="developer-container">
              <div>
                <h5>Developed by: Charlotte Ulrich</h5>
              </div>

              <a
                href="https://www.linkedin.com/in/charlotteulrich/"
                target="_blank"
              >
                <img src="https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png" />
              </a>
              <a href="https://github.com/charlotte-ulrich" target="_blank">
                <img src="https://www.sferalabs.cc/wp-content/uploads/github-logo.png" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="banner">
              <div className="hero-text">
                <div className="login-text">
                  <Login className="main-cta" />
                  <div className="home-signup-link">
                    <Link to="/signup" component={Signup}>
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="definition-container">
              <div data-aos="fade-up">
                <div className="column">
                  <img
                    src="https://media.istockphoto.com/photos/female-rock-climber-wearing-safety-harness-picture-id477603724?k=6&m=477603724&s=612x612&w=0&h=e75yXhY2wo9dwF-rErVCaHEFIyqXeeBDSs9LpodlnGY="
                    className="home-image"
                    width="100%"
                    alt=""
                  />
                  <h3>Track Redpoints</h3>
                  <p>
                    The highest grade of your session that you completed, but
                    have worked on in the past.
                  </p>
                </div>
                <div className="column">
                  <img
                    src="https://media.istockphoto.com/photos/rockclimbing-shoes-picture-id120920207?k=6&m=120920207&s=612x612&w=0&h=9PlBbBDXvLxuZF_GAAwD8H8fqHSBShpKddXR3J8huvQ="
                    className="home-image"
                    width="100%"
                    alt=""
                  />
                  <h3>Track On-Sites</h3>
                  <p>
                    The highest grade of your session that you completed on your
                    first attempt.
                  </p>
                </div>
                <div className="column">
                  <img
                    src="https://images.unsplash.com/photo-1516592673884-4a382d1124c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbWJpbmclMjByb3BlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    className="home-image"
                    width="100%"
                    alt=""
                  />
                  <h3>Track Projects</h3>
                  <p>
                    The highest grade of your session that you couldn't complete
                    today, but plan to work on in the future.
                  </p>
                </div>
              </div>
            </div>
            <div className="developer-container">
              <div>
                <h5>Developed by: Charlotte Ulrich</h5>
              </div>

              <a
                href="https://www.linkedin.com/in/charlotteulrich/"
                target="_blank"
              >
                <img src="https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png" />
              </a>
              <a href="https://github.com/charlotte-ulrich" target="_blank">
                <img src="https://www.sferalabs.cc/wp-content/uploads/github-logo.png" />
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
