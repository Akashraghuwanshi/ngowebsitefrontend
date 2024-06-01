

import { Label, TextInput } from "flowbite-react";

export function ContactForm() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">Contact Form</h1>

        <div className="mb-2 block">
          <Label htmlFor="small" value="Name" />
        </div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="Email Id" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Message" />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      </div>
    </div>
  );
}
