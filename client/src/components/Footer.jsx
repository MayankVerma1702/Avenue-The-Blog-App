import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <div>
      <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link
                to="/"
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              >
                <span className="px-2 py-1 bg-gradient-to-r from-green-400 to-yellow-200 rounded-xl text-blue-600">
                  Avenue
                </span>
                The Blog App
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Avenue-The Blog App
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/MayankVerma1702"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="">
            <Footer.Copyright
              href="#"
              by="Avenue"
              year={new Date().getFullYear()}
            />
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default FooterComp;
