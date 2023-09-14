// Home.js
import Link from 'next/link';
import DarkModeSwitcher from '../components/DarkModeSwitcher.js';

export default function Home() {
  return (
    <div className="relative mx-auto my-0 max-w-2xl px-4 pb-0 pt-4 text-left text-lg md:pt-32">
      <header>
        <h1 className="text-slate-900 dark:text-slate-50">De-Yi Huang</h1>
      </header>
      <main className="text-gray-600 dark:text-slate-200">
        <div>
          <p>I am a software and front-end engineer. </p>
          <p>
            Based in Taipei, Taiwan. Interesting to learn new informations and
            technologies. Looking for new job opportunitie now : )
          </p>
        </div>

        <div>
          <p className="my-3">
            Email:{' '}
            <a
              className="text-base text-primary transition-all duration-500 ease-in-out hover:text-secondary hover:underline"
              href="mailto:northwalker28@gmail.com"
            >
              northwalker28@gmail.com
            </a>
          </p>
          <div className="my-3 mt-8">You can find me on</div>
          <p>
            <a
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/northwalker"
              title="Github"
              aria-label="Github Link"
            >
              <svg
                className="mr-1"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0C4.476 0 0 4.477 0 10c0 4.418 2.865 8.166 6.84 9.49.5.09.68-.218.68-.483 0-.237-.007-.866-.012-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.464-1.11-1.464-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.342 1.087 2.912.83.09-.645.35-1.085.634-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.105-.253-.448-1.27.096-2.647 0 0 .84-.268 2.75 1.026C8.294 4.95 9.15 4.84 10 4.836c.85.004 1.705.115 2.504.337 1.91-1.294 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.7 1.03 1.592 1.03 2.683 0 3.842-2.34 4.687-4.566 4.935.36.308.678.92.678 1.852 0 1.336-.01 2.415-.01 2.743 0 .267.18.578.687.48C17.14 18.163 20 14.417 20 10c0-5.522-4.478-10-10-10" />
              </svg>
              GitHub
            </a>
            <a
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/northwalker28"
              title="Twitter"
              aria-label="Twitter Link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.924c-.736.326-1.527.547-2.357.646.848-.508 1.498-1.312 1.804-2.27-.792.47-1.67.812-2.605.996C16.092 2.498 15.027 2 13.847 2 11.58 2 9.743 3.837 9.743 6.103c0 .322.037.635.107.935-3.41-.17-6.434-1.804-8.458-4.287-.352.61-.555 1.314-.555 2.066 0 1.423.724 2.68 1.825 3.415-.672-.02-1.305-.206-1.858-.513v.052c0 1.987 1.414 3.645 3.29 4.022-.344.096-.706.146-1.08.146-.265 0-.522-.026-.772-.074.522 1.63 2.037 2.818 3.833 2.85C4.67 15.81 2.9 16.468.98 16.468c-.332 0-.66-.02-.98-.057 1.816 1.166 3.973 1.846 6.29 1.846 7.547 0 11.674-6.253 11.674-11.675 0-.18-.004-.355-.01-.53.8-.58 1.496-1.3 2.046-2.125" />
              </svg>
              Twitter
            </a>
            <a
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/de-yi-huang"
              title="Linkedin"
              aria-label="Linkedin Link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
              Linkedin
            </a>
          </p>
          <div>- -</div>
          <p>
            <Link className="social-link" href="/zh-TW">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z" />
              </svg>
              正體中文
            </Link>
            <a
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://northwalker.web.app/resume/DE-YI_HUANG_Resume.pdf"
              title="De-Yi Huang Resume"
              aria-label="Resume Link"
              type="application/pdf"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6,8 C9.33333333,8 11,8 11,8 C11,8 11,8.66666667 11,10 L6,10 L6,18 L14,18 L14,13 L16,13 L16,18 C16,19.1045695 15.1045695,20 14,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,10 C4,8.8954305 4.8954305,8 6,8 Z M16.613961,6 L12,6 L12,4 L20,4 L20,12 L18,12 L18,7.44238816 L12.6642136,12.7781746 L11.25,11.363961 L16.613961,6 Z" />
              </svg>
              Resume
            </a>
          </p>
        </div>
      </main>
      <DarkModeSwitcher />
    </div>
  );
}
