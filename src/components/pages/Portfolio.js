import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div class="projectcontainer">
            <div class="project">
                <a href="https://chris-mcleod2.github.io/Run-Buddy/">
                    <img src="./assets/images/runbuddylanding.png" alt="Run Buddy landing page" />
                </a>
                <div class="tagline">
                    <p>Run Buddy</p>
                </div>
            </div>
            <div class="project">
                <a href="https://hmlessard.github.io/Brewber/">
                    <img src="assets/images/brewberapp.jpg" alt="Landing page of Brewber" />
                </a>
                <p>Brewber</p>
            </div>
            <div class="project">
                <a href="https://github.com/Chris-McLeod2/FullStackMedia">
                    <img src="assets/images/Nerd-Talk.png" alt="landing page of Nerd Talk" />
                </a>
                <p>Nerd Talk</p>
            </div>
            </div>
    </div>
  );
}
