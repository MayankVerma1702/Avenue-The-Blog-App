import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Try my File Transfer Application(FisFr)!</h2>
        <p className="text-gray-500 my-2">
          This appliation is made purely in vanillaJS
        </p>

        <a
          href="https://fisfr-frontend.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-bl-none w-full"
          >
            FisFr
          </Button>
        </a>
      </div>
      <div className="p-7 flex-1">
        <img src="https://res.cloudinary.com/dd7wbjqvx/image/upload/v1722600653/undraw-upload_arawgx.png" />
      </div>
    </div>
  );
}
