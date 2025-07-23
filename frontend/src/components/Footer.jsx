import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <div>
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="https://github.com/harshitsoni341/Vartalaap-Platform" target='_blank'>About us</a>
          <a className="link link-hover" href="https://www.linkedin.com/in/harshit-soni-035307215/" target='_blank'>Contact</a>
          <a className="link link-hover" >Services</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            
            <a href="https://www.linkedin.com/in/harshit-soni-035307215/" target='_blank'>
              <Linkedin />
            </a>
            <a href="https://github.com/harshitsoni341/Vartalaap-Platform" target='_blank'>
              <Github />
            </a>
          </div>
        </nav>
        <aside>
          <p>© {new Date().getFullYear()} Harshit Soni. All right reserved.</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
