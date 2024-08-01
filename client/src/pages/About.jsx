import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Avenue
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Avenue is a platform, developed as a personal project to share
              thoughts and ideas of users with other visitors. As a developer
              while developing the project I understood many technological
              aspects of developing a website. It not only helped in my learning
              journey but also provided me some extra confident on my learning
              which I can incorporate with real world needs.
            </p>

            <p>
              In this application you can read articles from latest to oldest
              and of different categories. This can be of great advantage for
              keeping one up to date with latest technologies, journals and
              different development in the fields of knowledge.
            </p>

            <p>
              We encourage every visitor to give their reaction to the posts
              they encounter with and provide proper feedback in the form of
              comments to particular post. YOu can like other people's comments
              and reply to them as well. This way of interactive learning can
              help all the visitors to have updated and correct knowledge and
              information. We believe that a community of learners can help each
              other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
