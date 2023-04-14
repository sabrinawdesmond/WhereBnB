import linkedinLogo from './linkedinLogo.svg'
import gitHubLogo from'./github.svg'
import gmailLogo from './gmail.svg'
import './Categories.css'

function Categories() {
  return (
    <>
    <div className='categories'>
  
      <a
            href="https://www.linkedin.com/in/sabrinawdesmond/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Linkedin" type="submit">
              <img src={linkedinLogo} alt="gmail" className="linkedin-icon" />
              <div></div>
            </div>
          </a>
          <a
            href="mailto:sabrinawdesmond@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Email" type="submit">
              <img src={gmailLogo} alt="gmail" className="gmail-icon" />
             <div></div>
            </div>
          </a>
          <a
            href="https://github.com/sabrinawdesmond/whereBnB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="GitHub" type="submit">
              <img src={gitHubLogo} alt="gmail" className="github-icon" />
            <div></div>
            </div>
          </a>
          </div>
    </>
  )
};

export default Categories