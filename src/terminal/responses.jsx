import classes from "./terminal.module.css";
export const banner = <pre style={{marginBottom : "20px"}}>/*** <br/>
*     /$$   /$$           /$$ /$$                                        <br />
*    | $$  | $$          | $$| $$                                        <br />
*    | $$  | $$  /$$$$$$ | $$| $$  /$$$$$$  /$$$$$$$$ /$$$$$$$$ /$$$$$$$$<br />
*    | $$$$$$$$ /$$__  $$| $$| $$ /$$__  $$|____ /$$/|____ /$$/|____ /$$/<br />
*    | $$__  $$| $$$$$$$$| $$| $$| $$  \ $$   /$$$$/    /$$$$/    /$$$$/ <br />
*    | $$  | $$| $$_____/| $$| $$| $$  | $$  /$$__/    /$$__/    /$$__/  <br />
*    | $$  | $$|  $$$$$$$| $$| $$|  $$$$$$/ /$$$$$$$$ /$$$$$$$$ /$$$$$$$$<br />
*    |__/  |__/ \_______/|__/|__/ \______/ |________/|________/|________/<br />
*                                                                        <br />
*                                                                        <br />
*                                                                        <br />
*/</pre>
export const responses = {
  help: (
    <p
      style={{ width: "50%", color: "#B89076", marginLeft: "1rem" }}
      className={classes.response}
    >
      <ul>
        <li>
          <span class="command">whois</span> - Who is Saksham?
        </li>
        <li>
          <span class="command">whoami</span> - Who are you?
        </li>
        <li>
          <span class="command">social</span> - Display social networks
        </li>
        <li>
          <span class="command">projects</span> - View coding projects
        </li>
        <li>
          <span class="command">help</span> - You obviously already know what
          this does
        </li>
        <li>
          <span class="command">email</span> - Do not email me
        </li>
        <li>
          <span class="command">clear</span> - Clear terminal
        </li>
        <li>
          <span class="command">banner</span> - Display the header
        </li>
      </ul>
    </p>
  ),
  whois: (
    <p
      style={{ width: "50%", color: "#B89076", marginLeft: "1rem" }}
      className={classes.response}
    >
      ---
      <br />
      Hi! My Name is Saksham Sachdeva
      <br />
      As a dedicated and innovative software engineer with three years of
      hands-on experience in the industry, I have honed my expertise in Node.js
      and the MERN stack, which encompasses MongoDB, Express.js, React, and
      Node.js. <br /> <br />
      Throughout my career, I have successfully developed and deployed multiple
      projects, demonstrating a strong commitment to delivering high-quality
      software solutions. My passion for technology drives me to continuously
      learn and adopt new skills, ensuring I stay at the forefront of
      technological advancements.
      <br /> <br />
      Eager to embrace new challenges, I am always ready to expand my knowledge
      and contribute to cutting-edge projects.
      <br />
      ---
    </p>
  ),
  projects: (
    <p
      style={{ width: "50%", color: "#B89076", marginLeft: "1rem" }}
      className={classes.response}
    >
      <ul className={classes.projects}>
        <li>
          <a href="" target="_blank">
            BUZZ APP
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            COVID Dashboard
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            PWC ASP Report streaming module
          </a>
        </li>
      </ul>
    </p>
  ),
  email: (
    <a href="mailto:saksham5sachdeva@gmail.com">Saksham5Sachdeva@gmail.com</a>
  ),
  whoami: (
    <p
      style={{ width: "50%", color: "#B89076", marginLeft: "1rem" }}
      className={classes.response}
    >
      The concept of self-identity has always been a matter of deep exploration.
      <br />
      New discoveries about oneself continually emerge, leaving the question
      perpetually unanswered.
    </p>
  ),
  socials: (
    <p
      style={{ width: "50%", color: "#B89076", marginLeft: "1rem" }}
      className={classes.response}
    >
      working on it....
    </p>
  ),
  banner : banner
};

export const commands = {
  clear: (_) => _([]),
};

export const errorTemplate = (
  <p style={{ color: "#B89076" }}>
    this command or request is not recognised... write 'help' for the available command                                                                                                                                                                                                                                                                                                                                                    
  </p>
);


