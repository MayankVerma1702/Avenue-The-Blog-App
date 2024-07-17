import { Button, FileInput, Select, TextInput } from "flowbite-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Technology">Technology</option>
            <option value="Journal">Journal</option>
            <option value="Reviews">Reviews</option>
            <option value="Knowledge">Knowledge</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-400 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="tealToLime"
            className="bg-gradient-to-r  hover:from-teal-500 hover:to-lime-500 rounded"
            size="sm"
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write Something..."
          className="h-72 mb-12"
          required
        />
        <Button
          type="submit"
          gradientDuoTone="tealToLime"
          className="bg-gradient-to-r  hover:from-teal-500 hover:to-lime-500 rounded"
        >
          Publish
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;
